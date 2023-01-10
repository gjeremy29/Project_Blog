import BlogList from "components/home/BlogList"
import CTA from "components/home/CTA"
import Features from "components/home/Features"
import Header from "components/home/Header"
import Incentives from "components/home/Incentives"
import LogoCloud from "components/home/LogoCloud"
import UseCases from "components/home/UseCases"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"



function Home(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
            <Helmet>
            <title>JS | Case Studies </title>
            <meta name="description" content="Agencia de software y marketing digital." />
            <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
            <meta name="robots" content='all' />
            <link rel="canonical" href="https://www.JS.com/" />
            <meta name="author" content='JS' />
            <meta name="publisher" content='JS' />

            {/* Social Media Tags */}
            <meta property="og:title" content='JS | Software Agency' />
            <meta property="og:description" content='Agencia de software y marketing digital.' />
            <meta property="og:url" content="https://www.JS.com/" />
            <meta property="og:image" content='https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg' />

            <meta name="twitter:title" content='JS | Software Agency' />
            <meta
                name="twitter:description"
                content='Agencia de software y marketing digital.'
            />
            <meta name="twitter:image" content='https://bafybeicgamofiuvkc6wjxl4wwzzh6pdovhcvvyc2gw5verruiolnykzz3i.ipfs.w3s.link/bbub3.jpg://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
            <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Incentives/> 
                <UseCases/>
                <Features/>
                <CTA/>
                <LogoCloud/>
                <BlogList/>

            </div>
                <Footer/>
        </Layout>
    )
}
export default Home