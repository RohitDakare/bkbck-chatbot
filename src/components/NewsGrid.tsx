export const NewsGrid = () => {
  const news = [
    {
      title: "New Research Center Opening",
      date: "March 15, 2024",
      category: "Announcement",
    },
    {
      title: "Student Achievement Awards",
      date: "March 12, 2024",
      category: "Events",
    },
    {
      title: "International Conference 2024",
      date: "March 10, 2024",
      category: "Academic",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <span className="text-accent text-sm font-semibold">
                {item.category}
              </span>
              <h3 className="text-xl font-semibold my-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};