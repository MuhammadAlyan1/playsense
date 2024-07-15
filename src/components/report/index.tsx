import React, { useState } from 'react';
import Modal from '../ui/Modal';
import toast from 'react-hot-toast';
import axios from '../../api/axios';
import Select from '../ui/Select';
import ReportIcon from '../../assets/icons/misc/report.svg?react';

type ReportType = {
  isReportModalOpen: boolean;
  setIsReportModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  reportedProfileId: string;
  itemId: string;
  itemType:
    | 'comment'
    | 'feedback'
    | 'matchanalytics'
    | 'post'
    | 'profile'
    | 'service';
};

const Report: React.FC<ReportType> = ({
  isReportModalOpen,
  setIsReportModalOpen,
  itemId,
  itemType,
  reportedProfileId
}) => {
  const [reportReason, setReportReason] = useState('');
  const handleSubmitReport = async () => {
    try {
      const response = await axios.post(
        '/report',
        { itemId, itemType, reason: reportReason, reportedProfileId },
        { withCredentials: true }
      );

      console.log('REPORT RESPONSE: ', response);
      toast.success('Report submitted!');
      setIsReportModalOpen(false);
      setReportReason('');
    } catch (error) {
      console.log('Failed to submit report', error);
      toast.error('Failed to submit report');
    }
  };

  return (
    <Modal isOpen={isReportModalOpen} onClose={setIsReportModalOpen} title="">
      <div className="report">
        <h1 className="report__title">Report</h1>
        <p className="report__label">Select Reason</p>
        <Select
          Icon={ReportIcon}
          state={reportReason}
          setState={setReportReason}
          selectOptions={[
            'inappropriate content',
            'spam',
            'harassment',
            'misinformation',
            'copyright violation',
            'impersonation',
            'abusive language',
            'violence or threats',
            'hate speech',
            'privacy violation',
            'others'
          ]}
        />
        <p className="report__message">
          Your feedback helps us keep the community safe. Our team will review
          your report promptly.
        </p>
        <button
          disabled={!reportReason}
          className="report__submit-button"
          onClick={handleSubmitReport}
        >
          Report
        </button>
      </div>
    </Modal>
  );
};

export default Report;
