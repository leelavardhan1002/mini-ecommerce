export const categories = [
  {
    image:
      "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63ec6052dc39b839500c1f8a_Rectangle%201436.png",
    name: "Furniture",
    quantity: 240,
  },
  {
    image:
      "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63ec605386e48004f02ee6a8_Rectangle%201436-4.png",
    name: "Handbag",
    quantity: 20,
  },
  {
    image:
      "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63ec6052f0ed215b864af96e_Rectangle%201436-1.png",
    name: "Shoe",
    quantity: 30,
  },
  {
    image:
      "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63ec6053e5b15cfafd550cbb_Rectangle%201436-3.png",
    name: "HeadPhone",
    quantity: 40,
  },
  {
    image:
      "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63ec6052f3741a4f87af0f6d_Rectangle%201436-2.png",
    name: "Laptop",
    quantity: 50,
  },
  {
    image:
      "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63ec622235f3f730c0de8c3f_Rectangle%201436-5.png",
    name: "KitchenAppliances",
    quantity: 60,
  },
];

export const fetchCategories = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 1000);
  });
};
