import { Image, Text, View,StyleSheet, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { MEALS } from "../data/dummydata"

function MealItem({title,imageUrl,duration,complexity,affordability,id}){
    const navigation=useNavigation()
    const handleMealPress=()=>{
       
        navigation.navigate('MealDetails',{
            mealId:id
        })
    }

    return(
        <View style={styles.container}> 
            <Pressable android_ripple={{color:"#ccc"}} onPress={handleMealPress}>
            <Image style={styles.image} source={{uri:imageUrl}}/>
            <View style={styles.descContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.innerContainer}>
                    <Text style={styles.description}>{duration} min</Text>
                    <Text style={styles.description}>{complexity}</Text>
                    <Text style={styles.description}>{affordability}</Text>
                </View>
            </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles=StyleSheet.create({
    container:{
        flex:1,
        borderRadius:8,
        elevation:4,
        marginBottom:22,
        overflow:"hidden",
        backgroundColor:"white"
    },
    image:{
        width:"100%",
        height:200
    },
    descContainer:{
        flex:1,
        alignItems:'center',
        padding:12
    },
    title:{
        fontSize:24,
        textAlign:"center"

    },
    innerContainer:{
        flex:1,
        width:"100%",
        flexDirection:'row',
        marginVertical:14,
        justifyContent:"space-between",
        paddingHorizontal:12,
        paddingTop:18,
        borderTopWidth:1
    },
    description:{
        fontSize:16
    }

})