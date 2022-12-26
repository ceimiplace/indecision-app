import Option from "./Option";
const Options = (props) => {
  return (
    <div>
      <button className="button button--link" onClick={props.removeAllOptions}>
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
