import { z } from "zod";
import { loginSchema } from "../../schemas/authSchema";

export type ILoginRequest = z.infer<typeof loginSchema>;
