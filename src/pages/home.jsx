import { Link } from 'react-router-dom';
import backgroundImage from '../Asset/ChatGPT Image Nov 13, 2025, 06_03_54 PM 2.png';
import ellipseBackground from '../Asset/Ellipse 1.png';
import logoWhite from '../Asset/setor putih.png';
import groupImage from '../Asset/Ellipse 1.png';
import teamImage from '../Asset/ChatGPT_Image_13_Nov_2025__18.09.25-removebg-preview 1 (1).png';
import topLeftEllipse from '../Asset/Group 41.png';
import icon1 from '../Asset/amico.png';
import icon2 from '../Asset/bro.png';
import icon3 from '../Asset/documento_foi_aprovado_conceito_ilustração_design_plano_vetor_eps10__elemento_gráfico_moderno_para_página_de_destino__ui_de_estado_vazio__infográfico__ícone-removebg-preview 1.png';
import icon4 from '../Asset/rafiki.png';
import icon5 from '../Asset/amico2.png';
import phoneIcon from '../Asset/fluent_call-12-filled.png';
import emailIcon from '../Asset/line-md_email.png';
import instagramIcon from '../Asset/mdi_instagram.png';

export default function Home() {

  // Mock data for the report submission steps
  const reportSteps = [
    {
      number: '1',
      title: 'Masukkan Data',
      description: 'Masukkan identitas pelapor, lokasi kejadian, tanggal penanganan, deskripsi singkat kondisi, dan unggah gambar (bila perlu) sebagai bukti pendukung.',
      icon: (
        <img src={icon1} className="w-28 h-28 text-green-900" alt="Masukkan Data" />
      )
    },
    {
      number: '2',
      title: 'Masukkan Gambar Luka',
      description: 'Masukkan gambar yang nantinya akan di check dengan Gemini AI',
      icon: (
        <img src={icon2} className="w-28 h-28 text-green-900" alt="Masukkan Gambar Luka" />
      )
    },
    {
      number: '3',
      title: 'Kirim Laporan',
      description: 'Setelah semua data dan hasil analisis siap, tekan tombol "Kirim Laporan" untuk mengirimkan laporan Anda ke sistem.',
      icon: (
        <img src={icon3} className="w-28 h-28 text-green-900" alt="Kirim Laporan" />
      )
    },
    {
      number: '4',
      title: 'Unduh & Bagikan Laporan Anda',
      description: 'Setelah laporan berhasil dikirim, Anda dapat mengunduh versi imajenya dan anda dapat membagikannya ke media sosial anda',
      icon: (
        <img src={icon4} className="w-28 h-28 text-green-900" alt="Unduh & Bagikan" />
      )
    },
    {
      number: '5',
      title: 'Tunggu Email Balasan dari Kami',
      description: 'Tim kami akan meninjau laporan Anda. Hasil verifikasi dan tindak lanjut akan dikirim melalui email yang Anda daftarkan.',
      icon: (
        <img src={icon5} className="w-28 h-28 text-green-900" alt="Tunggu Email" />
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 to-green-900 text-white">
      {/* Hero Section */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-900 opacity-80"></div>
        {/* The ellipse background will be added behind the main image */}

        {/* Adding Ellipse 1 image as sticky element positioned to the left with specified dimensions */}
        <div className="absolute left-20 top-1/2 transform -translate-y-1/2 opacity-80 z-0 hidden md:block">
          <img
            src={topLeftEllipse}
            alt="Ellipse 1"
            style={{ width: '428px', height: '885px' }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6 relative z-20">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Awasi dan Tingkatkan Kualitas Penanganan Kesehatan di Indonesia
              </h1>
              <p className="text-lg text-gray-200">
                Kesehatan yang baik berawal dari kepedulian kita bersama. Melalui Sehat Monitor, Anda dapat turut mengawasi dan melaporkan penanganan kesehatan agar lebih cepat, aman, dan berkualitas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/report-form" className="bg-pink-400 text-white font-bold py-3 px-6 rounded-full hover:bg-pink-500 transition-colors inline-block">
                  Mulai Pelaporan
                </Link>
                <button className="border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-green-900 transition-colors">
                  Panduan
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 relative z-20">
              <div className="relative">
                {/* Background ellipse behind main image - moved slightly to the right */}
                <img
                  src={ellipseBackground}
                  alt="Background ellipse"
                  className="rounded-lg shadow-xl mx-auto absolute"
                  style={{ width: '500px', height: '700px', zIndex: 0, right: '70px' }}
                />
                {/* Adding the logo behind the main image */}
                <div className="absolute -top-0 -left-0 w-50 h-50 z-0 -skew-x-12">
                  <img
                    src={logoWhite}
                    alt="SETOR Logo"
                    className="w-full h-full object-contain opacity-30 blur"
                  />
                </div>
                {/* Main image */}
                <img
                  src={backgroundImage}
                  alt="Person with bandaged arm"
                  className="rounded-lg shadow-xl mx-auto relative bg-opacity-0"
                  style={{ width: '444px', height: '637px', zIndex: 10 }}
                />
                <div className="absolute top-48 right-20 bg-black bg-opacity-40 p-4 rounded-lg z-20 text-center">
                  <div className="text-s text-white">Powered by</div>
                  <div className="text-xl font-bold text-white">Gemini</div>
                </div>
                {/* Moving the "Jaminan laporan tersampaikan kepada pemerintah" text below the left side of the image and with black background */}
                <div className="absolute -bottom-10 left-4 bg-black bg-opacity-40 p-4 rounded-lg max-w-xs z-20">
                  <p className="text-xl text-white font-bold">Jaminan laporan tersampaikan kepada pemerintah</p>
                </div>
                {/* Moving the other logo to the bottom right */}
                <div className="absolute -bottom-0 -right-0 w-50 h-50 z-0 -skew-x-12">
                  <img
                    src={logoWhite}
                    alt="SETOR Logo"
                    className="w-full h-full object-contain opacity-30 blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Submission Guide Section */}
      <section className="py-16 px-6 bg-green-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Panduan Pengisian Laporan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {reportSteps.map((step, index) => (
              <div key={index} className="bg-white text-gray-800 rounded-xl p-6 shadow-xl hover:shadow-xl transition-shadow">
                <div className="flex flex-col">
                  <div className="flex justify-center w-full mb-3">
                    <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center text-2xl font-bold text-green-900">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-green-900 text-left px-2">{step.title}</h3>
                  <div className="flex justify-center w-full my-3">
                    {step.icon}
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700 text-left px-2 mt-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-green-800 to-green-900">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="text-3xl md:text-4xl font-serif italic bg-gradient-to-r from-pink-400 to-white bg-clip-text text-transparent">
                "Karena Setiap Laporan
              </div>
              <div className="text-3xl md:text-4xl font-serif italic bg-gradient-to-r from-pink-400 to-white bg-clip-text text-transparent">
                anda Bermanfaat Bagi Sesama"
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 mt-12">
              <div className="md:w-1/2 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 z-0">
                  <img
                    src={groupImage}
                    alt="Ellipse Background"
                    className="object-contain"
                    style={{ width: '468px', height: '594px' }}
                  />
                </div>
                <img
                  src={teamImage}
                  alt="Team members"
                  className=""
                />
              </div>

              <div className="md:w-1/2 ml-24">
                <h3 className="text-5xl font-bold text-left mb-6">Contact Us</h3>
                <div className="space-y-4 pl-1">
                  <div className="flex items-center gap-3">
                    <img src={phoneIcon} className="w-8 h-8 text-pink-400" alt="Phone Icon" />
                    <span className="text-lg">+6282134577655</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <img src={emailIcon} className="w-8 h-8 text-pink-400" alt="Email Icon" />
                    <span className="text-lg">sehatmonitor@gmail.com</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <img src={instagramIcon} className="w-8 h-8 text-pink-400" alt="Instagram Icon" />
                    <span className="text-lg">@sehatmonitor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
