import React, { useState } from "react";
import Leagues from "./Leagues";
import Standings from "./Standings";

const Content = () => {
    const[pressed,setPressed]= useState(true);
    return(
        <div className="content-section">
            <div className="tabs">
            
                <button className="leagues-tab" onClick={() => setPressed(true)}>
                    Leagues
                </button>
                
                <button className="standings-tab" onClick={() => setPressed(false)}>
                    Standings
                    </button>          
            </div>
            {pressed ? <Leagues/> :<Standings/>}
           

        </div>
    )
}


export default Content;