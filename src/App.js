import './App.css'
import {Navbar, Header, Projects, Interests, Footer} from './components'
import {SlArrowUp} from "react-icons/sl";

const backToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  })
}

const BackToTopButton = () => (
  <>
    <div className="page__backtotop" onClick={() => backToTop()}>
      <SlArrowUp/>
    </div>
  </>
)

function App() {
  window.addEventListener("scroll", function () {
    const button = document.querySelector('.page__backtotop')
    if(button){
      if (document.documentElement.scrollTop > 50) {
          button.style.display = "block"
        }
        else button.style.display = "none"
      }
  })

  return (
    <div className="mpage__container">
      <Navbar/>
      <Header/>
      <Projects/>
      <Interests/>
      <Footer/>
      <BackToTopButton/>
    </div> 
  );
}

export default App;
