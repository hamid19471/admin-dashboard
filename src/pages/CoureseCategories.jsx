import { useState } from "react";
import Button from "../components/Button";
import { Await, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense } from "react";
import CategoriesList from "../Features/Categories/CategoriesList";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import { httpServiceAuth } from "../core/httpService";
import { toast } from "react-hot-toast";

const CoureseCategories = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletCategory, setDeletCategory] = useState();
  const navigate = useNavigate();

  const selectedCategory = (categoryId) => {
    setDeletCategory(categoryId);
    setShowDeleteModal(true);
  };

  const handleDeleteCategory = async () => {
    setShowDeleteModal(false);
    const response = httpServiceAuth.delete(`/CourseCategory/${deletCategory}`);
    toast.promise(response, {
      loading: "در حال حذف...",
      success: () => {
        const url = new URL(window.location.href);
        navigate(url.pathname + url.search);
        return "حذف شد";
      },
      error: ({ data }) => {
        return data.response.data.code;
      },
    });
  };

  const data = useLoaderData();
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <p className="text-white text-lg">تمامی دسته بندی ها</p>
          <Button name="افزودن دسته جدید" />
        </div>
        <div className="mt-6 w-full">
          <Suspense fallback={<Loader />}>
            <Await resolve={data.categories}>
              {(LoadedData) => (
                <CategoriesList
                  setDeletCategory={selectedCategory}
                  categories={LoadedData}
                />
              )}
            </Await>
          </Suspense>
        </div>
      </div>
      <Modal
        isOpen={showDeleteModal}
        open={setShowDeleteModal}
        title="حذف"
        body="آیا از حذف دسته بندی اطمینان دارید؟"
      >
        <button
          type="button"
          className="btn btn-primary text-white font-semibold"
          onClick={() => setShowDeleteModal(false)}
        >
          انصراف
        </button>
        <button
          type="button"
          className="btn btn-error text-white font-semibold px-6"
          onClick={handleDeleteCategory}
        >
          حذف
        </button>
      </Modal>
    </>
  );
};
export default CoureseCategories;
