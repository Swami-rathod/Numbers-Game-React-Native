import {View, Image,Text, StyleSheet} from 'react-native';
import Title from '../components/Title';
import { LinearGradient } from 'expo-linear-gradient';
import PrimaryButton from '../components/PrimaryButton';

function GameoverScreen({userNumber, roundNumber, onStartNewGame}){
    return(
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
            <Image source={require('../assets/success.png')} style={styles.image}/>         
            </View>
            <Text style={styles.summaryText}>You need 
            <Text style={styles.highlight}> {roundNumber} </Text>
             rounds to guess the number
              <Text style={styles.highlight}> {userNumber} .</Text>
              </Text>
              <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
    )
}

export default GameoverScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:24
    },
    imageContainer:{
        width:300,
        height:280,
        borderColor:'#810dbf',
        borderWidth:2,
        borderRadius:150,
        margin:30,
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center' ,
    },
    image:{
        width:'100%',
        height:'100%',
    },
    summaryText:{
        fontWeight:'bold',
        fontSize:24,
        textAlign:'center',
        marginBottom:20

    },
    highlight:{
        color:'purple',
    }
})