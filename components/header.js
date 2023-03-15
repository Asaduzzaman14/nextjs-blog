import Link from 'next/link';
import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im'



export default function header() {


    return (
        <header className="bg-gray-50 bgColor">
            <div className="xl:container xl:mx-auto flex flex-col sm:flex-row  items-center sm:justify-between text-center py-3">
                <div className="flex md:flex-none w-96 order-2 sm:order-1 justify-center py-4 sm-py-0">
                    <input className="input-text focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" placeholder="Search" />
                </div>
                <div className="shrink w-80 sm:order-2">
                    <Link href='/'>
                        <span className="font-bold uppercase text-3xl">Next Js</span>
                    </Link>
                </div>

                <div className="w-96 order-3 flex justify-center">
                    <div className="gap-6 flex">
                        <Link href='/'>
                            <><ImFacebook color='#888888' /></>
                        </Link>
                        <Link href='/'>
                            <><ImTwitter color='#888888' /></>
                        </Link>
                        <Link href='/'>
                            <><ImYoutube color='#888888' /></>
                        </Link>
                    </div>
                </div>
            </div>
        </header >
    );
};

