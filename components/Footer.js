import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import NewsLetter from "./_child/newsLetter";

const Footer = () => {

    const date = new Date()
    const bg = {
        // backgroundRepeat: 'no-repeat',
        backgroundImage: "url('/images/footer.png')",
        backgroundPosition: 'bottom-left',

    }

    return (
        <div style={bg}>
            <div className="bg-gray-50" style={bg}>
                <NewsLetter />
                <div className="container mx-auto flex justify-center py-12">
                    <div className="py-5">
                        <div className="flex gap-5 justify-center">
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
                        <p className="py-5 text-gray-500">Copyright &copy; {date.getFullYear()} All rights reserved | This template is made with  by Daily Tuition</p>
                        <p className="text-gray-500 text-center">Terms & Condition</p> </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
