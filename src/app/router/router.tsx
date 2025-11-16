import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "./rootLayout";
import { routes } from "./routes";

// Lazy load pages
const HomePage = lazy(() => import("@pages/app/Home"));
const BrowsePage = lazy(() => import("@pages/requests/Browse"));
const CreateRequestPage = lazy(() => import("@pages/requests/Create"));
const HowItWorksPage = lazy(() => import("@pages/app/HowItWorks"));
const RequestDetailPage = lazy(() => import("@pages/requests/RequestDetail"));
const ProposalDetailPage = lazy(() => import("@pages/proposals/ProposalDetail"));
const LoginPage = lazy(() => import("@pages/auth/Login"));
const RegisterPage = lazy(() => import("@pages/auth/Register"));
const ProfilePage = lazy(() => import("@pages/user/Profile"));
const PricingPage = lazy(() => import("@pages/app/Pricing"));
const AboutPage = lazy(() => import("@pages/app/About"));
const ContactPage = lazy(() => import("@pages/app/Contact"));
const SupportPage = lazy(() => import("@pages/app/Support"));
const TermsPage = lazy(() => import("@pages/app/Terms"));
const PrivacyPage = lazy(() => import("@pages/app/Privacy"));
const BlogListPage = lazy(() => import("@pages/blog/BlogList"));
const BlogArticlePage = lazy(() => import("@pages/blog/BlogArticle"));
const AdminPage = lazy(() => import("@pages/admin/Admin"));
const NotFoundPage = lazy(() => import("@pages/NotFound"));

export const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to={routes.HOME} replace />,
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: routes.HOME,
        Component: HomePage,
      },
      {
        path: routes.BROWSE,
        Component: BrowsePage,
      },
      {
        path: routes.CREATE,
        Component: CreateRequestPage,
      },
      {
        path: routes.HOW_IT_WORKS,
        Component: HowItWorksPage,
      },
      {
        path: `${routes.REQUEST}/:id`,
        Component: RequestDetailPage,
      },
      {
        path: `${routes.PROPOSAL}/:id`,
        Component: ProposalDetailPage,
      },
      {
        path: routes.LOGIN,
        Component: LoginPage,
      },
      {
        path: routes.REGISTER,
        Component: RegisterPage,
      },
      {
        path: routes.PROFILE,
        Component: ProfilePage,
      },
      {
        path: routes.PRICING,
        Component: PricingPage,
      },
      {
        path: routes.ABOUT,
        Component: AboutPage,
      },
      {
        path: routes.CONTACT,
        Component: ContactPage,
      },
      {
        path: routes.SUPPORT,
        Component: SupportPage,
      },
      {
        path: routes.TERMS,
        Component: TermsPage,
      },
      {
        path: routes.PRIVACY,
        Component: PrivacyPage,
      },
      {
        path: routes.BLOG,
        Component: BlogListPage,
      },
      {
        path: `${routes.BLOG}/:id`,
        Component: BlogArticlePage,
      },
      {
        path: routes.ADMIN,
        Component: AdminPage,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);

