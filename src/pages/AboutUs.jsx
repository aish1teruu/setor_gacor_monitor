import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const teamMembers = [
    { id: 1, name: 'Nadhif', role: 'Lead, Fullstack', image: 'https://placehold.co/300x400/ffffff/000000?text=Nadhif' },
    { id: 2, name: 'Fany', role: 'UI/UX Design', image: 'https://placehold.co/300x400/ffffff/000000?text=Fany' },
    { id: 3, name: 'Nadiah', role: 'Sekret mentorz', image: 'https://placehold.co/300x400/ffffff/000000?text=Nadiah' },
    { id: 4, name: 'Dzakwan', role: 'Doraemon', image: 'https://placehold.co/300x400/ffffff/000000?text=Dzakwan' },
    { id: 5, name: 'Aisy', role: 'Tenxi', image: 'https://placehold.co/300x400/ffffff/000000?text=Aisy' }
  ];

  return (
    <div className="min-h-screen bg-green-900 text-white font-sans">
      {/* Hero Section - navigation is now handled by Layout component */}

      {/* Hero Section */}
      <section className="relative py-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-green-700 to-green-900 opacity-80" />
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/000000/ffffff?text=Medical+Team')] bg-cover bg-center opacity-30" />

        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-300 mb-4">
            Get To Know More About US
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white leading-relaxed">
            Kami percaya bahwa teknologi dapat menjadi jembatan penting antara masyarakat,
            tenaga medis, dan pemerintah dalam menciptakan sistem pelaporan kesehatan yang cepat.
          </p>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 px-6 bg-green-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-300 text-center mb-12">
            The Purpose Behind Our Platform
          </h2>

          <div className="bg-green-800 rounded-xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">

              {/* Text */}
              <div className="space-y-6">
                <p className="leading-relaxed">
                  Banyak penanganan medis di Indonesia yang masih belum sesuai standar, namun
                  tidak pernah dilaporkan karena tidak ada kanal pelaporan yang mudah dan cepat.
                </p>
                <p className="leading-relaxed">
                  Platform ini hadir untuk menjembatani kesenjangan tersebut dengan pelaporan
                  sederhana, AI WoundChecker, serta pengiriman otomatis ke pihak berwenang.
                </p>
                <div className="pt-4">
                  <Link to="/report-form" className="bg-pink-300 text-green-900 px-4 py-2 rounded-full font-semibold hover:bg-pink-400 transition-colors inline-block">
                    Mulai Pelaporan
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <img
                  src="https://placehold.co/600x400/ffffff/000000?text=Medical+Care"
                  alt="Medical Care"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-pink-300 px-4 py-2 rounded-lg font-bold text-xl">
                  100+
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-pink-300 px-4 py-2 rounded-lg font-bold text-xl">
                  100+
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 bg-green-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-300 text-center mb-12">
            Meet Our Teams
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-green-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                    <h3 className="text-xl font-bold text-pink-300">{member.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;
