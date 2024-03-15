import {View, Text, StyleSheet} from 'react-native';

function Title({children}){
    return(
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:'bold',
        borderWidth:2,
        borderColor: "#ddb52f",
        borderRadius:5,
        padding:12,
        textAlign:'center',
        color:'white',
        marginHorizontal:12,
        maxWidth:'80%'

    }
})