import React from 'react';
import { Link } from 'react-router-dom';
import aboutUsImage from '../Asset/Rectangle 147 (1).png';

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
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 font-serif italic" style={{ fontFamily: "'La Belle Aurore', cursive" }}>
            The Purpose Behind Our Platform
          </h2>

          <div className="bg-neutral-900 rounded-xl p-6 md:p-10 shadow-xl bg-opacity-40">
            <div className="grid md:grid-cols-2 gap-8 items-center">

              {/* Text */}
              <div className="space-y-6">
                <p className="leading-relaxed">
                  Banyak penanganan medis di Indonesia yang masih belum sesuai standar, namun tidak pernah dilaporkan karena tidak ada kanal pelaporan yang mudah, cepat, dan dapat ditindaklanjuti. Data nasional menunjukkan ribuan insiden keselamatan pasien tercatat setiap tahun, sementara banyak fasilitas kesehatan belum aktif melapor; sehingga jumlah kasus sebenarnya jauh lebih besar.
                </p>
                <p className="leading-relaxed">
                  Platform ini hadir untuk menjembatani kesenjangan tersebut. Dengan formulir pelaporan yang sederhana, dukungan AI WoundChecker untuk mengecek kesesuaian tindakan, serta fitur pengiriman otomatis ke pihak berwenang, laporan masyarakat dapat berubah menjadi data yang benar-benar ditindak, bukan sekadar keluhan yang hilang begitu saja.
                </p>
              </div>

              {/* Card Layout Baru (Menggantikan Card Lama) */}
              <div className="relative h-96 bg-green-800 rounded-xl shadow-xl overflow-hidden flex items-center justify-center">
                {/* Gambar dari Asset */}
                <img
                  src={aboutUsImage}
                  alt="Platform visualization"
                  className="w-full h-full object-cover"
                />

                {/* Angka 100+ Kanan Atas */}
                <div className="absolute top-6 right-6 bg-black bg-opacity-70 p-3 rounded-lg text-white font-bold text-2xl z-10">
                  100+
                </div>

                {/* Angka 100+ Kiri Bawah */}
                <div className="absolute bottom-6 left-6 bg-black bg-opacity-70 p-3 rounded-lg text-white font-bold text-2xl z-10">
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
          <h2 className="text-3xl md:text-4xl font-bold text-pink-400 text-center mb-12">
            Meet Our Teams
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-80 bg-gray-700 overflow-hidden"> {/* Placeholder untuk gambar */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                    <h3 className="text-xl font-bold text-pink-400">{member.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-200 text-base">{member.role}</p>
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
