import { useForm } from "react-hook-form";

// wishes
// less code ✅
// better validation
// better errors(set,clear,display)
// have control over inputs
// don't deal with events ✅
// easier inputs ✅

export default function Forms() {
  const { register, watch } = useForm();
  return (
    <form>
      <input
        {...register("username")}
        // what is '...'? it will create smth like name, onChange...,
        // so it'll takes object and put all the objects inside of props.
        type="text"
        placeholder="Username"
        required
      />
      <input {...register("email")} type="email" placeholder="Email" required />
      <input
        {...register("password")}
        type="password"
        placeholder="password"
        required
      />
      <input type="submit" value="create Account " />
    </form>
  );
}
