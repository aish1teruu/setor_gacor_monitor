import React, { useState, useEffect, useRef } from 'react';
import setorLogo from '../Asset/setor pink.png';
import pelanggaranLayanan from '../Asset/pelanggaran pelayanan.png'
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";
import ReportForm from './ReportForm';
import ellipse1Image from '../Asset/Ellipse 1.png';
import elemenBackground from '../Asset/elemenBackground.png';


const FormDownload = () => {
  const exportRef = useRef(null);

  const handleDownload = async () => {
    const element = exportRef.current;

    const canvas = await html2canvas(element, {
      scale: 2, // gambar lebih tajam
    });

    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "laporan-setor.png";
    link.click();
  };

  const location = useLocation();
  const formData = location.state;

  const [reportData, setReportData] = useState({
    name: formData?.nama ||"Cantumkan nama",
    facility: formData?.lokasi ||"Tidak ada lokasi",
    description:
      formData?.deskripsi ||"Tidak ada deskripsi",
    evidenceImage: formData?.buktiPendukung
    ? URL.createObjectURL(formData.buktiPendukung)
    : "https://placehold.co/300x200/cccccc/333333?text=bukti+pendukung+(wajib)",
    woundImage: formData?.gambarLuka
    ? URL.createObjectURL (formData.gambarLuka)
    : "https://placehold.co/300x200/cccccc/333333?text=foto+luka+(opsional)",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-800 text-white font-sans relative overflow-hidden">
      
      <div ref={exportRef} className="relative z-0 max-w-md mx-auto min-h-screen bg-[#1A472B] rounded-2xl mt-10">
      <img
        src={elemenBackground}
        alt="background element"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 -z-10 pointer-events-none"
      />
      {/* HEADER */}
      <header className="py-6 px-4 text-center z-10">
        <div className="flex justify-center mb-4 items-center">
          <img src={setorLogo} alt="SETOR Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-pink-300 ml-2">SETOR</h1>
        </div>

        <div className="mt-6">
        <img src={pelanggaranLayanan} alt="header form" className="w-82 h-82" />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="container mx-auto px-4 py-8">
        <div ref={exportRef} className="max-w-3xl mx-auto">
          <div className="relative z-[5] bg-neutral-900 bg-opacity-60 rounded-3xl p-6 md:p-8 shadow-xl z-10">

            {/* NAME */}
            <div className="mb-6">
              <p className="text-pink-300 text-sm">Halo! nama saya</p>
              <h3 className="text-2xl font-bold text-white border-b-2 border-white pb-2 mt-1">
                {reportData.name}
              </h3>
            </div>

            {/* FACILITY */}
            <div className="mb-6">
              <p className="text-pink-300 text-sm">
                Saya mendapatkan pelayanan kesehatan yang buruk di
              </p>
              <h4 className="text-xl font-bold text-white border-b-2 border-white pb-2 mt-1">
                {reportData.facility}
              </h4>
            </div>

            {/* IMAGES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-300 rounded-lg overflow-hidden">
                <img
                  src={reportData.evidenceImage}
                  alt="Bukti Pendukung"
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <p className="text-white text-sm font-medium">
                    Bukti Pendukung
                  </p>
                </div>
              </div>

              <div className="bg-pink-300 rounded-lg overflow-hidden">
                <img
                  src={reportData.woundImage}
                  alt="Foto Luka"
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <p className="text-white text-sm font-medium">
                    Foto Luka
                  </p>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div>
              <h5 className="text-pink-300 text-sm mb-2">Deskripsi</h5>
              <p className="text-white leading-relaxed">
                {reportData.description}
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 px-4 text-center z-10">
              <p className="text-pink-300 text-sm">
                reported via <span className="underline">www.sehatmonitor.xyz</span>
              </p>
            </footer>

      <img src='setorLogo' alt='Background Logo' className="absolute top-1/2 left-1/2 w-64 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl pointer-events-none"/>
    </div>

    {/* DOWNLOAD BUTTON */}
            <div className="text-center mt-8 mb-8">
              <button
                onClick={handleDownload}
                className="bg-pink-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-500 transition"
              >
                Download Image
              </button>
            </div>
    </div>
  );
};

export default FormDownload;
