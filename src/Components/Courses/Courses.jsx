import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('course.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  }, [])

  return (
    <div>
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          courses.map(course => <Course
            key={course.id}
            course={course}
          ></Course>)
        }
      </div>
    </div>
  );
};

export default Courses;