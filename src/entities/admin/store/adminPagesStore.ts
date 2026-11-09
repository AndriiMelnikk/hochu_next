import { adminInfoPages } from '../mocks/adminMockData';
import { createContentStore } from './contentStore';

export const useAdminPagesStore = createContentStore(adminInfoPages);
