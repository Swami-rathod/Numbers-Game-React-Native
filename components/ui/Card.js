import { StyleSheet, View } from "react-native";

function Card({children,style}){
    return (
        <View style={[styles.card,style]}>
        {children}
    </View>
    )
    
}
export default Card;

const styles = StyleSheet.create({
    card:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
        padding:16,
        marginHorizontal:24,
        borderWidth:2,
        borderRadius:5,
        borderColor:'orange',
        backgroundColor:'plum',
        elevation:10,
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        shadowOpacity:0.5,
    },
})