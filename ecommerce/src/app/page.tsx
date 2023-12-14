import CarouselImg from "@/components/CarouselImg";
import Items from "@/components/Items";
import SpecialProducts from "@/components/SpecialProducts";
import TrendingItems from "@/components/TrendingItems";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mt-[80px]  ">
      <CarouselImg />
      <Items />
      <TrendingItems />
      <SpecialProducts />
    </main>
  )
}
