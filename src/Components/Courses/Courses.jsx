import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({handleCourseToTake, handleTotalCreditHours}) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('course.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  }, [])

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          courses.map(course => <Course
            key={course.id}
            course={course}
            handleCourseToTake={handleCourseToTake}
            handleTotalCreditHours={handleTotalCreditHours}
          ></Course>)
        }
      </div>
    </div>
  );
};

Courses.propTypes = {
  handleCourseToTake: PropTypes.func,
  handleTotalCreditHours: PropTypes.func
}

export default Courses;