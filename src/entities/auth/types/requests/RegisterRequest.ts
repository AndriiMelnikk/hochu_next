import { z } from 'zod';
import { registerSchema } from '../../schemas/authSchema';

export type IRegisterRequest = z.infer<typeof registerSchema>;
