import { useField } from "formik";
import "../../styles/customInput/CustomInput.css";

interface ICustomInputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  handleChange: (arg1: string, arg2: string) => void;
}

const CustomInput = ({ label, handleChange, ...props }: ICustomInputProps) => {
  const [field, meta] = useField(props);
  return (
    <>
      {props.type !== "textarea" ? (
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : "input-ok"}
          onBlur={(e) => handleChange(props.name, e.target.value)}
        />
      ) : (
        <textarea
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : "input-ok"}
          onBlur={(e) => handleChange(props.name, e.target.value)}
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
