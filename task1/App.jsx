import { useState } from 'react'
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

const App = () => {
  const randomId = () => Math.random() + ':' + Date.now();
  const [items, setItems] = useState([
    { id: randomId(), title: "Sport", current: 0, max: 10 },
    { id: randomId(), title: "Food", current: 0, max: 10 },
    { id: randomId(), title: "Rest", current: 0, max: 10 }
  ]);


  const increaseItem = (id) => {
    setItems(items.map(item => item.id === id && item.current < item.max
      ? 
      {
        ...item, current: item.current + 1, 
      }  
      : item
    ))
  }

  const itemsElems = items.map(item => <TodoItem
      key={item.id}
      item={item}
      step={increaseItem}
    />)

  const createItem = ({title, max}) => {
    setItems([...items, {title, max: +max, current: 0, id: randomId()}])
  }

  let allDone = items.every(item => item.current >= item.max)

  return (
      <div className="container">
        <TodoForm created={createItem} />
        <hr/>
        <div>{itemsElems}</div>
        {
          allDone && <div>Relax mode on</div>
        }
      </div>
  );
   
}

export default App
