import { useState } from 'react';
import Select from '../../ui/Select';
import HeadingSvg from '../../../assets/icons/misc/heading.svg?react';
import BodyDamageSvg from '../../../assets/weapons/misc icons/body.svg?react';
import HeadshotDamageSvg from '../../../assets/weapons/misc icons/head.svg?react';
import LegDamageSvg from '../../../assets/weapons/misc icons/legs.svg?react';
import AttachmentSvg from '../../../assets/weapons/misc icons/laser-sight.svg?react';
import DamagePerSecondSvg from '../../../assets/weapons/misc icons/dps.svg?react';
import FireModeSvg from '../../../assets/weapons/misc icons/full-auto.svg?react';
import WeaponTypeSvg from '../../../assets/weapons/misc icons/weapon.svg?react';
import WeaponAmmoType from '../../../assets/weapons/misc icons/ammo-type.svg?react';
import UploadImage from '../../ui/UploadImage';
import IconTextField from '../../ui/IconTextField';
import defaultWeaponImage from '../../../assets/placeholders/weapon.png';
import MultiSelect from '../../ui/MultiSelect';
import toast from 'react-hot-toast';
import { uploadImage } from '../../../utils/uploadImage';
import axios from '../../../api/axios';

type AddWeaponPropsType = {
  game?: string;
  setIsModalOpen: (value: boolean) => void;
};
const AddWeapon: React.FC<AddWeaponPropsType> = ({
  game = 'apex legends',
  setIsModalOpen
}) => {
  const [weaponImage, setWeaponImage] = useState<File | string>(
    defaultWeaponImage
  );
  const [weaponIcon, setWeaponIcon] = useState<File | string>(
    defaultWeaponImage
  );
  const [weaponType, setWeaponType] = useState('assault rifle');
  const [ammoType, setAmmoType] = useState<string[]>(['light rounds']);
  const [fireMode, setFireMode] = useState<string[]>(['full auto']);
  const [attachments, setAttachments] = useState<string[]>(['optics']);
  const [bodyDamage, setBodyDamage] = useState<number>(0);
  const [headshotDamage, setHeadshotDamage] = useState<number>(0);
  const [legDamage, setLegDamage] = useState<number>(0);
  const [damagePerSecond, setDamagePerSecond] = useState<number>(0);
  const [weaponName, setWeaponName] = useState<string>('');

  const handleAddWeaponToDatabase = async () => {
    if (
      !weaponType.trim() ||
      !weaponName.trim() ||
      ammoType.length === 0 ||
      fireMode.length === 0 ||
      attachments.length === 0 ||
      headshotDamage === 0 ||
      bodyDamage === 0 ||
      legDamage === 0 ||
      damagePerSecond === 0
    ) {
      toast.error('Please enter all fields');
      return;
    }

    try {
      let weaponImageUrl = '';
      let weaponIconUrl = '';
      if (typeof weaponImage === 'string') {
        const blob = await (await fetch(defaultWeaponImage)).blob();

        const defaultCoverImageFile = new File(
          [blob],
          'defaultCoverImage.jpg',
          { type: 'image/jpeg' }
        );

        weaponImageUrl = (await uploadImage(defaultCoverImageFile)) || '';
      } else {
        weaponImageUrl = (await uploadImage(weaponImage)) || '';
      }
      if (typeof weaponIcon === 'string') {
        const blob = await (await fetch(defaultWeaponImage)).blob();

        const defaultCoverImageFile = new File(
          [blob],
          'defaultCoverImage.jpg',
          { type: 'image/jpeg' }
        );

        weaponIconUrl = (await uploadImage(defaultCoverImageFile)) || '';
      } else {
        weaponIconUrl = (await uploadImage(weaponIcon)) || '';
      }

      if (!weaponImageUrl) {
        toast.error('Failed to upload weapon image.');
        return;
      }
      if (!weaponIconUrl) {
        toast.error('Failed to upload weapon icon.');
        return;
      }

      const response = await axios.post(
        '/game-database/weapon',
        {
          game,
          weaponType,
          weaponName,
          ammoType,
          fireMode,
          attachments,
          headshotDamage: Number(headshotDamage),
          bodyDamage: Number(bodyDamage),
          legDamage: Number(legDamage),
          damagePerSecond: Number(damagePerSecond),
          itemType: 'weapon',
          weaponImage: weaponImageUrl,
          weaponIcon: weaponIconUrl
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
      setWeaponImage(defaultWeaponImage);
      setWeaponIcon(defaultWeaponImage);
      setWeaponType('assault rifle');
      setAmmoType(['light rounds']);
      setFireMode(['full auto']);
      setAttachments(['optics']);
      setBodyDamage(0);
      setHeadshotDamage(0);
      setLegDamage(0);
      setDamagePerSecond(0);
      setWeaponName('');
    }
  };

  return (
    <div>
      <UploadImage
        image={weaponImage}
        setImage={setWeaponImage}
        label="Upload weapon image"
        className="contain-image"
      />
      <UploadImage
        image={weaponIcon}
        setImage={setWeaponIcon}
        label="Upload weapon Icon"
        className="contain-image"
      />
      <p className="add-database-item__label">Weapon Type</p>
      <Select
        state={weaponType}
        setState={setWeaponType}
        selectOptions={[
          'assault rifle',
          'sub machine gun',
          'marksman weapon',
          'sniper rifle',
          'shotgun',
          'pistol'
        ]}
        Icon={WeaponTypeSvg}
      />
      <p className="add-database-item__label">Ammo Type</p>
      <MultiSelect
        state={ammoType}
        setState={setAmmoType}
        selectOptions={[
          'light rounds',
          'heavy rounds',
          'energy ammo',
          'shotgun shells',
          'sniper ammo',
          'mythic ammo'
        ]}
        Icon={WeaponAmmoType}
      />
      <p className="add-database-item__label">Fire Mode</p>
      <MultiSelect
        state={fireMode}
        setState={setFireMode}
        selectOptions={['single fire', 'burst fire', 'full auto']}
        Icon={FireModeSvg}
      />
      <p className="add-database-item__label">Attachments</p>
      <MultiSelect
        state={attachments}
        setState={setAttachments}
        selectOptions={[
          'extended mag',
          'standard stock',
          'optics',
          'barrel stabilizer',
          'laser sight'
        ]}
        Icon={AttachmentSvg}
      />

      <p className="add-database-item__label">Name</p>
      <IconTextField
        Icon={HeadingSvg}
        value={weaponName}
        setValue={setWeaponName}
        isRequired={true}
        placeholder="Enter weapon name"
      />

      <p className="add-database-item__label">Body Damage</p>
      <IconTextField
        Icon={BodyDamageSvg}
        value={bodyDamage}
        setValue={setBodyDamage}
        isRequired={true}
        placeholder="Enter body damage"
        type="number"
      />
      <p className="add-database-item__label">Headshot Damage</p>
      <IconTextField
        Icon={HeadshotDamageSvg}
        value={headshotDamage}
        setValue={setHeadshotDamage}
        isRequired={true}
        placeholder="Enter headshot damage"
        type="number"
      />
      <p className="add-database-item__label">Leg Damage</p>
      <IconTextField
        Icon={LegDamageSvg}
        value={legDamage}
        setValue={setLegDamage}
        isRequired={true}
        placeholder="Enter leg damage"
        type="number"
      />
      <p className="add-database-item__label">Damage Per Second</p>
      <IconTextField
        Icon={DamagePerSecondSvg}
        value={damagePerSecond}
        setValue={setDamagePerSecond}
        isRequired={true}
        placeholder="Enter damage per second"
        type="number"
      />
      <button
        className="add-database-item__submit-button"
        onClick={handleAddWeaponToDatabase}
      >
        Publish
      </button>
    </div>
  );
};

export default AddWeapon;
