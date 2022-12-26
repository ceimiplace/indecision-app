const Action = (props) => {
  return (
    <div>
      <button disabled={props.disabled} onClick={props.handlePick}>
        What shoould i do?
      </button>
    </div>
  );
};
export default Action;
