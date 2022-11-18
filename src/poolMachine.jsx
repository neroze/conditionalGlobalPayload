const Nav = ({ handleSubmit, formRef }) => {
  return (
    <form ref={formRef}>
      <div className="poolMachine-wrapper">
        <div className="flex-item flex-column">
          <h3>Pool</h3>
          <input name="pool" placeholder="pool" value={"001"} />
        </div>
        <div className="flex-item flex-row">
          <h3>Machine</h3>
          <input name="machine" placeholder="machine" value={"0.0.0.1"} />
        </div>
        <div className="flex-item">
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Nav;
