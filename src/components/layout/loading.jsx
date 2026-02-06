const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Cercle avec texte */}
      <div className="relative flex flex-col items-center">
        {/* Barres animées autour du texte */}
        <div className="flex space-x-2 mb-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-3 h-12 bg-gradient-to-t from-blue-400 to-blue-600 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationDuration: "0.8s",
              }}
            ></div>
          ))}
        </div>

        {/* Texte central */}
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
          Yitro Consulting
        </h1>
      </div>

      {/* Sous-texte */}
      <p className="mt-6 text-gray-600 text-sm animate-fade">
        Chargement en cours…
      </p>
    </div>
  );
};

export default Loading;
