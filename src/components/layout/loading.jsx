const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin"></div>
        <div className="absolute inset-4 rounded-full bg-blue-600 animate-pulse flex items-center justify-center">
          <span className="text-white font-bold text-sm tracking-wide">
            YITRO
          </span>
        </div>
      </div>
      <p className="mt-8 text-sm text-gray-600 tracking-wide animate-fade">
        Chargement en cours…
      </p>
    </div>
  );
};

export default Loading;
