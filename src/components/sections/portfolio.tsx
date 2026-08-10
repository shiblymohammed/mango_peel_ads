export default function PortfolioSection() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-transparent">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
          <div className="w-full lg:col-span-5 xl:col-span-5 order-2 lg:order-1 min-h-[300px] flex items-center justify-center">
          </div>
          <div className="w-full lg:col-span-7 xl:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left">
            <h2 className="text-[#0F172A] text-4xl font-bold">Portfolio Section</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
