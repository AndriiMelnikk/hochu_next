"use client";

import { useQuery } from "@tanstack/react-query";
import { requestService } from "../api/requestService";
import { GetRequestsResponseSchema, RequestSchema } from "../model/schemas";
import type { IGetRequestsRequest } from "../model/types";

export const useRequests = (params?: IGetRequestsRequest) => {
  return useQuery({
    queryKey: ["requests", params],
    queryFn: async () => {
      const data = await requestService.get(params);
      // Валідація через Zod
      return GetRequestsResponseSchema.parse(data);
    },
    staleTime: 60 * 1000, // 1 хвилина
  });
};

export const useRequest = (id: number) => {
  return useQuery({
    queryKey: ["request", id],
    queryFn: async () => {
      const data = await requestService.getOne(id);
      // Валідація через Zod
      return RequestSchema.parse(data);
    },
    enabled: !!id,
  });
};

