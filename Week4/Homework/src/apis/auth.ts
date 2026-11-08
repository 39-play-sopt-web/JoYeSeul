import { api } from "@/apis/instance";
import type { ApiResponse } from "@/types/api";
import type { IssueCodeRequest, IssueCodeResponse } from "@/types/auth";

export const issueCode = async (body: IssueCodeRequest) => {
  const res = await api
    .post("members/authorization-code", { json: body })
    .json<ApiResponse<IssueCodeResponse>>();

  return res.data;
};
