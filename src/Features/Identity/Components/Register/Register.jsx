/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from "../../../../components/Button";
import logo from "../../../../assets/images/logo.svg";
import {
  Link,
  useActionData,
  useNavigate,
  useNavigation,
  useRouteError,
  useSubmit,
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const formValidation = {
    mobile: { required: "شماره تماس ضروری است" },
    password: {
      required: "رمز عبور ضروری است",
      minLength: { value: 8, message: "رمز عبور باید حداقل 8 کاراکتر باشد" },
    },
    confirmPassword: {
      required: "تکرار رمز عبور ضروری است",
      validate: (value) => {
        return (
          confirmPasswordChecking === value || "رمز عبور وارد شده برابر نیست"
        );
      },
    },
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      mobile: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });

  const confirmPasswordChecking = watch("password");
  const submitRegisterForm = useSubmit();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  const isSuccess = useActionData();
  const navigate = useNavigate();
  const routeError = useRouteError();

  const registerSubmitHandler = (data) => {
    const { confirmPassword, ...userData } = data;
    submitRegisterForm(userData, { method: "post" });
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        toast.success("ثبت نام با موفقیت انجام شد. لطفا وارد شوید");
        navigate("/login");
      }, 3000);
    }
    if (routeError) {
      routeError.response?.data.map((error) =>
        toast.error(`${error.description}`)
      );
    }
  }, [isSuccess, navigate, routeError]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 text-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <img src={logo} alt="webdream-studio" className="w-2/3 items-center" />
        <div>
          <h1 className="font-semibold text-xl">
            جهت استفاده از خدمات سایت ثبت نام کنید
          </h1>
          <p className="font-bold text-lg mt-2">
            قبلا ثبت نام کردید؟{" "}
            <span className="text-blue-500">
              <Link to="/login">وارد شوید</Link>
            </span>
          </p>
        </div>
      </div>
      <div className="bg-white/10 px-12 py-6 md:px-28 md:py-8 gap-4 w-5/6 md:w-auto flex flex-col items-center justify-center rounded-lg max-w-7xl">
        <form
          onSubmit={handleSubmit(registerSubmitHandler)}
          className="w-full gap-3 flex flex-col"
        >
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">شماره تماس</span>
              </div>
            </label>
            <input
              type="text"
              placeholder="شماره تماس خود را وارد کنید"
              className={`input input-bordered w-full max-w-sm placeholder:text-sm ${
                errors.mobile && "input-error"
              }`}
              {...register("mobile", formValidation.mobile)}
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
                <span className="label-text">رمز عبور</span>
              </div>
            </label>
            <input
              type="password"
              placeholder="رمز عبور را وارد کنید"
              className={`input input-bordered w-full max-w-sm placeholder:text-sm ${
                errors.password && "input-error"
              }`}
              {...register("password", formValidation.password)}
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
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">تکرار رمز عبور</span>
              </div>
            </label>
            <input
              type="password"
              placeholder="رمز عبور را مجدد وارد کنید"
              className={`input input-bordered w-full max-w-sm placeholder:text-sm ${
                errors.confirmPassword && "input-error"
              }`}
              {...register("confirmPassword", formValidation.confirmPassword)}
            />
            {errors.confirmPassword && (
              <div className="label">
                <span
                  className={`label-text-alt ${
                    errors.confirmPassword && "aj-error"
                  }`}
                >
                  {errors.confirmPassword?.message}
                </span>
              </div>
            )}
          </div>
          <Button
            type="submit"
            name={`${isSubmitting ? "در حال انجام عملیات" : "ثبت نام کنید"}`}
            className={`${(!isDirty || !isValid) && "btn-disabled"}`}
            disabled={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
};
export default Register;
