import { API_BASE } from "@/helpers";

export const signIn = async (body) => {
  try {
    const response = await fetch(API_BASE + "/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
