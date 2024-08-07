import { useEffect, useState } from 'react';
import { NotificationType } from '../../../types/NotificationType';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../api/axios';
import toast from 'react-hot-toast';
import NotificationTableHeaders from './NotificationTableHeaders';
import DataGrid from '../../dataGrid';
import Loader from '../../ui/Loader';

const Notifications = () => {
  const [notifications, setNotifications] = useState<NotificationType[] | []>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const profileData = auth?.auth && auth?.auth;
  const profileId = profileData && profileData?._id;
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          '/notification?getAllNotifications=true',
          {
            withCredentials: true
          }
        );

        if (response?.data?.success) {
          setNotifications(
            response?.data?.data.map(
              (data: NotificationType, index: number) => {
                return {
                  ...data,
                  sNo: index + 1
                };
              }
            )
          );
        }
      } catch (error) {
        console.log('Failed to fetch notifications: ', error);
        toast.error('Failed to fetch notifications.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotifications();
  }, [profileId]);

  const handleMarkAsRead = async (notificationIds: string[]) => {
    try {
      const response = await axios.put(
        '/notification',
        {
          notificationIds
        },
        {
          withCredentials: true
        }
      );

      if (response?.data?.success) {
        setNotifications((notifications): NotificationType[] => {
          return notifications.map((notification): NotificationType => {
            if (notificationIds.includes(notification._id)) {
              return {
                ...notification,
                isRead: true
              };
            } else {
              return notification;
            }
          });
        });
        toast.success('Successfully marked notification as read.');
      }
    } catch (error) {
      console.log('Failed to fetch notifications: ', error);
      toast.error('Failed to fetch notifications.');
    }
  };

  if (!profileId || !notifications || isLoading) {
    return <Loader size={150} style={{ marginBlock: '1rem' }} />;
  }

  return (
    <div className="notifications">
      <div className="notifications__header">
        <h1 className="notifications__heading">Notifications</h1>
        <button
          className="notifications__mark-all-as-read-button"
          onClick={() => {
            const unreadNotifications = notifications
              .map((notification) => {
                if (notification.isRead === false) {
                  return notification._id;
                } else {
                  return undefined;
                }
              })
              .filter((item): item is string => item !== undefined);
            if (unreadNotifications.length === 0) return;
            handleMarkAsRead(unreadNotifications ? unreadNotifications : []);
          }}
        >
          Mark All As Read
        </button>
      </div>
      <DataGrid
        columns={NotificationTableHeaders({
          handleMarkAsRead
        })}
        data={notifications}
      />
    </div>
  );
};

export default Notifications;
