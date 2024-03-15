import { View, Text, StyleSheet } from "react-native";

function GuessLogList({roundNumber, guess}){
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponents Guess : {guess}</Text>
        </View>
    )
}
export default GuessLogList;

const styles = StyleSheet.create({
    listItem:{
        borderColor:"#c5dbd5",
        borderWidth:3,
        borderRadius:50,
        backgroundColor:'#c5dbd8',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'95%',
        height:40,
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0, height:0},
        shadowOpacity:0.5,
        shadowRadius:4,
        margin:10,
       


    },
    itemText:{
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        marginHorizontal:15,

    }
})