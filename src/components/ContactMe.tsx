import { Formik, Form } from "formik";
import * as yup from "yup";
import CustomInput from "./pure/CustomInput";
import "../styles/contact/Contact.css";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const advancedSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters long")
    .required("This field is required!"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("This field is required!"),
  subject: yup
    .string()
    .min(5, "Subject is too short (5 characters min)")
    .required("This field is required!"),
  message: yup
    .string()
    .min(10, "Message must have at least 10 characters")
    .required("This field is required!"),
});

const ContactMe = () => {
  const [mailInformation, setMailInformation] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ error: false, description: "" });
  const [succes, setSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setMailInformation({ ...mailInformation, [field]: value });
  };

  const handleErrorClose = () => {
    setIsError({ error: false, description: "" });
  };

  const handleSubmit = () => {
    setIsLoading(true);
    emailjs
      .send(
        "service_13z2oas",
        "template_khgxahe",
        mailInformation,
        "2YXjJJN_IwyNytu48"
      )
      .then((result) => {
        setMailInformation({ name: "", email: "", subject: "", message: "" });
        setSuccess(true);
      })
      .catch((e) =>
        setIsError({
          error: true,
          description: "There was an error! Please try again later",
        })
      )
      .finally(() => setIsLoading(false));
  };

  if (succes) {
    return (
      <div className="thanks-message-container">
        <h2 className="thank-title">
          Thank you for your message! I'll get back to you as soon as posible
        </h2>
        <button className="new-message-btn" onClick={() => setSuccess(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <h2>Let´s work together!</h2>
      <div className="contact-icons-container">
        <Link to="https://www.instagram.com/nachosmirlian/" target="_blank">
          <InstagramIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/ignacio-smirlian" target="_blank">
          <LinkedInIcon />
        </Link>
        <Link to="https://github.com/Ignacio0104" target="_blank">
          <GitHubIcon />
        </Link>
      </div>
      <Formik
        initialValues={mailInformation}
        onSubmit={handleSubmit}
        validationSchema={advancedSchema}
      >
        {(props) => (
          <Form className="input-container">
            <CustomInput
              label="Name"
              name="name"
              type="text"
              placeholder="Name..."
              handleChange={handleChange}
            ></CustomInput>
            <CustomInput
              label="Email"
              name="email"
              type="text"
              placeholder="Email..."
              handleChange={handleChange}
            ></CustomInput>
            <CustomInput
              label="Subject"
              name="subject"
              type="text"
              placeholder="Subject..."
              handleChange={handleChange}
            ></CustomInput>
            <CustomInput
              label="Message"
              name="message"
              type="textarea"
              placeholder="Enter your message..."
              handleChange={handleChange}
            ></CustomInput>
            <button type="submit" className="submit-btn">
              {isLoading ? (
                <CircularProgress className="spinner" color="secondary" />
              ) : (
                <>
                  <p>Submit</p>
                  <span className="send-icon">
                    <SendIcon />
                  </span>
                </>
              )}
            </button>
          </Form>
        )}
      </Formik>
      <Snackbar
        open={isError.error}
        autoHideDuration={6000}
        onClose={handleErrorClose}
      >
        <Alert
          onClose={handleErrorClose}
          severity="warning"
          sx={{ width: "100%" }}
        >
          {isError.description}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactMe;
