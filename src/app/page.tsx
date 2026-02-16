import HeroSection from "@/components/Home/HeroSection";
import Heading from "@/components/ui/Heading";
import { getFeaturedProducts } from "@/lib/products";
import { FeaturedProductsClient } from "@/components/ui/CustomRating";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />

      <section className="w-full max-w-7xl px-6 mt-16 mb-20">
        <Heading title="Featured Products" link="/products" />
        <FeaturedProductsClient initialProducts={featuredProducts} />
      </section>
    </main>
  );
}