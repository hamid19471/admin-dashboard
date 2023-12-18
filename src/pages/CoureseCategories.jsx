import Button from "../components/Button";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import CategoriesList from "../Features/Categories/CategoriesList";
import Loader from "../components/Loader";

const CoureseCategories = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-white text-lg">تمامی دسته بندی ها</p>
        <Button name="افزودن دسته جدید" />
      </div>
      <div className="mt-6 w-full">
        <Suspense fallback={<Loader />}>
          <Await resolve={data.categories}>
            {(LoadedData) => <CategoriesList categories={LoadedData} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};
export default CoureseCategories;
