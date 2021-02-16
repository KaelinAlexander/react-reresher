import React from 'react';
import './App.css';
import GoalList from './components/GoalList';

const App = () => {
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList />
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
