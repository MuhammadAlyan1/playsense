import React from 'react';
import { getTimeDifference } from '../../utils/getTimeDifference';
import { MatchAnalyticsType } from '../../types/MatchAnalyticsType';

type MatchAnalyticsTablePropsType = {
  matchData: MatchAnalyticsType[] | [];
};

const MatchAnalyticsTable: React.FC<MatchAnalyticsTablePropsType> = ({
  matchData
}) => {
  return (
    <div className="analytics__data-container">
      {matchData?.length !== 0 && (
        <table className="analytics__table">
          <tr className="analytics__table-row">
            <th className="analytics__table-heading">Time</th>
            <th className="analytics__table-heading">Character</th>
            <th className="analytics__table-heading">Mode</th>
            <th className="analytics__table-heading">Kills</th>
            <th className="analytics__table-heading">Damage</th>
            <th className="analytics__table-heading">Position</th>
          </tr>
          {matchData?.map((match: MatchAnalyticsType) => {
            return (
              <tr className="analytics__table-row">
                <td className="analytics__table-data">
                  {getTimeDifference(match?.createdAt) || 'Just now'}
                </td>
                <td className="analytics__table-data">{match?.character}</td>
                <td className="analytics__table-data">{match?.mode}</td>
                <td className="analytics__table-data">{match?.kills}</td>
                <td className="analytics__table-data">{match?.damage}</td>
                <td className="analytics__table-data">{match?.position}</td>
              </tr>
            );
          })}
        </table>
      )}
      {matchData?.length === 0 && (
        <h2 className="analytics__no-data">No match analytics found.</h2>
      )}
    </div>
  );
};

export default MatchAnalyticsTable;
