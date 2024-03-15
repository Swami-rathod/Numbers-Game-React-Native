import { Text, View ,StyleSheet, Alert, FlatList, ScrollView} from "react-native"
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { AntDesign } from '@expo/vector-icons';
import GuessLogList from "../components/game/GuessLogList";


function generateRandomBetween(min, max, exclude){
    const rndNumber = Math.floor(Math.random()* (max-min) )+ min;

    if(rndNumber === exclude){
        return generateRandomBetween(min, max, exclude);
    }
    else{
        return rndNumber; 
    }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}){
    const initialGuess = generateRandomBetween(1,100,userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(()=>{
            if(currentGuess === userNumber){
                onGameOver(guessRounds.length);
            }
    },[currentGuess, userNumber, onGameOver])

    useEffect(()=>{
        minBoundary=1;
        maxBoundary=100;

    },[])


    function nextGuessHanlder(direction){

        if(
            (direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber) 
            || (currentGuess === userNumber)

        ){
            Alert.alert("You are Lying", "You know that this is wrong...",
            [{text:"Sorry!", style:'cancel'}, ])
            return ;
        }

        if(direction == 'lower'){
            maxBoundary= currentGuess;
        }
        else{
            minBoundary= currentGuess+1;

        }
        const newRndmNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndmNumber);
        setGuessRounds(prevRounds => [newRndmNumber,...prevRounds]);

    }
    const guessRoundListLength = guessRounds.length;


    return (
        <View style={styles.screen}>
            <Title>Opponents Guess!</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.card}>
                <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHanlder.bind(this,'greater')}>
                    <AntDesign name="plus" size={24} color="white" />                        
                    </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}> 
                        <PrimaryButton onPress={nextGuessHanlder.bind(this, 'lower')}>
                        <AntDesign name="minus" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                   
                </View>
            </Card>
            <View >
                 {/* {guessRounds.map((guessRound)=> <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList data={guessRounds} renderItem={(itemdata)=><GuessLogList roundNumber={guessRoundListLength-itemdata.index} guess={itemdata.item}/>}
                 keyExtractor={(item)=>item.toString()} />
            </View>
        </View>
         
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:24,
        alignItems:'center',
    

    },
    buttonsContainer:{
        flexDirection:'row',
    },
    buttonContainer:{
        flex:1,
    },
    instructionText:{
        marginBottom:10,
    },
    card:{
        marginTop:2,
    },
    listContainer:{
        flex:1,
    }
 
 
})