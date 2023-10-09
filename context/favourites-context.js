import { createContext, useState } from "react";

export const FavouritesContext=createContext({ //These are just initialised so that we receive auto-complete while writing code
    ids:[],
    addFavourite:(id)=>{},
    removeFavourite:(id)=>{}
})

function FavouritesContextProvider({children}){
    const [favourites,setFavourites]=useState([])

    const addFavourite=(id)=>{
        setFavourites((currentFavIds)=>[...currentFavIds,id])
    }
    const removeFavourite=(id)=>{
        setFavourites((currentFavids)=>currentFavids.filter(mealId=>mealId!==id))
    }

    const value={
        ids:favourites,
        addFavourite:addFavourite,
        removeFavourite:removeFavourite
    }
    return <FavouritesContext.Provider value={value}>{ children }</FavouritesContext.Provider>
}

export default FavouritesContextProvider