
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { CloseIcon } from '../constants';
import { Illustration } from '../src/assets/Illustrations';

const availableTimeSlots = [
    'Lunes, 10:00 AM',
    'Miércoles, 6:00 PM',
    'Viernes, 9:00 AM',
    'Sábado, 11:00 AM',
];

const BookingModal: React.FC = () => {
  const { isBookingModalOpen, closeBookingModal, bookingDetails, addToCart } = useContext(CartContext);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(availableTimeSlots[0]);

  if (!isBookingModalOpen || !bookingDetails) return null;

  const handleAddToCart = () => {
    if (selectedSlot) {
        addToCart({
            id: `${bookingDetails.type}-${bookingDetails.title}-${selectedSlot}`,
            name: bookingDetails.title,
            price: bookingDetails.price,
            imageUrl: bookingDetails.imageUrl,
            illustrationName: bookingDetails.illustrationName,
            quantity: 1,
            type: bookingDetails.type,
            details: selectedSlot
        });
        closeBookingModal();
    } else {
        alert("Por favor, selecciona un horario.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
      <div className="bg-base rounded-lg shadow-2xl w-full max-w-md relative animate-fade-in-up border border-black/10">
        <button onClick={closeBookingModal} className="absolute top-4 right-4 text-detail hover:text-base-text transition-colors duration-400" aria-label="Cerrar">
          <CloseIcon className="w-6 h-6" />
        </button>
        <div className="p-8">
          <h2 className="text-3xl font-heading text-accent font-bold mb-4">Reservar: {bookingDetails.title}</h2>
          
          <div className="w-full h-48 bg-stone-50 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
            {bookingDetails.illustrationName ? (
              <Illustration name={bookingDetails.illustrationName} className="w-1/3 h-1/3 text-stone-300" />
            ) : (
              <img src={bookingDetails.imageUrl} alt={bookingDetails.title} className="w-full h-full object-cover" referrerPolicy="no-referrer"/>
            )}
          </div>
          
          <h3 className="text-lg font-semibold text-base-text mb-3">Selecciona un horario:</h3>
          <div className="space-y-2">
            {availableTimeSlots.map(slot => (
                 <label key={slot} className={`flex items-center p-3 border rounded-md cursor-pointer transition-colors ${selectedSlot === slot ? 'bg-accent/10 border-accent' : 'border-black/10 hover:bg-black/5'}`}>
                    <input type="radio" name="time-slot" value={slot} checked={selectedSlot === slot} onChange={() => setSelectedSlot(slot)} className="form-radio text-accent focus:ring-accent h-4 w-4"/>
                    <span className="ml-3 text-base-text">{slot}</span>
                </label>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <p className="text-2xl font-bold text-base-text">${bookingDetails.price.toFixed(2)}</p>
            <button onClick={handleAddToCart} className="bg-accent hover:bg-opacity-80 text-white font-semibold py-3 px-8 rounded-full transition-all duration-400 transform hover:scale-105">
                Confirmar y Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
