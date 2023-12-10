import { FormInput, SubmitBtn } from "../components";
import { Link, Form } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        method="post"
      >
        <h4 className="capitalize text-2xl font-bold text-center">Login</h4>
        <FormInput label="email" name="identifier" type="email" />
        <FormInput label="password" name="password" type="password" />
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
