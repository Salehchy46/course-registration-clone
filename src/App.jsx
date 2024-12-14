import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Purchases from './Components/Purchases/Purchases';

function App() {
  const [courseToTake, setCourseToTake] = useState([]);
  const [isModalToShow, setIsModalToShow] = useState(false);
  const [totalCreditHours, setTotalCreditHours] = useState(0);

  const handleCourseToTake = course => {
    const isCourseToTake = courseToTake.some((item) => item.id === course.id)

    if(isCourseToTake) {
      setIsModalToShow(true)
      return
    }

    setCourseToTake([...courseToTake, course])
    handleTotalCreditHours(course.credit_hours)
  }

  const handleTotalCreditHours = time => {
    setTotalCreditHours((totalCreditHours) => totalCreditHours + time)
  }

  return (
    <div className='bg-slate-200'>
      <div >
        <h1 className='text-6xl font-bold text-center p-4'>Course Registration</h1>
      </div>
      <div className='flex'>
        <div className='w-3/4'>
          <Courses 
            handleCourseToTake={handleCourseToTake}
            handleTotalCreditHours={handleTotalCreditHours}
          ></Courses>
        </div>
        <div className='w-1/4 h-auto items-center'>
          <Purchases 
            courseToTake={courseToTake}
            totalCreditHours={totalCreditHours}
          ></Purchases></div>
        </div>
        {isModalToShow && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-56 rounded-3xl'>
            <div className='bg-white p-4 rounded flex flex-col items-center'>
             <img src="https://i.ibb.co.com/9cbwbVh/download-6.jpg" alt="" />
              <h2 className='text-center'>The course is already taken</h2>
             <button 
               className='content-center bg-slate-400 p-3 rounded-xl mt-5' 
               onClick={() => setIsModalToShow(false)}
             >Close</button>
            </div>
        </div>
      )}
    </div>
  )
}

export default App
