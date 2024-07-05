import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CSSTransition, TransitionGroup } from "react-transition-group";


const Location = () => {
  const [formFields, setFormFields] = useState({
    name: { value: "", error: false },
    phone: { value: "", error: false },
    email: { value: "", error: false },
    question: { value: "", error: false },
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [id]: { ...prev[id], value },
    }));
  };

  const validate = () => {
    const newFormFields = { ...formFields };
    let isValid = true;

    Object.keys(formFields).forEach((key) => {
      if (!formFields[key].value) {
        newFormFields[key].error = true;
        isValid = false;
      } else {
        newFormFields[key].error = false;
      }
    });

    setFormFields(newFormFields);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
  
      console.log("Form is valid");
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <div className="container mx-auto px-4 mt-10  max-w-[1400px] flex justify-between">
      <div className="flex flex-col-reverse gap-[10px] md:flex md:flex-row">
        <div className="w-full rounded-[10px] border border-[#E5E2EE] p-[1px] md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.1291547853363!2d69.5967407!3d41.4742181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8dcb1af7b7eb%3A0x8895c77d9d1e02d2!2sChirchiq%2C%20Tashkent%20Region!5e0!3m2!1sen!2s!4v1719314050373!5m2!1sen!2s"
            className="h-full w-full rounded-[10px]"
          ></iframe>
        </div>
        <div className="w-full rounded-[10px] border border-[#E5E2EE] p-5 md:w-1/2 lg:p-10">
          <h1 className="mb-2 text-lg font-medium leading-[120%] md:mb-5 md:text-xl lg:mb-6 lg:text-[30px]">
            Остались вопросы?
          </h1>
          <p className="md:text-xm mb-8 font-medium leading-[140%] text-[#7A7687] md:leading-[118%] lg:mb-10 lg:text-[16px]">
            Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
            координаты и наш менеджер перезвонит вам через 10 минут
          </p>
          <form onSubmit={handleSubmit}>
            <Box
              className="md:mb-8 lg:mb-10"
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "100%",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "#7A7687",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "#088269",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#088269",
                },
                "& .MuiInputBase-input": {
                  color: "#7A7687",
                },
                "& .MuiInputBase-input:focus": {
                  color: "#7A7687",
                },
                "& .MuiInputLabel-root": {
                  color: "#7A7687",
                },
                "& .MuiInputLabel-root:hover": {
                  color: "#088269",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#088269",
                },
              }}
              noValidate
              autoComplete="on"
            >
              <TransitionGroup>
                {Object.keys(formFields).map((key) => (
                  <CSSTransition
                    key={key}
                    timeout={500}
                    classNames="fade"
                  >
                    <TextField
                      className="w-full"
                      id={key}
                      label={formFields[key].label}
                      required={formFields[key].required}
                      multiline
                      maxRows={1}
                      variant="standard"
                      value={formFields[key].value}
                      onChange={handleChange}
                      error={formFields[key].error}
                      helperText={formFields[key].error ? "This field is required" : ""}
                    />
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </Box>
            <div className="mt-2 lg:flex lg:gap-7">
              <button className="mb-3 rounded-[50px] bg-[#088269] px-5 py-2 text-[12px] font-semibold text-[#F8F7F3] transition duration-300 ease-in-out hover:bg-[#07745E] lg:px-[30px] lg:py-[11px] lg:text-sm">
                Отправить
              </button>
              <p className="text-[10px] font-medium text-[#7A7687] lg:text-[12px]">
                Нажимая «Отправить», я соглашаюсь c обработкой персональных
                данных на условиях{" "}
                <span className="text-[#088269]">
                  Политики конфиденциальности.
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Location;
