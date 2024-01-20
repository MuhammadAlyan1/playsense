import React from 'react';
import kingsCanyon from '../../assets/maps/kings-canyon.svg';
import worldsEdge from '../../assets/maps/worlds-edge.svg';
import olympus from '../../assets/maps/olympus.svg';
import stormPoint from '../../assets/maps/storm-point.svg';
import brokenMoon from '../../assets/maps/broken-moon.svg';
import { EliminationLocationPropsType } from '../../types/EliminationLocationPropsType';

const EliminationLocation: React.FC<EliminationLocationPropsType> = ({
  selectedMap,
  coordinates,
  setCoordinates
}) => {
  const getMap = (name = 'kings canyon') => {
    switch (name) {
      case 'Kings Canyon':
        return kingsCanyon;
      case "World's Edge":
        return worldsEdge;
      case 'Olympus':
        return olympus;
      case 'Storm Point':
        return stormPoint;
      case 'Broken Moon':
        return brokenMoon;
      default:
        return kingsCanyon;
    }
  };

  const handleClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const mapImage = event.target as HTMLImageElement;
    const xCoordinate = (event.nativeEvent.offsetX / mapImage.width) * 100;
    const yCoordinate = (event.nativeEvent.offsetY / mapImage.height) * 100;

    setCoordinates({ x: xCoordinate, y: yCoordinate });
  };
  console.log('coordinates: ', coordinates);

  if (selectedMap === 'Others') return;

  return (
    <div className="elimination-location">
      <h2 className="elimination-location__sub-heading">
        Elimination Location
      </h2>
      <div className="elimination-location__map-container">
        <img
          className="elimination-location__map"
          src={getMap(selectedMap)}
          alt={`${selectedMap} Map`}
          onClick={(e) => handleClick(e)}
        />

        <div
          className="elimination-location__marker"
          style={{
            background: `${
              !coordinates.x && !coordinates.y ? 'transparent' : 'red'
            }`,

            left: `${coordinates.x}%`,
            top: `${coordinates.y}%`
          }}
        />
      </div>
    </div>
  );
};

export default EliminationLocation;
