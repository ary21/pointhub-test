export const ucwords = (str: string): string => {
  if (str) {
    return (str + '')
      .toLowerCase()
      .replace(/_/g, ' ')
      .replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
      });
  } else {
    return '';
  }
};