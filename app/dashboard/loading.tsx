import LoadingSkeleton from 'react-loading-skeleton'
const Loading = () => {
  return (
    <div>
      {/* Här kan du inkludera andra delar av din loading UI */}
      <h1>Loading...</h1>
      <LoadingSkeleton />
    </div>
  );
};

export default Loading;