import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { StatisticsType } from '../../../types/StatisticsType';
import toast from 'react-hot-toast';
import axios from '../../../api/axios';

import CustomBarChart from './utils/CustomBarChart';
import { formatRadarChartData } from './utils/formatRadarChartData';
import CustomRadarChart from './utils/CustomRadarChart';
import { formatBarChartData } from './utils/formatBarChartData';
import { getHighestValueItem } from './utils/getHighestValueItem';
import { keyToLabel } from './utils/keyToLabel';
import Loader from '../../ui/Loader';

const DashboardAnalytics = () => {
  const [statistics, setStatistics] = useState<StatisticsType | null>(null);
  const auth = useAuth()?.auth;
  const profileId = auth?._id;
  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get(
          `/match-analytics/statistics/${profileId}`,
          { withCredentials: true }
        );
        console.log('STATISTICS RESPONSE: ', response);
        setStatistics(response?.data?.data);
      } catch (error) {
        console.log('Failed to fetch statistics.', error);
        toast.error('Failed to fetch statistics');
      }
    };

    fetchStatistics();
  }, [profileId]);

  if (!statistics) {
    return <Loader size={150} style={{ marginBlock: '1rem' }} />;
  }

  return (
    <div className="dashboard-analytics">
      <div className="dashboard-analytics__header">
        <h1 className="dashboard-analytics__heading">Analytics</h1>
      </div>
      <p className="dashboard-analytics__label">Core Performance</p>
      <div className="dashboard-analytics__statistics">
        {Object.entries(statistics)?.map(([key, value]) => {
          if (typeof value !== 'number') {
            return;
          }
          return (
            <div className="dashboard-analytics__statistic">
              <p className="dashboard-analytics__value">
                {new Intl.NumberFormat('en-US', {
                  notation: 'compact',
                  maximumSignificantDigits: 3
                }).format(value)}
              </p>
              <p className="dashboard-analytics__key">{keyToLabel(key)}</p>
            </div>
          );
        })}
      </div>
      <p className="dashboard-analytics__label">Player Insights</p>
      <div className="dashboard-analytics__statistics">
        {Object.entries(statistics)?.map(([key, value]) => {
          if (typeof value === 'number') {
            return;
          }
          return (
            <div className="dashboard-analytics__statistic dashboard-analytics__statistic--wide">
              <p className="dashboard-analytics__value">
                {getHighestValueItem(value)}
              </p>
              <p className="dashboard-analytics__key">{keyToLabel(key)}</p>
            </div>
          );
        })}
      </div>
      <p className="dashboard-analytics__label">Gameplay Analysis</p>
      <div className="dashboard-analytics__radar-charts">
        <div className="dashboard-analytics__radar-chart">
          <CustomRadarChart
            data={formatRadarChartData({
              data: statistics.position,
              labelName: 'Position',
              valueName: 'Matches'
            })}
            labelName="Position"
            valueName="Matches"
          />
          <p className="dashboard-analytics__caption">Squad Position</p>
        </div>
        <div className="dashboard-analytics__radar-chart">
          <CustomRadarChart
            data={formatRadarChartData({
              data: statistics.eliminationReasons,
              labelName: 'Reason',
              valueName: 'Eliminations'
            })}
            labelName="Reason"
            valueName="Eliminations"
          />
          <p className="dashboard-analytics__caption">Elimination Reasons</p>
        </div>
        <div className="dashboard-analytics__radar-chart">
          <CustomRadarChart
            data={formatRadarChartData({
              data: statistics.favoriteMaps,
              labelName: 'Maps',
              valueName: 'Matches'
            })}
            labelName="Maps"
            valueName="Matches"
          />
          <p className="dashboard-analytics__caption">Favorite Maps</p>
        </div>
      </div>
      <p className="dashboard-analytics__label">Kill Insights</p>
      <div className="dashboard-analytics__radar-charts">
        <div className="dashboard-analytics__radar-chart">
          <CustomBarChart
            data={formatBarChartData({
              data: statistics.weaponKills,
              labelName: 'Weapon',
              valueName: 'Kills'
            })}
            labelName="Weapon"
            valueName="Kills"
          />
          <p className="dashboard-analytics__caption">Weapons</p>
        </div>
        <div className="dashboard-analytics__radar-chart">
          <CustomBarChart
            data={formatBarChartData({
              data: statistics.characterKills,
              labelName: 'Character',
              valueName: 'Kills'
            })}
            labelName="Character"
            valueName="Kills"
          />
          <p className="dashboard-analytics__caption">Characters</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardAnalytics;
