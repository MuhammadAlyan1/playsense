import { useState } from 'react';
import Weapons from './Weapons';
import Legends from './Legends';
import Modes from './Modes';
import MapSelection from './MapSelection';
import EliminationReason from './EliminationReason';
import SquadPosition from './SquadPosition';
import EliminationLocation from './EliminationLocation';
import { WeaponType } from '../../types/WeaponType';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';

const MatchAnalytics = () => {
  const [selectedMap, setSelectedMap] = useState<string>('Kings Canyon');
  const [selectedCharacter, setSelectedCharacter] = useState('Pathfinder');
  const [selectedWeapons, setSelectedWeapons] = useState<WeaponType[]>([]);
  const [selectedMode, setSelectedMode] = useState('Battle Royale');
  const [eliminationReason, setEliminationReason] = useState('Fair Fight');
  const [selectedPosition, setSelectedPosition] = useState('First Place');
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        '/match-analytics',
        {
          map: selectedMap,
          character: selectedCharacter,
          weapons: selectedWeapons,
          mode: selectedMode,
          eliminationReason: eliminationReason,
          position: selectedPosition,
          mapCoordinates: coordinates
        },
        {
          withCredentials: true
        }
      );
      console.log(response);
      if (response?.data?.success) {
        navigate('/analytics');
      }
    } catch (error) {
      console.log('Failed to save match analytics: ', error);
    } finally {
      setIsLoading(false);
    }
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
      <button
        disabled={isLoading}
        className="match-analytics__submit-button"
        onClick={handleSubmit}
      >
        {isLoading ? 'Loading..' : 'Submit'}
      </button>
    </div>
  );
};

export default MatchAnalytics;
