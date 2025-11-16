// Mock дані для запитів
export const mockRequests = [
  {
    id: 1,
    title: "Шукаю ремонт ноутбука MacBook Pro",
    description: "Потрібно замінити батарею та почистити від пилу. Ноутбук 2019 року, працює повільно.",
    category: "Електроніка",
    budgetMin: 2000,
    budgetMax: 3000,
    location: "Київ, Печерський район",
    createdAt: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    views: 45,
    proposalsCount: 8,
    urgency: "Протягом тижня",
    buyer: {
      id: 1,
      name: "Андрій Шевченко",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andriy",
      rating: 4.9,
      reviewsCount: 23,
    },
  },
  {
    id: 2,
    title: "Потрібен веб-дизайнер для лендінгу",
    description: "Створення сучасного лендінгу для IT-компанії. Важливий досвід з Figma.",
    category: "Дизайн",
    budgetMin: 10000,
    budgetMax: 15000,
    location: "Віддалено",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    views: 120,
    proposalsCount: 23,
    urgency: "Протягом місяця",
    buyer: {
      id: 2,
      name: "Марія Коваленко",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      rating: 4.7,
      reviewsCount: 15,
    },
  },
  {
    id: 3,
    title: "Куплю iPhone 15 Pro Max",
    description: "Нова або у відмінному стані, 256GB, будь-який колір крім титанового.",
    category: "Смартфони",
    budgetMin: 40000,
    budgetMax: 50000,
    location: "Львів",
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    views: 89,
    proposalsCount: 12,
    urgency: "Не терміново",
    buyer: {
      id: 3,
      name: "Олександр Петренко",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olexandr",
      rating: 4.8,
      reviewsCount: 31,
    },
  },
];

// Імітація затримки API
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockRequestService = {
  async getAll(params?: { category?: string; search?: string }) {
    await delay(300); // Імітація затримки мережі

    let filtered = [...mockRequests];

    if (params?.category) {
      filtered = filtered.filter((r) => r.category === params.category);
    }

    if (params?.search) {
      const searchLower = params.search.toLowerCase();
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(searchLower) ||
          r.description.toLowerCase().includes(searchLower)
      );
    }

    return {
      count: filtered.length,
      next: null,
      previous: null,
      results: filtered,
    };
  },

  async getById(id: number) {
    await delay(200);
    const request = mockRequests.find((r) => r.id === id);
    if (!request) {
      throw new Error("Request not found");
    }
    return request;
  },
};

