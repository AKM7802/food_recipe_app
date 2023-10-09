import { View,Text,StyleSheet, Image, ScrollView, Button } from "react-native"
import { MEALS } from "../data/dummydata"
import { useContext, useLayoutEffect } from "react"
import IconButton from "../components/IconButton"
import { FavouritesContext } from "../context/favourites-context"

function MealDetailScreen({route,navigation}){

    const favourites=useContext(FavouritesContext)

    
    const mealId=route.params.mealId
    
    

    const selectedMeal=MEALS.find((meal)=>meal.id===mealId)

    
    //To check if meal is added to favoutite ids
    const mealIsFav=favourites.ids.includes(mealId)

    //TO Add Button or any content in the header
    const handlehomeClick=()=>{
        if(mealIsFav){
            favourites.removeFavourite(mealId)
        }else{
            favourites.addFavourite(mealId)
        }
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton name={mealIsFav ? "star" :"star-outline"} pressHandler={handlehomeClick} size={20}/>
            }
        })
    })

    
    return (
        <ScrollView>
    <View style={styles.contentPage}>
        <Image style={styles.image} source={{uri:selectedMeal.imageUrl}}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{selectedMeal.complexity.toUpperCase()}</Text>
            <Text style={styles.description}>{selectedMeal.duration} min</Text>
            <Text style={styles.description}>{selectedMeal.affordability.toUpperCase()}</Text>
        </View>
        <Text style={styles.contentHeading}>INGREDIENTS</Text>
        <View style={styles.listContainer}>
            {selectedMeal.ingredients.map((item,index)=>{
                return <Text key={index} style={styles.listItem}>{index+1}) {item}</Text>
            })}

        </View>
        <Text style={styles.contentHeading}>INSTRUCTIONS</Text>
        <View style={styles.listContainer}>
            {selectedMeal.steps.map((item,index)=>{
                return <Text key={index} style={styles.listItem}>Step {index+1} : {item}</Text>
            })}

        </View>
    </View>
    </ScrollView>
    )
}

export default MealDetailScreen

const styles=StyleSheet.create({
    contentPage:{
        flex:1,
        paddingHorizontal:20,
        paddingVertical:20
    },
    image:{
        width:"100%",
        height:300
    },
    title:{
        fontSize:28,
        fontWeight:"bold",
        textAlign:'center',
        color:'brown',
        marginVertical:8
    },
    descriptionContainer:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius:18,
        backgroundColor:"#faceca",
        padding:8,
        paddingHorizontal:12,
        marginBottom:8
    },
    description:{
        fontSize:14,
        color:"#4a4747",
        fontWeight:"bold"
    },
    contentHeading:{
        textAlign:"center",
        fontSize:22,
        fontWeight:"bold",
        marginVertical:4,
        color:"#75422e"
    },
    listItem:{
        borderRadius:11,
        paddingHorizontal:8,
        paddingVertical:8,
        backgroundColor:"#6b7c82",
        fontSize:16,
        marginVertical:8
    }

})