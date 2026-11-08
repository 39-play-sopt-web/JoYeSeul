import { AUTH_CODE_KEY } from "@/constants/storage";
import ky from "ky";

export const api = ky.create({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  hooks: {
    beforeRequest: [
      ({ request }) => {
        const code = localStorage.getItem(AUTH_CODE_KEY);
        if (code) {
          request.headers.set("Authorization", code);
        }
      },
    ],
  },
});
