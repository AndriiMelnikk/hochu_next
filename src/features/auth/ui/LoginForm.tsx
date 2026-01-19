'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@entities/auth/schemas/authSchema";
import { Button } from "@shared/ui/button";
import { Input } from "@shared/ui/input";
import { useAuthStore } from "@entities/auth/store/authStore";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ILoginRequest } from "@/entities/auth";
import { routes } from "@/app/router/routes";
import { 
    Form,
    FormControl, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage 
} from "@/shared/ui/form";

export const LoginForm = () => {
    const router = useRouter();
    const { login: loginUser, isLoading } = useAuthStore();

    const form = useForm<ILoginRequest>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const {
        handleSubmit,
        setError,
        control,
    } = form;

    const onSubmit = async (data: ILoginRequest) => {
        try {
            await loginUser(data);
            toast.success("Вхід успішний!");
            router.push(routes.HOME);
        } catch (err: any) {
            let handledAsFieldError = false;

            // Обробка помилок полів від сервера
            if (err.response?.data) {
                const serverErrors = err.response.data.errors || err.response.data;
                if (typeof serverErrors === 'object') {
                    Object.keys(serverErrors).forEach((key) => {
                        // Перевіряємо, чи це поле є у нашій формі
                        if (['email', 'password'].includes(key)) {
                            const message = Array.isArray(serverErrors[key]) ? serverErrors[key][0] : serverErrors[key];
                            const errorMessage = typeof message === 'string' ? message : "Невалідні дані";
                            setError(key as any, {
                                type: 'server',
                                message: errorMessage
                            });
                            toast.error(errorMessage);
                            handledAsFieldError = true;
                        }
                    });
                }
            }

            if (err.friendlyMessage && !handledAsFieldError) {
                toast.error(err.friendlyMessage);
            } else if (!handledAsFieldError) {
                toast.error("Сталася помилка при вході");
            }
        } 
    };

    const onInvalid = (errors: any) => {
        Object.values(errors).forEach((error: any) => {
          if (error.message) {
            toast.error(error.message as string);
          }
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-4">
                <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="your@email.com"
                                    {...field}
                                    disabled={isLoading}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Пароль</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="••••••••"
                                    {...field}
                                    disabled={isLoading}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button 
                    type="submit" 
                    variant="gradient" 
                    className="w-full" 
                    disabled={isLoading}
                >
                    {isLoading ? "Вхід..." : "Увійти"}
                </Button>
            </form>
        </Form>
    );
};