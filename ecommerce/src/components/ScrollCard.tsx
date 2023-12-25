import Image from "next/image";
import Link from "next/link";

export default function ScrollCard({ itemId, title, image }: { itemId: string, title: string, image: string }) {

    return (
        <Link href={`/product/${itemId}`} className='group relative'>
            <div className="card mx-4 bg-gray-300 w-[270px] h-[350px] md:h-[300px] md:w-[300px] relative">
                <Image src={image} alt={title} width={300} height={300} />
                <div className="card-body absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center">
                        <h5 className="card-title text-white text-center">{title.slice(0, 50)}</h5>
                    </div>
                </div>
            </div>
        </Link>


    );
}