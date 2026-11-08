import { AUTH_CODE_KEY } from "@/constants/storage";
import { redirect } from "react-router";

export const hasAuthCode = () => Boolean(localStorage.getItem(AUTH_CODE_KEY));

export const requireAuth = () => {
  if (!hasAuthCode()) {
    alert("먼저 파트를 선택하고 코드를 발급받아 주세요.");
    return redirect("/");
  }
  return null;
};
