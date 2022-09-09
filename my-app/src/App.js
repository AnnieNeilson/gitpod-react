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
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import HooksCounter from './components/HooksCounter';


function App() {
  return (
    <div className="App">
        {/* <FunctionalGreeting /> */}
        {/* <FunctionalGreetingWithProps greeting="nice to meet you!" name="Bethany" age="27" /> */}
        {/* <StatefulGreeting greeting="I'm a stateful class component" name="Bethany" /> */}
        {/* <EventsFunctional />
        <EventsClass />
        <ConditionalRenderingClass />
        <ConditionalRenderingFunctional connected={true} />
        <NestingComponents /> */}
        {/* <MethodsAsPropsParent /> */}
        {/* <RenderingLists /> */}
        {/* <LifeCyclesCDM /> */}
        {/* <LifeCyclesCDU /> */}
        {/* <LifeCyclesCWU /> */}
        {/* <ControlledForm /> */}
        {/* <UncontrolledForm /> */}
        {/* <SearchBar /> */}
        {/* <ControlledFormHooks /> */}
        {/* <UseStateWithArrays /> */}
        <UseStateWithObjects />
        <HooksCounter name="User" />
    </div>
  );
}

export default App;
