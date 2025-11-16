import { useQuery } from "@tanstack/react-query";
import { userService } from "../services/userService";
import { userSchema } from "../schemas/userSchema";

export const useUser = (id: string | number | undefined) => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: async () => {
      if (!id) throw new Error("User ID is required");
      const data = await userService.get(id);
      return userSchema.parse(data);
    },
    enabled: !!id,
  });
};

export const useMe = () => {
  return useQuery({
    queryKey: ["users", "me"],
    queryFn: async () => {
      const data = await userService.getMe();
      return userSchema.parse(data);
    },
  });
};

