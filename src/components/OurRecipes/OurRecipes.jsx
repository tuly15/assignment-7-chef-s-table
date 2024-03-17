import { useState } from "react";
import CookSection from "../CookSection/CookSection";
import Recipes from "../Recipes/Recipes";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OurRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [wTCooks, setWTCooks] = useState([]);
    const [cCooking,setCCooking] = useState([]);
    useEffect(() => {
        fetch('./fakedata.json')
            .then((res) => res.json())
            .then(data => setRecipes(data))
    }, [])
    const handleWTCook = (wTCook) => {
        if (!wTCooks.includes(wTCook)) {
            setWTCooks([...wTCooks, wTCook]);
            toast.success("Recipe successfully added !")

        } else {
            toast.warn("One Recipe multiple not allowed !")
        }
    }
    const handlePreparing=(wTCook) => {
       const recipePreparing= wTCooks.filter(component=> component!==wTCook);
       setWTCooks(recipePreparing);
       setCCooking([...cCooking,wTCook]);
    }
    return (
        <div className="lg:mt-[100px] lg:mb-[100px]">
            <h3 className="text-[40px] font-medium text-center mb-6">Our Recipes</h3>
            <p className="text-[rgba(21,11,43,0.60)] text-center mb-12 max-w-[823px] mx-auto">This is a comprehensive culinary platform offering diverse, user-friendly recipes for every occasion, catering to various tastes, skill levels, and dietary preferences.</p>
            <div className="flex flex-col lg:flex-row gap-6">

                <Recipes recipes={recipes} handleWTCook={handleWTCook}></Recipes>
                <CookSection wTCooks={wTCooks} handlePreparing={handlePreparing} cCooking={cCooking}></CookSection>

            </div>
            <ToastContainer />

        </div>
    );
};

export default OurRecipes;