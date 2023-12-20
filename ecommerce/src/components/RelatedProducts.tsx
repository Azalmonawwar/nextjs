import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import ScrollCard from './ScrollCard';

function RelatedProducts({ products }: any) {

    return (
        <div className='my-20'>
            <h1 className=' md:text-2xl mb-10 font-semibold md:px-10 px-5 text-xl'>Related Products</h1>
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
                {products.map((product: any) => (

                    <ScrollCard
                        itemId={product.product_id} // NOTE: itemId is required for track items
                        title={product.product_title}
                        key={product.product_id}
                        image={product.product_photos[0]}
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