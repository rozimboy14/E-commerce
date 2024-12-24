//style
import "./App.css"
//components
import Banner from './Components/Homepage/Banner/Banner'
import BannerFooter from './Components/BannerFooter/BannerFooter'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Header from "./Components/Header/Header"
import NewArrivals from "./Components/pages/NewArrivals"

function App() {
  return (
    <div className="App">
   <Header/>
        <Navbar/>
        <main>
          <Banner/>
          <BannerFooter/>
          <NewArrivals/>
        </main>
        <Footer/>
      </div>
   
  )
}

export default App