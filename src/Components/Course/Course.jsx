import PropTypes from "prop-types";

const Course = ({course, handleCourseToTake, handleTotalCreditHours}) => {

  const {id, image, course_name, course_details, credit_hrs, price} = course;
  return (
    <div className="p-3 m-3 bg-white rounded-xl flex flex-col justify-between">
      <div>
        <img className="w-80 h-40 rounded-xl mb-2" src={image} alt={`Image of the poster of Coure: ${course_name}`} />
        <h3 className="text-2xl font-bold mb-3">{course_name}</h3>
        <p>{course_details}</p>
      </div>
      <div className="items-end content-end place-content-end">
        <div className="mt-4 flex justify-between p-3 bg-slate-200">
          <h5 className="text-xl font-bold">৳</h5>
          <h4 className="pl-3">Price: {price}</h4>
          <h4 className="pl-4"> Credit Hours: {credit_hrs}</h4>
        </div>
        <button 
          onClick={() => handleCourseToTake(course, id)}{...() => handleTotalCreditHours()} 
          className="p-3 bg-blue-500 w-full rounded-xl content-end h-auto mt-3"
        >Select</button>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleCourseToTake: PropTypes.func,
  handleTotalCreditHours: PropTypes.func
}

export default Course;