import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
// import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {

  return (
    <>
    
      <Navbar></Navbar>
      <h1 className='text-3xl bg-yellow-500'>Price option</h1>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App