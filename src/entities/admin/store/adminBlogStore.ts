import { adminBlogPosts } from '../mocks/adminMockData';
import { createContentStore } from './contentStore';

export const useAdminBlogStore = createContentStore(adminBlogPosts);
