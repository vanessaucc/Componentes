export default function ReviewStatusCard() {
  return (
    <div className="rounded-[32px] p-10 text-white shadow-[0_25px_70px_rgba(79,70,229,0.35)]
                    bg-gradient-to-br from-[#4F46E5] via-[#2563EB] to-[#4338CA]
                    flex flex-col justify-between min-h-[350px]">

      <div>
        <h3 className="text-2xl font-semibold">Form Review</h3>
        <p className="mt-6 text-white/90 max-w-md">
          Application and forms will go through a step by step review process.
        </p>
      </div>

      {/* Barra de progreso */}
      <div>
        <p className="mb-3 text-sm opacity-80">Time Remaining — 48 Hours</p>
        <div className="w-full h-3 bg-white/20 rounded-full">
          <div className="w-2/3 h-3 bg-white rounded-full"></div>
        </div>
      </div>

    </div>
  );
}