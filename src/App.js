import './App.scss';
import Header from './components/Header';
import TodoList from './components/TodoList';
import View from './components/View';
import { useState } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Form from './components/Form';

const dataRows = [
  {id: 1,date:"12/10/2020",name:"Nau an",content:"Di mua thit ve nau an"}
];

App.propTypes = {
  dataView:PropTypes.shape({
    id: PropTypes.number.isRequired,
    date:PropTypes.instanceOf(Date).isRequired,
    name:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired
  })
};
function App() {
  const [dataView, setdataView] = useState({});
  const [toggleView, setToggleView] = useState(false);
  const [toggleForm, settoggleForm] = useState(false);
  const receiveIndexTodo = (index)=>{
    const data = dataRows.find(item=>item.id===index);
    setToggleView(currToggleView=>!currToggleView);
    setdataView(data);
  }
  const onToggleForm = ()=>{
    settoggleForm(currToggleForm=>!currToggleForm);
  }
  return (
    <div className="App">
      <Header/>
      <TodoList receiveIndexTodo={receiveIndexTodo} dataRows={dataRows}/>
      <View dataView={dataView} toggleView={toggleView}/>
      <Fab 
        className="add__button" 
        color="primary" 
        aria-label="add"
        onClick = {onToggleForm}
        ><AddIcon />
      </Fab>
      <Form toggleForm={toggleForm} onToggleForm={onToggleForm}/>
    </div>
  );
}

export default App;