const normalizeVinyl = (vinyl) => {
  let image = {
    url: "https://cdn.pixabay.com/photo/2019/10/23/18/23/record-4572382_960_720.png",
    alt: "vinyl image",
  };
  if (vinyl.image && vinyl.image.url) {
    image.url = vinyl.image.url;
  }
  if (vinyl.image && vinyl.image.alt) {
    image.alt = vinyl.image.alt;
  }
  return { ...vinyl, image };
};

export default normalizeVinyl;
