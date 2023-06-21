import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)} style={({ pressed }) => pressed && styles.pressedItem}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        padding: 8,
        color: 'white'
    },
    pressedItem: {
        opacity: .5
    }
})