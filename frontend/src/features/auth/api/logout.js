import { API_BASE } from "@/helpers";

export const logout = async () => {
  try {
    const response = await fetch(API_BASE + "/logout", {
      method: "POST",
    });
    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
