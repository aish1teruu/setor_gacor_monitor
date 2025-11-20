import React, { useState, useEffect } from 'react';
import setorLogo from '../Asset/setor putih.png';

const FormDownload = () => {
  const [reportData, setReportData] = useState({
    name: "Zilfany Nur A'athifah",
    facility: "Puskesmas Bontomarannu",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dictum nunc. Donec fermentum libero eu metus vulputate hendrerit. In hac habitasse platea dictumst. Nullam commodo iaculis dui, ultricies malesuada neque ultrices nec. Sed bibendum purus nunc, ut bibendum felis pretium semper. Nullam eleifend nibh ut pellentesque ornare. Vestibulum pretium mi eget purus ullamcorper dapibus.",
    evidenceImage: "https://placehold.co/300x200/cccccc/333333?text=bukti+pendukung+(wajib)",
    woundImage: "https://placehold.co/300x200/cccccc/333333?text=foto+luka+(opsional)"
  });

  // Simulate loading or animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      // This could be replaced with actual data fetching in a real app
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-800 text-white font-sans relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 100 0 L 100 100 L 0 100 Z" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Header */}
      <header className="py-6 px-4 text-center">
        <div className="flex justify-center mb-4 items-center">
          <img src={setorLogo} alt="SETOR Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-bold text-pink-300 ml-2">SETOR</h1>
        </div>
        
        <div className="mt-6">
          <p className="text-pink-300 text-2xl italic font-light">laporan</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            PELANGGARAN PELAYANAN KESEHATAN!
          </h2>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-green-900 rounded-3xl p-6 md:p-8 shadow-xl border-2 border-green-700">
            {/* Report Header */}
            <div className="mb-6">
              <p className="text-pink-300 text-sm">Halo! nama saya</p>
              <h3 className="text-2xl font-bold text-white border-b-2 border-white pb-2 mt-1">
                {reportData.name}
              </h3>
            </div>
            
            <div className="mb-6">
              <p className="text-pink-300 text-sm">saya mendapatkan pelayanan kesehatan yang buruk di</p>
              <h4 className="text-xl font-bold text-white border-b-2 border-white pb-2 mt-1">
                {reportData.facility}
              </h4>
            </div>

            {/* Evidence Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src={reportData.evidenceImage} 
                  alt="Bukti Pendukung" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <p className="text-white text-sm font-medium">bukti pendukung (wajib)</p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src={reportData.woundImage} 
                  alt="Foto Luka" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <p className="text-white text-sm font-medium">foto luka (opsional)</p>
                </div>
              </div>
            </div>

            {/* Gemini Checked */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-white font-semibold">Gemini checked</span>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h5 className="text-pink-300 text-sm mb-2">Deskripsi</h5>
              <p className="text-white leading-relaxed">
                {reportData.description}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 text-center">
        <p className="text-pink-300 text-sm">
          reported via <span className="underline">www.sehatmonitor.xyz</span>
        </p>
      </footer>
    </div>
  );
};

export default FormDownload;
