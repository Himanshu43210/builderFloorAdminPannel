import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const FormBuilder = ({ fields, onFormDataChange, propsFormData }) => {
  const [formData, setFormData] = useState(propsFormData || {});
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    onFormDataChange(formData);
  }, [formData, onFormDataChange]);

  const handleChange = (name, value) => {
    const field = fields.find((f) => f.name === name);
    const errors = { ...fieldErrors };

    if (field.regex && !field.regex.test(value)) {
      errors[name] = field.regexErrorMessage;
    } else {
      delete errors[name];
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setFieldErrors(errors);
  };

  const handleSelectChange = (name, selectedOption) => {
    const value = selectedOption ? selectedOption : null;
    handleChange(name, value);
  };

  const handleRadioChange = (name, value) => {
    console.log(formData);
    handleChange(name, value);
  };

  const handleTextareaChange = (name, value) => {
    handleChange(name, value);
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
              {field.type === "text" && (
                <input
                  className="inputtag"
                  type="text"
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || formData[field.dataKey] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  required={field.isRequired}
                />
              )}
              {field.type === "email" && (
                <input
                  className="inputtag"
                  type="email"
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || formData[field.dataKey] || ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  required={field.isRequired}
                />
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
                  onChange={(e) =>
                    handleTextareaChange(field.name, e.target.value)
                  }
                  required={field.isRequired}
                />
              )}
              {field.type === "select" && (
                <Select
                  className="inputtag"
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || formData[field.dataKey] || ""}
                  options={field.options}
                  onChange={(selectedOption) =>
                    handleSelectChange(field.name, selectedOption)
                  }
                  required={field.isRequired}
                />
              )}
              {field.type === "radio" && (
                <div>
                  {field.options.map((option) => (
                    <label key={option.value}>
                      {console.log(
                        formData[field.name],
                        formData[field.name] === option.value
                      )}
                      {console.log(
                        formData[field.name] &&
                          formData[field.name] === option.value,
                        formData[field.dataKey] === option.value
                      )}
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
                        onChange={() =>
                          handleRadioChange(field.name, option.value)
                        }
                        required={field.isRequired}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
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
        "text",
        "email",
        "password",
        "textarea",
        "select",
        "radio",
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
