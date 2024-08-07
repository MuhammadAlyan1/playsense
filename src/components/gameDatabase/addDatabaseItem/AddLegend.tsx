import { useState } from 'react';
import Select from '../../ui/Select';
import HeadingSvg from '../../../assets/icons/misc/heading.svg?react';
import UploadImage from '../../ui/UploadImage';
import IconTextField from '../../ui/IconTextField';
import defaultLegendImage from '../../../assets/placeholders/legend.png';
import defaultUltimateIcon from '../../../assets/placeholders/ultimate-ability.png';
import defaultPassiveIcon from '../../../assets/placeholders/passive-ability.png';
import defaultTacticalIcon from '../../../assets/placeholders/tactical-ability.png';
import ClassIcon from '../../../assets/characters/skirmisher-class.svg?react';
import WordCounterTextArea from '../../ui/WordCounterTextArea';
import axios from '../../../api/axios';
import toast from 'react-hot-toast';
import { uploadImage } from '../../../utils/uploadImage';
type AddLegendPropsType = {
  game?: string;
  setIsModalOpen: (value: boolean) => void;
};
const AddLegend: React.FC<AddLegendPropsType> = ({
  game = 'apex legends',
  setIsModalOpen
}) => {
  const [legendImage, setLegendImage] = useState<File | string>(
    defaultLegendImage
  );
  const [legendIcon, setLegendIcon] = useState<File | string>(
    defaultLegendImage
  );
  const [legendClass, setLegendClass] = useState('assault');
  const [legendName, setLegendName] = useState<string>('');
  const [passiveAbilityName, setPassiveAbilityName] = useState('');
  const [passiveAbilityDescription, setPassiveAbilityDescription] =
    useState('');
  const [tacticalAbilityName, setTacticalAbilityName] = useState('');
  const [tacticalAbilityDescription, setTacticalAbilityDescription] =
    useState('');
  const [ultimateAbilityName, setUltimateAbilityName] = useState('');
  const [ultimateAbilityDescription, setUltimateAbilityDescription] =
    useState('');
  const [passiveAbilityIcon, setPassiveAbilityIcon] = useState<File | string>(
    defaultPassiveIcon
  );
  const [tacticalAbilityIcon, setTacticalAbilityIcon] = useState<File | string>(
    defaultTacticalIcon
  );
  const [ultimateAbilityIcon, setUltimateAbilityIcon] = useState<File | string>(
    defaultUltimateIcon
  );

  const handleAddLegendToDatabase = async () => {
    if (
      !legendClass.trim() ||
      !legendName.trim() ||
      !passiveAbilityName.trim() ||
      !passiveAbilityDescription.trim() ||
      !tacticalAbilityName.trim() ||
      !tacticalAbilityDescription.trim() ||
      !ultimateAbilityName.trim() ||
      !ultimateAbilityDescription.trim() ||
      !legendIcon ||
      !legendImage ||
      !passiveAbilityIcon ||
      !tacticalAbilityIcon ||
      !ultimateAbilityIcon
    ) {
      toast.error('Please enter all fields');
      return;
    }

    try {
      let legendImageUrl = '';
      let legendIconUrl = '';
      let passiveAbilityIconUrl = '';
      let tacticalAbilityIconUrl = '';
      let ultimateAbilityIconUrl = '';
      if (typeof legendImage === 'string') {
        const blob = await (await fetch(defaultLegendImage)).blob();

        const defaultLegendImageFile = new File(
          [blob],
          'defaultCoverImage.jpg',
          { type: 'image/jpeg' }
        );

        legendImageUrl = (await uploadImage(defaultLegendImageFile)) || '';
      } else {
        legendImageUrl = (await uploadImage(legendImage)) || '';
      }
      if (typeof legendIcon === 'string') {
        const blob = await (await fetch(defaultLegendImage)).blob();

        const defaultLegendImageFile = new File(
          [blob],
          'defaultCoverImage.jpg',
          { type: 'image/jpeg' }
        );

        legendIconUrl = (await uploadImage(defaultLegendImageFile)) || '';
      } else {
        legendIconUrl = (await uploadImage(legendIcon)) || '';
      }
      if (typeof passiveAbilityIcon === 'string') {
        const blob = await (await fetch(defaultPassiveIcon)).blob();

        const defaultAbilityFile = new File([blob], 'defaultCoverImage.jpg', {
          type: 'image/jpeg'
        });

        passiveAbilityIconUrl = (await uploadImage(defaultAbilityFile)) || '';
      } else {
        passiveAbilityIconUrl = (await uploadImage(passiveAbilityIcon)) || '';
      }
      if (typeof tacticalAbilityIcon === 'string') {
        const blob = await (await fetch(defaultTacticalIcon)).blob();

        const defaultAbilityFile = new File([blob], 'defaultCoverImage.jpg', {
          type: 'image/jpeg'
        });

        tacticalAbilityIconUrl = (await uploadImage(defaultAbilityFile)) || '';
      } else {
        tacticalAbilityIconUrl = (await uploadImage(tacticalAbilityIcon)) || '';
      }
      if (typeof ultimateAbilityIcon === 'string') {
        const blob = await (await fetch(defaultUltimateIcon)).blob();

        const defaultAbilityFile = new File([blob], 'defaultCoverImage.jpg', {
          type: 'image/jpeg'
        });

        ultimateAbilityIconUrl = (await uploadImage(defaultAbilityFile)) || '';
      } else {
        ultimateAbilityIconUrl = (await uploadImage(ultimateAbilityIcon)) || '';
      }

      if (!legendImageUrl) {
        toast.error('Failed to upload weapon image.');
        return;
      }
      if (!legendIconUrl) {
        toast.error('Failed to upload weapon icon.');
        return;
      }
      if (!passiveAbilityIconUrl) {
        toast.error('Failed to upload passive ability icon.');
        return;
      }
      if (!tacticalAbilityIconUrl) {
        toast.error('Failed to upload tactical ability icon.');
        return;
      }
      if (!ultimateAbilityIconUrl) {
        toast.error('Failed to upload tactical ability icon.');
        return;
      }

      const response = await axios.post(
        '/game-database/legend',
        {
          legendClass,
          legendName,
          passiveAbilityName,
          passiveAbilityDescription,
          tacticalAbilityName,
          tacticalAbilityDescription,
          ultimateAbilityName,
          ultimateAbilityDescription,
          legendImage: legendImageUrl,
          legendIcon: legendIconUrl,
          passiveAbilityIcon: passiveAbilityIconUrl,
          tacticalAbilityIcon: tacticalAbilityIconUrl,
          ultimateAbilityIcon: ultimateAbilityIconUrl,
          game
        },
        {
          withCredentials: true
        }
      );
      if (response?.data?.success === true) {
        toast.success('Contributed to Game Database.');
      }
    } catch (error) {
      console.log('Failed to contributed to Game Database: ', error);
      toast.error('Failed to contributed to Game Database.');
    } finally {
      setIsModalOpen(false);
      setLegendClass('assault');
      setLegendName('');
      setPassiveAbilityName('');
      setPassiveAbilityDescription('');
      setTacticalAbilityName('');
      setTacticalAbilityDescription('');
      setUltimateAbilityName('');
      setUltimateAbilityDescription('');
      setLegendImage(defaultLegendImage);
      setLegendIcon(defaultLegendImage);
      setPassiveAbilityIcon(defaultPassiveIcon);
      setTacticalAbilityIcon(defaultTacticalIcon);
      setUltimateAbilityIcon(defaultUltimateIcon);
    }
  };

  return (
    <div>
      <UploadImage
        image={legendImage}
        setImage={setLegendImage}
        label="Upload legend image"
        className="contain-image"
      />
      <UploadImage
        image={legendIcon}
        setImage={setLegendIcon}
        label="Upload Legend Icon"
        className="contain-image"
      />
      <p className="add-database-item__label">Legend Name</p>
      <IconTextField
        Icon={HeadingSvg}
        value={legendName}
        setValue={setLegendName}
        isRequired={true}
        placeholder="Enter legend name"
      />
      <p className="add-database-item__label">Weapon Type</p>
      <Select
        state={legendClass}
        setState={setLegendClass}
        selectOptions={[
          'assault',
          'controller',
          'recon',
          'support',
          'skirmisher'
        ]}
        Icon={ClassIcon}
      />

      <UploadImage
        image={passiveAbilityIcon}
        setImage={setPassiveAbilityIcon}
        label="Upload passive ability icon"
        className="contain-image"
      />
      <p className="add-database-item__label">Passive Ability Name</p>
      <IconTextField
        Icon={HeadingSvg}
        value={passiveAbilityName}
        setValue={setPassiveAbilityName}
        isRequired={true}
        placeholder="Enter passive ability name"
      />
      <p className="add-database-item__label">Passive Ability Description</p>
      <WordCounterTextArea
        state={passiveAbilityDescription}
        setState={setPassiveAbilityDescription}
        MAX_WORD_COUNT={200}
        rows={3}
        placeholder="Write passive ability description."
      />
      <UploadImage
        image={tacticalAbilityIcon}
        setImage={setTacticalAbilityIcon}
        label="Upload tactical ability icon"
        className="contain-image"
      />
      <p className="add-database-item__label">Tactical Ability Name</p>
      <IconTextField
        Icon={HeadingSvg}
        value={tacticalAbilityName}
        setValue={setTacticalAbilityName}
        isRequired={true}
        placeholder="Enter tactical ability name"
      />
      <p className="add-database-item__label">Tactical Ability Description</p>
      <WordCounterTextArea
        state={tacticalAbilityDescription}
        setState={setTacticalAbilityDescription}
        MAX_WORD_COUNT={200}
        rows={3}
        placeholder="Write tactical ability description."
      />
      <UploadImage
        image={ultimateAbilityIcon}
        setImage={setUltimateAbilityIcon}
        label="Upload ultimate ability icon"
        className="contain-image"
      />
      <p className="add-database-item__label">Ultimate Ability Name</p>
      <IconTextField
        Icon={HeadingSvg}
        value={ultimateAbilityName}
        setValue={setUltimateAbilityName}
        isRequired={true}
        placeholder="Enter ultimate ability name"
      />
      <p className="add-database-item__label">Ultimate Ability Description</p>
      <WordCounterTextArea
        state={ultimateAbilityDescription}
        setState={setUltimateAbilityDescription}
        MAX_WORD_COUNT={200}
        rows={3}
        placeholder="Write ultimate ability description."
      />
      <button
        className="add-database-item__submit-button"
        onClick={handleAddLegendToDatabase}
      >
        Publish
      </button>
    </div>
  );
};

export default AddLegend;
