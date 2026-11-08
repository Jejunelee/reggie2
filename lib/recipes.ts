export type Ingredient = {
  amount: string;
  item: string;
};

export type IngredientGroup = {
  heading: string;
  items: Ingredient[];
};

export type StepGroup = {
  heading?: string;
  steps: string[];
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
  yield: string;
  category: string;
  featured?: boolean;
  slug: string;
  ingredientGroups: IngredientGroup[];
  stepGroups: StepGroup[];
};

/**
 * Recipe catalog shared by /discover/recipes and /discover/recipes/[slug].
 * Slugs are permanent. Replace ingredient groups and steps in place.
 */
export const recipes: Recipe[] = [
  {
    id: "8",
    title: "Bibingka",
    description:
      "Filipino rice cake with coconut milk, salted egg and cheese, made easy.",
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
    yield: "Makes 4–6 small bibingka",
    category: "Desserts",
    featured: false,
    slug: "bibingka",
    ingredientGroups: [
      {
        heading: "Bibingka Batter",
        items: [
          { amount: "2 cups", item: "Regular rice flour (not glutinous)" },
          { amount: "½ cup", item: "All-purpose flour" },
          { amount: "¾ cup", item: "Sugar" },
          { amount: "1 tablespoon", item: "Baking powder" },
          { amount: "½ teaspoon", item: "Salt" },
          { amount: "2 large", item: "Eggs" },
          { amount: "1½ cups", item: "Coconut milk" },
          { amount: "½ cup", item: "Coconut cream (kakang gata)" },
          { amount: "¼ cup", item: "Melted butter" },
        ],
      },
      {
        heading: "Toppings",
        items: [
          { amount: "2, sliced", item: "Salted eggs" },
          { amount: "sliced", item: "Kesong puti" },
          { amount: "½ cup", item: "Grated cheese" },
          { amount: "2 tablespoons", item: "Melted butter, for brushing" },
          { amount: "for sprinkling", item: "Sugar" },
          { amount: "optional", item: "Freshly grated coconut" },
          { amount: "for lining", item: "Banana leaves" },
        ],
      },
    ],
    stepGroups: [
      {
        heading: "Prepare the Batter",
        steps: [
          "Combine rice flour, all-purpose flour, sugar, baking powder and salt.",
          "In another bowl, whisk eggs, coconut milk, coconut cream and melted butter.",
          "Add wet ingredients to dry ingredients. Mix until smooth.",
          "Rest batter for 20 minutes.",
        ],
      },
      {
        heading: "Prepare the Clay Pots",
        steps: [
          "Preheat oven to 190°C (375°F).",
          "Soften banana leaves briefly over an open flame.",
          "Line 5–6-inch clay pots with banana leaves, extending slightly over the edges. Brush lightly with butter.",
          "Fill pots two-thirds full with batter.",
        ],
      },
      {
        heading: "Bake & Finish",
        steps: [
          "Arrange pots on a baking tray and bake for 10–12 minutes, until tops begin to set.",
          "Top with salted eggs, kesong puti and grated cheese.",
          "Continue baking for 10–12 minutes, or until cooked through.",
          "Briefly broil to brown the tops, if desired, using broiler-safe pots.",
          "Brush generously with melted butter and sprinkle with sugar.",
          "Serve hot with freshly grated coconut, if desired.",
        ],
      },
    ],
  },
  {
    id: "10",
    title: "Sapin-Sapin",
    description:
      "Layered Filipino rice cake with ube, langka and coconut. A colorful Filipino delicacy that’s easy to make at home.",
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
    yield: "9-inch round cake pan",
    category: "Desserts",
    featured: false,
    slug: "sapin-sapin",
    ingredientGroups: [
      {
        heading: "Sapin-Sapin Batter",
        items: [
          { amount: "3 cups", item: "Glutinous rice flour" },
          { amount: "¾ cup", item: "Sugar" },
          { amount: "¾ cup", item: "Coconut milk" },
          { amount: "½ cup", item: "Coconut cream (kakang gata)" },
          { amount: "1¼ cups", item: "Water" },
          { amount: "¾ cup", item: "Condensed milk" },
          { amount: "Pinch", item: "Salt" },
        ],
      },
      {
        heading: "Purple Ube Layer",
        items: [
          { amount: "2 tablespoons", item: "Finely mashed cooked ube or ube halaya" },
          { amount: "", item: "Violet food coloring" },
        ],
      },
      {
        heading: "Yellow Langka Layer",
        items: [
          { amount: "⅓ cup", item: "Sweetened langka, drained and finely chopped" },
          { amount: "", item: "Yellow food coloring" },
        ],
      },
      {
        heading: "White Coconut Layer",
        items: [{ amount: "", item: "Plain batter" }],
      },
      {
        heading: "Latik",
        items: [{ amount: "1–2 cups", item: "Coconut cream" }],
      },
      {
        heading: "For the Pan & Serving",
        items: [
          { amount: "for brushing", item: "Coconut oil" },
          { amount: "", item: "Banana leaves" },
          { amount: "", item: "Prepared latik" },
          { amount: "optional", item: "Freshly grated coconut" },
        ],
      },
    ],
    stepGroups: [
      {
        heading: "Prepare the Latik",
        steps: [
          "Simmer coconut cream over medium heat until oil separates and curds turn golden brown.",
          "Strain, reserving latik and coconut oil separately.",
        ],
      },
      {
        heading: "Prepare the Batter",
        steps: [
          "Combine glutinous rice flour, sugar and salt.",
          "Add coconut milk, coconut cream, water and condensed milk. Whisk until smooth, then strain.",
          "Divide equally into three bowls.",
          "Purple: Mix in ube and a few drops of violet food coloring.",
          "Yellow: Mix in langka and a few drops of yellow food coloring.",
          "White: Leave plain.",
        ],
      },
      {
        heading: "Steam the Sapin-Sapin",
        steps: [
          "Brush a 9-inch round pan with coconut oil.",
          "Prepare steamer with boiling water.",
          "Purple layer: Stir batter, pour into pan and steam for approximately 12 minutes, until surface is set.",
          "Yellow layer: Stir batter, gently pour over purple layer and steam for 15 minutes.",
          "White layer: Stir batter, pour over yellow layer and steam for another 20 minutes, or until completely cooked through.",
          "Check that the center is fully set. Steam longer if necessary.",
          "Remove from steamer and cool completely, approximately 1–2 hours.",
        ],
      },
      {
        heading: "Unmold & Serve",
        steps: [
          "Soften banana leaves over an open flame. Arrange on a round serving plate and brush lightly with coconut oil.",
          "Loosen sapin-sapin edges with an oiled spatula.",
          "Place the prepared serving plate over the pan and carefully invert. Lift off the pan.",
          "Sprinkle generously with toasted latik.",
          "Serve with additional latik or freshly grated coconut, if desired.",
        ],
      },
    ],
  },
  {
    id: "11",
    title: "Buko Pandan",
    description: "Young coconut and fresh pandan jelly in rich coconut cream.",
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
    yield: "Makes 8–10 servings",
    category: "Desserts",
    featured: false,
    slug: "buko-pandan",
    ingredientGroups: [
      {
        heading: "Fresh Pandan Water",
        items: [
          { amount: "12", item: "Fresh pandan leaves, green parts only" },
          { amount: "5 cups", item: "Water" },
        ],
      },
      {
        heading: "Pandan Gulaman",
        items: [
          { amount: "1 pack", item: "Green gulaman" },
          { amount: "⅓–½ cup", item: "Sugar" },
          { amount: "as required by gulaman package", item: "Prepared pandan water" },
        ],
      },
      {
        heading: "Coconut Cream Dressing",
        items: [
          { amount: "1½ cups", item: "Coconut cream (kakang gata)" },
          { amount: "Pinch", item: "Salt" },
          { amount: "1½ cups, chilled", item: "All-purpose cream" },
          { amount: "¼ cup, chilled", item: "Whipping cream" },
          { amount: "½ cup", item: "Condensed milk" },
        ],
      },
      {
        heading: "Buko Pandan Mixture",
        items: [
          { amount: "2 cups, sliced", item: "Young coconut meat (buko)" },
          { amount: "½ cup, drained", item: "Cooked small sago pearls" },
          { amount: "cubed", item: "Prepared pandan gulaman" },
        ],
      },
      {
        heading: "For Serving",
        items: [
          { amount: "optional", item: "Toasted pinipig" },
          { amount: "optional", item: "Vanilla or coconut ice cream" },
        ],
      },
    ],
    stepGroups: [
      {
        heading: "Prepare the Pandan Gulaman",
        steps: [
          "Blend pandan leaves with water until finely shredded. Strain, pressing well to extract the juice.",
          "Measure pandan water according to gulaman package instructions.",
          "Add sugar and prepare gulaman as directed.",
          "Pour into a shallow container. Refrigerate until set, then cut into small cubes.",
        ],
      },
      {
        heading: "Prepare the Coconut Cream Dressing",
        steps: [
          "Gently simmer coconut cream with a pinch of salt until slightly thickened. Cool completely and chill.",
          "Whisk all-purpose cream and condensed milk until smooth.",
          "Add chilled coconut cream and whipping cream. Mix until creamy. Refrigerate.",
        ],
      },
      {
        heading: "Assemble",
        steps: [
          "Combine pandan gulaman and sago in a large bowl.",
          "Fold in chilled coconut cream dressing.",
          "Add sliced young coconut last.",
          "Refrigerate for at least 1 hour.",
        ],
      },
      {
        heading: "To Serve",
        steps: [
          "Spoon into dessert bowls and top with toasted pinipig and a scoop of vanilla or coconut ice cream, if desired.",
        ],
      },
    ],
  },
  {
    id: "12",
    title: "Halo-Halo",
    description: "The iconic Filipino shaved ice dessert.",
    image: "/recipes/halo-halo.webp",
    imageAlt: "Casa Juan halo-halo plates with banana, nata de coco, and gulaman",
    imageWidth: 1080,
    imageHeight: 1350,
    yield: "Makes 4–6 generous servings",
    category: "Desserts",
    featured: false,
    slug: "halo-halo",
    ingredientGroups: [
      {
        heading: "Halo-Halo Mix",
        items: [
          { amount: "½ cup, sliced", item: "Sweetened saba bananas" },
          { amount: "¼ cup, sliced", item: "Sweetened langka" },
          { amount: "¼ cup", item: "Sweetened red beans" },
          { amount: "¼ cup", item: "Sweetened white beans" },
          { amount: "¼ cup", item: "Sweetened garbanzos" },
          { amount: "¼ cup, cubed", item: "Sweetened kamote" },
          { amount: "¼ cup", item: "Sweetened kaong" },
          { amount: "¼ cup", item: "Sweetened macapuno" },
          { amount: "¼ cup, shredded", item: "Young coconut (buko)" },
          { amount: "¼ cup", item: "Nata de coco" },
          { amount: "¼ cup", item: "Cooked sago pearls" },
          { amount: "¼ cup, cubed", item: "Red gulaman" },
          { amount: "¼ cup, cubed", item: "Green gulaman" },
          { amount: "½ cup", item: "Ube halaya" },
        ],
      },
      {
        heading: "Shaved Ice",
        items: [{ amount: "8 cups", item: "Finely shaved ice" }],
      },
      {
        heading: "Milk Mixture",
        items: [
          { amount: "1 cup, chilled", item: "Evaporated milk" },
          { amount: "½ cup, heated and cooled", item: "Coconut milk" },
          { amount: "to taste", item: "Sugar" },
        ],
      },
      {
        heading: "Toppings",
        items: [
          { amount: "4–6 scoops", item: "Ube or macapuno ice cream" },
          { amount: "4–6 slices", item: "Leche flan" },
          { amount: "¼ cup", item: "Toasted pinipig" },
        ],
      },
    ],
    stepGroups: [
      {
        steps: [
          "Drain bottled fruits, beans and preserves.",
          "Slice saba, langka and macapuno into bite-sized pieces.",
          "Combine evaporated milk, coconut milk and sugar. Chill.",
        ],
      },
      {
        heading: "Assemble",
        steps: [
          "Divide the halo-halo ingredients among 4–6 tall glasses, adding a spoonful of ube halaya to each.",
          "Fill generously with shaved ice.",
          "Pour chilled milk mixture evenly over the ice.",
          "Top with ice cream, leche flan and toasted pinipig.",
          "Serve immediately.",
        ],
      },
    ],
  },
];

export function getRecipe(slug: string): Recipe | undefined {
  const key = decodeURIComponent(slug).trim().toLowerCase();
  return recipes.find((recipe) => recipe.slug === key);
}

export function getCookableRecipes(): Recipe[] {
  return recipes.filter(
    (recipe) => recipe.ingredientGroups.length > 0 && recipe.stepGroups.length > 0,
  );
}
