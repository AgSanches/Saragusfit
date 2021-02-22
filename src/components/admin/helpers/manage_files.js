const getFileName = filename => {
  const currentDate = new Date().getTime();
  return `saragusfit_${currentDate}_${filename}`;
};

export { getFileName };
