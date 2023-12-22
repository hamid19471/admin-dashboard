import { useNavigation } from "react-router-dom";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
const CategoriesList = ({ categories: { totalRecords, data } }) => {
  const navigation = useNavigation();
  return (
    <div>
      {navigation.state !== "idle" && <Loader />}
      <table className={`table ${navigation.state !== "idle" && "opacity-25"}`}>
        <thead>
          <tr className="text-sm text-white">
            <th>نام</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {data.map((category) => (
            <tr key={category.id} className="odd:bg-gray-600 text-white">
              <td>{category.name}</td>
              <td className="flex items-center justify-start gap-2">
                <button>
                  <PencilSquareIcon className="w-4 h-4" />
                </button>
                <button>
                  <TrashIcon className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Pagination totalRecords={totalRecords} />
      </div>
    </div>
  );
};
export default CategoriesList;
