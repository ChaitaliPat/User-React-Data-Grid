import './App.css'
import BodyComp from './Components/Body/BodyComp'
import FooterComp from './Components/Footer/FooterComp'
import HeaderComp from './Components/Header/HeaderComp'

const App =() =>{
  return(
    <div className='App'>
      <div className='headerStyle'>
      <HeaderComp />
      </div>
      <div className='bodyStyle'>
      <BodyComp />
      </div>
      <div className='footerStyle'> 
      <FooterComp />
      </div>
    </div>
  )
}

export default App;
