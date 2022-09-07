import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import NestingComponents from './components/NestingComponents';


function App() {
  return (
    <div className="App">
        {/* <FunctionalGreeting /> */}
        {/* <FunctionalGreetingWithProps greeting="nice to meet you!" name="Bethany" age="27" />
        <StatefulGreeting greeting="I'm a stateful class component" name="Bethany" />
        <EventsFunctional />
        <EventsClass />
        <ConditionalRenderingClass />
        <ConditionalRenderingFunctional connected={true} /> */}
        <NestingComponents />
    </div>
  );
}

export default App;
