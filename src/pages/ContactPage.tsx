import Nav from '../components/Nav'
import Contact from '../Layout/Contact'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <div className="flex z-20 flex-col min-h-screen bg-white">
      <main className="flex-grow mt-10">
        <Contact/>
      </main>
        <Footer/> 
    </div>
  )
}
