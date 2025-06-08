import Footer from "../components/Footer";
import About from "../Layout/About";

export default function AboutPage() {
  return (
  <div className="flex z-20 flex-col min-h-screen bg-white">
    <main className="flex-grow">
      <About />
    </main>
      <Footer />
  </div>
  )
}
