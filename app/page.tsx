import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Stats from "@/app/components/Stats";
import Features from "@/app/components/Features";
import Footer from "@/app/components/Footer";
import ChatButton from "@/app/components/ChatButton";

export default function Home() {
  return (
    <>
      <div className="app">
        <Header />
        <Hero />
        <Stats />
        <Features />
      </div>
      <Footer />
      <ChatButton />
    </>
  );
}
