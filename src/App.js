import './App.css';
import {useDispatch, useSelector } from 'react-redux'
import {incrementHandler,decrementHandler,resetHandler} from './Redux/Actions'

function App() {
  const dispatch = useDispatch();

  const plus = () => {
    dispatch(incrementHandler ());
  };

  const minus = () => {
    dispatch(decrementHandler ());
  };

  const reset = () => {
    dispatch(resetHandler ());
  };

  const count = useSelector((state) => state.counter);

  return (
    <div className="App">
      <h1> React Redux workshop</h1>
      <div>
        <button onClick={plus}> + </button> 
        <h3> {count} </h3>
        <button onClick={minus}> - </button> 
        <button onClick={reset}> Reset </button> 
      </div>

    </div>
  );
}

export default App;