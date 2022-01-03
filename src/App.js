import React from 'react';
import './App.css';
import {Card} from 'react-bootstrap';
import axios from 'axios';

import Accordion from './component/accordion/Accordion';

const App  = () =>  {  
  return (
    <div className="App">      
       <Accordion />        
    </div>  
  );
}

export default App;
