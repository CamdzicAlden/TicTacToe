import btnStyles from "../css/NavigationButton.module.css";

function NavigationButton({ content, className }) {
  return (
    <>
      <button className={`${btnStyles.root} ${btnStyles[className]}`}>
        {content}
      </button>
    </>
  );
}

export default NavigationButton;
