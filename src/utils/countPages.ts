export const getCountPages = (limit: number) => {
  return Math.ceil(100 / limit);
};
