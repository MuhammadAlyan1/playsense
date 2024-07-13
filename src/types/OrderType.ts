import { ProfileType } from './ProfileType';
import { ServiceType } from './ServiceType';

export type OrderType = {
  _id: string;
  sNo?: number;
  serviceId: ServiceType;
  customerId: ProfileType;
  sellerId: ProfileType;
  rating: number;
  review: string;
  customerPaymentStatus: 'paid' | 'pending';
  sellerPaymentStatus: 'paid' | 'pending';
  createdAt: string;
  updatedAt: string;
  orderStatus: 'pending' | 'session scheduled' | 'completed';
  sessionUrl: string;
  sessionTime: null | Date;
  sessionAdditionalInformation: string;
};
