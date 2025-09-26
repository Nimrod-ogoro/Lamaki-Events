import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import WhatsAppFloat from '@/components/WhatsAppFloat';



const Index = () => {
  return (
    <>
    
   
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
