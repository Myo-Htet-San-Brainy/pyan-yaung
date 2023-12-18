import { Form, redirect } from "react-router-dom";
import { FormCheckbox, FormInput, FormSelect, SubmitBtn } from "../components";
import { categories } from "../assets/data";
import { instance } from "../utils";
import { toast } from "react-toastify";

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
    const errorMessage =
      error?.response?.data?.error?.message ||
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
        <FormInput
          label="name"
          name="name"
          type={"text"}
          isRequired={true}
          defaultValue={"chair"}
        />
        <FormInput
          label={"price"}
          name={"price"}
          type={"number"}
          isRequired={true}
          defaultValue={1000}
        />
        <FormCheckbox
          label={"Is Price Negotiable?"}
          name={"isNego"}
          defaultValue={true}
        />
        <FormSelect
          label={"category"}
          name={"category"}
          list={categories}
          defaultValue={"All"}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          required={true}
          defaultValue={"Some description"}
        ></textarea>
        <FormInput
          label={"Phone Number"}
          name={"phNo"}
          type={"text"}
          isRequired={true}
          defaultValue={"0994765425"}
        />
        <FormInput
          label={"Line Id"}
          name={"lineId"}
          type={"text"}
          isRequired={true}
          defaultValue={"brainythemilkdrinker"}
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
