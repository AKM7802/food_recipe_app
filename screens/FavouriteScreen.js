import { useContext } from "react"
import { Text } from "react-native"
import MealList from "../components/MealList"
import { FavouritesContext } from "../context/favourites-context"
import { MEALS } from "../data/dummydata"

function FavouriteScreen(){
    const favs=useContext(FavouritesContext)

    const favouritesList=MEALS.filter((meal)=>favs.ids.includes(meal.id))

    if(favouritesList.length<1) return <Text>No Favourites Right Now!</Text>

    return(
        <MealList item={favouritesList}/>
    ) 
}

export default FavouriteScreen