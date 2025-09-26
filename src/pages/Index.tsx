import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Helmet } from "react-helmet-async";


const Index = () => {
  return (
    <>
    
   
    <div className="min-h-screen">
      <Helmet>
            <meta name="google-site-verification" content="0YS0oTy2nfF5h2AVwaXy9yP-XGnRipda0ItQ3fiwl0U" />
        <title>LD Events</title>
      </Helmet>
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
