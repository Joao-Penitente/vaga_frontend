"use server";
import { cookies } from "next/headers";
import { TOKEN_KEY } from "../../middleware";
import { redirect } from "next/navigation";

export async function login() {
  const cookiesData = await cookies();
  cookiesData.set(TOKEN_KEY, "token");

  cookiesData.set({
    name: "user",
    value: "joao",
    httpOnly: true,
    path: "/",
  });

  redirect("/eventos");
}

export async function logout() {
  const cookiesData = await cookies();
  cookiesData.delete(TOKEN_KEY);
  cookiesData.delete("user");
  redirect("/login");
}
