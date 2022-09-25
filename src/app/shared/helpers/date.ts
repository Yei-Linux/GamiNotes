import { format } from 'date-fns';
import enGB from 'date-fns/locale/en-GB/index';

export const formatDate = (
  dateString: string,
  formatter = "MMMM ',' dd 'of' yyyy 'at' hh':'mm"
) => {
  try {
    const date = new Date(dateString);
    return format(date, formatter, {
      locale: enGB,
    });
  } catch (error) {
    return dateString;
  }
};
