import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
        {/* <FunctionalGreeting /> */}
        <FunctionalGreetingWithProps greeting="nice to meet you!" name="Bethany" age="27" />
        <StatefulGreeting greeting="I'm a stateful class component" name="Bethany" />
    </div>
  );
}

export default App;
