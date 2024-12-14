import PropTypes from "prop-types";

const Purchase = ({courseLet}) => {
  const {course_name} = courseLet
  return (
    <div>
      <h3 className="text-xl font-medium px-2 m-2 bg-slate-300 my-2 rounded-xl">{course_name}</h3>
    </div>
  );
}; 

Purchase.propTypes = {
  courseLet: PropTypes.object
}
export default Purchase;