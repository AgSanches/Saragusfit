const setScrollBlock = () => {
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.position = "fixed";
};

const allowScroll = () => {
  const scrollY = document.body.style.top;
  document.body.style.position = "";
  document.body.style.top = `${window.scrollY}px`;
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
};

export { setScrollBlock, allowScroll };
