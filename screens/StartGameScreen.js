import {KeyboardAvoidingView, ScrollView ,View, TextInput, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import Title from '../components/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({onPickedNumber}){
    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(enteredNumber){
        setEnteredNumber(enteredNumber);
    }
    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmNumberInput(){
            const chosenNumber = parseInt(enteredNumber);

            if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
                Alert.alert(
                    'Invalid Number', "Number should be between 1 and 99",
                    [{text:'okay', style:'destructive', onPress: resetInputHandler} ]
                )
                return ;
            }
                onPickedNumber(chosenNumber);

    }

    return (
        <ScrollView>
        <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View>
            <View style={styles.titleContainer}>
                <Title >Guess My Number</Title>
            </View>
        <Card >
            <InstructionText >Enter the Number</InstructionText>
            <TextInput  style={styles.numberInput} maxLength={2} keyboardType="number-pad"
             autoCapitalize='none' autoCorrect={false} value={enteredNumber} onChangeText={numberInputHandler}>
            </TextInput>
            <View style={styles.buttonsContainer} >
                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmNumberInput}>Confirm</PrimaryButton>
                </View>
            </View>
        </Card>
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    titleContainer:{
        color:'white',
        marginTop:60,
        marginHorizontal:40,
        alignItems:'center'
    },  
 numberInput:{
        height:35,
        width:50,
        fontSize:32,
        borderBottomWidth:3,
        borderBottomColor:'#ddb52f',
        color:'#ddb52f',
        fontWeight:'bold',
        marginVertical:8,
        textAlign:'center',

    },
    buttonsContainer:{
        flexDirection:'row',
    },
    buttonContainer:{
        flex:1,
    }

})
