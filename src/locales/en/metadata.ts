import { routes } from '@/app/router/routes';
import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: 'Shukayu — Platform Connecting Buyers and Sellers of Goods',
  description:
    'Shukayu is an online platform where buyers post requests for goods and sellers send offers. Services are also available. Pick the best price in Ukraine.',
};

export const routeMetadata: Record<keyof typeof routes, Partial<Metadata>> = {
  CATEGORIES: {
    title: 'Product and Service Categories — Buyer Requests | Shukayu',
    description:
      'All Shukayu categories: electronics, home appliances, auto, apparel, services and more. Pick a category, browse buyer requests or post your own for free.',
  },
  CATEGORY: {
    title: 'Buyer Requests by Category | Shukayu',
    description:
      'Buyer requests in this category on Shukayu: what people want, budget and city. Sellers send offers and buyers pick the best price.',
  },
  CATEGORY_CITY: {
    title: 'Buyer Requests in Your City | Shukayu',
    description:
      'Buyer requests in your city on Shukayu: what people want, budget and terms. Send an offer or post your own request for free.',
  },
  HOME: {
    title: 'Shukayu — Platform Connecting Buyers and Sellers of Goods',
    description:
      'Say what goods you want to buy. Post a free request, get offers from sellers, and choose the best price. Services are also available on Shukayu.',
  },
  ABOUT: {
    title: 'About Shukayu — How We Connect Buyers and Sellers',
    description:
      'Learn more about Shukayu: our mission and principles — helping buyers find goods by request and helping sellers reach ready customers across Ukraine.',
  },
  ADMIN: {
    title: 'Admin Panel | Shukayu',
    description: 'Content moderation and platform management panel for Shukayu administrators.',
  },
  ADMIN_ANALYTICS: {
    title: 'Product Analytics | Shukayu Admin',
    description: 'Product analytics for the Shukayu platform.',
  },
  ADMIN_ANALYTICS_TRAFFIC: {
    title: 'Traffic Analytics | Shukayu Admin',
    description: 'Traffic, sources and devices on Shukayu.',
  },
  ADMIN_MODERATION_REQUESTS: {
    title: 'Request Moderation | Shukayu Admin',
    description: 'Moderation queue for requests.',
  },
  ADMIN_MODERATION_PROPOSALS: {
    title: 'Proposal Moderation | Shukayu Admin',
    description: 'Moderation queue for proposals.',
  },
  ADMIN_MODERATION_REPORTS: {
    title: 'Reports | Shukayu Admin',
    description: 'User reports and complaints.',
  },
  ADMIN_MODERATION_USERS: {
    title: 'Users | Shukayu Admin',
    description: 'User blocking and management.',
  },
  ADMIN_CONTENT_BLOG: {
    title: 'Blog | Shukayu Admin',
    description: 'Manage blog posts.',
  },
  ADMIN_CONTENT_PRICING: {
    title: 'Pricing | Shukayu Admin',
    description: 'Manage pricing plans.',
  },
  ADMIN_CONTENT_PAGES: {
    title: 'Pages | Shukayu Admin',
    description: 'Manage informational pages.',
  },
  ADMIN_STAFF: {
    title: 'Staff | Shukayu Admin',
    description: 'Moderator and admin roles.',
  },
  BLOG: {
    title: 'Shukayu Blog — Tips for Buyers and Sellers of Goods',
    description:
      'Helpful articles on safe online buying and selling, writing effective product requests, and finding clients as a seller on Shukayu.',
  },
  BLOG_ID: {
    title: 'Blog Article | Shukayu',
    description:
      'Read Shukayu blog articles: practical tips for buyers and sellers of goods, category overviews, and user success stories.',
  },
  CONTACT: {
    title: 'Contact Shukayu — Get in Touch with Our Team',
    description:
      'Have questions about the Shukayu platform? Reach out via the contact form — our support team will get back to you as soon as possible.',
  },
  CREATE: {
    title: 'Post a Product Request Online for Free | Shukayu',
    description:
      'Describe the goods you want to buy, set a budget and timeline — sellers will send offers with prices. You can also post service requests.',
  },
  HOW_IT_WORKS: {
    title: 'How Shukayu Works — From Product Request to Deal',
    description:
      'Step by step: post a request for goods, receive offers from sellers, compare prices and reviews, pick a seller, and complete the deal on Shukayu.',
  },
  LOGIN: {
    title: 'Log In to Your Shukayu Account',
    description:
      'Log in to Shukayu to post product requests, compare seller offers, chat with sellers and manage your deals in one place.',
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
      'Shukayu pricing: creating product requests is free for buyers. See seller plans, what each one includes and choose the best option.',
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
      'Shukayu user profile: rating, reviews, completed deals and achievements of a buyer or seller of goods. Check reputation before a deal.',
  },
  PROFILE_TAB: {
    title: 'User Profile — Rating and Reviews | Shukayu',
    description:
      'Shukayu user profile: rating, reviews, completed deals, and achievements of a buyer or seller of goods.',
  },
  PROPOSAL_ID: {
    title: 'Seller Offer — Price and Terms | Shukayu',
    description:
      'Offer details on Shukayu: price, timeline, delivery or warranty terms, and reviews about the seller.',
  },
  REGISTER: {
    title: 'Sign Up for Shukayu — Create a Free Account',
    description:
      'Register on Shukayu for free: post product requests as a buyer, receive offers from sellers or find new customers as a seller in Ukraine.',
  },
  REQUEST_ID: {
    title: 'Product Request — Details and Offers | Shukayu',
    description:
      'Product request on Shukayu: description, budget, location and seller offers. Send your price or create your own request for free.',
  },
  SUPPORT: {
    title: 'Shukayu Support — Help and Answers',
    description:
      'Shukayu support center: answers to common questions about the platform, resolving issues with requests, offers, and your account.',
  },
  TERMS: {
    title: 'Shukayu Terms of Use',
    description:
      'Terms of using the Shukayu platform: rights and obligations of buyers and sellers, rules for posting requests and offers.',
  },
  REQUEST: {
    title: 'Buyer Product Requests — Find Orders | Shukayu',
    description:
      'Browse live buyer requests for goods: filter by category, location, and budget, and send your offers as a seller on Shukayu.',
  },
  PROPOSAL: {
    title: 'Offers from Sellers of Goods | Shukayu',
    description:
      'Offers from sellers on the Shukayu platform: prices, terms, and warranties from verified sellers of goods.',
  },
};
