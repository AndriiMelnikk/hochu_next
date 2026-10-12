import type {
  IAdminBlogPost,
  IAdminInfoPage,
  IAdminPricingPlan,
  IAdminStaffMember,
  IModerationProposal,
  IModerationReport,
  IModerationRequest,
  IModerationUser,
  IProductAnalytics,
  ITrafficAnalytics,
} from '../types/admin';

export const productAnalytics: IProductAnalytics = {
  kpi: {
    totalUsers: 1247,
    activeRequests: 89,
    totalProposals: 456,
    revenue: '124,580',
    growth: '+15.3%',
  },
  registrations: {
    '7d': [
      { date: 'Mon', count: 12 },
      { date: 'Tue', count: 18 },
      { date: 'Wed', count: 15 },
      { date: 'Thu', count: 22 },
      { date: 'Fri', count: 19 },
      { date: 'Sat', count: 9 },
      { date: 'Sun', count: 11 },
    ],
    '30d': [
      { date: 'W1', count: 78 },
      { date: 'W2', count: 92 },
      { date: 'W3', count: 85 },
      { date: 'W4', count: 101 },
    ],
    '90d': [
      { date: 'M1', count: 310 },
      { date: 'M2', count: 356 },
      { date: 'M3', count: 402 },
    ],
  },
  categories: [
    { name: 'Web', value: 34 },
    { name: 'Design', value: 22 },
    { name: 'Marketing', value: 18 },
    { name: 'Other', value: 26 },
  ],
};

export const trafficAnalytics: ITrafficAnalytics = {
  visitors: 18420,
  pageviews: 51230,
  onlineApprox: 47,
  series: {
    '7d': [
      { date: 'Mon', visitors: 420, pageviews: 1100 },
      { date: 'Tue', visitors: 510, pageviews: 1320 },
      { date: 'Wed', visitors: 480, pageviews: 1250 },
      { date: 'Thu', visitors: 560, pageviews: 1480 },
      { date: 'Fri', visitors: 610, pageviews: 1600 },
      { date: 'Sat', visitors: 390, pageviews: 980 },
      { date: 'Sun', visitors: 350, pageviews: 900 },
    ],
    '30d': [
      { date: 'W1', visitors: 2800, pageviews: 7200 },
      { date: 'W2', visitors: 3100, pageviews: 8100 },
      { date: 'W3', visitors: 2950, pageviews: 7800 },
      { date: 'W4', visitors: 3400, pageviews: 9000 },
    ],
    '90d': [
      { date: 'M1', visitors: 11200, pageviews: 29800 },
      { date: 'M2', visitors: 12800, pageviews: 34100 },
      { date: 'M3', visitors: 14100, pageviews: 37200 },
    ],
  },
  sources: [
    { ref: 'google', visits: 8420 },
    { ref: 'direct', visits: 4180 },
    { ref: 'facebook', visits: 2100 },
    { ref: 'telegram', visits: 1640 },
    { ref: 'other', visits: 2080 },
  ],
  devices: [
    { device: 'mobile', visits: 10240 },
    { device: 'desktop', visits: 6880 },
    { device: 'tablet', visits: 1300 },
  ],
  countries: [
    { country: 'UA', visits: 12100 },
    { country: 'PL', visits: 2100 },
    { country: 'DE', visits: 1480 },
    { country: 'US', visits: 920 },
    { country: 'Other', visits: 1820 },
  ],
  topPaths: [
    { path: '/', visits: 9200 },
    { path: '/request', visits: 6100 },
    { path: '/pricing', visits: 2800 },
    { path: '/blog', visits: 2100 },
    { path: '/how-it-works', visits: 1600 },
  ],
};

export const moderationRequests: IModerationRequest[] = [
  {
    id: '1',
    title: 'Створення веб-сайту для ресторану',
    author: 'Іван Петренко',
    date: '2024-03-15 14:30',
    status: 'pending',
  },
  {
    id: '2',
    title: 'Дизайн логотипу для стартапу',
    author: 'Марія Коваль',
    date: '2024-03-15 13:15',
    status: 'pending',
  },
  {
    id: '3',
    title: 'Налаштування реклами в Meta Ads',
    author: 'Олена Мельник',
    date: '2024-03-14 18:02',
    status: 'pending',
  },
];

export const moderationProposals: IModerationProposal[] = [
  {
    id: '1',
    requestId: '1',
    author: 'Олексій Шевченко',
    price: '5000',
    date: '2024-03-15 15:45',
    status: 'pending',
  },
  {
    id: '2',
    requestId: '2',
    author: 'Дмитро Іваненко',
    price: '3200',
    date: '2024-03-15 12:10',
    status: 'pending',
  },
];

export const moderationReports: IModerationReport[] = [
  {
    id: '1',
    targetType: 'user',
    targetLabel: 'Сергій Бондаренко',
    reporter: 'Анна Литвин',
    reason: 'Порушення правил спілкування',
    date: '2024-03-15 11:20',
    status: 'open',
  },
  {
    id: '2',
    targetType: 'request',
    targetLabel: '#42 — Копіювання чужого ТЗ',
    reporter: 'Ігор Савченко',
    reason: 'Підозра на шахрайство',
    date: '2024-03-14 09:40',
    status: 'open',
  },
];

export const moderationUsers: IModerationUser[] = [
  {
    id: '1',
    name: 'Сергій Бондаренко',
    email: 'sergiy@example.com',
    reason: 'Порушення правил спілкування',
    reports: 3,
    status: 'active',
  },
  {
    id: '2',
    name: 'Василь Кравчук',
    email: 'vasyl@example.com',
    reason: 'Спам у пропозиціях',
    reports: 5,
    status: 'blocked',
  },
];

export const adminBlogPosts: IAdminBlogPost[] = [
  {
    id: '1',
    title: 'Як правильно скласти запит',
    status: 'published',
    updatedAt: '2024-03-10',
  },
  {
    id: '2',
    title: 'Гайд для виконавців',
    status: 'draft',
    updatedAt: '2024-03-14',
  },
];

export const adminPricingPlans: IAdminPricingPlan[] = [
  { id: '1', name: 'Free', price: '0', period: 'month', isActive: true },
  { id: '2', name: 'Pro', price: '499', period: 'month', isActive: true },
  { id: '3', name: 'Business', price: '1499', period: 'month', isActive: false },
];

export const adminInfoPages: IAdminInfoPage[] = [
  { id: '1', slug: 'about', title: 'Про нас', updatedAt: '2024-02-20' },
  { id: '2', slug: 'terms', title: 'Умови використання', updatedAt: '2024-02-18' },
  { id: '3', slug: 'privacy', title: 'Політика конфіденційності', updatedAt: '2024-02-18' },
];

export const adminStaff: IAdminStaffMember[] = [
  {
    id: '1',
    name: 'Andrii Melnyk',
    email: 'admin@shukayu.com',
    role: 'admin',
  },
  {
    id: '2',
    name: 'Oksana Hrytsenko',
    email: 'moderator@shukayu.com',
    role: 'moderator',
  },
  {
    id: '3',
    name: 'Taras Bondar',
    email: 'editor@shukayu.com',
    role: 'editor',
  },
  {
    id: '4',
    name: 'Ira Sydorenko',
    email: 'analyst@shukayu.com',
    role: 'analyst',
  },
];

export const adminMockData = {
  productAnalytics,
  trafficAnalytics,
  moderationRequests,
  moderationProposals,
  moderationReports,
  moderationUsers,
  adminBlogPosts,
  adminPricingPlans,
  adminInfoPages,
  adminStaff,
} as const;
