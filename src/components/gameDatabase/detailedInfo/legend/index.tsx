import React from 'react';
import { legendClasses } from '../../data/legendClasses';
import { legendsInfo } from '../../data/legends';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
const Legend = () => {
  const { legendName } = useParams();
  if (!legendName) return;

  const legend = legendsInfo.find(
    (legend) => legend?.name?.toLowerCase() === legendName?.toLowerCase()
  );

  if (!legend) {
    toast.error('Please enter a valid name.');
    return <h1>{legendName} not found.</h1>;
  }

  return (
    <div className="detailed-legend">
      <div className="detailed-legend__contents">
        <h1 className="detailed-legend__name">{legend.name}</h1>
        <div className="detailed-legend__abilities">
          <Ability
            type="Class"
            description={
              legendClasses?.[legend?.class?.toLocaleLowerCase()]
                ?.description?.[0]
            }
            name={legend?.class}
            Icon={legendClasses?.[legend?.class?.toLocaleLowerCase()]?.icon}
          />
          {Object.keys(legend.abilities).map((key) => {
            const ability =
              legend.abilities[key as 'tactical' | 'passive' | 'ultimate'];
            return (
              <Ability
                key={ability.name}
                type={`${key} ability`}
                description={ability.description}
                name={ability.name}
                Icon={ability.icon}
              />
            );
          })}
        </div>
      </div>
      <div className="detailed-legend__image-container">
        <img src={legend.image} className="detailed-legend__image" />
      </div>
    </div>
  );
};

type AbilityProps = {
  type: string;
  name: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const Ability: React.FC<AbilityProps> = ({ type, name, description, Icon }) => {
  return (
    <div className="detailed-legend__ability">
      <div className="detailed-legend__ability-icon">
        <Icon style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="detailed-legend__ability-details">
        <p className="detailed-legend__ability-type">{type}</p>
        <p className="detailed-legend__ability-name">{name}</p>
        <p className="detailed-legend__ability-description">{description}</p>
      </div>
    </div>
  );
};

export default Legend;
