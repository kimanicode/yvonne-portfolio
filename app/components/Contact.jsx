import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-[#f0faff] to-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#8AE1FC] mb-4 text-center">
          Contact Me
        </h2>
        <p className="text-lg text-gray-600 mb-10 text-center">
          Whether you want to collaborate, ask a question, or just say hi—I’d
          love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-pink-600 text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">ywanjiku239@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaLinkedin className="text-pink-600 text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  LinkedIn
                </h3>
                <a
                  href="https://www.linkedin.com/in/wanjiku-kabui-b201b6283/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  linkedin.com/in/wanjiku-kabui-b201b6283
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaGithub className="text-pink-600 text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">GitHub</h3>
                <a
                  href="https://github.com/yourgithub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:underline break-all"
                >
                  github.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-white p-6 rounded-xl shadow-md">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-pink-500 focus:border-pink-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-pink-500 focus:border-pink-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-pink-500 focus:border-pink-500"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
