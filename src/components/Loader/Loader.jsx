const Loader = () => {
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-white">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
