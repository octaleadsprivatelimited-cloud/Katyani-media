export default function About() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-300 mb-6 text-center">
            About Us
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-white mb-6 leading-relaxed">
              As a process transformation company, we rethink and rebuild processes for the digital age by combining the speed and insight of design thinking with the scale and accuracy of data analytics. We rethink the process and work together to streamline it, rebuild it, and deliver it.
            </p>
            <p className="text-lg text-white mb-6 leading-relaxed">
              At Katyani Media, we transform traditional marketing by blending street-smart creativity with real-time execution. We rethink how brands engage with communities, rebuild local connections, and deliver campaigns that create lasting impact in the physical world. We rethink how brands show up on the streets.
            </p>
            <p className="text-lg text-white mb-6 leading-relaxed">
              Through precise targeting and community-driven campaigns, Katyani Media streamlines offline marketing processes to help businesses grow and connect with their audiences faster and smarter.
            </p>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-black border border-white rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-primary-300 mb-3">Boost Your Business</h3>
            <p className="text-white">
              When it comes to sustainability and corporate responsibility, we believe the normal rules of business.
            </p>
          </div>
          <div className="bg-black border border-white rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-primary-300 mb-3">Filtering Business Data</h3>
            <p className="text-white">
              The industry has recognized us for our consistent endeavors to provide end-to-end customized solutions.
            </p>
          </div>
          <div className="bg-black border border-white rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-primary-300 mb-3">We Are Katyani Media</h3>
            <p className="text-white">
              Your Trusted Partner in Experiential Advertising
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-300 mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black border border-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-300 mb-3">Campaign Innovation</h3>
              <p className="text-white text-sm">
                We build bold, creative, on-ground brand moments that stand out and inspire across cities.
              </p>
            </div>
            <div className="bg-black border border-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-300 mb-3">Real-Time Execution</h3>
              <p className="text-white text-sm">
                We track each campaign live and activate on time with strong, dedicated ground teams.
              </p>
            </div>
            <div className="bg-black border border-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-300 mb-3">Audience-Centric Approach</h3>
              <p className="text-white text-sm">
                We create powerful messages that connect with real people in real places for real impact.
              </p>
            </div>
            <div className="bg-black border border-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-primary-300 mb-3">Scalable Reach</h3>
              <p className="text-white text-sm">
                We scale activations quickly and consistently from one area to hundreds of cities with ease.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-primary-400 mb-2">2017</h4>
            <p className="text-white">Founded</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-primary-400 mb-2">9+</h4>
            <p className="text-white">Years Experience</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-primary-400 mb-2">11-50</h4>
            <p className="text-white">Team Members</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-primary-400 mb-2">500+</h4>
            <p className="text-white">Projects Done</p>
          </div>
        </div>
      </div>
    </section>
  )
}

