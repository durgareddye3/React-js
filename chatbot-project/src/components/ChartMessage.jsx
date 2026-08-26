  
  import { useEffect, useRef } from "react";

  import { ChartBot } from "./ChartBot";
  
  export function ChartMessage({chartMessages}){

        const chatMeassageRef= useRef(null);

        useEffect(()=>{
          
          const chatMessageElem =chatMeassageRef.current;

          if(chatMessageElem){
            chatMessageElem.scrollTop= chatMessageElem.scrollHeight;
          }


        });
        return (
        <div className="chat-messages-container"  ref ={chatMeassageRef}>
        {chartMessages.map((chartMessages) => { 
          return (
            <ChartBot 
            message = {chartMessages.message}
            sender = {chartMessages.sender}
            key = {chartMessages.id}
            />
          );
        })}
      </div>

        );

      }