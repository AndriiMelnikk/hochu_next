import { routes } from '@/app/router/routes';
import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: 'Shukayu — Platform Connecting Buyers and Sellers of Services',
  description:
    'Shukayu is an online platform connecting buyers and sellers of services in Ukraine. Post a request, receive offers from providers, and pick the best price.',
};

export const routeMetadata: Record<keyof typeof routes, Partial<Metadata>> = {
  HOME: {
    title: 'Shukayu — Platform Connecting Buyers and Sellers of Services',
    description:
      'Stop searching — say what you need. Post a free service request, get offers from sellers, and choose the best price on Shukayu.',
  },
  ABOUT: {
    title: 'About Shukayu — How We Connect Buyers and Sellers',
    description:
      'Learn more about Shukayu: our mission, team, and how the platform helps buyers find reliable service providers across Ukraine.',
  },
  ADMIN: {
    title: 'Admin Panel | Shukayu',
    description: 'Content moderation and platform management panel for Shukayu administrators.',
  },
  BLOG: {
    title: 'Shukayu Blog — Tips for Buyers and Service Sellers',
    description:
      'Helpful articles on safe online deals, writing effective service requests, and finding new clients as a provider on the Shukayu platform.',
  },
  BLOG_ID: {
    title: 'Blog Article | Shukayu',
    description:
      'Read Shukayu blog articles: practical tips for buyers and sellers of services, category overviews, and user success stories.',
  },
  CONTACT: {
    title: 'Contact Shukayu — Get in Touch with Our Team',
    description:
      'Have questions about the Shukayu platform? Reach out via the contact form — our support team will get back to you as soon as possible.',
  },
  CREATE: {
    title: 'Post a Service Request Online for Free | Shukayu',
    description:
      'Describe the service you need, set a budget and timeline — sellers will send you offers with prices. Posting a request on Shukayu takes 2 minutes.',
  },
  HOW_IT_WORKS: {
    title: 'How Shukayu Works — From Request to Completed Service',
    description:
      'Step by step: post a service request, receive offers from sellers, compare prices and reviews, pick a provider, and complete the deal safely on Shukayu.',
  },
  LOGIN: {
    title: 'Log In to Your Shukayu Account',
    description:
      'Sign in to your Shukayu account to post service requests, send offers as a seller, and chat with other users of the platform.',
  },
  FORGOT_PASSWORD: {
    title: 'Password Recovery | Shukayu',
    description: 'Reset the password for your Shukayu account.',
  },
  RESET_PASSWORD: {
    title: 'Set a New Password | Shukayu',
    description: 'Set a new password for your account on the Shukayu platform.',
  },
  GOOGLE_AUTH_COMPLETE: {
    title: 'Google Sign-In | Shukayu',
    description: 'Completing sign-in to the Shukayu platform with your Google account.',
  },
  PRICING: {
    title: 'Shukayu Pricing — Free for Buyers and Sellers',
    description:
      'Explore Shukayu pricing: posting service requests and sending offers. Transparent terms with no hidden fees.',
  },
  PRIVACY: {
    title: 'Shukayu Privacy Policy',
    description:
      'Shukayu privacy policy: what personal data we collect, how we use and protect it, and what rights platform users have.',
  },
  PROFILE: {
    title: 'My Profile — Requests, Offers and Messages | Shukayu',
    description:
      'Your Shukayu account dashboard: active requests, offers, reviews, achievements, messages, and profile settings.',
  },
  PROFILE_BY_ID: {
    title: 'User Profile — Rating and Reviews | Shukayu',
    description:
      'Shukayu user profile: rating, client reviews, completed deals, and achievements of a buyer or service seller.',
  },
  PROFILE_TAB: {
    title: 'User Profile — Rating and Reviews | Shukayu',
    description:
      'Shukayu user profile: rating, client reviews, completed deals, and achievements of a buyer or service seller.',
  },
  PROPOSAL_ID: {
    title: 'Seller Offer — Price and Terms | Shukayu',
    description:
      'Offer details on Shukayu: price, delivery time, warranty, work samples, and reviews about the service provider.',
  },
  REGISTER: {
    title: 'Sign Up for Shukayu — Create a Free Account',
    description:
      'Register on Shukayu for free: post service requests as a buyer or find new clients as a seller of services.',
  },
  REQUEST_ID: {
    title: 'Service Request — Details and Offers | Shukayu',
    description:
      'Service request details on Shukayu: description, budget, urgency, offers from sellers, and public discussion.',
  },
  SUPPORT: {
    title: 'Shukayu Support — Help and Answers',
    description:
      'Shukayu support center: answers to common questions about the platform, resolving issues with requests, offers, and your account.',
  },
  TERMS: {
    title: 'Shukayu Terms of Service',
    description:
      'Terms of using the Shukayu platform: rights and obligations of buyers and sellers, rules for posting requests and offers.',
  },
  REQUEST: {
    title: 'Buyer Requests Online — Find Orders | Shukayu',
    description:
      'Browse live buyer requests for services: filter by category, location, and budget, and send your offers as a seller on Shukayu.',
  },
  PROPOSAL: {
    title: 'Offers from Service Sellers | Shukayu',
    description:
      'Offers from service sellers on the Shukayu platform: prices, delivery times, and warranties from verified providers.',
  },
};
