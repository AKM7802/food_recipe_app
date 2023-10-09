import { Pressable, View , Text,StyleSheet} from "react-native";

function CategoryGridView({title,color,onPress}){
    return(
        <View style={[styles.outerContainer,{backgroundColor:color}]}>
            <Pressable style={styles.button} android_ripple={{color:"rgba(79, 79, 79, 0.37)"}} onPress={onPress}>
                <View style={styles.innerContainer}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridView;

const styles=StyleSheet.create({
    outerContainer:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        overflow:"hidden"
    },
    button:{
        flex:1
    },
    innerContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:"center"
    },
    text:{
        fontSize:18,
        fontWeight:"bold"
    }

})