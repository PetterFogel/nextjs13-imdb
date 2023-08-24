const SkeletonGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="h-96 w-auto animate-pulse bg-neutral-800"
          />
        ))}
    </div>
  );
};

export default SkeletonGrid;
