import Home from "../Layout/Home";
import HomeLayout from "../Layout/HomeLayout";
import Footer from "../components/Footer";


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* <Nav /> */}
      <main className="flex-grow">
        <HomeLayout />
      </main>
      <Footer />
    </div>
  );
}
