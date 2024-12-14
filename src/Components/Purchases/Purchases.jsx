import Purchase from "../Purchase/Purchase";
import PropTypes from "prop-types";



const Purchases = ({courseToTake, totalCreditHours}) => {
  return (
    <div className="bg-white rounded-xl">
      <div>
        <h3>Credit Hours Remaining: 20</h3>
      </div>
      <h3 className="p-3 text-2xl font-bold">Purchased Courses: {courseToTake.length}</h3>
      {
        courseToTake.map((courseLet, idx) => <Purchase key={idx} courseLet={courseLet}></Purchase>)
      }
      <div>
        <h3>Total Hours: {totalCreditHours}</h3>
        <h3>Total Price: {}</h3>
      </div>
    </div>
  );
};

Purchases.propTypes = {
  courseToTake: PropTypes.array,
  totalCreditHours: PropTypes.number
}
export default Purchases;