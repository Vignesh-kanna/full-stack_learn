import { useContext } from 'react';
import { ReportContext } from '../context/ReportContext';
import ReportItem from './ReportItem';

const ReportList = () => {
  const { reports } = useContext(ReportContext);

  return (
    <div>
      {reports.length ? reports.map(report => (
        <ReportItem key={report.id} report={report} />
      )) : <p className="text-muted">No Reports Found!</p>}
    </div>
  );
};

export default ReportList;
