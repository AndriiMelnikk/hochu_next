import { z } from 'zod';
import { authResponseSchema } from '../../schemas/authSchema';

export type IAuthResponse = z.infer<typeof authResponseSchema>;
