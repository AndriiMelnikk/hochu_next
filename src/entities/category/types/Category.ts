export interface ICategory {
  _id: string;
  title: string;
  description: string | null;
  slug: string;
  parentId?: string | null;
  parent?: string | null;
  children?: ICategory[];
  path?: string[];
  level?: number;
  icon?: string | null;
  order?: number;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
