import { routes } from '@/app/router/routes';
import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: 'Shukayu',
  description: 'Platform for connecting buyers and sellers',
};

export const routeMetadata: Record<keyof typeof routes, Partial<Metadata>> = {
  HOME: { title: 'Home | Shukayu', description: 'Platform for connecting buyers and sellers' },
  ABOUT: { title: 'About | Shukayu', description: 'About the Shukayu platform' },
  ADMIN: { title: 'Admin | Shukayu', description: 'Admin for administrators' },
  BLOG: { title: 'Blog | Shukayu', description: 'Blog for publications' },
  BLOG_ID: { title: 'Blog Post | Shukayu', description: 'Blog post for the blog' },
  CONTACT: { title: 'Contact | Shukayu', description: 'Contact for communication' },
  CREATE: { title: 'Create | Shukayu', description: 'Create request' },
  HOW_IT_WORKS: {
    title: 'How It Works | Shukayu',
    description: 'How it works on the Shukayu platform',
  },
  LOGIN: { title: 'Login | Shukayu', description: 'Login to the Shukayu platform' },
  FORGOT_PASSWORD: {
    title: 'Forgot password | Shukayu',
    description: 'Reset your password',
  },
  RESET_PASSWORD: {
    title: 'Reset password | Shukayu',
    description: 'Set a new password',
  },
  PRICING: { title: 'Pricing | Shukayu', description: 'Pricing for users' },
  PRIVACY: { title: 'Privacy Policy | Shukayu', description: 'Privacy policy for users' },
  PROFILE: { title: 'Profile | Shukayu', description: 'Profile for the user' },
  PROFILE_BY_ID: { title: 'Profile | Shukayu', description: 'Profile for the user' },
  PROPOSAL_ID: { title: 'Proposal | Shukayu', description: 'Proposal for the request' },
  REGISTER: { title: 'Register | Shukayu', description: 'Register for the user' },
  REQUEST_ID: { title: 'Request | Shukayu', description: 'Request for the proposal' },
  SUPPORT: { title: 'Support | Shukayu', description: 'Support for users' },
  TERMS: { title: 'Terms | Shukayu', description: 'Terms of use for the Shukayu platform' },
  REQUEST: { title: 'Request | Shukayu', description: 'Request details' },
  PROPOSAL: { title: 'Proposal | Shukayu', description: 'Proposal details' },
};
