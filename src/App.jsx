// import { useState } from "react";
// import "./App.css";
// import Coocks from "./components/Coocks/Coocks";
// import Foods from "./components/Foods/foods";
// import Header from "./components/Header/Header";
// import Recepies from "./components/Recepies/Recepies";
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
 

// function App() {
//   const [cooks, setCook] = useState([]);
//   const [recepie, setRecepie] = useState([]);

//   const handleRecipie = (i) => {
//     if (recepie.includes(i)) {
//       toast.error("You have already selected this recipe!", {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     } else {
//       setRecepie([...recepie, i]);
//     }
//   };

//   const handleWantToCook = (i) => {
//     const newCook = [...cooks, i];
//     setCook(newCook);
//   };

//   return (
//     <>
//       <Header></Header>
//       <Recepies></Recepies>
//       <div className="flex max-w-7xl mx-auto">
//         <Foods
//           handleWantToCook={handleWantToCook}
//           handleRecipie={handleRecipie}
//         ></Foods>
//         <Coocks cooks={cooks}></Coocks>
//       </div>
//     </>
//   );
  
//   }
  
// export default App;

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import OurRecipes from './components/OurRecipes/OurRecipes'
function App() {

  return (   
    <div className='p-3 lg:p-0 max-w-[1320px] mx-auto lg:pt-[50px]'>
     <Navbar></Navbar>

     <Banner></Banner>
     
      <Header></Header>
      
      <OurRecipes></OurRecipes>
    </div>
  )
}

export default App



