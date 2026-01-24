import type { ICategory } from '../Category';

export type IGetCategoriesResponse = ICategory[] | { results: ICategory[] };
