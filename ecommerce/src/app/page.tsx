
import Details from './components/Details'
import Product from './components/Product'
import Example from './components/Products'
import Examples from './components/Trending'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      {/* <Example />
      <Examples /> */}
      {/* <Product /> */}
      <Details />
    </main>
  )
}
