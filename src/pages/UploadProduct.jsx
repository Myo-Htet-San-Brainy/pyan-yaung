import { Form } from "react-router-dom";
import { FormCheckbox, FormInput, FormSelect, SubmitBtn } from "../components";
import { categories } from "../assets/data";

export async function action() {
  console.log("action");
  return null;
}

const UploadProduct = () => {
  return (
    <section className=" grid place-items-center">
      <Form
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        method="post"
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
          isRequired={true}
        />
        <FormSelect
          label={"category"}
          name={"category"}
          list={categories}
          isRequired={true}
        />
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
