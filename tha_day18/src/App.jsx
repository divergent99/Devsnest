import './App.css';
import React from 'react';
import Card from './components/Card';
/*
const compwithoutJSX=React.createElement("h2",{className:"text"},"Whassup");
const compwithJSX = <h1>Noice</h1>
const page={title:'Page Title',paragraph:'Page Paragraph'};*/
function App(props) {
  var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  
  return (
    <div className="App">
      {/*</div>{<Card img ="blackpanther.jpg" title="BlackPanther"/>
      <Card img ="avengers.jpg" title="Avnegers"/>
      <Card img ="strange.jpg" title="Dr.Strange"/>
      <Card img ="thanos.jpg" title="Thanos"/>
      <Card img ="timestone.jpg" title="TimeStone"/>
     */}

     {/*
      <ul>
        {
          arr.map((item,index)=>
            <l1 key={index}>{item}</l1>
            )
        }
      </ul>

      */}

      

{arr.map((item, index) =>
          index % 2 ?
          <Card img ="blackpanther.jpg" title="BlackPanther"/>
          :
          <Card img ="thanos.jpg" title="Thanos"/>
        )}
  
    </div>
  );
}

export default App;
