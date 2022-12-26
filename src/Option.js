const Option = (props) => {
  return (
    <div>
      <p>{props.optionText}</p>
      <button onClick={() => props.removeOption(props.optionText)}>
        Remove
      </button>
    </div>
  );
};
export default Option;
