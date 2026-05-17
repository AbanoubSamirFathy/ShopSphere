import Carousal from "./Carousal";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";

export default function Home() {
  return (
    <main className="pb-16">
      <Carousal />
      <CategoryCard />
      <ProductCard />
    </main>
  );
}
