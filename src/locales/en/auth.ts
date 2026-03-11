import type { Messages } from '@lingui/core';

export const messages: Messages = {
  'auth.login.title': 'Log in',
  'auth.login.subtitle': 'Enter your credentials to log in to your account',
  'auth.login.noAccount': "Don't have an account yet? ",
  'auth.login.registerLink': 'Sign up',
  'auth.login.forgotPassword': 'Forgot password?',

  'auth.login.info.title': 'Welcome!',
  'auth.login.info.subtitle': 'Platform for finding contractors and customers',

  'auth.login.features.security.title': 'Secure transactions',
  'auth.login.features.security.desc': 'Protection of your interests at every stage',

  'auth.login.features.verified.title': 'Verified contractors',
  'auth.login.features.verified.desc': 'Work with rated professionals',

  'auth.login.features.fast.title': 'Fast search',
  'auth.login.features.fast.desc': 'Find contractors in minutes',

  'auth.login.form.email.label': 'Email',
  'auth.login.form.email.placeholder': 'your@email.com',
  'auth.login.form.password.label': 'Password',
  'auth.login.form.password.placeholder': '••••••••',

  'auth.login.form.submit.loading': 'Logging in...',
  'auth.login.form.submit.default': 'Log in',

  'auth.login.messages.success': 'Login successful!',
  'auth.login.messages.invalidData': 'Invalid data',
  'auth.login.messages.error': 'An error occurred while logging in',

  // Forgot password
  'auth.forgotPassword.title': 'Forgot password',
  'auth.forgotPassword.subtitle': 'Enter your email to receive a password reset link',
  'auth.forgotPassword.rememberPassword': 'Remember your password? ',
  'auth.forgotPassword.loginLink': 'Log in',
  'auth.forgotPassword.info.title': 'Forgot password?',
  'auth.forgotPassword.info.subtitle':
    'We will send you an email with a link to set a new password',
  'auth.forgotPassword.info.step1.title': 'Enter your email',
  'auth.forgotPassword.info.step1.desc': 'The same one you used when registering',
  'auth.forgotPassword.info.step2.title': 'Check your email',
  'auth.forgotPassword.info.step2.desc': 'Follow the link in the email within 1 hour',
  'auth.forgotPassword.form.email.label': 'Email',
  'auth.forgotPassword.form.email.placeholder': 'your@email.com',
  'auth.forgotPassword.form.submit.default': 'Send link',
  'auth.forgotPassword.form.submit.loading': 'Sending...',
  'auth.forgotPassword.messages.success':
    'If an account with this email exists, you will receive an email with a link',
  'auth.forgotPassword.messages.error': 'An error occurred. Please try again later',

  // Reset password
  'auth.resetPassword.title': 'New password',
  'auth.resetPassword.subtitle': 'Enter a new password for your account',
  'auth.resetPassword.rememberPassword': 'Remember your password? ',
  'auth.resetPassword.loginLink': 'Log in',
  'auth.resetPassword.info.title': 'Secure password',
  'auth.resetPassword.info.subtitle': 'Choose a strong password with at least 6 characters',
  'auth.resetPassword.info.security.title': 'Account protection',
  'auth.resetPassword.info.security.desc': 'After changing your password, log in again if needed',
  'auth.resetPassword.form.newPassword.label': 'New password',
  'auth.resetPassword.form.newPassword.placeholder': '••••••••',
  'auth.resetPassword.form.confirmPassword.label': 'Confirm password',
  'auth.resetPassword.form.confirmPassword.placeholder': '••••••••',
  'auth.resetPassword.form.submit.default': 'Change password',
  'auth.resetPassword.form.submit.loading': 'Changing...',
  'auth.resetPassword.messages.success': 'Password changed successfully! You can now log in',
  'auth.resetPassword.messages.invalidToken': 'Link is invalid or expired. Request a new link',
  'auth.resetPassword.messages.error': 'An error occurred. Please try again later',
  'auth.resetPassword.noToken.title': 'Missing link',
  'auth.resetPassword.noToken.subtitle': 'Follow the link from the email or request a new one',
  'auth.resetPassword.noToken.requestLink': 'Request new link',

  // Validation (forgot/reset password)
  'auth.validation.emailInvalid': 'Invalid email format',
  'auth.validation.passwordMin': 'Password must be at least 6 characters',
  'auth.validation.confirmPasswordRequired': 'Confirm password',
  'auth.validation.passwordsMismatch': 'Passwords do not match',
};
