import Option from "./Option";
const Options = (props) => {
  return (
    <div>
      <button onClick={props.removeAllOptions} className="red">
        Remove all
      </button>
      {props.options.map((elem) => (
        <Option
          key={elem}
          optionText={elem}
          removeOption={props.removeOption}
        />
      ))}
    </div>
  );
};
export default Options;
