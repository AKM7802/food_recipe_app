import { FlatList, StyleSheet, Text ,View } from "react-native";
import MealItem from "../components/MealItem";

function MealList({item}){
    function renderMealItem(itemData){
        return <MealItem id={itemData.item.id} title={itemData.item.title} imageUrl={itemData.item.imageUrl} duration={itemData.item.duration} complexity={itemData.item.complexity} affordability={itemData.item.affordability}/>
    }
    return(
    <View style={styles.overview}>
        <FlatList data={item} keyExtractor={(item)=>item.id} renderItem={renderMealItem}/>
    </View>
    )
}

export default MealList

const styles=StyleSheet.create({
    overview:{
        flex:1,
        padding:12
    }
})