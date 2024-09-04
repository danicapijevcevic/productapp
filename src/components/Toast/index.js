
import "./toast.style.scss";
const Toast = function ({ message, type }) {
  return (
    <div
      className={`shop-toast shop-toast-${
        type === "success" ? "success" : "error"
      }`}
    >
      {message}
    </div>
  );
};



export default Toast;
