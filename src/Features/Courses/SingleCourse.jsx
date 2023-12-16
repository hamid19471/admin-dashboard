import { AcademicCapIcon, ClockIcon } from "@heroicons/react/24/solid";
import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
const SingleCourse = () => {
  const data = useLoaderData();
  return (
    <div>
      <Suspense fallback={<p>در حال دریافت اطلاعات ...</p>}>
        <Await resolve={data.singleCourse}>
          {(SingleCourse) => (
            <div>
              <div className="flex flex-col md:flex-row gap-3">
                <div>
                  <img
                    src={SingleCourse.coverImageUrl}
                    alt={SingleCourse.title}
                    className="rounded-xl "
                  />
                </div>
                <div>
                  <h4 className="text-2xl text-white mb-3">
                    {SingleCourse.title}
                  </h4>
                  <div className="flex flex-col text-center md:flex-row gap-6 my-4 text-xs md:text-sm">
                    <p className="text-white text-sm bg-blue-600 px-4 py-1 rounded-full">
                      سطح دوره: {SingleCourse.courseLevel}
                    </p>
                    <div className="flex items-center justify-center gap-2 bg-blue-600 px-4 py-1 rounded-full text-white">
                      <span>
                        <AcademicCapIcon className="h-5 w-5 text-white" />
                      </span>
                      <p>دسته بندی: {SingleCourse.courseCategory}</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-4 py-1 text-white bg-blue-600 rounded-full">
                      <span>
                        <ClockIcon className="h-5 w-5" />
                      </span>
                      <p>مدت زمان دوره: {SingleCourse.duration} ساعت</p>
                    </div>
                  </div>
                  <p>{SingleCourse.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5numOfChapters gap-3 items-center justify-between mt-12">
                <div className="flex flex-col gap-3 items-center justify-center p-8 bg-slate-600 rounded-xl">
                  <h3 className="text-white text-lg font-bold">قیمت دوره</h3>
                  <p className="text-4xl text-slate-300">
                    {SingleCourse.basePrice}
                  </p>
                  <p className="text-white ">تومان</p>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center p-8 bg-slate-600 rounded-xl">
                  <h3 className="text-white text-lg font-bold">
                    نظرات دانشجویان
                  </h3>
                  <p className="text-4xl text-slate-300">
                    {SingleCourse.numOfReviews}
                  </p>
                  <p className="text-white ">دوره</p>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center p-8 bg-slate-600 rounded-xl">
                  <h3 className="text-white text-lg font-bold">امتیاز</h3>
                  <p className="text-4xl text-slate-300">
                    {SingleCourse.averageReviewRating}
                  </p>
                  <p className="text-white ">دروه</p>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center p-8 bg-slate-600 rounded-xl">
                  <h3 className="text-white text-lg font-bold">تعداد </h3>
                  <p className="text-4xl text-slate-300">
                    {SingleCourse.numOfLectures}
                  </p>
                  <p className="text-white ">قسمت</p>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center p-8 bg-slate-600 rounded-xl">
                  <h3 className="text-white text-lg font-bold">تعداد</h3>
                  <p className="text-4xl text-slate-300">
                    {SingleCourse.numOfChapters}
                  </p>
                  <p className="text-white ">سرفصل</p>
                </div>
              </div>
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
};
export default SingleCourse;
