import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';
import MatchAnalyticsTable from './matchAnalyticsTable';
import { MatchAnalyticsType } from '../../types/MatchAnalyticsType';

const Analytics = () => {
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [matchData, setMatchData] = useState<MatchAnalyticsType[] | []>([]);

  useEffect(() => {
    const fetchMatchAnalytics = async () => {
      const profileId = auth?.auth?._id;

      if (!profileId) return;

      try {
        setIsLoading(true);

        const response = await axios.get(
          `/match-analytics?profileId=${profileId}`,
          {
            withCredentials: true
          }
        );

        if (response?.data?.success) {
          setMatchData(response?.data?.data);
        }
      } catch (error) {
        console.log(
          'There was an error while fetching match analytics: ',
          error
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatchAnalytics();
  }, [auth?.auth?._id]);
  return (
    <div className="analytics">
      <div className="analytics__header">
        <h1 className="analytics__heading">Analytics</h1>
        <button className="analytics__match-analytics-button">
          <Link
            to="/match-analytics"
            className="analytics__match-analytics-link"
          >
            Enter Match analytics
          </Link>
        </button>
      </div>
      {isLoading && <p>Loading..</p>}
      <MatchAnalyticsTable matchData={matchData} />
    </div>
  );
};

export default Analytics;
