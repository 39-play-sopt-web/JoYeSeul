import type { Part } from "@/constants/part";

export interface IssueCodeRequest {
  part: Part;
}

export interface IssueCodeResponse {
  authorizationCode: string;
}
