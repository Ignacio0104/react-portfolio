import { useField } from "formik";
import "../../styles/customInput/CustomInput.css";

interface ICustomInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const CustomInput = ({ label, ...props }: ICustomInputProps) => {
  const [field, meta] = useField(props);
  console.log(props);
  return (
    <>
      {props.type !== "textarea" ? (
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : "input-ok"}
        />
      ) : (
        <textarea
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : "input-ok"}
        ></textarea>
      )}

      <div
        className={`error`}
        style={{
          visibility: `${meta.touched && meta.error ? "visible" : "hidden"}`,
        }}
      >
        {meta.error}
      </div>
    </>
  );
};

export default CustomInput;
