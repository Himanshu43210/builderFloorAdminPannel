import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { backdropClasses } from "@mui/material";
import './../../css/UserStyle.css'
import { brown } from "@mui/material/colors";

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
    handleChange(name, value);
  };

  const handleTextareaChange = (name, value) => {
    handleChange(name, value);
  };

  return (
    <form className="addbtn">
    <div style={ { border:'2px solid black' ,padding:'10px' ,borderRadius:'4px'}}>
      {fields.map((field) => (
        <div key={field.name}  style={{display:'flex' ,flexDirection:'row' }}>
          <div style={{flex:1}}>
          <label htmlFor={field.name}>{field.label}</label>
          </div>

<div style={ { flex:2 , padding:'1px'}}>

          {field.type === "text" && (
            <input
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
              id={field.name}
              name={field.name}
              value={formData[field.name] || formData[field.dataKey] || ""}
              onChange={(e) => handleTextareaChange(field.name, e.target.value)}
              required={field.isRequired}
            />
          )}
          {field.type === "select" && (
            <Select
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
                  <input
                    type="radio"
                    name={field.name}
                    value={option.value}
                    checked={
                      formData[field.name] ||
                      formData[field.dataKey] === option.value
                    }
                    onChange={() => handleRadioChange(field.name, option.value)}
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
      ))}</div>
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
