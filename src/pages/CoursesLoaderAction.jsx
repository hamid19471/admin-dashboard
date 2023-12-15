import { httpServiceAuth } from "../core/httpService";

export const CoursesLoaderAction = async () => {
  const { data } = await httpServiceAuth.get("/Course/list");
  return data;
};
