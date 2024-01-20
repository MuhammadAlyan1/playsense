import { useState } from 'react';
import Weapons from './Weapons';
import Legends from './Legends';
import Modes from './Modes';
import MapSelection from './MapSelection';
import EliminationReason from './EliminationReason';
import SquadPosition from './SquadPosition';
import EliminationLocation from './EliminationLocation';
import { WeaponType } from '../../types/WeaponType';

const MatchAnalytics = () => {
  const [selectedMap, setSelectedMap] = useState<string>('Kings Canyon');
  const [selectedCharacter, setSelectedCharacter] = useState('Pathfinder');
  const [selectedWeapons, setSelectedWeapons] = useState<WeaponType[]>([]);
  const [selectedMode, setSelectedMode] = useState('Battle Royale');
  const [eliminationReason, setEliminationReason] = useState('Fair Fight');
  const [selectedPosition, setSelectedPosition] = useState('First Place');
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleSubmit = async () => {
    console.log({
      selectedMap,
      selectedCharacter,
      selectedWeapons,
      selectedMode,
      eliminationReason,
      selectedPosition,
      coordinates
    });
  };

  return (
    <div className="match-analytics">
      <h1 className="match-analytics__heading">Match Analytics</h1>
      <Legends
        selectedCharacter={selectedCharacter}
        setSelectedCharacter={setSelectedCharacter}
      />
      <Weapons
        selectedWeapons={selectedWeapons}
        setSelectedWeapons={setSelectedWeapons}
      />
      <Modes selectedMode={selectedMode} setSelectedMode={setSelectedMode} />
      <MapSelection selectedMap={selectedMap} setSelectedMap={setSelectedMap} />
      <EliminationReason
        eliminationReason={eliminationReason}
        setEliminationReason={setEliminationReason}
      />
      <SquadPosition
        selectedPosition={selectedPosition}
        setSelectedPosition={setSelectedPosition}
      />
      <EliminationLocation
        selectedMap={selectedMap}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
      />
      <button className="match-analytics__submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default MatchAnalytics;
