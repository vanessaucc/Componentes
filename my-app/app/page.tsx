import WizardSidebar from "@/components/WizardSidebar";
import WizardStepsHeader from "@/components/WizardStepsHeader";
import ReviewStatusCard from "@/components/ReviewStatusCard";
import CheckoutPaymentForm from "@/components/CheckoutPaymentForm";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f4f5f7] p-4 md:p-10">

      {/* GRID PADRE */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <WizardSidebar />
        </div>

        {/* Contenido */}
        <div className="lg:col-span-3 grid grid-rows-1 lg:grid-rows-3 gap-8">

          <div className="lg:row-span-1">
            <WizardStepsHeader />
          </div>

          <div className="lg:row-span-2 grid grid-cols-1 xl:grid-cols-2 gap-8">
            <ReviewStatusCard />
            <CheckoutPaymentForm />
          </div>

        </div>
      </div>
    </main>
  );
}