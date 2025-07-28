import { useState, useContext } from 'react';
import { ReportContext } from '../context/ReportContext';

const AddReport = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addReport } = useContext(ReportContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    addReport({ title, description, submitted: false });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        className="form-control mb-2" 
        placeholder="Report Title" 
      />
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        className="form-control mb-2" 
        placeholder="Report Description" 
      />
      <button type="submit" className="btn btn-success">Add Report</button>
    </form>
  );
};

export default AddReport;
