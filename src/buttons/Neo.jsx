function Neo() {
  return (
    <button className="neo">
        {/* Static Text */}
        <span className="actual-text">&nbsp;super&nbsp;</span>

        {/* Highlighted Hover Text */}
        <span aria-hidden="true" className="hover-text">
            &nbsp;super&nbsp;
        </span>
    </button>
  );
}

export default Neo;
