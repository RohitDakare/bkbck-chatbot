export const FeaturedCourses = () => {
  const courses = [
    {
      title: "Computer Science",
      description: "Learn programming, algorithms, and software development",
      icon: "🖥️",
    },
    {
      title: "Business Administration",
      description: "Study management, marketing, and entrepreneurship",
      icon: "📊",
    },
    {
      title: "Engineering",
      description: "Explore mechanical, electrical, and civil engineering",
      icon: "⚡",
    },
    {
      title: "Life Sciences",
      description: "Study biology, chemistry, and environmental science",
      icon: "🧬",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};