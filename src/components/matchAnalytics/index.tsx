import React, { useState } from 'react';
import Weapons from './Weapons';
import Legends from './Legends';
import Modes from './Modes';
import MapSelection from './MapSelection';
import EliminationReason from './EliminationReason';
import SquadPosition from './SquadPosition';
import EliminationLocation from './EliminationLocation';

const MatchAnalytics = () => {
  const [selectedMap, setSelectedMap] = useState<string>('Kings Canyon');
  console.log('SELECTED MAP IN PARENT: ', selectedMap);
  return (
    <div className="match-analytics">
      <h1 className="match-analytics__heading">Match Analytics</h1>
      <Legends />
      <Weapons />
      <Modes />
      <MapSelection selectedMap={selectedMap} setSelectedMap={setSelectedMap} />
      <EliminationReason />
      <SquadPosition />
      <EliminationLocation selectedMap={selectedMap} />
    </div>
  );
};

export default MatchAnalytics;
