import { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", duration: "" });

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = () => {
    fetch("http://localhost:5000/api/courses")
      .then(res => res.json())
      .then(setCourses);
  };

  const addCourse = () => {
    fetch("http://localhost:5000/api/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }).then(() => {
      loadCourses();
      setForm({ title: "", description: "", duration: "" });
    });
  };

  return (
    <div>
      <h2>Courses</h2>
      <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
      <input placeholder="Duration" onChange={e => setForm({ ...form, duration: e.target.value })} />
      <button onClick={addCourse}>Add</button>

      <ul>
        {courses.map(c => (
          <li key={c._id}>{c.title} ({c.duration})</li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;