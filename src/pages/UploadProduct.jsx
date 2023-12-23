import { Form, redirect } from "react-router-dom";
import { FormCheckbox, FormInput, FormSelect, SubmitBtn } from "../components";
import { categories } from "../assets/data";
import { instance } from "../utils";
import { toast } from "react-toastify";

export function loader() {
  const jwt = JSON.parse(localStorage.getItem("jwt")) || undefined;
  if (!jwt) {
    toast.success("Please log in first to upload a product.");
    return redirect("/login");
  }
  return null;
}

export async function action({ request }) {
  try {
    //get data
    const formEntries = await request.formData();
    const data = Object.fromEntries(formEntries);
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    const imageUploadRes = await instance.post(
      "/products/upload-product-image",
      { image: data.image },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    const imageUrl = imageUploadRes.data.data;
    const isNegoInBoolean = data.isNego === "on" ? true : false;
    const product = {
      ...data,
      image: imageUrl,
      price: parseInt(data.price),
      isNego: isNegoInBoolean,
    };
    //call api
    const res = await instance.post("/products", product, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (res.status === 201) {
      toast.success("Your product is uploaded onto the site.");
      return redirect("/myProducts");
    }
    throw new Error("Something went wrong");
  } catch (error) {
    console.log(error);
    if (error?.response?.status === 403) {
      toast("Please log in first");
      return redirect("/login");
    }
    const errorMessage =
      error?.response?.data?.message ||
      "Product upload was not successful. Please try again later.";
    toast.error(errorMessage);
    return null;
  }
}

const UploadProduct = () => {
  return (
    <section className=" grid place-items-center">
      <Form
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        method="post"
        encType="multipart/form-data"
      >
        <h4 className="capitalize text-2xl font-bold text-center">
          Upload And Sell Your Product
        </h4>
        <FormInput label="name" name="name" type={"text"} isRequired={true} />
        <FormInput
          label={"price"}
          name={"price"}
          type={"number"}
          isRequired={true}
        />
        <FormCheckbox
          label={"Is Price Negotiable?"}
          name={"isNego"}
          defaultValue={true}
        />
        <FormSelect label={"category"} name={"category"} list={categories} />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          required={true}
        ></textarea>
        <FormInput
          label={"Phone Number"}
          name={"phNo"}
          type={"text"}
          isRequired={true}
        />
        <FormInput
          label={"Line Id"}
          name={"lineId"}
          type={"text"}
          isRequired={true}
        />
        <label className="label" htmlFor="image">
          <span className="label-text capitalize">Choose Product Image</span>
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          required={true}
        />
        <div className="mt-8">
          <SubmitBtn text="Upload" />
        </div>
      </Form>
    </section>
  );
};

export default UploadProduct;
