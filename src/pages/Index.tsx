import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import {Helmet} from "react-helmet"


const Index = () => {
  return (
    <>
    <Helmet>
        <meta name="google-site-verification" content="your_unique_verification_code" />
        <title>Your Site Title</title>
      </Helmet>
   
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
       <WhatsAppFloat/>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Index;
