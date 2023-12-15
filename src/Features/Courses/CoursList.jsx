import CourseCard from "./CourseCard";

const CourseList = ({ courses }) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <div key={course.id}>
          <CourseCard {...course} />
        </div>
      ))}
    </div>
  );
};
export default CourseList;
