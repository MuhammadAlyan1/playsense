import { useEffect, useState } from 'react';
import { ReportType } from '../../../types/ReportType';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../api/axios';
import toast from 'react-hot-toast';
import ReportsTableHeaders from './ReportsTableHeaders';
import DataGrid from '../../dataGrid';
import Loader from '../../ui/Loader';

const Reports = () => {
  const [reports, setReports] = useState<ReportType[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const profileData = auth?.auth && auth?.auth;
  const profileId = profileData && profileData?._id;

  const handleDeleteReportedContent = async (reportId: string) => {
    try {
      const response = await axios.delete(
        `/report/delete-content/${reportId}`,
        { withCredentials: true }
      );
      if (response?.data?.success) {
        const newReports = reports.map((report) => {
          if (report._id === reportId) {
            return {
              ...report,
              status: 'removed'
            };
          } else {
            return report;
          }
        });

        setReports(newReports);
        toast.success('Successfully deleted reported content.');
      }
    } catch (error) {
      console.log('Failed to delete content: ', error);
      toast.error('Failed to delete content.');
    }
  };
  useEffect(() => {
    const fetchReports = async () => {
      try {
        setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, [profileId]);

  if (!profileId || !reports || isLoading) {
    return <Loader size={150} style={{ marginBlock: '1rem' }} />;
  }

  return (
    <div className="reports">
      <div className="notifications__header">
        <h1 className="notifications__heading">Reports</h1>
      </div>
      <DataGrid
        columns={ReportsTableHeaders({ handleDeleteReportedContent })}
        data={reports}
      />
    </div>
  );
};

export default Reports;
