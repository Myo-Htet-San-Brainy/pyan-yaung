import { Form, useLoaderData } from "react-router-dom";
import { FormSelect } from "./index.js";
import { categories } from "../assets/data.js";

const Filters = () => {
  const { params } = useLoaderData();
  return (
    <Form className="rounded-lg bg-base-300 px-8 py-5 grid gap-y-16 gap-x-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-end">
      {/* CATEGORIES */}
      <FormSelect
        label="select category"
        name="category"
        size="select-sm"
        list={categories}
        defaultValue={params.category || "All"}
      />

      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
    </Form>
  );
};

export default Filters;
