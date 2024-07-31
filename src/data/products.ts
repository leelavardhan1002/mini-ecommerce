import { Product } from "@/utils/types";

export const products: Record<string, Product[]> = {
  Furniture: [
    {
      name: "Sofa",
      image:
        "https://images.stockcake.com/public/8/9/6/8968d95e-fc1a-4aa9-b607-694007cdac28_large/elegant-wicker-sofa-stockcake.jpg",
      price: 500,
      description: "Comfortable modern sofa.",
      quantity: 10,
      category: "Furniture",
      rating: 4,
      totalReviews: 25,
    },
    {
      name: "Dining Table",
      image:
        "https://images.stockcake.com/public/9/4/4/944cc11a-1ee8-4c4f-8c2d-ef5f1b1b6f6f_large/serene-dining-setup-stockcake.jpg",
      price: 700,
      description: "Stylish dining table.",
      quantity: 5,
      category: "Furniture",
      rating: 3,
      totalReviews: 18,
    },
    {
      name: "Bed",
      image:
        "https://images.stockcake.com/public/d/c/1/dc1c6a4c-5949-434e-b1d9-71d92c8c68fa_large/cozy-children-s-bed-stockcake.jpg",
      price: 800,
      description: "King-size bed.",
      quantity: 8,
      category: "Furniture",
      rating: 4,
      totalReviews: 30,
    },
    {
      name: "Chair",
      image:
        "https://images.stockcake.com/public/f/5/0/f50ffe86-b13b-4c35-8506-0f18d4eb6227_large/elegant-office-chair-stockcake.jpg",
      price: 100,
      description: "Ergonomic office chair.",
      quantity: 15,
      category: "Furniture",
      rating: 4,
      totalReviews: 22,
    },
    {
      name: "Wardrobe",
      image:
        "https://images.stockcake.com/public/6/c/5/6c50676d-fadd-476c-b6a9-a2e69500d598_large/elegant-walk-in-wardrobe-stockcake.jpg",
      price: 600,
      description: "Spacious wardrobe.",
      quantity: 7,
      category: "Furniture",
      rating: 3,
      totalReviews: 16,
    },
    {
      name: "Bookshelf",
      image:
        "https://images.stockcake.com/public/4/f/b/4fbca4ea-0d89-4a0b-aacb-47f39584dc77_large/bookshelf-with-tomes-stockcake.jpg",
      price: 200,
      description: "Wooden bookshelf.",
      quantity: 12,
      category: "Furniture",
      rating: 4,
      totalReviews: 20,
    },
    {
      name: "TV",
      image:
        "https://images.stockcake.com/public/f/b/d/fbdd5fe6-b940-4243-ae41-7f59c8c855ef_large/vintage-tv-display-stockcake.jpg",
      price: 250,
      description: "Modern TV.",
      quantity: 6,
      category: "Furniture",
      rating: 2,
      totalReviews: 15,
    },
    {
      name: "Recliner",
      image:
        "https://images.stockcake.com/public/8/1/f/81f6fcd8-9581-44bc-819e-f9708c5b2818_large/relaxed-senior-moment-stockcake.jpg",
      price: 300,
      description: "Comfortable recliner chair.",
      quantity: 5,
      category: "Furniture",
      rating: 3,
      totalReviews: 12,
    },
    {
      name: "Desk",
      image:
        "https://images.stockcake.com/public/1/7/0/170e49bf-f846-4573-92fd-0de64d9c07c9_large/vintage-scholar-s-desk-stockcake.jpg",
      price: 350,
      description: "Office desk with drawers.",
      quantity: 8,
      category: "Furniture",
      rating: 3,
      totalReviews: 17,
    },
  ],
  Handbag: [
    {
      name: "Leather Handbag",
      image:
        "https://images.stockcake.com/public/8/a/1/8a17b433-ddef-497b-8c96-903885085623_large/elegant-red-handbag-stockcake.jpg",
      price: 150,
      description: "Elegant leather handbag.",
      quantity: 20,
      category: "Handbag",
      rating: 4.8,
      totalReviews: 35,
    },
    {
      name: "Tote Bag",
      image:
        "https://images.stockcake.com/public/4/e/b/4eb118f1-c7fe-4364-bec3-49eca29ef19b_large/canvas-tote-bag-stockcake.jpg",
      price: 100,
      description: "Spacious tote bag.",
      quantity: 25,
      category: "Handbag",
      rating: 2,
      totalReviews: 28,
    },
    {
      name: "Clutch",
      image:
        "https://images.stockcake.com/public/a/c/6/ac6c2de0-5b18-42a2-b453-898b389129e4_large/elegant-embellished-clutch-stockcake.jpg",
      price: 80,
      description: "Stylish clutch",
      quantity: 15,
      category: "Handbag",
      rating: 4.6,
      totalReviews: 22,
    },
    {
      name: "Backpack",
      image:
        "https://images.stockcake.com/public/d/1/e/d1e7e9c4-c252-462e-ac1e-9cecfc109c21_large/colorful-school-backpack-stockcake.jpg",
      price: 120,
      description: "Durable backpack",
      quantity: 18,
      category: "Handbag",
      rating: 3,
      totalReviews: 18,
    },
    {
      name: "Satchel",
      image:
        "https://images.stockcake.com/public/0/7/6/076d9d51-3bf4-4975-bc22-bf1839db96a1_large/vintage-leather-satchel-stockcake.jpg",
      price: 110,
      description: "Trendy satchel bag.",
      quantity: 14,
      category: "Handbag",
      rating: 3,
      totalReviews: 19,
    },
    {
      name: "Duffel Bag",
      image:
        "https://images.stockcake.com/public/f/c/9/fc97911a-26b9-4e0c-82b2-9ed7accd3f0d_large/elegant-travel-essentials-stockcake.jpg",
      price: 160,
      description: "Large duffel bag ",
      quantity: 6,
      category: "Handbag",
      rating: 4.0,
      totalReviews: 12,
    },
  ],
  Shoe: [
    {
      name: "Running Shoes",
      image:
        "https://images.stockcake.com/public/3/c/2/3c263941-047a-4583-87ff-cc0ded76ad0f_large/tying-running-shoes-stockcake.jpg",
      price: 120,
      description: "Lightweight running shoes.",
      quantity: 30,
      category: "Shoe",
      rating: 3,
      totalReviews: 40,
    },
    {
      name: "Formal Shoes",
      image:
        "https://images.stockcake.com/public/0/2/b/02b19254-33b2-4379-be2b-254448fae07f_large/polished-dress-shoes-stockcake.jpg",
      price: 200,
      description: "Elegant formal shoes",
      quantity: 20,
      category: "Shoe",
      rating: 4.6,
      totalReviews: 25,
    },
    {
      name: "Sneakers",
      image:
        "https://images.stockcake.com/public/4/4/b/44bb388b-5912-4465-9ec0-f1966c8c8f8d_large/stylish-athletic-sneakers-stockcake.jpg",
      price: 100,
      description: "Casual sneakers.",
      quantity: 25,
      category: "Shoe",
      rating: 3,
      totalReviews: 30,
    },
    {
      name: "Boots",
      image:
        "https://images.stockcake.com/public/d/f/a/dfac90ad-b1ba-4c8d-801c-6401a55d9af0_large/rugged-work-boots-stockcake.jpg",
      price: 180,
      description: "Stylish leather boots.",
      quantity: 15,
      category: "Shoe",
      rating: 3,
      totalReviews: 18,
    },
    {
      name: "High Heels",
      image:
        "https://images.stockcake.com/public/3/8/5/3851827e-6b0b-40fa-9d01-cc83a80cb914_large/metallic-high-heels-stockcake.jpg",
      price: 150,
      description: "Elegant high heels.",
      quantity: 12,
      category: "Shoe",
      rating: 2,
      totalReviews: 22,
    },
  ],
  HeadPhone: [
    {
      name: "Headphones",
      image:
        "https://images.stockcake.com/public/a/3/4/a347ada2-59b5-4a03-96a3-f6e18b30e090_large/modern-wireless-headphones-stockcake.jpg",
      price: 250,
      description: "Noise-cancelling.",
      quantity: 15,
      category: "HeadPhone",
      rating: 5,
      totalReviews: 28,
    },
    {
      name: "Gaming Headset",
      image:
        "https://images.stockcake.com/public/5/b/1/5b1244e0-ac7e-48e7-9544-393f5d404857_large/gaming-headset-glow-stockcake.jpg",
      price: 150,
      description: "High-quality headset.",
      quantity: 12,
      category: "HeadPhone",
      rating: 3,
      totalReviews: 20,
    },
    {
      name: "Bluetooth Earbuds",
      image:
        "https://images.stockcake.com/public/2/6/4/26438028-2b43-4aa1-a1e4-977a2e492f4c_large/wireless-earbuds-displayed-stockcake.jpg",
      price: 100,
      description: "Compact Bluetooth earbuds.",
      quantity: 20,
      category: "HeadPhone",
      rating: 3,
      totalReviews: 25,
    },
    {
      name: "In-Ear Headphones",
      image:
        "https://images.stockcake.com/public/d/4/4/d44b4e40-243b-4e04-98ee-43a35e3d8ff7_large/glowing-earphones-afloat-stockcake.jpg",
      price: 80,
      description: "In-ear headphones.",
      quantity: 25,
      category: "HeadPhone",
      rating: 2,
      totalReviews: 30,
    },
  ],
  Laptop: [
    {
      name: "Gaming Laptop",
      image:
        "https://images.stockcake.com/public/1/5/7/157c26da-666c-442e-9d42-981270d9f83f_large/glowing-gaming-laptop-stockcake.jpg",
      price: 1500,
      description: "High-performance.",
      quantity: 5,
      category: "Laptop",
      rating: 4.8,
      totalReviews: 15,
    },
    {
      name: "Ultrabook",
      image:
        "https://images.stockcake.com/public/e/d/a/edaf4a0c-0010-4ca2-a352-171b0a2faa08_large/laptop-sunset-view-stockcake.jpg",
      price: 1200,
      description: "Sleek and lightweight.",
      quantity: 8,
      category: "Laptop",
      rating: 4.6,
      totalReviews: 20,
    },
    {
      name: "Business Laptop",
      image:
        "https://images.stockcake.com/public/9/0/1/90127a52-8b41-4cd5-864b-77bbc1187f21_large/analytics-laptop-display-stockcake.jpg",
      price: 1300,
      description: "Powerful business laptop.",
      quantity: 6,
      category: "Laptop",
      rating: 5,
      totalReviews: 18,
    },
    {
      name: "Convertible Laptop",
      image:
        "https://images.stockcake.com/public/5/c/0/5c0bab21-32b4-404f-a46c-1228a7b13e9b_large/high-tech-laptop-screen-stockcake.jpg",
      price: 1400,
      description: "Versatile 2-in-1 laptop.",
      quantity: 7,
      category: "Laptop",
      rating: 3,
      totalReviews: 16,
    },
    {
      name: "Workstation Laptop",
      image:
        "https://images.stockcake.com/public/2/7/9/279a886c-8b05-45d1-bd4b-73c20ea1c50f_large/laptop-and-plants-stockcake.jpg",
      price: 1800,
      description: "High-end workstation laptop.",
      quantity: 4,
      category: "Laptop",
      rating: 4.8,
      totalReviews: 12,
    },
    {
      name: "MacBook",
      image:
        "https://images.stockcake.com/public/2/d/7/2d731693-1c32-4515-afa3-fc4f5ec67773_large/secure-login-screen-stockcake.jpg",
      price: 2000,
      description: "Apple MacBook.",
      quantity: 5,
      category: "Laptop",
      rating: 4.9,
      totalReviews: 10,
    },
  ],
  KitchenAppliances: [
    {
      name: "Blender",
      image:
        "https://images.stockcake.com/public/9/3/7/937e6ade-3371-44b4-88c5-1d7078f6e606_large/blender-ready-fruits-stockcake.jpg",
      price: 80,
      description: "Powerful blender.",
      quantity: 25,
      category: "KitchenAppliances",
      rating: 3,
      totalReviews: 30,
    },
    {
      name: "Coffee Maker",
      image:
        "https://images.stockcake.com/public/a/f/2/af269370-8e11-46c2-bac9-034a59ad1e3e_large/modern-coffee-maker-stockcake.jpg",
      price: 60,
      description: "With programmable settings.",
      quantity: 30,
      category: "KitchenAppliances",
      rating: 3,
      totalReviews: 35,
    },
    {
      name: "Toaster",
      image:
        "https://images.stockcake.com/public/1/0/b/10b9da25-88d5-42af-ab57-18a4e94856a8_large/toaster-at-breakfast-stockcake.jpg",
      price: 30,
      description: "Compact toaster.",
      quantity: 40,
      category: "KitchenAppliances",
      rating: 2,
      totalReviews: 40,
    },
    {
      name: "Microwave Oven",
      image:
        "https://images.stockcake.com/public/6/3/e/63e5c7cf-365b-4688-a3b5-ace81040b87a_large/microwave-cooking-food-stockcake.jpg",
      price: 120,
      description: "Quick and efficient.",
      quantity: 15,
      category: "KitchenAppliances",
      rating: 3,
      totalReviews: 25,
    },
    {
      name: "Dishwasher",
      image:
        "https://images.stockcake.com/public/4/3/e/43e7967e-d8e7-473c-bcd5-15c8de3297b7_large/dishwasher-fully-loaded-stockcake.jpg",
      price: 500,
      description: "High-capacity dishwasher.",
      quantity: 10,
      category: "KitchenAppliances",
      rating: 5,
      totalReviews: 20,
    },
    {
      name: "Electric Kettle",
      image:
        "https://images.stockcake.com/public/d/8/a/d8ad2bee-bff6-4642-8303-9a5e727ef83c_large/kettle-boiling-water-stockcake.jpg",
      price: 40,
      description: "Fast boiling electric.",
      quantity: 35,
      category: "KitchenAppliances",
      rating: 3,
      totalReviews: 28,
    },
  ],
};

export const fetchAllProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allProducts = Object.values(products).flat();
      allProducts.sort((a, b) => a.name.localeCompare(b.name));
      resolve(allProducts);
    }, 1000);
  });
};
