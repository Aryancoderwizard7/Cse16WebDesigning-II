function JobCard({ job, deleteJob }) {
  return (
    <div>
      <h3>{job.company}</h3>
      <p>{job.role}</p>

      <button onClick={() => deleteJob(job.id)}>
        Delete
      </button>
    </div>
  );
}

export default JobCard;