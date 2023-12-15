import { Await, useLoaderData } from "react-router-dom";
import Button from "../components/Button";
import CourseList from "../Features/Courses/CoursList";
import { Suspense } from "react";
const Courses = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-white text-lg">تمامی دوره ها</p>
        <Button name="افزودن دوره جدید" />
      </div>
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
