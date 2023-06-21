import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('')
    function gaolInputHandler(enteredText) { setEnteredGoalText(enteredText) };
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='You course goal' style={styles.textInput} onChangeText={gaolInputHandler} value={enteredGoalText} />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
})