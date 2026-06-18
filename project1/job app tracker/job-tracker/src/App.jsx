import { useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);

  const addJob = () => {
    const newJob = {
      id: Date.now(),
      company: "Google",
      role: "Software Engineer"
    };

    setJobs([...jobs, newJob]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Job Tracker</h1>

      <button onClick={addJob}>
        Add Dummy Job
      </button>

      {jobs.map(job => (
        <div key={job.id} style={{ marginTop: "10px" }}>
          <h3>{job.company}</h3>
          <p>{job.role}</p>
        </div>
      ))}
    </div>
  );
}

export default App;