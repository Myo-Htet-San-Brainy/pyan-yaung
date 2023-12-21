import { FormInput, SubmitBtn } from "../components";
import { Link, Form, redirect, useActionData } from "react-router-dom";
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
      return { email: data.email };
    }
  } catch (error) {
    console.log(error);
    const errorMessage =
      error?.response?.data?.message || "please double check your credentials";
    toast.error(errorMessage);
    return { email: undefined };
  }
}

const Register = () => {
  //
  const data = useActionData();
  if (!data) {
    var email = undefined;
  } else {
    var { email } = data;
  }
  //
  async function handleSendVerificationEmailAgain() {
    if (email === undefined) {
      toast.error("Please use another email and register again.");
      return;
    }
    try {
      //
      const res = await instance.post("/auth/send-verification-email-again", {
        email,
      });
      //
      if (res.status === 200) {
        toast.success(
          "Verification Email Sent Again. Please Check Inbox Of Email You Used To Register."
        );
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.message ||
        "Something went wrong in sending verification email again";
      toast.error(errorMessage);
    }
  }
  //
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
        />
        <FormInput type="email" label="email" name="email" isRequired={true} />
        <FormInput
          type="password"
          label="password"
          name="password"
          isRequired={true}
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
        <p
          className="text-center text-primary hover:text-secondary transition-colors"
          onClick={handleSendVerificationEmailAgain}
        >
          Send Email Verification Link Again
        </p>
      </Form>
    </section>
  );
};
export default Register;
