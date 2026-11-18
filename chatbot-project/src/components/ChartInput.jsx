import { useState } from "react";
import { Chatbot} from 'supersimpledev';
export function ChartInput({chartMessages, setChartMessages})
      {
        const [inputText, setInputText] = useState('');

        function saveInputText(event)
        {
          setInputText(event.target.value);
        }
        function sendMessage()
        {
        
          const newChartMessages = [
          ...chartMessages,
          {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID()
          }
          ]

          setChartMessages(newChartMessages);

         const response= Chatbot.getResponse(inputText);

        setChartMessages([
          ...newChartMessages,
          {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID()
          }
          ]);

          setInputText('');
          
        }

        return (
          <div className="chat-input-container"> 
        <input placeholder ="Send a message to chatbot" 
        size = "30" 
        onChange={saveInputText}
        value={inputText}

        className="chat-input"
        />
        
        <button onClick={sendMessage}  className ="send-button"
        >Send</button>
          </div>
        );
      }