import CarouselImg from "@/components/CarouselImg";
import Items from "@/components/Items";
import SearchItems from "@/components/SearchItems";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
      <CarouselImg />
      <Items />
    </main>
  )
}
