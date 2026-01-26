import { useEffect, useState } from "react";

function Lessons() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/lessons")
      .then(res => res.json())
      .then(setLessons);
  }, []);

  const completeLesson = (id) => {
    fetch(`http://localhost:5000/api/lessons/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "Completed" })
    }).then(() => {
      setLessons(lessons.map(l =>
        l._id === id ? { ...l, status: "Completed" } : l
      ));
    });
  };

  return (
    <div>
      <h2>Lessons</h2>
      <ul>
        {lessons.map(l => (
          <li key={l._id}>
            {l.title} - {l.status}
            {l.status !== "Completed" && (
              <button onClick={() => completeLesson(l._id)}>Mark Completed</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lessons;