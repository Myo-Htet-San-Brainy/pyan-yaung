import React from "react";
import { instance } from "../utils";
import { Link, useLoaderData } from "react-router-dom";

export async function loader({ request }) {
  try {
    //
    const data = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    console.log(data);
    //
    const res = await instance.post("/auth/verify-email", data);
    if (res.status === 200) {
      return { isVerified: true };
    }
    throw new Error();
  } catch (error) {
    console.log(error);
    return { isVerified: false };
  }
}

const EmailVerify = () => {
  const { isVerified } = useLoaderData();

  if (!isVerified) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8 ">
        <p className="text-2xl font-semibold text-primary">
          Something went wrong
        </p>
        <div className="mt-10 ">
          <Link to="/login" className="btn btn-secondary">
            Try Login
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-[100vh] place-items-center px-8 ">
      <p className="text-2xl font-semibold text-primary">
        Email Verification Successful
      </p>
      <div className="mt-10 ">
        <Link to="/login" className="btn btn-secondary">
          Login
        </Link>
      </div>
    </main>
  );
};

export default EmailVerify;
