import { useCallback } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { FormField, Input } from "@/components";
import { useAuth } from "@/features/auth/hooks";
import { ROUTES } from "@/helpers";
import { usePage } from "@/hooks";

const RegisterRoute = () => {
  const { user, register } = useAuth();
  const navigate = useNavigate();

  usePage({ title: `Zarejestruj się | Dodaj konto` });

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await register(
          Object.fromEntries(new FormData(event.nativeEvent.srcElement))
        );
        navigate(ROUTES.signIn);
      } catch (error) {
        console.log(error);
      }
    },
    [register, navigate]
  );

  return user ? (
    <Navigate to={ROUTES.home} />
  ) : (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to={ROUTES.home}>
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </Link>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Zarejestruj nowe konto
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex gap-6">
            <FormField name="username" label="Nazwa użytkownika">
              <Input />
            </FormField>
            <FormField name="email" label="Adres e-mail">
              <Input type="email" />
            </FormField>
          </div>

          <FormField name="password" label="Hasło">
            <Input type="password" />
          </FormField>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Stwórz konto
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Masz już konto?{" "}
          <Link
            to={ROUTES.signIn}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Zaloguj się!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterRoute;
