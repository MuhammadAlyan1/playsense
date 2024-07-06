import { useState } from 'react';
import axios from '../../api/axios';
import toast from 'react-hot-toast';
import Modal from '../ui/Modal';
import Select from '../ui/Select';
import GameSvg from '../../assets/icons/game.svg?react';
import HeadingSvg from '../../assets/icons/misc/heading.svg?react';
import PriceSvg from '../../assets/icons/misc/money.svg?react';
import PaypalSvg from '../../assets/icons/misc/paypal.svg?react';
import WordCounterTextArea from '../ui/WordCounterTextArea';
import { ServiceType } from '../../types/ServiceType';
import UploadImage from '../ui/UploadImage';
import { uploadImage } from '../../utils/uploadImage';
import IconTextField from '../ui/IconTextField';
import serviceDefaultCoverImage from '../../assets/placeholders/banner.jpg';

type AddServiceType = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  services: ServiceType[];
  setServices: (value: ServiceType[]) => void;
};

const AddService: React.FC<AddServiceType> = ({
  isModalOpen,
  setIsModalOpen,
  services,
  setServices
}) => {
  const [serviceTitle, setServiceTitle] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [paypalAccountId, setPaypalAccountId] = useState('');
  const [servicePrice, setServicePrice] = useState(0);
  const [serviceGame, setServiceGame] = useState('apex legends');
  const [serviceCoverImage, setServiceCoverImage] = useState<File | string>(
    serviceDefaultCoverImage
  );

  const handleSubmitFeedback = async () => {
    if (!serviceDescription.trim()) {
      toast.error('Please enter feedback.');
      return;
    }

    console.log('COVER IMAGE: ', serviceCoverImage);

    if (
      !serviceTitle.trim() ||
      !serviceDescription.trim() ||
      !paypalAccountId.trim() ||
      servicePrice === 0 ||
      serviceGame.trim() === ''
    ) {
      toast.error('Please enter all fields');
      return;
    }

    if (paypalAccountId.trim()?.length !== 13) {
      toast.error('Please enter a valid PayPal account ID.');
      return;
    }

    try {
      let coverImageUrl = '';
      if (typeof serviceCoverImage === 'string') {
        const blob = await (await fetch(serviceDefaultCoverImage)).blob();

        const defaultCoverImageFile = new File(
          [blob],
          'defaultCoverImage.jpg',
          { type: 'image/jpeg' }
        );

        coverImageUrl = (await uploadImage(defaultCoverImageFile)) || '';
      } else {
        coverImageUrl = (await uploadImage(serviceCoverImage)) || '';
      }

      if (!coverImageUrl) {
        toast.error('Failed to upload image');
        return;
      }

      const response = await axios.post(
        '/service',
        {
          title: serviceTitle,
          game: serviceGame,
          price: servicePrice,
          coverPicture: coverImageUrl,
          description: serviceDescription,
          paypalAccountId
        },
        {
          withCredentials: true
        }
      );
      if (response?.data?.success === true) {
        if (response?.data?.data as ServiceType) {
          setServices([response.data.data, ...services]);
          toast.success('Your service is live!');
        }
      }
    } catch (error) {
      console.log('Failed to publish service: ', error);
      toast.error('Failed to publish service');
    } finally {
      setIsModalOpen(false);
      setServiceDescription('');
      setServiceGame('apex legends');
      setServicePrice(0);
      setServiceTitle('');
      setPaypalAccountId('');
      setServiceCoverImage(serviceDefaultCoverImage);
    }
  };

  return (
    <Modal isOpen={isModalOpen} onClose={setIsModalOpen} title={''}>
      <div className="add-service">
        <h1 className="add-service__heading">Add Service</h1>
        <UploadImage
          image={serviceCoverImage}
          setImage={setServiceCoverImage}
          label="Upload cover image"
        />
        <p className="add-service__label">Title</p>
        <IconTextField
          Icon={HeadingSvg}
          value={serviceTitle}
          setValue={
            setServiceTitle as React.Dispatch<
              React.SetStateAction<string | number>
            >
          }
          isRequired={true}
          placeholder="Enter service title"
        />

        <p className="add-service__label">Price</p>
        <IconTextField
          Icon={PriceSvg}
          value={servicePrice}
          setValue={
            setServicePrice as React.Dispatch<
              React.SetStateAction<string | number>
            >
          }
          isRequired={true}
          placeholder="Enter service price"
          type="number"
        />
        <p className="add-service__label">PayPal Account ID</p>
        <IconTextField
          Icon={PaypalSvg}
          value={paypalAccountId}
          setValue={
            setPaypalAccountId as React.Dispatch<
              React.SetStateAction<string | number>
            >
          }
          isRequired={true}
          placeholder="Enter PayPal Account ID"
        />
        <p className="add-service__label">Game</p>
        <Select
          state={serviceGame}
          setState={setServiceGame}
          selectOptions={['Apex Legends', 'Warzone', 'CSGO']}
          Icon={GameSvg}
        />
        <p className="add-service__label">Description</p>
        <WordCounterTextArea
          state={serviceDescription}
          setState={setServiceDescription}
          MAX_WORD_COUNT={800}
          placeholder="Write description using markdown."
        />

        <button
          className="add-service__submit-button"
          onClick={handleSubmitFeedback}
        >
          Publish
        </button>
      </div>
    </Modal>
  );
};

export default AddService;
