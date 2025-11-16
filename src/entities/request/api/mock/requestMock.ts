import { delay } from "@/shared/api/mock/delay";
import type { IRequest, IGetRequestsResponse } from "../../model/types";

// Mock дані для запитів
const mockRequests: IRequest[] = [
  {
    id: 1,
    title: "Шукаю ремонт ноутбука MacBook Pro",
    description: "Потрібно замінити батарею та почистити від пилу. Ноутбук 2019 року, працює повільно.",
    category: "Електроніка",
    budget: "2000-3000 грн",
    location: "Київ, Печерський район",
    timeAgo: "15 хв тому",
    proposalsCount: 8,
    budgetMin: 2000,
    budgetMax: 3000,
    urgency: "Протягом тижня",
    createdAt: "15 хвилин тому",
    views: 45,
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800&h=600&fit=crop",
    ],
    buyer: {
      id: 1,
      name: "Андрій Шевченко",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andriy",
      rating: 4.9,
      reviewsCount: 23,
      memberSince: "2023",
      completedDeals: 31,
    },
  },
  {
    id: 2,
    title: "Потрібен веб-дизайнер для лендінгу",
    description: "Створення сучасного лендінгу для IT-компанії. Важливий досвід з Figma.",
    category: "Дизайн",
    budget: "10000-15000 грн",
    location: "Віддалено",
    timeAgo: "2 год тому",
    proposalsCount: 23,
    budgetMin: 10000,
    budgetMax: 15000,
  },
  {
    id: 3,
    title: "Куплю iPhone 15 Pro Max",
    description: "Нова або у відмінному стані, 256GB, будь-який колір крім титанового.",
    category: "Смартфони",
    budget: "до 50000 грн",
    location: "Львів",
    timeAgo: "3 год тому",
    proposalsCount: 12,
    budgetMax: 50000,
  },
  {
    id: 4,
    title: "Шукаю фотографа для весілля",
    description: "Потрібен професійний фотограф на весілля 15 червня. Близько 100 гостей.",
    category: "Фотографія",
    budget: "15000-20000 грн",
    location: "Київ",
    timeAgo: "5 год тому",
    proposalsCount: 15,
    budgetMin: 15000,
    budgetMax: 20000,
  },
];

export async function getMockRequests(
  params?: { page?: number; page_size?: number; category?: string; search?: string }
): Promise<IGetRequestsResponse> {
  await delay(500); // Імітація затримки API

  let filteredRequests = [...mockRequests];

  // Фільтрація за категорією
  if (params?.category) {
    filteredRequests = filteredRequests.filter((r) => r.category === params.category);
  }

  // Пошук
  if (params?.search) {
    const searchLower = params.search.toLowerCase();
    filteredRequests = filteredRequests.filter(
      (r) => r.title.toLowerCase().includes(searchLower) || r.description.toLowerCase().includes(searchLower)
    );
  }

  // Пагінація
  const page = params?.page || 1;
  const pageSize = params?.page_size || 10;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedRequests = filteredRequests.slice(start, end);

  return {
    count: filteredRequests.length,
    next: end < filteredRequests.length ? `?page=${page + 1}` : null,
    previous: page > 1 ? `?page=${page - 1}` : null,
    results: paginatedRequests,
  };
}

export async function getMockRequestById(id: number): Promise<IRequest> {
  await delay(300);
  const request = mockRequests.find((r) => r.id === id);
  if (!request) {
    throw new Error(`Request with id ${id} not found`);
  }
  return request;
}

