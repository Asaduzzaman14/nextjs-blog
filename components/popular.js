import Image from "next/image";
import Link from "next/link";
import Author from './_child/author'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'



const popular = () => {
    return (
        <section className="container mx-auto p-10 md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

            {/* grid columns */}
            <Swiper
                slidesPerView={2}
                className='grid gap-2'

            >
                <SwiperSlide>{Slide()}</SwiperSlide>
                <SwiperSlide>{Slide()}</SwiperSlide>
                <SwiperSlide>{Slide()}</SwiperSlide>
                ...
            </Swiper>
        </section>
    );
};




export default popular;

const Slide = () => {
    return (
        <div className="grid p-3">
            <div className="image">
                <Link href='/'>
                    <Image src={"/images/img1.jpg"} width={600} height={400} alt='banner_image' />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link className="text-orange-600 hover:text-orange-800" href={'/'}>Buisness Travel</Link>
                    <Link className="text-gray-800 hover:text-gray-800" href={'/'}>JAN 12, 2023</Link>
                </div>

                <div className="title">
                    <Link className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600" href='/'> You most unhappy customers are your gratest source of learning </Link>
                    <p className="text-gray-500 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laboriosam soluta a consequuntur id, eius reiciendis tempore nam assumenda eligendi.</p>
                </div>
                <Author></Author>
            </div>

        </div>
    )

}