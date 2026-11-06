import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BIO = [
  "Reggie Aspiras is a chef, culinary instructor, and consultant. She is also a regular columnist for Philippine Daily Inquirer, host, and best-selling, award-winning cookbook author. Her career in the culinary space was honed under the tutelage of internationally renowned chefs from around the world. Her repertoire in the kitchen is diverse and ever evolving—from classical to continental, Asian and dietary.",
  "The multi-hyphenate, and widely lauded culinary genius has also lent her expertise and experience to various advocacies and socio-civic initiatives. She has worked tirelessly towards promoting culinary tourism in the country, and has partnered with experts in the health space to cultivate a \"eating into wellness.\" In 1991, Aspiras opened the Reggie Aspiras School of Culinary Arts. Despite the many hats she wears, she still manages to find time to work on a new book, Philippine Heritage Cookbook, a compilation of traditional Filipino recipes across the archipelago.",
];

export default function AboutChefReggie() {
  return (
    <section className="bg-[#0b0d0d] text-white" aria-labelledby="chef-reggie-heading">
      <div className="mx-auto max-w-[720px] px-5 py-12 sm:px-8 sm:py-16">
        <div className="relative mx-auto mb-6 aspect-[4/5] w-44 overflow-hidden rounded-2xl sm:w-52">
          <Image
            src="/recipes/chef-reggie.webp"
            alt="Chef Reggie Aspiras"
            fill
            sizes="208px"
            className="object-cover object-top"
          />
        </div>

        <h2
          id="chef-reggie-heading"
          className="mb-5 text-center font-angleton text-2xl tracking-[0.12em] text-[#b88746] sm:text-3xl"
        >
          CHEF REGGIE ASPIRAS
        </h2>

        <div className="space-y-4 text-sm leading-relaxed text-white/80 sm:text-base">
          {BIO.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/About/ReggieAspiras"
            className="inline-flex items-center rounded-lg bg-[#b88746] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#d4a15b]"
          >
            About Reggie Aspiras
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
