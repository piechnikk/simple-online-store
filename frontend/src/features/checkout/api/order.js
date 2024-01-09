import { API_BASE } from "@/helpers";

export const createOrder = async (body) => {
  try {
    const response = await fetch(API_BASE + "/order", {
      method: "POST",
      body: JSON.stringify(body),
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
