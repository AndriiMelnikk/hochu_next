import { routes } from '@/app/router/routes';
import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: 'Hochu',
  description: 'Platform for connecting buyers and sellers',
};

export const routeMetadata: Record<keyof typeof routes, Partial<Metadata>> = {
  HOME: { title: 'Home | Hochu', description: 'Platform for connecting buyers and sellers' },
  ABOUT: { title: 'About | Hochu', description: 'About the Hochu platform' },
  ADMIN: { title: 'Admin | Hochu', description: 'Admin for administrators' },
  BLOG: { title: 'Blog | Hochu', description: 'Blog for publications' },
  BLOG_ID: { title: 'Blog Post | Hochu', description: 'Blog post for the blog' },
  CONTACT: { title: 'Contact | Hochu', description: 'Contact for communication' },
  CREATE: { title: 'Create | Hochu', description: 'Create request' },
  HOW_IT_WORKS: {
    title: 'How It Works | Hochu',
    description: 'How it works on the Hochu platform',
  },
  LOGIN: { title: 'Login | Hochu', description: 'Login to the Hochu platform' },
  FORGOT_PASSWORD: {
    title: 'Forgot password | Hochu',
    description: 'Reset your password',
  },
  RESET_PASSWORD: {
    title: 'Reset password | Hochu',
    description: 'Set a new password',
  },
  PRICING: { title: 'Pricing | Hochu', description: 'Pricing for users' },
  PRIVACY: { title: 'Privacy Policy | Hochu', description: 'Privacy policy for users' },
  PROFILE: { title: 'Profile | Hochu', description: 'Profile for the user' },
  PROFILE_BY_ID: { title: 'Profile | Hochu', description: 'Profile for the user' },
  PROPOSAL_ID: { title: 'Proposal | Hochu', description: 'Proposal for the request' },
  REGISTER: { title: 'Register | Hochu', description: 'Register for the user' },
  REQUEST_ID: { title: 'Request | Hochu', description: 'Request for the proposal' },
  SUPPORT: { title: 'Support | Hochu', description: 'Support for users' },
  TERMS: { title: 'Terms | Hochu', description: 'Terms of use for the Hochu platform' },
  REQUEST: { title: 'Request | Hochu', description: 'Request details' },
  PROPOSAL: { title: 'Proposal | Hochu', description: 'Proposal details' },
};
