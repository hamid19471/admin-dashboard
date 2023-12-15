import CourseCard from "./CourseCard";
import { useLoaderData } from "react-router-dom";
const CourseList = () => {
  const courseData = useLoaderData();
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {courseData.map((course) => (
        <div key={course.id}>
          <CourseCard {...course} />
        </div>
      ))}
    </div>
  );
};
export default CourseList;
