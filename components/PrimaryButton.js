import { Children } from "react";
import { View ,Text, Pressable, StyleSheet} from "react-native";
import Colors from '../constants/colors';

function PrimaryButton({children, onPress}){


    function pressHandler(){
        console.log("Pressed");
    }

   

    return (
     <View style={styles.buttonOuterContainer}>
        <Pressable onPress={onPress} style={({pressed}) => pressed ?[styles.buttonInnerContainer, styles.pressed] :styles.buttonInnerContainer} 
        android_ripple={{color:'blue'}} >
             <Text style={styles.buttonText}>{children}</Text>
        </Pressable>

    </View>
       
           )
}

export default PrimaryButton;
 
const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden'

    },
    buttonInnerContainer:{
            backgroundColor: Colors.primary500,
            paddingHorizontal:16,
            paddingVertical:8,
            elevation:3,
            flexDirection:'column',
            
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    pressed:{
        backgroundColor:'red',
        opacity:0.8,
    }
})