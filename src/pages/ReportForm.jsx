import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import groupImage from '../Asset/backgroundReport.png';
import ellipseImage from '../Asset/Ellipse 1.png';

const ReportForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: '',
    nomorHp: '',
    email: '',
    lokasi: '',
    tanggal: '',
    gender: 'pria',
    deskripsi: '',
    gambarLuka: null,
    buktiPendukung: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Redirect to success page after successful submission
      navigate('/report-berhasil', { state: formData});
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files[0] }));
  };

  return (
    <div className="min-h-screen bg-custom-green text-white font-sans relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img src={groupImage} alt="Group" className="w-full h-full object-cover opacity-100"/>
      </div>
      {/* Main Content */}
      <main className="py-12 px-6">
        <div className="container mx-auto relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            <span className="text-pink-300">Laporkan</span> Keluhan Anda!
          </h1>

          <div className="max-w-4xl mx-auto bg-green-50 rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-green-900 font-semibold mb-2">Nama</label>
                    <input
                      type="text"
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white text-black"
                      placeholder="Zinedine Azka Fahreza"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-green-900 font-semibold mb-2">Nomor Hp</label>
                    <input
                      type="tel"
                      name="nomorHp"
                      value={formData.nomorHp}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white text-black"
                      placeholder="081352789066"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-green-900 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white text-black"
                      placeholder="azkabo@gmail.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-green-900 font-semibold mb-2">Lokasi Puskesmas/Klinik/RS</label>
                    <input
                      type="text"
                      name="lokasi"
                      value={formData.lokasi}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white text-black"
                      placeholder="Sulawesi Selatan, Makassar, RS..."
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-green-900 font-semibold mb-2">Tanggal</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="tanggal"
                          value={formData.tanggal}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border-2 border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white text-black"
                          placeholder="MM/DD/YY"
                        />
                        <div className="absolute right-3 top-2.5 text-green-700">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-xs text-green-700 mt-1">Tanggal Kejadian</p>
                    </div>
                    
                    <div>
                      <label className="block text-green-900 font-semibold mb-2">Gender</label>
                      <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            value="pria"
                            checked={formData.gender === 'pria'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span className="text-black">Pria</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            value="wanita"
                            checked={formData.gender === 'wanita'}
                            onChange={handleChange}
                            className="mr-2"
                          />
                          <span className="text-black">Wanita</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-green-900 font-semibold mb-2">Unggah Gambar Luka (opsional)</label>
                    <div className="border-2 border-green-700 rounded-lg p-4 bg-white">
                      <input
                        type="file"
                        name="gambarLuka"
                        onChange={handleFileChange}
                        accept="image/*"
                        className="w-full text-green-700"
                      />
                      <div className="mt-2 text-xs text-green-700">
                        Pastikan area luka/penanganan terlihat dengan baik
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-green-900 font-semibold mb-2">Bukti Pendukung</label>
                    <div className="border-2 border-green-700 rounded-lg p-4 bg-white">
                      <input
                        type="file"
                        name="buktiPendukung"
                        onChange={handleFileChange}
                        className="w-full text-green-700"
                      />
                      <div className="mt-2 text-xs text-green-700">
                        Foto Lokasi, Dokumen rekam medis, hasil pemeriksaan, atau kwitansi.
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-green-900 font-semibold mb-2">Deskripsi</label>
                    <textarea
                      name="deskripsi"
                      value={formData.deskripsi}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 border-2 border-green-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white text-black"
                      placeholder="kelinci saya overdosis wortel"
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-full font-bold text-lg ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-pink-300 text-white hover:bg-pink-400'
                  } transition-colors`}
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReportForm;
