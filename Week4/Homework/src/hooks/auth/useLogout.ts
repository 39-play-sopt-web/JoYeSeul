import { AUTH_CODE_KEY, PART_KEY } from "@/constants/storage";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return () => {
    localStorage.removeItem(AUTH_CODE_KEY);
    localStorage.removeItem(PART_KEY);
    queryClient.clear();
    alert("로그아웃 되었습니다.");
    navigate("/", { replace: true });
  };
};
