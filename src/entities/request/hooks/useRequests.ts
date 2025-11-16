import { useQuery } from "@tanstack/react-query";
import { requestService } from "../services/requestService";
import type { IGetRequestsRequest } from "../types/requests";
import { getRequestsResponseSchema } from "../schemas/requestSchema";

export const useRequests = (searchParams: IGetRequestsRequest = {}) => {
  return useQuery({
    queryKey: ["requests", "list", searchParams],
    queryFn: async () => {
      const data = await requestService.get(searchParams);
      return getRequestsResponseSchema.parse(data);
    },
  });
};

