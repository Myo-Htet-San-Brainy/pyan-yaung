import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const isSubmitting = useNavigation()?.state === "submitting";
  return (
    <button
      className="btn btn-primary btn-block capitalize"
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span> Sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};

export default SubmitBtn;
