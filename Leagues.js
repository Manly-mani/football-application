import React from "react";

import axios from 'axios';

import { useState,useEffect} from "react";


const Leagues = () => {
    
      const[data,setData] = useState([]);

      useEffect(() => {
          axios(" https://api-football-standings.azharimm.site/leagues").then(
              (res) => {
                  console.log(res.data);
                  setData(res.data.data);
              }

          );
      },[]);
      
    
       
     return(   
         
         <div className="Leagues" >  
         <p>Leagues</p> 
         
        <div className="league-section">
            
            
      {data.map((data) => (
            
            <div key={data.id} className="league-contents">
                <img src={data.logos.light} alt="#"/>
                <h1>{data.name}</h1>
                </div>
                
                

        ))};
        
        
        </div>
        </div>
    )
};


export default Leagues;