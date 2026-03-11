export { authService } from './services/authService';
export type { ILoginRequest } from './types/requests/LoginRequest';
export type { IRegisterRequest } from './types/requests/RegisterRequest';
export type { IChangePasswordRequest } from './types/requests/ChangePasswordRequest';
export type { IForgotPasswordRequest } from './types/requests/ForgotPasswordRequest';
export type { IResetPasswordRequest } from './types/requests/ResetPasswordRequest';
export type { IAuthResponse } from './types/responses/AuthResponse';
export {
  loginSchema,
  registerSchema,
  changePasswordSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  authResponseSchema,
} from './schemas/authSchema';
export { AuthProvider, useAuth } from './hooks/useAuth';
export { useChangePassword } from './hooks/useChangePassword';
export { useAuthStore } from './store/authStore';
export { LS_KEYS } from './const';
