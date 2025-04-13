const VideoIntro = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#8AE1FC] mb-6">
          Get to Know Me
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Watch this short video to learn more about who I am, what drives me,
          and why I'm passionate about health data science.
        </p>
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/R5Tl9wYkZl0"
            title="Yvonne Kabui - Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;
