
import {MEALS,CATEGORIES} from '../data/dummydata'

import { useLayoutEffect } from "react";
import MealList from "../components/MealList";

//route is also a param like navigation which is defined by Stack.Screen and it is used to fetch the data passed using navigation and the data will be present inside route.params
function MealsOverviewScreen({route,navigation}){
    const catId=route.params.categoryId;

    const displayedMeals=MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >=0
    })
    
    //Used to set titles dynamically in the header
    useLayoutEffect(()=>{  //useLayoutEffect is same as that of useEffect but executes synchronously with rendering so no blinking effect takes place like in useEffect
        const categoryTitle=CATEGORIES.find((category)=>category.id===catId).title
        navigation.setOptions({
            title:categoryTitle
        })
    },[catId,navigation])
    


    return(
            <MealList item={displayedMeals}/>
    )
}

export default MealsOverviewScreen;

