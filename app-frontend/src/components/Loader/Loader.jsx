import { Audio } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <Audio height="100" width="100" color="#a1a1a1" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
