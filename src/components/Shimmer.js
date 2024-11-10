const Shimmer = () => {
  const n = 8
  return (
    <div className="shimmer-container">
      {[...Array(10)].map((e, i) => (
        <div className="shimmer-card"></div>
      ))}
    </div>
  );
};

export default Shimmer;
