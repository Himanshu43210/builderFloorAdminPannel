import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { EMAIL, TEXT } from "./Const";
import firebase, { app, auth } from "../../firebase";

const FormBuilder = ({ fields, onFormDataChange, propsFormData }) => {
  const [formData, setFormData] = useState(propsFormData || {});
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    onFormDataChange(formData);
  }, [formData, onFormDataChange]);

  const handleChange = (name, value, isAutogeneratedFolder = false) => {
    const field = fields.find((f) => f.name === name);
    const errors = { ...fieldErrors };

    // if (field.regex && !field.regex.test(value)) {
    //   errors[name] = field.regexErrorMessage;
    // } else {
    //   delete errors[name];
    // }
    console.log(fields);
    if (isAutogeneratedFolder) {
      console.log("inside autogenereatedS");
      const folderValue = [
        formData["plotNumber"],
        formData["sectorNumber"]?.value,
        formData["floor"]?.value && "/" + formData["floor"].value,
      ]
        .filter(Boolean)
        .join("");

      setFormData((prevFormData) => ({
        ...prevFormData,
        folder: folderValue,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setFieldErrors(errors);
  };

  const handleFileChange = (key, value) => {
    const allFiles = [];
    for (const file of value) {
      allFiles.push(file);
    }
    handleChange(key, allFiles);
  };

  const [verificationId, setVerificationId] = useState("");

  const handleSendOtp = async () => {
    const field = fields.find((f) => f.name === "phoneNumber");
    try {
      const confirmation = await auth.signInWithPhoneNumber(
        formData.phoneNumber
      );
      // setVerificationId(confirmation.verificationId);
      // OTP sent successfully
    } catch (error) {
      // Handle error
      console.error("Error sending OTP:", error);
    }
  };

  const configureCaptcha = async () => {
    // handleSendOtp();
    try {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "sign-in-button",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            handleSendOtp();
          },
          defaultCountry: "IN",
        },
        auth
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleSendOtpMail = () => {};

  const handleVerifyOtp = async () => {
    // try {
    //   const credential = firebase.auth.PhoneAuthProvider.credential(
    //     verificationId,
    //     otp
    //   );
    //   await firebase.auth().signInWithCredential(credential);
    //   // User is authenticated
    // } catch (error) {
    //   // Handle error
    //   console.error("Error verifying OTP:", error);
    // }
  };

  return (
    <form className="addbtn">
      <div className="formcontainer">
        {fields.map((field) => (
          <div key={field.name} className="subform">
            <div className="lablediv">
              <label className="lbel" htmlFor={field.name}>
                {field.label}
              </label>
            </div>

            <div className="inputdiv">
              {field.type === TEXT && (
                <input
                  className="inputtag"
                  type={TEXT}
                  disabled={field.disabled}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || formData[field.dataKey] || ""}
                  onChange={(e) =>
                    handleChange(field.name, e.target.value, true)
                  }
                  required={field.isRequired}
                />
              )}
              {field.type === "phoneOTP" && (
                <div className="phone-otp-button">
                  <label
                    onClick={() => {
                      // handleSendOtp();
                      configureCaptcha();
                    }}
                  >
                    Send Otp
                  </label>
                  <div id="recaptcha-container"></div>
                  <input
                    className="inputtag"
                    type={TEXT}
                    id={field.name}
                    name={field.name}
                    value={
                      formData[field.name] || formData[field.dataKey] || ""
                    }
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    required={field.isRequired}
                  />
                </div>
              )}

              {field.type === EMAIL && (
                <input
                  className="inputtag"
                  type={EMAIL}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || formData[field.dataKey] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  required={field.isRequired}
                />
              )}
              {field.type === "emailOtp" && (
                <div className="phone-otp-button">
                  <label
                    onClick={() => {
                      handleSendOtpMail();
                    }}
                  >
                    Send Otp on Mail
                  </label>
                  <input
                    className="inputtag"
                    type={EMAIL}
                    id={field.name}
                    name={field.name}
                    value={
                      formData[field.name] || formData[field.dataKey] || ""
                    }
                    onChange={(e) => handleChange(EMAIL, e.target.value)}
                    required={field.isRequired}
                  />
                </div>
              )}
              {field.type === "password" && (
                <input
                  className="inputtag"
                  type="password"
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || formData[field.dataKey] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  required={field.isRequired}
                />
              )}
              {field.type === "textarea" && (
                <textarea
                  className="inputtag"
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || formData[field.dataKey] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  required={field.isRequired}
                />
              )}
              {field.type === "select" && (
                <Select
                  className="inputtag"
                  id={field.name}
                  name={field.name}
                  value={
                    (formData[field.name] &&
                      (typeof formData[field.name] === "string"
                        ? {
                            label: formData[field.name],
                            value: formData[field.name],
                          }
                        : formData[field.name])) || {
                      label: field.name,
                      value: "",
                    }
                  }
                  options={field.options}
                  onChange={(selectedOption) =>
                    handleChange(field.name, selectedOption || null)
                  }
                  required={field.isRequired}
                />
              )}
              {field.type === "radio" && (
                <div className="radio-button-styling">
                  {field.options.map((option) => (
                    <label key={option.value}>
                      <input
                        className="inputtag"
                        type="radio"
                        name={field.name}
                        value={option.value}
                        checked={
                          (formData[field.name] &&
                            formData[field.name] === option.value) ||
                          formData[field.dataKey] === option.value
                        }
                        onChange={() => handleChange(field.name, option.value)}
                        required={field.isRequired}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              )}
              {field.type === "file" && (
                <input
                  type="file"
                  name={field.name}
                  multiple
                  onChange={(e) => handleChange(field.name, e.target.files)}
                />
              )}

              {fieldErrors[field.name] && <p>{fieldErrors[field.name]}</p>}
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};

FormBuilder.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf([
        TEXT,
        EMAIL,
        "password",
        "textarea",
        "select",
        "radio",
        "file",
      ]).isRequired,
      isRequired: PropTypes.bool.isRequired,
      regex: PropTypes.instanceOf(RegExp),
      requiredErrorMessage: PropTypes.string,
      regexErrorMessage: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  onFormDataChange: PropTypes.func.isRequired,
};

export default FormBuilder;
