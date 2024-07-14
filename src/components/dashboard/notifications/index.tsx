import React, { useEffect, useState } from 'react';
import { NotificationType } from '../../../types/NotificationType';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../api/axios';
import toast from 'react-hot-toast';
import NotificationTableHeaders from './NotificationTableHeaders';
import DataGrid from '../../dataGrid';

const Notifications = () => {
  const [notifications, setNotifications] = useState<NotificationType[] | []>(
    []
  );

  const auth = useAuth();
  const profileData = auth?.auth && auth?.auth;
  const profileId = profileData && profileData?._id;
  console.log('PROFILE ID: ', profileId);
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
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

  if (!profileId) return;
  if (!notifications || notifications.length === 0) return;

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
                  return null;
                }
              })
              .filter((item) => item !== null);
            handleMarkAsRead(unreadNotifications);
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
