import { FormInput, SubmitBtn } from "../components";
import { Link, Form, redirect } from "react-router-dom";
import { instance } from "../utils";
import { toast } from "react-toastify";

export async function action({ request }) {
  try {
    //
    const formEntries = await request.formData();
    const data = Object.fromEntries(formEntries);
    //
    const res = await instance.post("/auth/register", data);
    if (res.status === 201) {
      toast.success(res.data.message);
      return null;
    }
  } catch (error) {
    console.log(error);
    const errorMessage =
      error?.response?.data?.message || "please double check your credentials";
    toast.error(errorMessage);
    return null;
  }
}

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          type="text"
          label="username"
          name="username"
          isRequired={true}
          defaultValue={"Brainy"}
        />
        <FormInput
          type="email"
          label="email"
          name="email"
          isRequired={true}
          defaultValue={"hi@gmail.com"}
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          isRequired={true}
          defaultValue={"secret"}
        />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>

        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
