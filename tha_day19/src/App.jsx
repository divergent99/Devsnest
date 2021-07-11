import './App.css';
import React,{ useState } from 'react';

function App(props) {
  const [count,setcount] = useState(0);
  const [count2,setcount2] = useState(0);
  const [count3,setcount3] = useState(0);
  const [count4,setcount4] = useState(0);
  const [count5,setcount5] = useState(0);
  const disp = () =>
  {
    const newCount= count+1;
    setcount(newCount);
    console.log('clicked');
  }

  const disp2 = () =>
  {
    const newCount2= count2+1;
    setcount2(newCount2);
    console.log('clicked');
  }
  const disp3 = () =>
  {
    const newCount3= count3+1;
    setcount3(newCount3);
    console.log('clicked');
  }
  const disp4 = () =>
  {
    const newCount4= count4+1;
    setcount4(newCount4);
    console.log('clicked');
  }
  const disp5 = () =>
  {
    const newCount5= count5+1;
    setcount5(newCount5);
    console.log('clicked');
  }
  return (
    <div className="App">
      <div className="container">
      <button onClick={disp}>
        {count}
      </button>

      <button onClick={disp2}>
        {count2}
      </button>

      <button onClick={disp3}>
        {count3}
      </button>

      <button onClick={disp4}>
        {count4}
      </button>

      <button onClick={disp5}>
        {count5}
      </button>
      </div>
    </div>
  );
}

export default App;
