import { View, Text ,StyleSheet} from "react-native";

function NumberContainer({children}){
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles= StyleSheet.create({
    numberContainer:{
            borderWidth:2,
            borderColor:'#fcba03',
            borderRadius:5,
            margin:24,
            alignItems :'center',
            justifyContent:'center',   
            width:200,
            height:80,
         
            marginHorizontal:20,



    },
    numberText:{
        color: "#fcba03",
        fontSize:40,
        fontWeight:'bold'
    }
})