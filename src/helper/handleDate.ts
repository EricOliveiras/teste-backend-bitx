export const createExpireDate = (day: number) => {
  const expireIn = new Date();
  const expireDays = day;

  expireIn.setDate(expireIn.getDate() + expireDays);

  return expireIn;
};
