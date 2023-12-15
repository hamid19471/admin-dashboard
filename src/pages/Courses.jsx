import { Await, useLoaderData } from "react-router-dom";
import Button from "../components/Button";
import CourseList from "../Features/Courses/CoursList";
import { Suspense } from "react";
const Courses = () => {
  const data = useLoaderData();
  return (
    <div>
      <Button name="افزودن دوره جدید" />
      <div className="mt-6 w-full">
        <Suspense fallback={<p>در حال دریافت اطلاعات ...</p>}>
          <Await resolve={data.courses}>
            {(LoadedData) => <CourseList courses={LoadedData} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};
export default Courses;
