import logo from './logo.svg';
import './App.css';
import Sample_FC from './components/Sample_FC';
import ClassComponent from './components/ClassComponent';
import ListExample from './components/ListExample';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import ComponentLifeCycle from './components/ComponentLifeCycle';
import CssExample from './components/CssExample';
import ReduxExample from './redux/ReduxExample';
import { Provider } from 'react-redux'
import UserStore from './redux/UserStore';
import Redux from './project/Redux';
import Menu from './redux/Menu';

/**
 * Props Syntax
 * 
 * <Component_name prop1_name=prop1_value prop2_name=prop2_value>
 * 
 */

function App() {

  const obj = {
    loggedUserName:"Ramesh",
    age:"23",
    address:{
      city:"Chennai"
    },
    contactNo:"9876543210",
    email:"ramesh@gmail.com"
  }

  return (
    <>
      {/* <ClassComponent userObject={obj} ></ClassComponent> */}
      {/* <Sample_FC loggedUserName="Ramesh" age="23" /> */}

      <Provider store={UserStore}>
        <Menu />
      </Provider>

    </>
  );
}

export default App;
