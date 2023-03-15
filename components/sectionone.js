import Image from "next/image";
import Link from "next/link";

const sectionone = () => {
    return (
        <div className="py-16">
            <div >
                <h2 className="font-bold text-4xl text-center pb-12">Trending</h2>

                {Slide()}

            </div>
        </div>
    );
};

export default sectionone;

const Slide = () => {
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href='/'>
                    <Image src={"/images/img1.jpg"} width={600} height={600} alt='banner_image' />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link className="text-orange-600 hover:text-orange-800" href={'/'}>Buisness Travel</Link>
                    <Link className="text-gray-800 hover:text-gray-800" href={'/'}>JAN 12, 2023</Link>

                </div>
                <div className="title">
                    <Link className="text-3xl md:text-6xl font-bold text-gray-800 " href='/'> You most unhappy customers are your gratest source of learning </Link>
                    <p className="text-gray-500 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laboriosam soluta a consequuntur id, eius reiciendis tempore nam assumenda eligendi.</p>
                </div>

            </div>

        </div>
    )

}