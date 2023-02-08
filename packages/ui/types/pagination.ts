export type PaginationType = {
  current: number;
  total: number;
  pageSize: number;
  orderField?: string;
  orderDirection: 'asc' | 'desc';
};
