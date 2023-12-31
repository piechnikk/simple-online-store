var express = require('express')
var app = express()
const PORT = 3000

//session
var session = require('express-session')
app.use(session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false
}))

//body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())

// database
const db = require('./hidden')
const mysql = require('mysql2/promise')
const pool = mysql.createPool({
    ...db,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

// middlewares
function isLoggedIn(req, res, next) {
    if (req.session.uid) {
        next()
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}

function isAdmin(req, res, next) {
    if (req.session.role = "admin") {
        next()
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}

async function getUserRole(uid) {
    try {
        const [rows] = await pool.execute('SELECT * FROM ManagementUsers WHERE UserID = ?', [uid])
        return rows[0] ? rows[0].Role : 'user'
    } catch (error) {
        console.error(error)
        return
    }
}

// endpoints

// put product to database
app.put('/product', isLoggedIn, isAdmin, async (req, res) => {
    if (!req.body.productName || !req.body.price || !req.body.quantityInStock || !req.body.description || !req.body.imageUrl) return res.status(400).json({ message: 'Bad Request' })

    try {
        await pool.execute('INSERT INTO Products (ProductName, Price, QuantityInStock, Description, ImageURL) VALUES (?, ?, ?, ?, ?)', [req.body.productName, req.body.price, req.body.quantityInStock, req.body.description, req.body.imageUrl])
        res.status(201).json({ message: 'Product successfully added' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// display products
app.get('/products', async (req, res) => {
    const { perPage = 30, page = 1, sort = 'asc', sortBy: rawSortBy } = req.query
    const sortBy = rawSortBy ? rawSortBy.toLowerCase() : undefined

    let query = 'SELECT * FROM Products '
    if (['productname', 'price'].includes(sortBy)) {
        query += `ORDER BY ${sortBy} ${sort === 'desc' ? 'desc' : ''} `
    }
    query += `LIMIT ${perPage} OFFSET ${perPage * (page - 1)}`

    try {
        const [rows] = await pool.execute(query)
        res.status(200).json(rows)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// register
app.put('/register', async (req, res) => {
    if (!req.body.username || !req.body.password || !req.body.email) return res.status(400).json({ message: 'Bad Request' })

    try {
        const [result] = await pool.execute('SELECT EXISTS(SELECT 1 FROM Customers WHERE Username = ? OR Email = ?) AS result', [req.body.username, req.body.email])

        if (result[0].result) return res.status(409).json({ message: 'User already exists' })

        await pool.execute('INSERT INTO Customers (Username, Password, Email) VALUES (?, SHA2(?, 512), ?)', [req.body.username, req.body.password, req.body.email])

        res.status(201).json({ message: 'User successfully registered' })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// login
app.post('/login', async (req, res) => {
    if (!req.body.username || !req.body.password) return res.status(400).json({ message: 'Bad Request' })

    try {
        const [rows] = await pool.execute('SELECT * FROM Customers WHERE Username = ? AND Password = SHA2(?, 512)', [req.body.username, req.body.password])

        const result = rows[0]
        if (result) {
            const role = await getUserRole(result.CustomerID)

            req.session.uid = result.CustomerID
            req.session.role = role

            return res.status(200).json({ message: 'Logged in successfully', role: role })
        }

        res.status(401).json({ message: 'Invalid credentials' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

//clear session
app.post('/logout', isLoggedIn, (req, res) => {
    req.session.uid = null
    req.session.role = null
    res.status(200).json({ message: 'Logged out successfully' })
})

//order
app.post('/order', isLoggedIn, async (req, res) => {
    if (!req.body.products || !Array.isArray(req.body.products) || !req.body.products > 0) return res.status(400).json({ message: 'Bad Request' })

    try {
        const [createOrderResult] = await pool.execute('INSERT INTO Orders (CustomerId) VALUES (?)', [req.session.uid])
        const orderId = createOrderResult.insertId

        for (const product of req.body.products) {
            const { id, quantity } = product
            await pool.execute('INSERT INTO OrderDetails (OrderId, ProductId, Quantity) VALUES (?, ?, ?)', [orderId, id, quantity])
        }

        res.status(201).json({ message: 'Order added successfully' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

app.listen(PORT, function () {
    console.log('Server started on port ' + PORT)
})