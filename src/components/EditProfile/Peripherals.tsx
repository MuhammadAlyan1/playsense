import React from 'react';
import MonitorIcon from '../../assets/icons/peripherals/monitor.svg?react';
import MousepadIcon from '../../assets/icons/peripherals/mousepad.svg?react';
import HeadphonesIcon from '../../assets/icons/peripherals/headphones.svg?react';
import KeyboardIcon from '../../assets/icons/peripherals/keyboard.svg?react';
import MouseIcon from '../../assets/icons/peripherals/mouse.svg?react';
import IconTextField from '../ui/IconTextField';

type PeripheralsPropType = {
  monitor: string;
  setMonitor: React.Dispatch<React.SetStateAction<string | number>>;
  headphones: string;
  setHeadphones: React.Dispatch<React.SetStateAction<string | number>>;
  keyboard: string;
  setKeyboard: React.Dispatch<React.SetStateAction<string | number>>;
  mouse: string;
  setMouse: React.Dispatch<React.SetStateAction<string | number>>;
  mousepad: string;
  setMousepad: React.Dispatch<React.SetStateAction<string | number>>;
};

const Peripherals: React.FC<PeripheralsPropType> = ({
  monitor,
  setMonitor,
  headphones,
  setHeadphones,
  keyboard,
  setKeyboard,
  mouse,
  setMouse,
  mousepad,
  setMousepad
}) => {
  return (
    <div className="peripherals">
      <h2 className="peripherals__heading">Peripherals</h2>
      <IconTextField
        Icon={MonitorIcon}
        isRequired={false}
        placeholder="Monitor"
        value={monitor}
        setValue={setMonitor}
      />
      <IconTextField
        Icon={HeadphonesIcon}
        isRequired={false}
        placeholder="Headphones"
        value={headphones}
        setValue={setHeadphones}
      />
      <IconTextField
        Icon={MouseIcon}
        isRequired={false}
        placeholder="Mouse"
        value={mouse}
        setValue={setMouse}
      />
      <IconTextField
        Icon={KeyboardIcon}
        isRequired={false}
        placeholder="Keyboard"
        value={keyboard}
        setValue={setKeyboard}
      />
      <IconTextField
        Icon={MousepadIcon}
        isRequired={false}
        placeholder="Mousepad"
        value={mousepad}
        setValue={setMousepad}
      />
    </div>
  );
};

export default Peripherals;
