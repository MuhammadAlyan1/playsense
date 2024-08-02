import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import toast from 'react-hot-toast';
import { ServiceType } from '../../types/ServiceType';
import Service from './service';
import AddService from './addService';
import Loader from '../ui/Loader';

const Skillify = () => {
  const [services, setServices] = useState<ServiceType[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddServiceModalOpen, setIsAddServiceModalOpen] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/service/');
        console.log(response);
        setServices(response?.data?.data || []);
      } catch (error) {
        console.log('Failed to fetch services: ', error);
        toast.error('Failed to fetch services.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (isLoading) {
    return <Loader size={150} style={{ marginBlock: '1rem' }} />;
  }

  return (
    <div className="skillify">
      <div className="skillify__header">
        <h1 className="skillify__heading">Skillify</h1>
        <button
          className="skillify__button"
          onClick={() => {
            setIsAddServiceModalOpen((prev) => !prev);
          }}
        >
          Publish service
        </button>
      </div>
      <AddService
        isModalOpen={isAddServiceModalOpen}
        setIsModalOpen={setIsAddServiceModalOpen}
        services={services}
        setServices={setServices}
      />
      <div className="skillify__services">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Skillify;
