import {Ionicons} from "@expo/vector-icons"
import { Pressable } from "react-native";

function IconButton({name,pressHandler,size}){
    return <Pressable onPress={pressHandler}>
        <Ionicons name={name} size={size}/>
    </Pressable>
}

export default IconButton;