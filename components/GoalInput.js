import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('')
    function gaolInputHandler(enteredText) { setEnteredGoalText(enteredText) };
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    }


    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput placeholder='You course goal' style={styles.textInput} onChangeText={gaolInputHandler} value={enteredGoalText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})