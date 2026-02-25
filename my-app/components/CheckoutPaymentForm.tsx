export default function CheckoutPaymentForm() {
  return (
    <div className="bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 flex flex-col gap-8">

      <h3 className="text-2xl font-semibold">Payment Details</h3>

      <div className="flex flex-col gap-6">

        <input
          type="text"
          placeholder="Alex Parkinson"
          className="bg-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#4F46E5]"
        />

        <input
          type="text"
          placeholder="4858 3445 0000 0000"
          className="bg-gray-100 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[#4F46E5]"
        />

        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            placeholder="Expiry"
            className="bg-gray-100 rounded-2xl p-4 flex-1 outline-none focus:ring-2 focus:ring-[#4F46E5]"
          />
          <input
            type="text"
            placeholder="CVV"
            className="bg-gray-100 rounded-2xl p-4 flex-1 outline-none focus:ring-2 focus:ring-[#4F46E5]"
          />
        </div>

      </div>

      <div className="flex justify-between pt-6">
        <button className="px-8 py-3 border border-gray-300 rounded-2xl hover:bg-gray-100 transition">
          Previous
        </button>

        <button className="px-8 py-3 bg-[#4F46E5] text-white rounded-2xl shadow-lg hover:bg-[#4338CA] transition">
          Next →
        </button>
      </div>

    </div>
  );
}