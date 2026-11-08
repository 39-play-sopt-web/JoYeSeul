import { issueCode } from "@/apis/auth";
import { AUTH_CODE_KEY, PART_KEY } from "@/constants/storage";
import { useMutation } from "@tanstack/react-query";

export const useIssueCode = () => {
  return useMutation({
    mutationFn: issueCode,
    onSuccess: ({ authorizationCode }, { part }) => {
      localStorage.setItem(AUTH_CODE_KEY, authorizationCode);
      localStorage.setItem(PART_KEY, part);
    },
  });
};
