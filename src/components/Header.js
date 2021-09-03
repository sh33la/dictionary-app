import React from "react";
import Brightness5RoundedIcon from "@material-ui/icons/Brightness5Rounded";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";
import { WHITE } from "../utils/constants";

//style
import "../styles/Header.css";

//store
import { useSelector, useDispatch } from "react-redux";
import { toggleMode } from "../redux-stuff/dictionarySlice";

function Header() {
  const darkMode = useSelector((state) => state.dictionary.darkMode);
  const dispatch = useDispatch();

  return (
    <div className="header">
      {darkMode ? (
        <Brightness5RoundedIcon
          style={{ color: WHITE }}
          onClick={(e) => dispatch(toggleMode())}
        />
      ) : (
        <Brightness4RoundedIcon
          style={{ color: WHITE }}
          onClick={(e) => dispatch(toggleMode())}
        />
      )}
    </div>
  );
}

export default Header;
