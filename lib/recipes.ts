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
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  gallery?: RecipeImage[];
  yield?: string;
  category: string;
  featured?: boolean;
  slug: string;
  intro?: string[];
  note?: string;
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
  {
    id: "13",
    title: "Pinakbet",
    description: "A beloved vegetable dish from the north.",
    image: "/recipes/pinakbet.webp",
    imageAlt: "Casa Juan pinakbet plates with vegetables, bagnet, and bagoong",
    imageWidth: 768,
    imageHeight: 1024,
    category: "Main Dishes",
    slug: "pinakbet",
    intro: [
      "Pinakbet is a beloved vegetable dish from the north. It traditionally consists of eggplants (talong), yardlong beans (sitaw), okra, winged beans (sigarilyas), bitter gourd (ampalaya), native kamote (native sweet potato as a sweetener), and a non-spicy chili that we refer to as Ilocos chili (siling duwag).",
      "Real Ilocano pinakbet is made with vegetables cooked before they mature. Pinakbet vegetables in the olden days were torn by hand. The vine ripe tomatoes were also squashed by hand. The aromatics: ginger, garlic and shallots — smashed with a mortar and pestle. Bagoong isda lends a distinct savoriness and umami; while the generous amounts of bagnet (crispy pork belly) makes the vegetable dish simply delicious.",
      "Variations to pinakbet depend on where the cook hails from, and the season. Squash is a common substitute to kamote. Pigeon peas (kadios), lima beans (patani), even moringa fruit when abundant, may be added.",
    ],
    note: "The proper way to cook it is by layering the vegetables, with the slow-to-cook ones at the bottom. Traditionally, pinakbet is tossed and shaken, not stirred, so as not to mash the vegetables.",
    ingredientGroups: [
      {
        heading: "",
        items: [
          { amount: "2 tbsp", item: "Oil" },
          { amount: "200 grams, cut into thin strips", item: "Pork belly" },
          { amount: "1 large, minced", item: "Onion" },
          { amount: "5 cloves, minced", item: "Garlic" },
          { amount: "2 slices", item: "Ginger" },
          {
            amount: "¼–⅓ cup",
            item: "Bagoong isda (fermented fish). Outside of the north, bagoong alamang (shrimp paste) for pinakbet",
          },
          { amount: "6", item: "Native ripe Ilocano tomatoes" },
          {
            amount: "2",
            item: "Native kamote (a native sweet potato). Squash is a common substitute for sweetness",
          },
          { amount: "1 cup", item: "Water" },
          {
            amount: "2 cups or more, cut into large chunks, divided",
            item: "Bagnet (crispy pork belly)",
          },
          {
            amount: "1 bundle, about 10 pieces, cut diagonally in half",
            item: "Baby okra",
          },
          {
            amount: "1 bundle, about 10 pieces, cut into 2-inch lengths",
            item: "Sitaw (string beans)",
          },
          {
            amount: "1 bundle, about 10 pieces, cut into 2-inch lengths",
            item: "Sigarilyas (winged beans)",
          },
          {
            amount: "10, left whole or cut diagonally in half",
            item: "Baby eggplants",
          },
          {
            amount: "12",
            item: "Siling duwag (a non-spicy sweet green chili used widely in the north)",
          },
          {
            amount: "4–6, halved or sliced",
            item: "Native baby ampalaya (bitter gourd)",
          },
        ],
      },
    ],
    stepGroups: [
      {
        steps: [
          "Brown the pork belly in a little oil until slightly browned.",
          "Add the ginger, onion and garlic and sauté until the onions are soft.",
          "Add the bagoong and cook until fragrant.",
          "Add the tomatoes, and the kamote or squash.",
          "Cook for 5 minutes.",
          "Add the water and bring to a boil.",
          "Lower the heat and add 1 cup of the bagnet.",
          "Add the okra, sitaw, sigarilyas and eggplants.",
          "Cook 10 minutes.",
          "When the eggplant is half done, add the siling duwag and ampalaya.",
          "Season to taste with salt. I like adding pepper to my pinakbet.",
          "Cook for 3 minutes more. Do not overcook.",
          "Top with the remaining bagnet, and serve immediately.",
        ],
      },
    ],
  },
  {
    id: "14",
    title: "Lechon",
    description: "A Filipino feast is never complete without lechon.",
    image: "/recipes/lechon.webp",
    imageAlt: "Casa Juan lechon plates with a suckling pig, lemongrass, and chilies",
    imageWidth: 477,
    imageHeight: 638,
    category: "Main Dishes",
    slug: "lechon",
    intro: [
      "A Filipino feast is never complete without lechon. Of the countless ways I’ve cooked it, this recipe is still my favorite. It is a combination of ingredients and techniques from across the archipelago. Suckling pig cooked this way is clean tasting, aromatic and bursting with flavors… One bite is a fiesta!",
    ],
    ingredientGroups: [
      {
        heading: "",
        items: [
          { amount: "1 (5.5–6 kg), cleaned", item: "Lechon de leche / suckling pig" },
          { amount: "⅔ cup, divided", item: "Sea salt" },
          {
            amount: "¼ cup",
            item: "Peppercorns, dry roasted in a pan until aromatic and slightly crushed",
          },
          { amount: "¼ kilo, whole", item: "Garlic, slightly pounded, skins left on" },
          { amount: "¼ kilo", item: "Shallots, peeled and slightly pounded" },
          { amount: "1½ cups", item: "Pineapple juice or lemon-lime soda" },
          {
            amount: "8",
            item: "Lemongrass stalks, hearts bruised with the back of a knife and tied",
          },
          {
            amount: "A handful",
            item: "Chilies, red or long green. Use the red if you want a spicier lechon",
          },
          {
            amount: "4–6 cups",
            item: "Tender tamarind shoots. Banana leaves, torn into large pieces, or about 8 pandan leaves tied together, may be used instead. Each has its own distinct flavor",
          },
          { amount: "2–3 tbsp", item: "Soy sauce of choice, except dark soy sauce" },
        ],
      },
    ],
    stepGroups: [
      {
        steps: [
          "Wash the cavity of the pig by pouring hot water. Drain the water and wipe the pig dry. If the pig is freshly slaughtered, washing the cavity with hot water may be omitted.",
          "Rub the cavity with ⅓ cup sea salt and the peppercorns.",
          "Pour 1½ cups pineapple juice into the cavity.",
          "Stuff the cavity by layering it with garlic, shallots, lemongrass, chilies, and tamarind shoots, pandan or banana leaves. Put enough leaves to fill the cavity.",
          "Stitch the cavity to hold the stuffing in.",
          "Invert the pig and put it on a roasting tray.",
          "Rub salt on the skin until the salt melts and is absorbed by the skin.",
          "Rub the skin with soy sauce.",
          "Put the pig on a rack over a baking tray.",
          "Brush the ears and the tail with oil and wrap them with baking paper and foil.",
          "Let the pig sit for 2–4 hours to marinate.",
          "Roast in a preheated 325°F oven for 1½ hours. Increase the heat to 375°F and continue to roast until the skin is nicely golden brown and crisp, about 45 minutes more. For the best tasting suckling pig, cook it on a spit, slow roasting it over charcoal.",
          "Let it rest 10 minutes before serving.",
          "Serve with homemade liver sauce, or Filipino-style vinegar with chilies.",
        ],
      },
    ],
  },
  {
    id: "15",
    title: "Lechon’s Liver Sauce",
    description: "Homemade liver sauce for lechon.",
    category: "Sauces",
    slug: "lechon-liver-sauce",
    ingredientGroups: [
      {
        heading: "",
        items: [
          { amount: "¼ cup", item: "Vegetable oil" },
          { amount: "2 slices", item: "Ginger" },
          { amount: "2 cups, chopped", item: "Onions" },
          { amount: "1, heart only, sliced thin", item: "Lemongrass" },
          { amount: "1–2, adjust to taste", item: "Red chilies" },
          { amount: "100 g, cut into chunky pieces", item: "Pig’s liver" },
          { amount: "¼ kg, cleaned", item: "Chicken liver" },
          {
            amount: "⅓ cup",
            item: "Chef Reggie’s Aromatic Seasoning Philippine Rice Wine (optional; it will mellow the taste of the liver)",
          },
          { amount: "¼ cup", item: "White vinegar" },
          { amount: "¼ cup", item: "Soy sauce" },
          { amount: "1 tsp", item: "Whole peppercorn" },
          { amount: "½ cup", item: "Brown sugar" },
          { amount: "2 cups", item: "Pork stock" },
          { amount: "¼ cup", item: "White sugar" },
          { amount: "1 heaping tablespoon", item: "Liver spread" },
          { amount: "1 tsp", item: "Sesame oil" },
        ],
      },
    ],
    stepGroups: [
      {
        steps: [
          "Heat the oil and sauté the ginger, onion, lemongrass and chili.",
          "Add the liver and leave it to brown a bit.",
          "Add the wine and let it reduce.",
          "Add the rest of the ingredients except the sesame oil.",
          "Simmer for 20–30 minutes.",
          "Purée in a blender.",
          "If the sauce is still too sour, simmer it some more, taking care not to scorch the bottom. Add water a little at a time to get the desired consistency.",
          "Continue simmering until the oil has surfaced.",
          "Season to taste.",
          "Add the sesame oil last.",
        ],
      },
    ],
  },
  {
    id: "16",
    title: "Sinigang",
    description: "The quintessential Filipino comfort food.",
    image: "/recipes/sinigang.webp",
    imageAlt: "Casa Juan sinigang plates with prawns, tamarind, and vegetables",
    imageWidth: 477,
    imageHeight: 638,
    category: "Soups",
    slug: "sinigang",
    intro: [
      "Sinigang is the quintessential Filipino comfort food. The sour soup is made with beef, pork, prawns or fish, with an assortment of vegetables. The broth’s tartness is derived from various souring agents. The most common is tamarind, though batwan (Garcinia morella), katmon (elephant apple), kamias (bilimbi) and others are used depending on the cook and where the cook hails from.",
      "Different provinces have their own endemic fruits used to make the sour broth. Like many Filipino dishes, sinigang is done distinctly in every home. Whichever way it is prepared, sinigang is a delicious example of the richness, diversity and deliciousness of Philippine cuisine.",
    ],
    ingredientGroups: [
      {
        heading: "",
        items: [
          { amount: "2 liters", item: "Water" },
          { amount: "400 grams", item: "Ripe tomatoes" },
          { amount: "2, quartered", item: "Red onions" },
          {
            amount: "1–2 small, diced large or cut into 1-inch discs",
            item: "Native gabi (native taro). Use 2 if you want a thicker broth",
          },
          { amount: "1 small, sliced ½ inch on a slant", item: "White radish" },
          {
            amount: "¼ cup",
            item: "Tamarind water. Tamarind powder or sinigang mix may be used; adjust the quantity to taste",
          },
          { amount: "10 pieces", item: "Yardlong beans (sitaw)" },
          {
            amount: "1–2, adjust to taste",
            item: "Green finger chilies",
          },
          { amount: "1 bundle", item: "Okra" },
          { amount: "1 kilo (10–12 pieces)", item: "Prawns" },
          { amount: "1 bunch", item: "Water spinach" },
          { amount: "1–2 tbsp", item: "Fish sauce" },
        ],
      },
    ],
    stepGroups: [
      {
        steps: [
          "Leave the prawns unpeeled. Cut the short and long antennas, leaving the head intact. Devein by slightly slitting the top of the prawn.",
          "Wash the prawns.",
          "Put the water in a pot.",
          "Add the tomatoes, onion and gabi. Bring the mixture to a boil. Leave it boiling for 10 minutes, or until the tomatoes are soft.",
          "Add the radish and tamarind. Adjust the tamarind according to taste. Cook for 10 minutes.",
          "Add the long beans and finger chilies. Cook for 5 minutes.",
          "Add the okra.",
          "Add the prawns.",
          "Season with fish sauce.",
          "Cook 3 minutes, depending on the size of the prawns, or just until the prawns change color. Do not overcook, so the prawns stay soft.",
          "Add the water spinach just before serving.",
          "Season to taste with fish sauce.",
        ],
      },
    ],
  },
  {
    id: "17",
    title: "Adobo",
    description: "Meat braised in vinegar, garlic and black pepper.",
    image: "/recipes/adobo.webp",
    imageAlt: "Casa Juan adobo plates with chicken, pork, garlic, and vinegar",
    imageWidth: 477,
    imageHeight: 633,
    category: "Main Dishes",
    slug: "adobo",
    intro: [
      "Perhaps the most popular Filipino dish in the world… Adobo is the braising of any meat or vegetable in vinegar, garlic and black peppercorn. Every household has its own interpretation of the dish. One’s adobo recipe is usually passed on, and cooked according to preference.",
      "At home, my mom Amparing’s adobo did not contain soy sauce, though countless adobo recipes call for it. However, her take on the dish still had a lovely amber tinge. This was because she browned her chunks of pork till oil was extracted from the meat, and only at that point did she add garlic and whole peppercorns. Vinegar is then poured and cooked until it is reduced. Coming from the north, we use sukang Iloco (sugar cane vinegar from the north). Water is added, enough to submerge the pork pieces. A little sea salt is sprinkled. The heat is lowered to simmer the pork slowly until tender. When fork tender, the adobo is seasoned to taste with salt. Mom also omitted bay leaves, because my dad wasn’t fond of them. As simple as that was, mom’s adobo was delectable.",
      "Adobo is presented in a myriad of ways — dry without sauce, with sauce, dried then fried, with or without soy.",
      "So, what is the best adobo, as I am often asked… The best adobo, in my opinion, is the one that makes you happy!",
    ],
    ingredientGroups: [
      {
        heading: "",
        items: [
          { amount: "¼ cup", item: "Oil" },
          { amount: "4, cut into 3", item: "Chicken thigh quarters" },
          { amount: "½ kilo, cut into 1½-inch chunks", item: "Pork belly" },
          { amount: "1 whole, peeled and slightly pounded", item: "Native garlic" },
          { amount: "1½ tsp", item: "Whole peppercorns" },
          { amount: "2", item: "Bay leaves" },
          { amount: "⅓–½ cup", item: "Vinegar of choice" },
          { amount: "¼ cup", item: "Soy" },
        ],
      },
    ],
    stepGroups: [
      {
        steps: [
          "Brown the chicken pieces in oil, then set the chicken aside.",
          "Brown the pork pieces in the same pan until slightly brown.",
          "Add the garlic, peppercorns and bay leaves.",
          "Pour in the vinegar and reduce it.",
          "Add the soy sauce and enough water to cover the pork.",
          "Lower the heat and simmer the pork until slightly tender. You may have to add a little more water, depending on how soft you want the pork to be. Add just enough liquid to submerge the meat. Do not drown the pork in liquid, as this will dilute the flavor.",
          "Add the chicken and continue to cook until the chicken pieces are soft.",
          "Season to taste.",
          "If you prefer adobo with sauce, you may stop cooking at this point. The dish is ready to serve.",
          "Continue to simmer if you want a dry adobo. Cook the dish until there is no more liquid and only the oil rendered from the meat remains.",
          "Those who want fried adobo can continue to cook the mixture until the pork fries in its oil and is slightly crisp.",
          "Adobo is best consumed the day after. Those who want fried adobo can stop cooking when the sauce has dried out, then continue the process the next day, just before serving.",
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
