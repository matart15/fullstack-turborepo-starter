import { ParsedUrlQuery } from 'querystring';

export type SearchField = {
  name: string;
  type: 'number' | 'string' | 'date';
};

export type SearchCriteria = {
  fieldName: string;
  condition: string;
  value: string;
};
export const getSearch = ({
  availableSearchFields,
  query,
}: {
  query: ParsedUrlQuery;
  availableSearchFields: SearchField[];
}): {
  search: SearchCriteria[];
} => {
  let search: SearchCriteria[] = [];
  if (typeof query.search === 'string') {
    try {
      search = JSON.parse(query.search);
    } catch (_e) {
      return {
        search: [],
      };
    }
  }
  if (!Array.isArray(search)) {
    return {
      search: [],
    };
  }
  search = search.filter(s => availableSearchFields.map(a => a.name).includes(s.fieldName));
  return {
    search,
  };
};
