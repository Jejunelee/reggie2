export type Ingredient = {
  amount: string;
  item: string;
};

export type RecipeImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Recipe = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  gallery?: RecipeImage[];
  difficulty: "Easy" | "Medium" | "Hard";
  prepTime: string;
  cookTime: string;
  servings: number;
  rating: number;
  category: string;
  featured?: boolean;
  slug: string;
  ingredients?: Ingredient[];
  steps?: string[];
};

/**
 * Recipe catalog shared by /discover/recipes and /discover/recipes/[slug].
 * Ingredients are the names written on the Casa Juan plates. Steps stay empty
 * until Chef Reggie's method arrives — the slugs stay.
 */
export const recipes: Recipe[] = [
  {
    id: "8",
    title: "Bibingka",
    description:
      "A traditional Filipino rice cake with salted egg and cheese toppings.",
    image: "/recipes/bibingka.webp",
    imageAlt:
      "Freshly baked bibingka on a banana leaf, with Casa Juan bibingka plates",
    imageWidth: 1200,
    imageHeight: 1600,
    gallery: [
      {
        src: "/recipes/bibingka-table.webp",
        alt: "Bibingka beside the round and rectangular Casa Juan bibingka plates",
        width: 1200,
        height: 1600,
      },
    ],
    difficulty: "Medium",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 6,
    rating: 4.7,
    category: "Desserts",
    featured: false,
    slug: "bibingka",
    ingredients: [
      { amount: "", item: "Rice flour" },
      { amount: "", item: "Coconut milk" },
      { amount: "", item: "Eggs" },
      { amount: "", item: "Salted eggs" },
      { amount: "", item: "Grated cheese" },
      { amount: "", item: "Sugar" },
      { amount: "", item: "Baking powder" },
      { amount: "", item: "Banana leaves" },
      { amount: "", item: "Grated coconut" },
    ],
  },
  {
    id: "10",
    title: "Sapin-Sapin",
    description:
      "A steamed glutinous rice cake layered with coconut, jackfruit, and ube, finished with grated coconut.",
    image: "/recipes/sapin-sapin.webp",
    imageAlt:
      "Casa Juan sapin-sapin plate with purple, yellow, and white layers on a banana leaf",
    imageWidth: 960,
    imageHeight: 1280,
    gallery: [
      {
        src: "/recipes/sapin-sapin-slices.webp",
        alt: "Slices of sapin-sapin on a banana leaf beside the Casa Juan plate",
        width: 1080,
        height: 1350,
      },
    ],
    difficulty: "Medium",
    prepTime: "30 min",
    cookTime: "50 min",
    servings: 10,
    rating: 4.8,
    category: "Desserts",
    featured: false,
    slug: "sapin-sapin",
    ingredients: [
      { amount: "", item: "Glutinous rice flour" },
      { amount: "", item: "Coconut milk" },
      { amount: "", item: "Condensed milk" },
      { amount: "", item: "Sugar" },
      { amount: "", item: "Ube" },
      { amount: "", item: "Jackfruit" },
      { amount: "", item: "Food coloring" },
      { amount: "", item: "Grated coconut" },
      { amount: "", item: "Banana leaves" },
    ],
  },
  {
    id: "11",
    title: "Buko Pandan",
    description:
      "A cold coconut and pandan cream folded with green gelatin, young coconut, and tapioca pearls.",
    image: "/recipes/buko-pandan.webp",
    imageAlt:
      "Casa Juan buko pandan plate beside a bowl of green gelatin and young coconut",
    imageWidth: 1200,
    imageHeight: 1600,
    gallery: [
      {
        src: "/recipes/buko-pandan-plate.webp",
        alt: "Rectangular Casa Juan buko pandan plate with pandan leaves",
        width: 1080,
        height: 1350,
      },
    ],
    difficulty: "Easy",
    prepTime: "25 min",
    cookTime: "15 min + 2 hr chill",
    servings: 8,
    rating: 4.8,
    category: "Desserts",
    featured: false,
    slug: "buko-pandan",
    ingredients: [
      { amount: "", item: "Green gelatin" },
      { amount: "", item: "Young coconut meat" },
      { amount: "", item: "Coconut cream" },
      { amount: "", item: "Whipped cream" },
      { amount: "", item: "Tapioca pearls" },
      { amount: "", item: "Condensed milk" },
      { amount: "", item: "Pandan" },
    ],
  },
  {
    id: "12",
    title: "Halo-Halo",
    description:
      "Shaved ice loaded with ube halaya, leche flan, sweet preserves, pinipig, and milk.",
    image: "/recipes/halo-halo.webp",
    imageAlt:
      "Casa Juan halo-halo plates with banana, nata de coco, and gulaman",
    imageWidth: 1080,
    imageHeight: 1350,
    difficulty: "Easy",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 4,
    rating: 4.9,
    category: "Desserts",
    featured: false,
    slug: "halo-halo",
    ingredients: [
      { amount: "", item: "Ube halaya" },
      { amount: "", item: "Leche flan" },
      { amount: "", item: "Jackfruit" },
      { amount: "", item: "Nata de coco" },
      { amount: "", item: "Sweet beans" },
      { amount: "", item: "Macapuno" },
      { amount: "", item: "Pinipig" },
      { amount: "", item: "Sago" },
      { amount: "", item: "Kaong" },
      { amount: "", item: "Shaved ice" },
      { amount: "", item: "Milk" },
    ],
  },
];

export function getRecipe(slug: string): Recipe | undefined {
  const key = decodeURIComponent(slug).trim().toLowerCase();
  return recipes.find((recipe) => recipe.slug === key);
}

export function getCookableRecipes(): Recipe[] {
  return recipes.filter((recipe) => (recipe.ingredients?.length ?? 0) > 0);
}
