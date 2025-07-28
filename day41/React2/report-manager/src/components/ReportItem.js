import { useContext } from 'react';
import { ReportContext } from '../context/ReportContext';

const ReportItem = ({ report }) => {
  const { deleteReport, toggleSubmission } = useContext(ReportContext);

  return (
    <div className={`card mb-2 ${report.submitted ? 'opacity-75' : ''}`}>
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className={`mb-1 ${report.submitted ? 'text-decoration-line-through text-muted' : ''}`}>
            {report.title}
          </h5>
          <p className="mb-0">{report.description}</p>
        </div>
        <div>
          <button className="btn btn-primary btn-sm me-2" onClick={() => toggleSubmission(report.id)}>
            {report.submitted ? 'Unsubmit' : 'Submit'}
          </button>
          <button className="btn btn-danger btn-sm" onClick={() => deleteReport(report.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportItem;
