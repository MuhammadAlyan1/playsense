import { useState } from 'react';
import toast from 'react-hot-toast';
import IconTextField from '../../ui/IconTextField';
import DiscordIcon from '../../../assets/icons/socials/discord.svg?react';
import DatePicker from 'react-datepicker';
import { OrderType } from '../../../types/OrderType';
import axios from '../../../api/axios';
import Modal from '../../ui/Modal';
import WordCounterTextArea from '../../ui/WordCounterTextArea';

type ScheduleSessionType = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  openedModalOrderId: string;
  setOrders: React.Dispatch<React.SetStateAction<OrderType[]>>;
};

const ScheduleSession: React.FC<ScheduleSessionType> = ({
  isModalOpen,
  setIsModalOpen,
  openedModalOrderId,
  setOrders
}) => {
  const [sessionAdditionalInformation, setSessionAdditionalInformation] =
    useState('');
  const [sellerDiscordId, setDiscordId] = useState('');
  const [sessionUrl, setSessionUrl] = useState('');
  const [sessionTime, setSessionTime] = useState<Date | null>(null);
  const handleSubmitFeedback = async () => {
    if (!sellerDiscordId.trim() || !sessionUrl.trim() || !sessionTime) {
      toast.error('Please enter all fields.');
      return;
    }

    try {
      const response = await axios.put(
        `/order/${openedModalOrderId}`,
        {
          sessionAdditionalInformation,
          sellerDiscordId,
          sessionUrl,
          sessionTime,
          orderStatus: 'session scheduled'
        },
        {
          withCredentials: true
        }
      );
      if (response?.data?.success === true) {
        if (response?.data?.data as OrderType) {
          setOrders((prev: OrderType[]) =>
            prev.map((order: OrderType) => {
              if (order._id === openedModalOrderId) {
                return {
                  ...order,
                  sellerDiscordId: response?.data?.data?.sellerDiscordId,
                  sessionUrl: response?.data?.data?.sessionUrl,
                  orderStatus: response?.data?.data?.orderStatus,
                  sessionTime: response?.data?.data?.sessionTime,
                  sessionAdditionalInformation:
                    response?.data?.data?.sessionAdditionalInformation
                };
              } else {
                return order;
              }
            })
          );
          toast.success('Scheduled session successfully!');
        }
      }
    } catch (error) {
      console.log('Failed to schedule session: ', error);
      toast.error('Failed to schedule session');
    } finally {
      setIsModalOpen(false);
      setSessionAdditionalInformation('');
      setDiscordId('');
      setSessionTime(null);
    }
  };

  return (
    <Modal isOpen={isModalOpen} onClose={setIsModalOpen} title={''}>
      <div className="schedule-session">
        <h1 className="schedule-session__heading">Schedule Session</h1>

        <p className="schedule-session__label">Discord ID</p>
        <IconTextField
          isRequired={true}
          placeholder="Discord ID"
          value={sellerDiscordId}
          setValue={setDiscordId}
          Icon={DiscordIcon}
        />
        <p className="schedule-session__label">Session URL</p>
        <IconTextField
          isRequired={true}
          placeholder="Google Meet, Microsoft Teams, or Zoom meeting link."
          value={sessionUrl}
          setValue={setSessionUrl}
          Icon={DiscordIcon}
        />
        <p className="schedule-session__label">Session Time</p>
        <DatePicker
          selected={sessionTime}
          onChange={(date) => setSessionTime(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          showIcon
          minDate={new Date()}
          placeholderText="Please select session time."
          dateFormat="MMMM d, yyyy h:mm aa"
        />

        <p className="schedule-session__label">Additional Information</p>
        <WordCounterTextArea
          state={sessionAdditionalInformation}
          setState={setSessionAdditionalInformation}
          placeholder="Enter any additional information."
        />
        <button
          className="schedule-session__submit-button"
          onClick={handleSubmitFeedback}
        >
          Schedule Session
        </button>
      </div>
    </Modal>
  );
};

export default ScheduleSession;
