import Image from "next/image";
import VideoIntro from "./VideoIntro";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-white via-0 to-[#8AE1FC] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="w-full">
          <h2 className="text-4xl font-extrabold text-pink-600 mb-6 text-center">
            About Me
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed animate-fadeIn delay-100">
            <p>
              Hi, I'm{" "}
              <span className="font-semibold text-pink-600">Yvonne Kabui</span>,
              a passionate and curious health data science enthusiast with a
              background in{" "}
              <span className="font-medium">Economics and Statistics</span>. I’m
              deeply driven by a mission to improve healthcare systems and
              outcomes—especially in underserved communities.
            </p>
            <p>
              What makes me unique is my ability to blend technical expertise
              with real-world empathy—transforming raw data into meaningful
              insights that can inform policy, optimize care, and ultimately
              save lives.
            </p>
            <p>
              My chosen GCGO—<span className="font-medium">Health Care</span>
              —resonates with me because access to quality medical services is a
              basic human right. I believe data has the power to break systemic
              barriers. That’s why I specialize in{" "}
              <span className="font-medium">Health Data Science Research</span>,
              exploring public health trends, evaluating interventions, and
              shaping smarter, data-driven health strategies.
            </p>
            <p>
              Along the way, I’ve learned that success in this field means
              staying curious, mastering both health and data, and always
              communicating insights clearly. I bring those values into every
              project I take on—because at the end of the day, it’s not just
              about data, it’s about people.
            </p>
          </div>
        </div>

        <VideoIntro />
      </div>
    </section>
  );
};

export default About;
