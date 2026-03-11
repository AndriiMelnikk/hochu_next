import type { Messages } from '@lingui/core';

export const messages: Messages = {
  'auth.login.title': 'Вхід',
  'auth.login.subtitle': 'Введіть свої дані для входу в акаунт',
  'auth.login.noAccount': 'Ще не маєте акаунту? ',
  'auth.login.registerLink': 'Зареєструватись',
  'auth.login.forgotPassword': 'Забули пароль?',

  'auth.login.info.title': 'Ласкаво просимо!',
  'auth.login.info.subtitle': 'Платформа для пошуку виконавців та замовників',

  'auth.login.features.security.title': 'Безпечні угоди',
  'auth.login.features.security.desc': 'Захист ваших інтересів на кожному етапі',

  'auth.login.features.verified.title': 'Перевірені виконавці',
  'auth.login.features.verified.desc': 'Працюйте з професіоналами з рейтингом',

  'auth.login.features.fast.title': 'Швидкий пошук',
  'auth.login.features.fast.desc': 'Знаходьте виконавців за лічені хвилини',

  'auth.login.form.email.label': 'Email',
  'auth.login.form.email.placeholder': 'your@email.com',
  'auth.login.form.password.label': 'Пароль',
  'auth.login.form.password.placeholder': '••••••••',

  'auth.login.form.submit.loading': 'Вхід...',
  'auth.login.form.submit.default': 'Увійти',

  'auth.login.messages.success': 'Вхід успішний!',
  'auth.login.messages.invalidData': 'Невалідні дані',
  'auth.login.messages.error': 'Сталася помилка при вході',

  // Forgot password
  'auth.forgotPassword.title': 'Відновлення пароля',
  'auth.forgotPassword.subtitle': 'Введіть email, щоб отримати посилання для скидання пароля',
  'auth.forgotPassword.rememberPassword': 'Памʼятаєте пароль? ',
  'auth.forgotPassword.loginLink': 'Увійти',
  'auth.forgotPassword.info.title': 'Забули пароль?',
  'auth.forgotPassword.info.subtitle':
    'Ми надішлемо вам лист з посиланням для встановлення нового пароля',
  'auth.forgotPassword.info.step1.title': 'Введіть email',
  'auth.forgotPassword.info.step1.desc': 'Той самий, що ви використовували при реєстрації',
  'auth.forgotPassword.info.step2.title': 'Перевірте пошту',
  'auth.forgotPassword.info.step2.desc': 'Перейдіть за посиланням у листі протягом 1 години',
  'auth.forgotPassword.form.email.label': 'Email',
  'auth.forgotPassword.form.email.placeholder': 'your@email.com',
  'auth.forgotPassword.form.submit.default': 'Надіслати посилання',
  'auth.forgotPassword.form.submit.loading': 'Надсилання...',
  'auth.forgotPassword.messages.success':
    'Якщо акаунт з таким email існує, ви отримаєте лист з посиланням',
  'auth.forgotPassword.messages.error': 'Сталася помилка. Спробуйте пізніше',

  // Reset password
  'auth.resetPassword.title': 'Новий пароль',
  'auth.resetPassword.subtitle': 'Введіть новий пароль для вашого акаунту',
  'auth.resetPassword.rememberPassword': 'Памʼятаєте пароль? ',
  'auth.resetPassword.loginLink': 'Увійти',
  'auth.resetPassword.info.title': 'Безпечний пароль',
  'auth.resetPassword.info.subtitle': 'Оберіть надійний пароль мінімум з 6 символів',
  'auth.resetPassword.info.security.title': 'Захист акаунту',
  'auth.resetPassword.info.security.desc': 'Після зміни паролю за потреби увійдіть знову',
  'auth.resetPassword.form.newPassword.label': 'Новий пароль',
  'auth.resetPassword.form.newPassword.placeholder': '••••••••',
  'auth.resetPassword.form.confirmPassword.label': 'Підтвердження пароля',
  'auth.resetPassword.form.confirmPassword.placeholder': '••••••••',
  'auth.resetPassword.form.submit.default': 'Змінити пароль',
  'auth.resetPassword.form.submit.loading': 'Зміна...',
  'auth.resetPassword.messages.success': 'Пароль успішно змінено! Тепер ви можете увійти',
  'auth.resetPassword.messages.invalidToken':
    'Посилання невалідне або прострочене. Запросіть нове посилання',
  'auth.resetPassword.messages.error': 'Сталася помилка. Спробуйте пізніше',
  'auth.resetPassword.noToken.title': 'Відсутнє посилання',
  'auth.resetPassword.noToken.subtitle': 'Перейдіть за посиланням з листа або запросіть нове',
  'auth.resetPassword.noToken.requestLink': 'Запросіть нове посилання',

  // Validation (forgot/reset password)
  'auth.validation.emailInvalid': 'Невірний формат email',
  'auth.validation.passwordMin': 'Пароль має бути мінімум 6 символів',
  'auth.validation.confirmPasswordRequired': 'Підтвердіть пароль',
  'auth.validation.passwordsMismatch': 'Паролі не співпадають',
};
