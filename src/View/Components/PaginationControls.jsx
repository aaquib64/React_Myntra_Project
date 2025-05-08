import React from "react";

const PaginationControls = ({ page, totalPages, onNext, onPrev }) => {
  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      <button
        className="btn btn-outline-danger me-3"
        onClick={onPrev}
        disabled={page <= 1}
      >
        &laquo; Previous
      </button>

      <span className="fw-bold">
        Page {page} of {totalPages}
      </span>

      <button
        className="btn btn-outline-danger ms-3"
        onClick={onNext}
        disabled={page >= totalPages}
      >
        Next &raquo;
      </button>
    </div>
  );
};

export default PaginationControls;
