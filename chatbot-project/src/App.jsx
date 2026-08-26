import { useState} from 'react'
import { ChartInput } from './components/ChartInput';
import { ChartMessage } from './components/ChartMessage';
import './App.css'


function App(){
      const [chatMessages, setChatMessages] = useState([{
          message: 'hello chartbot',
          sender: 'user',
          id: 'id1'
        },
        {
          message: 'Hello! How can I help you?',
          sender : 'robot',
          id: 'id2'
        },
         {
          message: 'can you get me todays date?',
          sender : 'user',
          id : 'id3'
        },
         {
          message: 'Today is August 24',
          sender : 'robot',
          id : 'id4'
        }]);
    // const [chatMessages, setChatMessages] =array;
    // const chatMessages = array[0];
    // const setChatMessages = array[10];

      return (
        <div className="app-container">
          
         
          <ChartMessage 
          chartMessages = {chatMessages}
          />
           <ChartInput 
          chartMessages = {chatMessages}
          setChartMessages = {setChatMessages}
          />
        </div>
      );
     };

export default App
