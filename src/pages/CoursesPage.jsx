import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { coursesGet } from "../Redux/Courses.slice/Courses.slice"

export default function CoursesPage() {
    const dispatch = useDispatch()
    console.log("golam")
    const {loading , courses , error} = useSelector(state => state.courses)
    console.log(courses)

    useEffect(()=>{
        dispatch(coursesGet())
    },[])

  return (
    <div className="flex flex-col items-center">
      <p className="text-7xl font-bold">Courses</p>
      <div>

      </div>
    </div>
  )
}
