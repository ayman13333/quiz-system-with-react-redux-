import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch=useDispatch();
  const reducer =useSelector(state=>state.choices);

  console.log(reducer);
  return (
   <h1>done</h1>
  );
}



export default App;
