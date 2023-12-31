import React, { useState } from 'react';

type MapSelectedPropsType = {
  selectedMap: string;
  setSelectedMap: (value: string) => void;
};

const MapSelection: React.FC<MapSelectedPropsType> = ({
  selectedMap,
  setSelectedMap
}) => {
  return (
    <div className="map-selection">
      <h2 className="map-selection__sub-heading">Maps</h2>
      <div className="map-selection__maps-container">
        {mapNames.map((map) => {
          console.log('map name : ', map.name);
          return (
            <div
              key={map.name}
              className={`map-selection__map text-button ${
                selectedMap === map.name ? 'text-button--selected' : ''
              }`}
              onClick={() => setSelectedMap(String(map.name))}
            >
              <p className="map-selection__map-name text-button__text">
                {map.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MapSelection;

const mapNames = [
  {
    id: '1213',
    name: 'Kings Canyon'
  },
  {
    id: '1211233',
    name: "World's Edge"
  },
  {
    id: '1211231233',
    name: 'Broken Moon'
  },
  {
    id: '12141413',
    name: 'Storm Point'
  },
  {
    id: '1121241413',
    name: 'Olympus'
  },
  {
    id: '1212412413',
    name: 'Others'
  }
];
