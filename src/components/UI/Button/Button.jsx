import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button className={props.btn_class}>{props.label}</button>
    </div>
  );
};

export default Button;
