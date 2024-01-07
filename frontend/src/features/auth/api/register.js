import { API_BASE } from "@/helpers";

export const register = async (body) => {
  try {
    const response = await fetch(API_BASE + "/register", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
