import { useEffect, useState } from "react";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then(res => res.json())
      .then(setCourses);

    fetch("http://localhost:5000/api/lessons")
      .then(res => res.json())
      .then(setLessons);
  }, []);

  const completed = lessons.filter(l => l.status === "Completed");

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Courses: {courses.length}</p>
      <p>Total Lessons: {lessons.length}</p>
      <p>Completed Lessons: {completed.length}</p>
      <p>Active Students: 25</p>
    </div>
  );
}

export default Dashboard;