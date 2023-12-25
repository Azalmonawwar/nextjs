import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import ScrollCard from './ScrollCard';
import { getData } from '@/actions/getData';

function RelatedProducts({ category, department }: { category: string, department: string }) {
    const [products, setProducts] = React.useState<any>([])
    React.useEffect(() => {
        getData(category, department)
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='my-20'>
            <h1 className=' md:text-2xl mb-10 font-semibold md:px-10 px-5 text-xl'>Related Products</h1>
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
                {products.map((product: any) => (

                    <ScrollCard
                        itemId={product.id} // NOTE: itemId is required for track items
                        title={product.title}
                        key={product.id}
                        image={product.image}
                    />
                ))}
            </ScrollMenu>
        </div>
    );
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
        React.useContext(VisibilityContext);
    return (
        <button disabled={isFirstItemVisible} onClick={() => scrollPrev()} className='p-4'>
            &lt;
        </button>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
    return (
        <button disabled={isLastItemVisible} onClick={() => scrollNext()} className='p-4 text-xl font-semibold'>
            &gt;
        </button>
    );
}


export default RelatedProducts;