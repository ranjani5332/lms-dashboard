import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "Student",
    email: "student@gmail.com",
    role: "Learner"
  });

  return (
    <div>
      <h2>Profile</h2>
      <input value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
      <input value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
      <input value={user.role} onChange={e => setUser({ ...user, role: e.target.value })} />
    </div>
  );
}

export default Profile;