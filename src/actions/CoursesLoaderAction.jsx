import { httpServiceAuth } from "../core/httpService";
import { defer } from "react-router-dom";

export const CoursesLoaderAction = async () => {
  return defer({
    courses: loadCourses(),
  });
};

const loadCourses = async () => {
  const { data } = await httpServiceAuth.get("/Course/list");
  return data;
};
