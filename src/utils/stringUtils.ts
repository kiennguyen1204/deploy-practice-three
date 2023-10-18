export const generateIdFromName = (name: string) => {
  return name.toLowerCase().replace(/\s/g, '');
};
