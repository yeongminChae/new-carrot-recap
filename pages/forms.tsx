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
}

export default function Forms() {
  const { register, watch, handleSubmit } = useForm<ILofinForm>({});
  const onValid = (data: ILofinForm) => {
    console.log("i'm valid");
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
      <input
        {...register("email", {
          required: "email is required",
        })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", {
          required: "password is required",
        })}
        type="password"
        placeholder="password"
      />
      <input type="submit" value="create Account " />
    </form>
  );
}
