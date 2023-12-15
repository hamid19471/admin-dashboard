import Button from "../components/Button";
import CourseList from "../Features/Courses/CoursList";
const Courses = () => {
  return (
    <div>
      <Button name="افزودن دوره جدید" />
      <div className="mt-6 w-full">
        <CourseList />
      </div>
    </div>
  );
};
export default Courses;
