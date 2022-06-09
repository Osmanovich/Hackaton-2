import { useState } from "react";
import { useHistory } from "react-router-dom";

// our public libs
import { fruktal } from "@frukmruk/html";

// service
import { loginApi } from "../../services/auth";

// layouts
import MainLayout from "../../layout";

// wrappers
import MainWrapper from "./wrappers/MainWrapper";
import FormWrapper from "./wrappers/FormWrapper";

// components
import FormInput from "../../components/FormInput";
import UpstartButton from "../../components/UpstartButton";
import Menu from "../../components/Menu";

const LoginPage = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();

      console.log({ email, password });

      const result = await loginApi({ email, password });
      console.log({ result });

      const { success, jwt } = result;
      console.log({ success, jwt });

      if (success) {
        localStorage.setItem("UPSTART_JWT", jwt);
        history.push("/");
      } else {
        history.push("/login");
      }
    } catch (error) {
      console.log("[LoginPage/onFormSubmit]", { error });
    }
  };

  return (
    <>
      {fruktal`
        div#
        :class flex flex-col justify-between

          Heading#
            #Heading
          
          MainWrapper#mainwrapper

            FormWrapper#formw
            :onSubmit ${onFormSubmit}

              FormInput#email
              :field email
              :type email
              :placeholder Please enter your email...
              :onChange ${(email) => setEmail(email)}

              FormInput#password
              :field password
              :type password
              :placeholder Please enter your password...
              :onChange ${(password) => setPassword(password)}

              UpstartButton#button
              :type submit

                Go!
      `}
    </>
  );
};

export default LoginPage;
