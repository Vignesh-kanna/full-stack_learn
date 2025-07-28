import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ReportContext = createContext();

export const ReportProvider = ({ children }) => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/reports')
      .then(response => setReports(response.data));
  }, []);

  const addReport = (report) => {
    axios.post('http://localhost:5000/reports', report)
      .then(response => setReports([...reports, response.data]));
  };

  const deleteReport = (id) => {
    axios.delete(`http://localhost:5000/reports/${id}`)
      .then(() => setReports(reports.filter(r => r.id !== id)));
  };

  const toggleSubmission = (id) => {
    const report = reports.find(r => r.id === id);
    axios.patch(`http://localhost:5000/reports/${id}`, { submitted: !report.submitted })
      .then(() => {
        setReports(reports.map(r => r.id === id ? { ...r, submitted: !r.submitted } : r));
      });
  };

  return (
    <ReportContext.Provider value={{ reports, addReport, deleteReport, toggleSubmission }}>
      {children}
    </ReportContext.Provider>
  );
};
