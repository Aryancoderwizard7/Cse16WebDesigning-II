import { useState } from "react";

function JobForm({ addJob }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    addJob({
      id: Date.now(),
      company,
      role
    });

    setCompany("");
    setRole("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button>Add Job</button>
    </form>
  );
}

export default JobForm;