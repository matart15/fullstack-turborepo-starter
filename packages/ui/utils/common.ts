const uncheck = 'uncheck';

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
  }).format(price);
};

export const formatPriceNoIcon = (price: number): string => {
  return new Intl.NumberFormat('ja-JP', {}).format(price);
};

export const convertAddressToString = (address: {
  postalCode: string | null;
  address1: string;
  address2: string;
  address3: string;
  buildingName: string;
}): string => {
  if (!address.postalCode || address.postalCode.length === 0) {
    return uncheck;
  }
  return `〒${address?.postalCode} ${address?.address1} ${address?.address2} ${address?.address3} ${address?.buildingName}`;
};

export const whereArgs = (o: any): object => {
  const keys = Object.keys(o);
  const newO = { ...o };
  for (let i = 0; i < keys.length; i += 1) {
    if (o[keys[i]] === '' || o[keys[i]] === undefined) {
      delete newO[keys[i]];
    }
    if (o[keys[i]] && typeof o[keys[i]] === 'object') {
      newO[keys[i]] = whereArgs(newO[keys[i]]);
      if (Object.keys(newO[keys[i]]).length === 0 && keys[i] !== 'none') {
        delete newO[keys[i]];
      }
    }
  }
  return newO;
};

export const convertPostalCode = (
  postalCodeFirst: string,
  postalCodeLast: string,
): string | null => {
  if (!postalCodeFirst || !postalCodeLast) return null;
  return `${postalCodeFirst}-${postalCodeLast}`;
};

export const getEnumString = (
  objectList: object,
  type: string,
  text: string,
): string => {
  const index = Object.keys(objectList).indexOf(type);
  if (index < 0) {
    return `${text}1`;
  }
  return `${text}${index + 1}`;
};

export const handleSegmentInUrl = (url: any): String => {
  return `/${url
    ?.split('/')
    ?.filter((item: any) => item)
    ?.toString()
    ?.replace(',', '/')}`;
};

export const convertObjectToArray = (data): Array<{}> => {
  if (!data) {
    return [];
  }
  return Object.keys(data).map((key) => {
    return (data as any)[key];
  });
};

export const countEggs = (eggs: any[]): number => {
  let countEgg = 0;
  eggs?.forEach((egg: any) => {
    if (egg.grade) {
      countEgg += 1;
    }
  });
  return countEgg;
};

export const countKens = (kens: any[]): number => {
  let countKen = 0;
  for (let i = 0; i < kens?.length; i += 1) {
    if (
      kens[i]?.devices?.some((device) =>
        device?.eggs?.some((egg: any) => egg?.grade),
      )
    ) {
      countKen += 1;
    }
  }
  return countKen;
};
