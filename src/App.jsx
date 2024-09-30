import { useState } from 'react';
import data from './data.js'
import Person from './Person.jsx';
import List from './List.jsx';
const App = () => {
  const[people,setPeople] = useState(data);
  const handleClick =()=>{
    setPeople([]);
  }


return <main>
  <section className="container">
    <h3>{people.length}  Bithdays today</h3>
    <List people={people}/>
    <button type="button" onClick = {handleClick} className='btn btn-block'>Clear List</button>
  </section>
</main>
}

export default App;
