import React from 'react';
import './App.css';
// import ScatterPlot from './safetycomponent/ScatterPlot/ScatterPlot';
// import HeatTable from './safetycomponent/HeatTable/HeatTable';
// import LineRace1 from './safetycomponent/LineRace/LineRace1';
import TreeMap from './safetycomponent/TreeMap/TreeMap.js'

function App() {
  return (
    <div className="App">
      <div className="chart-container">
        {/* <ScatterPlot/> */}
        {/* <HeatTable/> */}
        {/* <LineRace1/> */}
        <TreeMap/>
      </div>
    </div>
  );
}

export default App;
