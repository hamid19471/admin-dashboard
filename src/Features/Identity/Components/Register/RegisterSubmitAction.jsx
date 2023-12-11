import { httpService } from "../../../../core/httpService";
export const RegisterSubmitAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await httpService.post("/Users", data);
  return response.status === 200;
};
