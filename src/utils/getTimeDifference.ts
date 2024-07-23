import moment from 'moment';

export const getTimeDifference = (time: string): string => {
  return moment(time).fromNow();
};
