const Loading = () => {
  return (
    <div className="m-auto flex max-w-5xl animate-pulse gap-4">
      <div className="h-40 w-1/3 bg-neutral-800 md:h-72 lg:h-96" />
      <div className="w-2/3 space-y-2">
        <div className="h-7 w-48 bg-neutral-800 lg:h-10 lg:w-60" />
        <div className="h-2.5 w-40 bg-neutral-800 lg:h-4 lg:w-72" />
        <div className="block h-2.5 w-40 bg-neutral-800 lg:hidden lg:h-4 lg:w-72" />
        <div className="h-2 max-w-[440px] bg-neutral-800" />
        <div className="h-2 max-w-[440px] bg-neutral-800" />
        <div className="h-2 max-w-[420px] bg-neutral-800" />
        <div className="h-2 max-w-[360px] bg-neutral-800" />
      </div>
    </div>
  );
};

export default Loading;
