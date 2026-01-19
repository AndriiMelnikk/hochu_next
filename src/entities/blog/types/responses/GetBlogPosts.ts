import { IBlogPost } from '../../Blog';

export interface IGetBlogPostsResponse {
  count: number;
  results: IBlogPost[];
}
