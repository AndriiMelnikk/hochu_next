// Mock API server that simulates real API with delays
import requestsData from "./mockData/requests.json";
import usersData from "./mockData/users.json";
import proposalsData from "./mockData/proposals.json";
import blogData from "./mockData/blog.json";

type MockData = {
  requests: typeof requestsData;
  users: typeof usersData;
  proposals: typeof proposalsData;
  blog: typeof blogData;
};

const mockData: MockData = {
  requests: requestsData as typeof requestsData,
  users: usersData as typeof usersData,
  proposals: proposalsData as typeof proposalsData,
  blog: blogData as typeof blogData,
};

// Simulate network delay
const delay = (ms: number = 200) =>
  new Promise((resolve) => setTimeout(resolve, ms + Math.random() * 300));

// Helper to parse query params
const parseQuery = (url: string): Record<string, string> => {
  const params: Record<string, string> = {};
  const urlObj = new URL(url, "http://localhost");
  urlObj.searchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
};

// Helper to filter requests
const filterRequests = (
  requests: typeof requestsData,
  filters: Record<string, string>
) => {
  let filtered = [...requests];

  if (filters.category && filters.category !== "Всі категорії") {
    filtered = filtered.filter((r) => r.category === filters.category);
  }

  if (filters.location) {
    filtered = filtered.filter((r) =>
      r.location.toLowerCase().includes(filters.location.toLowerCase())
    );
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      (r) =>
        r.title.toLowerCase().includes(searchLower) ||
        r.description.toLowerCase().includes(searchLower)
    );
  }

  if (filters.budgetRange) {
    const [min, max] = filters.budgetRange.split("-").map(Number);
    if (!isNaN(min) && !isNaN(max)) {
      filtered = filtered.filter(
        (r) => r.budgetMin >= min && r.budgetMax <= max
      );
    }
  }

  return filtered;
};

// Mock API handlers
export const mockApi = {
  // Requests
  getRequests: async (url: string) => {
    await delay();
    const params = parseQuery(url);
    let filtered = filterRequests(mockData.requests, params);

    // Pagination
    const page = parseInt(params.page || "1");
    const pageSize = parseInt(params.page_size || "10");
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const results = filtered.slice(start, end);

    return {
      count: filtered.length,
      next: end < filtered.length ? `?page=${page + 1}` : null,
      previous: page > 1 ? `?page=${page - 1}` : null,
      results,
    };
  },

  getRequest: async (id: string) => {
    await delay();
    const request = mockData.requests.find((r) => r.id === parseInt(id));
    if (!request) {
      throw new Error("Request not found");
    }

    // Get buyer info
    const buyer = mockData.users.find((u) => u.id === request.buyerId);
    return {
      ...request,
      buyer,
    };
  },

  createRequest: async (data: any) => {
    await delay(300);
    const newRequest = {
      id: mockData.requests.length + 1,
      ...data,
      createdAt: new Date().toISOString(),
      views: 0,
      proposalsCount: 0,
      images: [],
      edits: [],
    };
    mockData.requests.push(newRequest);
    return newRequest;
  },

  // Users
  getUsers: async () => {
    await delay();
    return {
      count: mockData.users.length,
      results: mockData.users,
    };
  },

  getUser: async (id: string) => {
    await delay();
    const user = mockData.users.find((u) => u.id === parseInt(id));
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  },

  // Proposals
  getProposals: async (url: string) => {
    await delay();
    const params = parseQuery(url);
    let filtered = [...mockData.proposals];

    if (params.requestId) {
      filtered = filtered.filter(
        (p) => p.requestId === parseInt(params.requestId)
      );
    }

    return {
      count: filtered.length,
      results: filtered,
    };
  },

  getProposal: async (id: string) => {
    await delay();
    const proposal = mockData.proposals.find((p) => p.id === parseInt(id));
    if (!proposal) {
      throw new Error("Proposal not found");
    }

    // Get seller info
    const seller = mockData.users.find((u) => u.id === proposal.sellerId);
    return {
      ...proposal,
      seller,
    };
  },

  createProposal: async (data: any) => {
    await delay(300);
    const newProposal = {
      id: mockData.proposals.length + 1,
      ...data,
      createdAt: new Date().toISOString(),
      status: "pending",
    };
    mockData.proposals.push(newProposal);
    return newProposal;
  },

  // Blog
  getBlogPosts: async () => {
    await delay();
    return {
      count: mockData.blog.length,
      results: mockData.blog,
    };
  },

  getBlogPost: async (id: string) => {
    await delay();
    const post = mockData.blog.find((b) => b.id === parseInt(id));
    if (!post) {
      throw new Error("Blog post not found");
    }
    return post;
  },

  // Auth
  login: async (credentials: { email: string; password: string }) => {
    await delay(400);
    const user = mockData.users.find((u) => u.email === credentials.email);
    if (!user || credentials.password !== "password") {
      throw new Error("Invalid credentials");
    }
    return {
      access_token: `mock_token_${user.id}`,
      refresh_token: `mock_refresh_${user.id}`,
      user,
    };
  },

  register: async (data: {
    email: string;
    password: string;
    name: string;
  }) => {
    await delay(400);
    const newUser = {
      id: mockData.users.length + 1,
      ...data,
      rating: 0,
      reviewsCount: 0,
      isVerified: false,
      memberSince: new Date().getFullYear().toString(),
      completedDeals: 0,
      role: "buyer" as const,
      location: "",
      xp: 0,
      unlockedAchievements: [],
      topAchievements: [],
      avatar: "",
    };
    mockData.users.push(newUser);
    return {
      access_token: `mock_token_${newUser.id}`,
      refresh_token: `mock_refresh_${newUser.id}`,
      user: newUser,
    };
  },
};

// Axios adapter to handle mock API
export const setupMockInterceptor = (apiInstance: any) => {
  apiInstance.interceptors.request.use(async (config: any) => {
    // Check if URL starts with /api or if baseURL is /api
    const fullUrl = config.baseURL && config.url 
      ? `${config.baseURL}${config.url}` 
      : config.url;
    
    if (fullUrl?.startsWith("/api")) {
      const url = fullUrl.replace("/api", "");
      let response;

      try {
        // Requests
        if (url.startsWith("/requests/") && config.method === "get") {
          const id = url.split("/requests/")[1]?.split("?")[0];
          if (id) {
            response = await mockApi.getRequest(id);
          } else {
            response = await mockApi.getRequests(url);
          }
        } else if (url === "/requests" && config.method === "get") {
          response = await mockApi.getRequests(url);
        } else if (url === "/requests" && config.method === "post") {
          response = await mockApi.createRequest(config.data);
        }
        // Users
        else if (url.startsWith("/users/") && config.method === "get") {
          const id = url.split("/users/")[1];
          if (id === "me") {
            // For /users/me, return first user as mock
            response = mockData.users[0];
          } else {
            response = await mockApi.getUser(id);
          }
        } else if (url === "/users" && config.method === "get") {
          response = await mockApi.getUsers();
        }
        // Proposals
        else if (url.startsWith("/proposals/") && config.method === "get") {
          const id = url.split("/proposals/")[1]?.split("?")[0];
          if (id) {
            response = await mockApi.getProposal(id);
          } else {
            response = await mockApi.getProposals(url);
          }
        } else if (url === "/proposals" && config.method === "get") {
          response = await mockApi.getProposals(url);
        } else if (url === "/proposals" && config.method === "post") {
          response = await mockApi.createProposal(config.data);
        }
        // Blog
        else if (url.startsWith("/blog/") && config.method === "get") {
          const id = url.split("/blog/")[1];
          response = await mockApi.getBlogPost(id);
        } else if (url === "/blog" && config.method === "get") {
          response = await mockApi.getBlogPosts();
        }
        // Auth
        else if (url === "/auth/login" && config.method === "post") {
          response = await mockApi.login(config.data);
        } else if (url === "/auth/register" && config.method === "post") {
          response = await mockApi.register(config.data);
        }
        // Default 404
        else {
          throw new Error("Not found");
        }

        // Create a mock response
        const mockResponse = {
          data: response,
          status: 200,
          statusText: "OK",
          headers: {},
          config,
        };

        // Return a promise that resolves with mock response
        return Promise.reject({
          __mockResponse: mockResponse,
        });
      } catch (error: any) {
        return Promise.reject({
          response: {
            status: 404,
            data: { message: error.message || "Not found" },
          },
        });
      }
    }

    return config;
  });

  // Response interceptor to handle mock responses
  apiInstance.interceptors.response.use(
    (response: any) => response,
    async (error: any) => {
      if (error.__mockResponse) {
        return Promise.resolve(error.__mockResponse);
      }
      return Promise.reject(error);
    }
  );
};

