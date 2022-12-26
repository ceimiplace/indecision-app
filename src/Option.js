const Option = (props) => {
  return (
    <div>
      <p>{props.optionText}</p>
      <button
        className="button button--link"
        onClick={() => props.removeOption(props.optionText)}
      >
        Remove
      </button>
    </div>
  );
};
export default Option;
