import { useDispatch, useSelector } from "react-redux";
import { handleTheme } from "../Redux/action";

const Theme = () => {
  // get the value of theme from store
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.themeReducer.theme);

  function changeTheme(value) {
    dispatch(handleTheme(value));
  }

  return (
    <div>
      <button
        disabled={theme === "light" ? true : false}
        onClick={() => changeTheme("light")}
      >
        Switch to Light
      </button>
      <button
        disabled={theme === "dark" ? true : false}
        onClick={() => changeTheme("dark")}
      >
        Switch to Dark
      </button>
    </div>
  );
};

export default Theme;
