import Carousal from "../components/Carousal";
import CategoryCard from "../components/category/CategoryCard";
import ProductCard from "../components/product/ProductCard";

export default function Home() {
  return (
    <main className="pb-16">
      <Carousal />
      <CategoryCard />
      <ProductCard />
    </main>
  );
}
