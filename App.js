import { ImageBackground, SafeAreaView, StyleSheet,  } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameoverScreen from './screens/GameOverScreen';
import ScrollableList from './screens/ScrollableList';


export default function App() {
    const [userNumber, setUserNumber] = useState('');
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

  

    function pickedNumberHandler(pickedNumber){
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }


    let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />

    if(userNumber){
      screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
    }

    function gameOverHandler(numberOfRounds){
      setGameIsOver(true);
      setGuessRounds(numberOfRounds);

    }

    function startNewGameHandler(){
      setUserNumber(null);
      setGuessRounds(0);

    }

    if(gameIsOver && userNumber){
      screen = <GameoverScreen userNumber={userNumber} roundNumber={guessRounds} onStartNewGame={startNewGameHandler} />
    }

  return (
    <LinearGradient colors={['#4e0329','#ddb52f' ,'orange','pink']} style={styles.container}>
      <ImageBackground source={require('./assets/background.png')} style={styles.container}
      resizeMode='cover' imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.container}>
        {screen}
        {/* <ScrollableList></ScrollableList> */}
        </SafeAreaView>
      </ImageBackground>
      
    </LinearGradient>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }, 
  backgroundImage:{
    opacity:0.5,
  }
});
