export default function WizardStepsHeader() {
  return (
    <div className="bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8">

      <div className="flex flex-wrap items-center gap-10">

        {/* Completed */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-500"></div>
          <span className="font-medium">Card Details</span>
        </div>

        <div className="h-[2px] w-16 bg-emerald-500 hidden md:block"></div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-500"></div>
          <span className="font-medium">Form Review</span>
        </div>

        <div className="h-[2px] w-16 bg-[#4F46E5] hidden md:block"></div>

        {/* In Progress */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#4F46E5]"></div>
          <span className="font-medium">Authenticate OTP</span>
        </div>

        <div className="h-[2px] w-16 bg-gray-300 hidden md:block"></div>

        {/* Pending */}
        <div className="flex items-center gap-4 opacity-40">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <span className="font-medium">Create Code</span>
        </div>

      </div>
    </div>
  );
}