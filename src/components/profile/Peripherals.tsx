import HeadphonesIcon from '../../assets/icons/peripherals/headphones.svg?react';
import KeyboardIcon from '../../assets/icons/peripherals/keyboard.svg?react';
import MonitorIcon from '../../assets/icons/peripherals/monitor.svg?react';
import MouseIcon from '../../assets/icons/peripherals/mouse.svg?react';
import MousepadIcon from '../../assets/icons/peripherals/mousepad.svg?react';

type PeripheralsType = {
  peripherals: {
    mouse: string;
    keyboard: string;
    mousepad: string;
    monitor: string;
    headphones: string;
  };
};

const getPeripheralsIcon = (key: string): React.ReactElement => {
  if (key === 'mouse') {
    return <MouseIcon className="peripherals__icon" />;
  } else if (key === 'mousepad') {
    return <MousepadIcon className="peripherals__icon" />;
  } else if (key === 'headphones') {
    return <HeadphonesIcon className="peripherals__icon" />;
  } else if (key === 'keyboard') {
    return <KeyboardIcon className="peripherals__icon" />;
  } else if (key === 'monitor') {
    return <MonitorIcon className="peripherals__icon" />;
  } else {
    throw new Error('Unknown key in peripherals');
  }
};

const Peripherals: React.FC<PeripheralsType> = ({ peripherals }) => {
  console.log('PERIPHERALS: ', peripherals);
  return (
    <section className="peripherals">
      {Object.keys(peripherals).map((key) => {
        return (
          <div key={key} className="peripherals__peripheral">
            <div className="peripherals__icon-container">
              {getPeripheralsIcon(key)}
            </div>
            <p className="peripherals__name">
              {
                peripherals[
                  key as
                    | 'mouse'
                    | 'headphones'
                    | 'keyboard'
                    | 'monitor'
                    | 'mousepad'
                ]
              }
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Peripherals;
