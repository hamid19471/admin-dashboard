import { defer } from "react-router-dom";
import { httpServiceAuth } from "../core/httpService";

export const CategoriesLoader = async ({ request }) => {
  return defer({
    categories: categoryLoader(request),
  });
};

const categoryLoader = async (request) => {
  const page = new URL(request.url).searchParams.get("page") || 1;
  const pageSize = import.meta.env.VITE_PAGE_SIZE;
  let url = "/CourseCategory/sieve";
  url += `?page=${page}&pageSize=${pageSize}`;
  const { data } = await httpServiceAuth.get(url);
  return data;
};
