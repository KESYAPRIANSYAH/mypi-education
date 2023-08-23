import React from 'react';
import InputLabeled from '../components/InputLabeled';

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-cust-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px]">
        <div className="bg-cust-white p-2 rounded p-5">
          <p className='text-xl font-semibold mb-3'>Kesulitan akses akunmu</p>
          <p className='mb-3'>Mau\sukan email atau No WA kamu, Kami akan mengirim Kode OTP untuk mengganti password baru.</p>
          <InputLabeled />
          <button onClick={onClose} className="text-cust-black bg-cust-pink mt-3 rounded p-2">
            Lanjutkan
          </button>
          <button onClick={onClose} className="text-cust-black bg-cust-gray mt-3 rounded p-2 ml-5">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
