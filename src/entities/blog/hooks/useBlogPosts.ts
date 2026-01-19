import { useQuery } from '@tanstack/react-query';
import { blogService } from '../services/blogService';
import { getBlogPostsResponseSchema } from '../schemas/blogSchema';

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ['blog', 'list'],
    queryFn: async () => {
      const data = await blogService.get();
      return getBlogPostsResponseSchema.parse(data);
    },
  });
};

export const useBlogPost = (id: string | number | undefined) => {
  return useQuery({
    queryKey: ['blog', id],
    queryFn: async () => {
      if (!id) throw new Error('Blog post ID is required');
      const data = await blogService.getOne(id);
      return data;
    },
    enabled: !!id,
  });
};
