import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import toast from 'react-hot-toast';
import { ServiceType } from '../../types/ServiceType';
import Service from './service';

const Skillify = () => {
  const [services, setServices] = useState<ServiceType[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/service/');
        console.log(response);
        setServices(response?.data?.data || []);
      } catch (error) {
        console.log('Failed to fetch feedback: ', error);
        toast.error('Failed to fetch feedback.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  console.log('SERVICES: ', services);

  if (isLoading) {
    <h1>Loading..</h1>;
  }

  return (
    <div className="skillify">
      <h1 className="skillify__heading">Skillify</h1>
      <div className="skillify__services">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Skillify;
