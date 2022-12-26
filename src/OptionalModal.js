import Modal from "react-modal";

const OptionalModal = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      contentLabel={"Example Modal"}
      onRequestClose={props.closeModal}
    >
      <h2>Hy</h2>
      <button onClick={props.closeModal}>OK</button>
    </Modal>
  );
};

export default OptionalModal;
