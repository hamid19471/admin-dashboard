import { useForm } from "react-hook-form";
import logo from "../../../../assets/images/logo.svg";
import {
  Link,
  useNavigation,
  useSubmit,
  useRouteError,
  useActionData,
} from "react-router-dom";
import Button from "../../../../components/Button";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      mobile: "",
      password: "",
    },
    mode: "onBlur",
  });

  const isSuccess = useActionData();
  const routeError = useRouteError();
  const submitLoginForm = useSubmit();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        toast.success("ورود با موفقیت انجام شد");
      }, 3000);
    }
    if (routeError) {
      routeError.response?.data.map((error) =>
        toast.error(`${error.description}`)
      );
    }
  }, [routeError, isSuccess]);
  const loginFieldValidation = {
    mobile: { required: t("login.formValidation.mobile") },
    password: { required: t("login.formValidation.password") },
  };

  const loginSubmitHandler = (data) => {
    submitLoginForm(data, { method: "post" });
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 text-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <img src={logo} alt="webdream-studio" className="w-2/3 items-center" />
        <div>
          <h1 className="font-semibold text-xl">{t("login.mainTitle")}</h1>
          <p className="font-bold text-lg mt-2">
            {t("login.description")}
            <span className="text-blue-500">
              <Link to="/register">{t("login.registerLink")}</Link>
            </span>
          </p>
        </div>
      </div>
      <div className="bg-white/10 px-12 py-6 md:px-28 md:py-8 gap-4 w-5/6 md:w-auto flex flex-col items-center justify-center rounded-lg max-w-7xl">
        <form
          onSubmit={handleSubmit(loginSubmitHandler)}
          className="w-full gap-3 flex flex-col"
        >
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">
                  {t("login.formLabels.mobile")}
                </span>
              </div>
            </label>
            <input
              type="text"
              placeholder={t("login.formPlaceholders.mobile")}
              className={`input input-bordered w-full max-w-sm placeholder:text-sm ${
                errors.mobile && "input-error"
              }`}
              {...register("mobile", loginFieldValidation.mobile)}
            />
            {errors.mobile && (
              <div className="label">
                <span
                  className={`label-text-alt ${errors.mobile && "aj-error"}`}
                >
                  {errors.mobile?.message}
                </span>
              </div>
            )}
          </div>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">
                  {t("login.formLabels.password")}
                </span>
              </div>
            </label>
            <input
              type="password"
              placeholder={t("login.formPlaceholders.password")}
              className={`input input-bordered w-full max-w-sm placeholder:text-sm ${
                errors.password && "input-error"
              }`}
              {...register("password", loginFieldValidation.password)}
            />
            {errors.password && (
              <div className="label">
                <span
                  className={`label-text-alt ${errors.password && "aj-error"}`}
                >
                  {errors.password?.message}
                </span>
              </div>
            )}
          </div>

          <Button
            type="submit"
            name={`${isSubmitting ? t("login.isSubmiting") : t("login.login")}`}
            className={`btn-wide ${(!isDirty || !isValid) && "btn-disabled"}`}
            disabled={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
};
export default Login;
