import { StyleSheet, Text } from "react-native";

function InstructionText({children,style}){
    return(
        <Text style={[styles.textContainer,style]}>{children}</Text>
    )
}

export default InstructionText;

const styles = StyleSheet.create({
    textContainer:{
        color:'#e01253',
        fontSize:24,
        fontWeight:'bold',
    }, 
})