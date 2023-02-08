import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';

const DEFAULT_START_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;

export type QueryPaginationType = {
  orderBy: Record<string, 'asc' | 'desc'>;
  skip: number;
  currentPage: number;
  pageSize: number;
  orderField: string;
  orderDirection: 'asc' | 'desc';
};

export const getPaginationDataAtServer = ({
  context,
  allowedOrderFields,
  defaultOrderField,
}: {
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>;
  allowedOrderFields: string[];
  defaultOrderField?: string;
}): QueryPaginationType => {
  const { query } = context;
  let currentPage = DEFAULT_START_PAGE;
  let pageSize = DEFAULT_PAGE_SIZE;
  if (typeof query.page === 'string') {
    currentPage = Number(query.page);
  }
  if (typeof query.pageSize === 'string') {
    pageSize = Number(query.pageSize);
  }
  let orderField1;
  if (typeof query.orderField === 'string') {
    orderField1 = query.orderField;
  }
  const orderDirection: 'asc' | 'desc' = query.orderDirection === 'ascend' ? 'asc' : 'desc';

  const orderField: string = allowedOrderFields.includes(orderField1 || '')
    ? orderField1 || defaultOrderField
    : defaultOrderField;
  return {
    orderBy: {
      [orderField]: orderDirection,
    },
    skip: (currentPage - 1) * pageSize,
    currentPage,
    pageSize,
    orderField,
    orderDirection,
  };
};
