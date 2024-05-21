import p1_img from "./BestSellers/woman-1.jpg";
import p4_img from "./BestSellers/couple-trench.jpg";
import p5_img from "./BestSellers/collections-2.jpg";
import shop_img1 from "../../assets/Dummy/Navbar/Dropdown/nav-img-woman2.jpg";
import men_img1 from "../../assets/Dummy/Navbar/Dropdown/nav-img-man2.jpg";
import women_img1 from "../../assets/Dummy/Navbar/Dropdown/nav-img-woman.jpg";
import women_img3 from "../../assets/Dummy/Navbar/Dropdown/nav-img-woman3.jpg";

import p6_img from "./BestSellers/man-model1.webp";
import p7_img from "./BestSellers/man-model2.webp";
import p8_img from "./BestSellers/man-model3.webp";
import img_1 from "../../assets/Dummy/ShopInstagram/woman-in-skirt.jpg";
import img_2 from "../../assets/Dummy/ShopInstagram/man-white-shirt.jpg";
import img_3 from "../../assets/Dummy/ShopInstagram/man-woman-1.jpg";

export let data_product = [
  {
    id: 1,
    name: "Striped Flutter Overlapped Blouse",
    image: p1_img,
    price: 20000,
    category: "men",
  },
  {
    id: 2,
    name: "Army Combat Cargo Shirt",
    image: p1_img,
    new_price: 20000,
    category: "women",
  },
  {
    id: 3,
    name: " Silk Two-piece",
    image: p1_img,
    new_price: 20000,
    old_price: 15000,

    category: "kids",
  },
];
export let all_product = [
  {
    id: 1,
    name: "Striped Flutter Overlapped Blouse",
    image: p6_img,
    new_price: " ₦20000",
    category: "men",
    color: ["white"],
  },
  {
    id: 2,
    name: "Army Combat Cargo Shirt",
    image: p7_img,
    new_price: 20000,
    old_price: 15000,
    category: "women",
  },
  {
    id: 3,
    name: " Silk Two-piece",
    image: p8_img,
    new_price: 20000,
    category: "kids",
  },
  {
    id: 4,
    name: " Silk Two-piece",
    image: p8_img,
    new_price: 20000,
    old_price: 14000,
    category: "men",
  },
  {
    id: 5,
    name: " Silk Two-piece",
    image: p7_img,
    new_price: 20000,
    category: "women",
  },
  {
    id: 6,
    name: " Silk Two-piece",
    image: p6_img,
    new_price: 20000,
    old_price: 13000,
    category: "kids",
  },
  {
    id: 7,
    name: " Silk Two-piece",
    image: p8_img,
    new_price: 20000,
    category: "men",
  },
  {
    id: 8,
    name: " Silk Two-piece",
    image: p7_img,
    new_price: 20000,
    category: "women",
  },
];
export const navItems = [
  {
    label: "new",
    subItems: ["Winter", "Fall", "Spring"],
    images: [women_img3],
  },
  {
    label: "men",
    subItems: ["Streetwear", "Casuals", "Formal"],
    images: [men_img1],
  },
  {
    label: "women",
    subItems: ["Spring", "Fall"],
    images: [shop_img1, women_img1],
  },

  { label: "sales" },
  { label: "collections" },
];

export const navbar_promotions_text = [
  "New in: Collection '24",
  "Compilmentary Shipping on Orders over N20,000",
  "Limited time offer: Up to 50% off on selected items",
];

export const collection_cards = [
  {
    title: "Classics",
    description: "Our heritage styles",
    image: p5_img,
  },
  {
    title: "Collections",
    description: "Our seasonal fashion drops",
    image: p1_img,
  },
  {
    title: "Core",
    description: "Our wardrobe essentials",
    image: p4_img,
  },
];
export const lookbook_section_items = [
  {
    id: 1,
    name: "Striped Flutter Overlapped Blouse",
    description: "",
    image: p6_img,
    price: 20000,
  },
  {
    id: 2,
    name: "Army Combat Cargo Shirt",
    description: "",
    image: p7_img,
    price: 20000,
  },
  {
    id: 3,
    name: " Silk Two-piece",
    description: "",
    image: p8_img,
    price: 20000,
  },
  {
    id: 3,
    name: " Silk Two-piece",
    description: "",
    image: p8_img,
    price: 20000,
  },
];
export const bestseller_items = [
  {
    id: 1,
    name: "Striped Flutter Overlapped Blouse",
    description: "",
    image: p6_img,
    new_price: "₦20,000",
  },
  {
    id: 2,
    name: "Army Combat Cargo Shirt",
    description: "",
    image: p7_img,
    new_price: "₦34,500",
    old_price: "₦29,500",
  },
  {
    id: 3,
    name: " Silk Two-piece",
    description: "",
    image: p8_img,
    new_price: "₦55,000",
    old_price: "₦15,000",
  },
  {
    id: 1,
    name: "Striped Flutter Overlapped Blouse",
    description: "",
    image: p6_img,
    new_price: "₦10,000",
  },
];
export const new_collections = [
  {
    id: 1,
    name: "Striped Flutter Overlapped Blouse",
    description: "",
    image: p1_img,
    price: 20000,
  },
  {
    id: 2,
    name: "Army Combat Cargo Shirt",
    description: "",
    image: p1_img,
    price: 20000,
  },
  {
    id: 3,
    name: " Silk Two-piece",
    description: "",
    image: p1_img,
    price: 20000,
  },
];
export const shop_ig = [img_1, img_2, img_3, img_1];
