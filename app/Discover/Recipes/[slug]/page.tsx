import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Users } from "lucide-react";
import AboutChefReggie from "@/app/components/AboutChefReggie";
import { getCookableRecipes, getRecipe } from "@/lib/recipes";

const SITE_URL = "https://iamreggieaspiras.com";

type RecipePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCookableRecipes().map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipe(slug);

  if (!recipe?.ingredientGroups.length || !recipe.stepGroups.length) {
    notFound();
  }

  const title = `${recipe.title} Recipe | Chef Reggie Aspiras`;
  const url = `/discover/recipes/${recipe.slug}`;
  const image = recipe.image
    ? [
        {
          url: recipe.image,
          alt: recipe.imageAlt ?? recipe.title,
          width: recipe.imageWidth,
          height: recipe.imageHeight,
        },
      ]
    : undefined;

  return {
    title,
    description: recipe.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: recipe.description,
      url,
      siteName: "Reggie's Kitchen",
      type: "article",
      images: image,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: recipe.description,
      images: recipe.image ? [recipe.image] : undefined,
    },
    metadataBase: new URL(SITE_URL),
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = getRecipe(slug);

  if (!recipe?.ingredientGroups.length || !recipe.stepGroups.length) {
    notFound();
  }

  let stepNumber = 0;

  return (
    <article className="bg-[#f4f1ea]">
      <header className="relative bg-[#0b0d0d]">
        <div className="relative aspect-[4/5] max-h-[78svh] w-full sm:aspect-[16/9] sm:max-h-[620px]">
          {recipe.image ? (
            <Image
              src={recipe.image}
              alt={recipe.imageAlt ?? recipe.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          ) : (
            <div className="flex h-full items-center justify-center pb-24">
              <p className="font-angleton text-4xl tracking-wide text-[#b88746] sm:text-6xl">
                Coming Soon
              </p>
            </div>
          )}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0b0d0d]/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#0b0d0d] via-[#0b0d0d]/70 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-10 sm:pb-10">
            <div className="mx-auto max-w-[720px]">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-[#d4a15b]">
                {recipe.category}
              </p>
              <h1 className="font-angleton text-4xl leading-none text-white sm:text-6xl">
                {recipe.title}
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                {recipe.description}
              </p>
              {recipe.yield ? (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white">
                    <Users className="mr-1.5 h-3 w-3" />
                    {recipe.yield}
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[720px] px-5 py-10 sm:px-8 sm:py-14">
        {recipe.intro?.length ? (
          <div className="mb-12 space-y-4">
            {recipe.intro.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-[#0b0d0d]/85 sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}
        <section aria-labelledby="recipe-heading">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#b88746]" />
            <h2 id="recipe-heading" className="font-angleton text-3xl text-[#0b0d0d] sm:text-4xl">
              Recipe
            </h2>
          </div>
          {recipe.note ? (
            <p className="mb-6 text-sm leading-relaxed text-[#0b0d0d]/85 sm:text-base">{recipe.note}</p>
          ) : null}
          <div className="space-y-8">
            {recipe.stepGroups.map((group) => (
              <div key={group.heading ?? group.steps[0]}>
                {group.heading ? (
                  <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-[#b88746]">
                    {group.heading}
                  </h3>
                ) : null}
                <ol className="list-none space-y-5 p-0">
                  {group.steps.map((step) => {
                    stepNumber += 1;
                    return (
                      <li key={step} className="flex gap-3">
                        <span
                          aria-hidden
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#b88746] text-xs font-bold text-white"
                        >
                          {stepNumber}
                        </span>
                        <p className="pt-0.5 text-sm leading-relaxed text-[#0b0d0d]/85 sm:text-base">
                          {step}
                        </p>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="ingredients-heading">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#b88746]" />
            <h2
              id="ingredients-heading"
              className="font-angleton text-3xl text-[#0b0d0d] sm:text-4xl"
            >
              Ingredients
            </h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#0b0d0d]/10 bg-white">
            {recipe.ingredientGroups.map((group) => (
              <div key={group.heading || group.items[0]?.item}>
                {group.heading ? (
                  <h3 className="border-b border-[#0b0d0d]/10 bg-[#f4f1ea] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-[#b88746]">
                    {group.heading}
                  </h3>
                ) : null}
                <ul className="divide-y divide-[#0b0d0d]/10">
                  {group.items.map((ingredient) => (
                    <li
                      key={`${group.heading}-${ingredient.item}`}
                      className="flex items-baseline justify-between gap-4 px-4 py-3 text-sm sm:text-base"
                    >
                      <span className="text-[#0b0d0d]">{ingredient.item}</span>
                      {ingredient.amount ? (
                        <span className="shrink-0 text-right font-medium text-[#0b0d0d]/70">
                          {ingredient.amount}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {recipe.gallery?.map((photo) => (
          <figure key={photo.src} className="mt-10 overflow-hidden rounded-2xl bg-white">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 760px) 100vw, 720px"
              className="h-auto w-full"
            />
          </figure>
        ))}

        <p className="mt-10 text-center text-sm text-[#0b0d0d]/60">
          <Link href="/discover/recipes" className="font-medium text-[#b88746] hover:text-[#d4a15b]">
            All recipes
          </Link>
        </p>
      </div>

      <AboutChefReggie />
    </article>
  );
}
