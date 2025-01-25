export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-secondary pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to BKBCK
            </h1>
            <p className="text-xl mb-8">
              Empowering minds through quality education and innovation
            </p>
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md transition-colors">
              Explore Programs
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="/placeholder.svg"
              alt="Students"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};