import { FormInput, SubmitBtn } from "../components";
import { Link, Form, redirect } from "react-router-dom";
import { instance } from "../utils";
import { toast } from "react-toastify";

export async function action({ request }) {
  try {
    const formEntries = await request.formData();
    const data = Object.fromEntries(formEntries);
    const res = await instance.post("/auth/login", data);
    if (res.status === 200) {
      const { jwt } = res.data;
      localStorage.setItem("jwt", JSON.stringify(jwt));
      toast.success("login success");
      return redirect("/");
    }
  } catch (error) {
    console.log(error);
    const errorMessage =
      error?.response?.data?.message || "please double check your credentials";
    toast.error(errorMessage);
    return null;
  }
}

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        method="post"
      >
        <h4 className="capitalize text-2xl font-bold text-center">Login</h4>
        <FormInput label="email" name="email" type="email" isRequired={true} />
        <FormInput
          label="password"
          name="password"
          type="password"
          isRequired={true}
        />
        <div className="mt-8">
          <SubmitBtn text="Login" />
        </div>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className=" ml-2 link link-hover link-primary capitalize"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
