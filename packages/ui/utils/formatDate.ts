import 'dayjs/locale/ja';
import dayjs from 'dayjs';
export const formatDate = (date: string | number | Date): dayjs.Dayjs => {
  return dayjs(date);
};
