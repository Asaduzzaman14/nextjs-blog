import Head from 'next/head';
import Footer from '../components/footer'
import Header from '../components/header'



const Format = ({ children }) => {
    return (
        <>
            <Head>
                <title>Blog pages</title>
            </Head>

            <Header></Header>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Format;