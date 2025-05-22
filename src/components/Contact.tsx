import React, { useState } from "react";

const emailPattern = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [touched, setTouched] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setTouched(true);
    if (!emailPattern.test(e.target.value)) {
      setEmailError("Format email tidak valid. Contoh: nama@gmail.com, nama@yahoo.co.id, nama@domain.subdomain");
    } else {
      setEmailError("");
    }
  };

  const handleBlur = () => {
    setTouched(true);
    if (!emailPattern.test(email)) {
      setEmailError("Format email tidak valid. Contoh: nama@gmail.com, nama@yahoo.co.id, nama@domain.subdomain");
    } else {
      setEmailError("");
    }
  };

  return (
    <section id="contact" className="flex items-center justify-center min-h-screen md:h-[100vh] w-full py-20 px-4 bg-gradient-to-t from-slate-900 to-slate-800">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-teal-300 mb-6">Contact Me</h2>
        <form className="w-full max-w-2xl bg-slate-900 rounded-xl shadow-lg p-6 md:p-8 border border-slate-700 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-slate-300 text-sm">Nama</label>
              <input 
                id="name"
                type="text" 
                placeholder="Masukkan nama Anda" 
                className="px-4 py-2 rounded bg-slate-800 border border-slate-700 text-white focus:border-teal-400 outline-none" 
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-slate-300 text-sm">Email</label>
              <input 
                id="email"
                type="email" 
                placeholder="Masukkan email Anda" 
                value={email}
                onChange={handleEmailChange}
                onBlur={handleBlur}
                className={`px-4 py-2 rounded bg-slate-800 border ${emailError && touched ? 'border-red-500' : 'border-slate-700'} text-white focus:border-teal-400 outline-none`} 
                autoComplete="email"
              />
              {emailError && touched && (
                <ul className="text-red-500 text-xs mt-1 list-disc list-inside">
                  <li>{emailError}</li>
                </ul>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-slate-300 text-sm">Pesan</label>
            <textarea 
              id="message"
              placeholder="Tulis pesan Anda di sini..." 
              rows={4} 
              className="px-4 py-2 rounded bg-slate-800 border border-slate-700 text-white focus:border-teal-400 outline-none resize-none" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full md:w-auto md:self-end px-8 py-2 bg-teal-500 hover:bg-teal-400 rounded shadow font-semibold transition"
          >
            Kirim Pesan
          </button>
        </form>
        <p className="mt-6 text-slate-400">atau email ke <a href="mailto:youremail@email.com" className="text-teal-300 underline">farhanhibatullah433@gmail.com</a></p>
      </div>
    </section>
  );
};

export default Contact;
