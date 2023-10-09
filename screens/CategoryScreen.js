import { CATEGORIES } from "../data/dummydata";
import CategoryGridView from "../components/CategoryGridView";
import { FlatList } from "react-native";





//navigation is an inbuilt prop got from Stack.Screen which is used to navigate between screens
function CategoryScreen({navigation}){
    function renderCategoryItem(itemData){
        function pressHandler(){
            //navigate takes the name defined in Stack.Screen as parameter and also an object of data to be passed to the page
            navigation.navigate('MealsOverview',{
                categoryId:itemData.item.id
            })
        }
        return <CategoryGridView title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
    }

    return(
        <FlatList data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={renderCategoryItem} numColumns={2}/>
    )
}

export default CategoryScreen