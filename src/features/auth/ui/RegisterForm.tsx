"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { 
  registerSchema, 
  useAuthStore, 
  type IRegisterRequest 
} from "@/entities/auth";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { FormError } from "@/shared/ui/form-error";
import { routes } from "@/app/router/routes";
import { toast } from "sonner";

export const RegisterForm = () => {
  const router = useRouter();
  const { register: registerUser, isLoading, error } = useAuthStore();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IRegisterRequest>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: IRegisterRequest) => {
    try {
      await registerUser(data);
      toast.success("Реєстрація успішна!");
      router.push(routes.HOME);
    } catch (err: any) {
      let handledAsFieldError = false;

      // Обробка помилок полів від сервера
      if (err.response?.data) {
        const serverErrors = err.response.data.errors || err.response.data;
        if (typeof serverErrors === 'object') {
          Object.keys(serverErrors).forEach((key) => {
            // Перевіряємо, чи це поле є у нашій формі
            if (['email', 'name', 'password'].includes(key)) {
              const message = Array.isArray(serverErrors[key]) ? serverErrors[key][0] : serverErrors[key];
              const errorMessage = typeof message === 'string' ? message : "Невалідні дані";
              
              setError(key as any, { 
                type: 'server', 
                message: errorMessage 
              });
              
              // Виводимо помилку поля в toast
              toast.error(errorMessage);
              handledAsFieldError = true;
            }
          });
        }
      }
      
      // Якщо помилка не була оброблена як помилка поля, або є загальна помилка
      if (err.friendlyMessage && !handledAsFieldError) {
        toast.error(err.friendlyMessage);
      } else if (!handledAsFieldError) {
        toast.error("Сталася помилка при реєстрації");
      }
    }
  };

  const onInvalid = (errors: any) => {
    Object.values(errors).forEach((error: any) => {
      if (error.message) {
        toast.error(error.message);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Ім'я</Label>
        <Input
          id="name"
          type="text"
          placeholder="Ваше ім'я"
          {...register("name")}
          disabled={isLoading}
        />
        <FormError message={errors.name?.message} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          {...register("email")}
          disabled={isLoading}
        />
        <FormError message={errors.email?.message} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Пароль</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          {...register("password")}
          disabled={isLoading}
        />
        <FormError message={errors.password?.message} />
      </div>


      <Button 
        type="submit" 
        variant="gradient" 
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Реєстрація..." : "Зареєструватися"}
      </Button>
    </form>
  );
};
