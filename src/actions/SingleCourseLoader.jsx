import { defer } from "react-router-dom";
import { httpServiceAuth } from "../core/httpService";
export const SingleCourseLoader = async ({ params }) => {
  return defer({
    singleCourse: loadSingleData(params),
  });
};

const loadSingleData = async (params) => {
  const { data } = await httpServiceAuth.get(`/Course/by-id/${params.id}`);
  return data;
};
