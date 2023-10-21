import './App.css';

import Content from './nachricht';
import MyButton from './Button';
import DynamicTableCreator from './Button_to_table';
import Create_flat_list from './List_data';
function App() {
  return(
    <div className='App'>
    <Content/>
    <MyButton/>
    <DynamicTableCreator/>
    <Create_flat_list/>
    </div>
  )
}

export default App;
