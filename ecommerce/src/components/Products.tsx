import Product from "./Product"

const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '₹299',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        desc: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',

    },
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '₹299',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        desc: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',

    },
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '₹299',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        desc: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',

    },
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '₹299',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        desc: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',

    },
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '₹299',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        desc: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',

    },
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '₹299',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        desc: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',

    },
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '₹299',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        desc: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',

    },
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '₹299',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        desc: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',

    },
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '₹299',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        desc: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',

    },

    // More products...
]

export default function Products() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <Product key={product.id} id={product.id} name={product.name} href={product.href} imageSrc={product.imageSrc} imageAlt={product.imageAlt} price={product.price} desc={product.desc} />
                    ))}
                </div>
            </div>
        </div>
    )
}
