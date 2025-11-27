import type { Meta, ResponsePagination } from "@/types/response";

export const mapResponsePaginationToMeta =(response: Meta): Meta => {
  return {
    current_page:response.current_page,
    last_page:response.last_page,
    per_page:response.per_page,
  };
};
