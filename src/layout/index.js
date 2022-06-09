import { useHistory } from "react-router-dom";

// our libs
import { register, fruktal } from "@frukmruk/html";

// helpers
import { logout } from "../services/auth";

// wrappers
import MainLayoutWrapper from "./wrappers/MainLayoutWrapper";

// components
import Menu from "../components/Menu";
import Heading from "../components/Heading";

const MainLayout = ({ children }) => {
  let history = useHistory();

  return (
    <MainLayoutWrapper>
      <Heading>
        {fruktal`
            div#cont
            :class flex flex-row
            :class justify-between
            :class min-w-screen

              span#headingtitle
                #Heading

              UpstartButton#button
              :type danger
              :onClick ${() => logout(history)}

                Logout
        `}
      </Heading>

      <Menu />

      {children}
    </MainLayoutWrapper>
  );
};

register({ MainLayout });

export default MainLayout;
