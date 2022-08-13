import "./Button.css";
const Button = (props) => {
  return (
    <div>
      <button class={props.button_classes}>{props.label}</button>
    </div>
  );
};

export default Button;
