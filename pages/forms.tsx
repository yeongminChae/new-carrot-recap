import { FieldErrors, useForm } from "react-hook-form";

// wishes
// less code ✅
// better validation
// better errors(set,clear,display)
// have control over inputs
// don't deal with events ✅
// easier inputs ✅

interface ILofinForm {
  username: string;
  password: string;
  email: string;
  errors?: string;
}

export default function Forms() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
    resetField,
  } = useForm<ILofinForm>({
    mode: "onBlur",
  });
  const onValid = (data: ILofinForm) => {
    console.log("i'm valid");
    setError("errors", { message: "backend is offline" });
    setError("username", { message: "username is taken" });
  };
  const onInValid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <input
        {...register("username", {
          required: "username is required",
          minLength: {
            value: 5,
            message: "more than 5 chars",
          },
        })}
        // what is '...'? it will create smth like name, onChange...,
        // so it'll takes object and put all the objects inside of props.
        type="text"
        placeholder="Username"
      />
      {errors.username?.message}
      <input
        {...register("email", {
          required: "email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") ? "" : "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
        className={`${
          Boolean(errors.email?.message) ? "border border-red-500" : ""
        }`}
      />
      {errors.email?.message}
      <input
        {...register("password", {
          required: "password is required",
        })}
        type="password"
        placeholder="password"
      />
      <input type="submit" value="create Account " />
      {errors.errors?.message}
    </form>
  );
}
