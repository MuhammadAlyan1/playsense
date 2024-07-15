import React, { useEffect, useState } from 'react';
import { ReportType } from '../../../types/ReportType';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../api/axios';
import toast from 'react-hot-toast';
import ReportsTableHeaders from './ReportsTableHeaders';
import DataGrid from '../../dataGrid';

const Reports = () => {
  const [reports, setReports] = useState<ReportType[] | []>([]);

  const auth = useAuth();
  const profileData = auth?.auth && auth?.auth;
  const profileId = profileData && profileData?._id;
  console.log('PROFILE ID: ', profileId);
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('/report', {
          withCredentials: true
        });

        if (response?.data?.success) {
          setReports(
            response?.data?.data.map((data: ReportType, index: number) => {
              return {
                ...data,
                sNo: index + 1
              };
            })
          );
        }
      } catch (error) {
        console.log('Failed to fetch reports: ', error);
        toast.error('Failed to fetch reports.');
      }
    };

    fetchReports();
  }, [profileId]);

  if (!profileId) return;
  if (!reports || reports.length === 0) return;

  return (
    <div className="reports">
      <div className="notifications__header">
        <h1 className="notifications__heading">Reports</h1>
        <button className="notifications__mark-all-as-read-button">
          Mark All As Read
        </button>
      </div>
      <DataGrid columns={ReportsTableHeaders()} data={reports} />
    </div>
  );
};

export default Reports;
