//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./Component/TopRow"

function App(props) {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [team1, setTeam1] = useState(0),
   [team2, setTeam2] = useState(0),
   touchDown1 = team1 + 6,
   touchDown2 = team2 + 6,
   three1 = team1 + 3,
   three2 = team2 + 3,
   extra1 = team1 + 1,
   extra2 = team2 + 1,
   [reset, setReset] = useState(),
   home = `49ers`,
   away = `Raiders`
   
   

  return (
    <div className="container">
      <section className="scoreboard">

        <TopRow  team1={team1} team2={team2} home={home} away={away}/>
        <BottomRow reset={reset} setReset={setReset} />

      </section>
      <section className="buttons">
        
         <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setTeam1(touchDown1)}>Home Touchdown</button>
          <button className="awayButtons__touchdown" onClick={() => setTeam1(extra1)}>Home Extra Point</button>
          <button className="homeButtons__fieldGoal" onClick={() => setTeam1(three1)}>Home Field Goal</button>
          <button className="homeButtons__fieldGoal" onClick={() => setTeam1(team1 + 2)}>Home 2pt Conversion</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setTeam2(touchDown2)}>Away Touchdown</button>
          <button className="awayButtons__touchdown" onClick={() => setTeam2(extra2)}>Away Extra Point</button>
          <button className="awayButtons__fieldGoal" onClick={() => setTeam2(three2)}>Away Field Goal</button>
          <button className="homeButtons__fieldGoal" onClick={() => setTeam2(team2 + 2)}>Away 2pt Conversion</button>
        </div>
        <div>
        <button  onClick={() => setReset(setTeam1(team1*0),setTeam2(team2*0))}>New Game</button>
        </div> 
        
      </section>
    </div>
  );
}

export default App;
