
import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  function addGoalHandler(enteredGoalText) { setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredGoalText, key: Math.random().toString() }]) };

  const deleteGoalHandler = (key) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.key !== key)
    })
  }
  return (
    <View style={styles.appContainer}>
      {/* <View>
        <Text style={styles.dummyText}>Another piece of text</Text>
      </View>
      <Text style={styles.dummyText}>
        Hello world!!!
      </Text>
      <Button title='Tap me!' /> */}
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <GoalItem
              text={itemData.item.text}
              onDeleteItem={deleteGoalHandler}
              id={itemData.item.key} />)
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // dummyText: {
  //   margin: 16,
  //   padding: 16,
  //   borderColor: 'blue',
  //   borderWidth: 2
  // }
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  goalsContainer: {
    flex: 5
  }
});
