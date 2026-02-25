export default function WizardSidebar() {
  return (
    <aside className="bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 flex flex-col justify-between h-full">

      <div className="relative flex flex-col gap-12">

        {/* Línea vertical */}
        <div className="absolute left-4 top-6 bottom-6 w-[2px] bg-gray-200"></div>

        {/* Step Completed */}
        <div className="flex items-center gap-6 relative z-10">
          <div className="w-8 h-8 rounded-full bg-emerald-500"></div>
          <span className="text-lg font-medium">Basic Details</span>
        </div>

        <div className="flex items-center gap-6 relative z-10">
          <div className="w-8 h-8 rounded-full bg-emerald-500"></div>
          <span className="text-lg font-medium">Company Details</span>
        </div>

        {/* In Progress */}
        <div className="flex items-center gap-6 relative z-10">
          <div className="w-8 h-8 rounded-full bg-[#4F46E5]"></div>
          <span className="text-lg font-medium">Subscription Plan</span>
        </div>

        {/* Pending */}
        <div className="flex items-center gap-6 relative z-10 opacity-40">
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <span className="text-lg">Payment Details</span>
        </div>

      </div>

      <p className="text-gray-500 mt-12">
        Having troubles? Contact us
      </p>

    </aside>
  );
}