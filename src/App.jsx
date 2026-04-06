
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Navbar />
      <main className='overflow-x-hidden'>
        <Hero />
        <Catalog />
      </main>
      <Footer />
    </>
  )
}

export default App
