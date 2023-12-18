import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
const CategoriesList = ({ categories: { totalRecords, data } }) => {
  return (
    <div>
      <table className="table">
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
    </div>
  );
};
export default CategoriesList;
