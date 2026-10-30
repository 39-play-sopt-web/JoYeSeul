export interface ErrorResponse {
  status_code: number;
  status_message: string;
  success: false;
}

export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
