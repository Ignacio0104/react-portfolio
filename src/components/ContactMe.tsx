import { Formik, Form } from "formik";
import * as yup from "yup";
import CustomInput from "./pure/CustomInput";
import "../styles/contact/Contact.css";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const advancedSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters long")
    .required("Required!"),
  email: yup.string().email().required("Required!"),
  subject: yup
    .string()
    .min(10, "Subject is too short (10 characters min)")
    .required("Required!"),
  message: yup
    .string()
    .min(10, "Message must have at least 10 characters")
    .required("Required!"),
});

const ContactMe = () => {
  return (
    <div className="contact-container">
      <h2>Let´s work together!</h2>
      <div className="contact-icons-container"></div>
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        onSubmit={() => console.log()}
        validationSchema={advancedSchema}
      >
        {(props) => (
          <Form className="input-container">
            <CustomInput
              label="Name"
              name="name"
              type="text"
              placeholder="Name..."
            ></CustomInput>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="Email..."
            ></CustomInput>
            <CustomInput
              label="Subject"
              name="subject"
              type="text"
              placeholder="Subject..."
            ></CustomInput>
            <CustomInput
              label="Message"
              name="message"
              type="textarea"
              placeholder="Enter your message..."
            ></CustomInput>
            <button type="submit" className="submit-btn">
              <p>Submit</p>
              <span>
                <SendIcon />
              </span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactMe;
