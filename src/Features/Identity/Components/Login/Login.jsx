import { useForm } from "react-hook-form";
import logo from "../../../../assets/images/logo.svg";
import { Link, useNavigation } from "react-router-dom";
import Button from "../../../../components/Button";

const Login = () => {
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

  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  const loginFieldValidation = {
    mobile: { required: "شماره تماس ضروری است" },
    password: { required: "رمز عبور ضروری است" },
  };

  const loginSubmitHandler = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 text-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <img src={logo} alt="webdream-studio" className="w-2/3 items-center" />
        <div>
          <h1 className="font-semibold text-xl">
            جهت استفاده از خدمات سایت وارد شوید
          </h1>
          <p className="font-bold text-lg mt-2">
            کاربر جدید هستید؟
            <span className="text-blue-500">
              <Link to="/register">ثبت نام کنید</Link>
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
                <span className="label-text">شماره تماس</span>
              </div>
            </label>
            <input
              type="text"
              placeholder="شماره تماس خود را وارد کنید"
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
                <span className="label-text">رمز عبور</span>
              </div>
            </label>
            <input
              type="password"
              placeholder="رمز عبور را وارد کنید"
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
            name={`${isSubmitting ? "در حال انجام عملیات" : "وارد شوید "}`}
            className={`${(!isDirty || !isValid) && "btn-disabled"}`}
            disabled={isSubmitting}
          />
        </form>
      </div>
    </div>
  );
};
export default Login;
