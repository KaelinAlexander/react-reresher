import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {

  const [courseGoals, setCourseGoals] = useState([
  {id: 'cg1', text: 'Finish the Course'},
  {id: 'cg2', text: 'Learn about MERN'},
  {id: 'cg3', text: 'Help others Learn'}
  ]);

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals(courseGoals.concat(newGoal));
  }

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  )
}

// function App() {

//     return (
//       <h1>Hello, from React!</h1>
//     )

// }

// class App extends React.Component {
//   render() {
//     return <h1>Hello, from React!</h1>
//   }
// }

export default App;
