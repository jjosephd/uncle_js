import { useState } from 'react';
import { useStore } from "../../store/store";
import { v4 as uuidv4 } from "uuid";
import { toast } from 'react-toastify';
import type { ReservationItem } from "../../store/types";

const UpdateRegistrationButton = ({ 
  reservation, 
  isEditing,
  onEdit, 
  onCancel,
  onSave
}: { 
  reservation: ReservationItem;
  isEditing: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onSave: (updates: Partial<Omit<ReservationItem, 'id'>>) => void;
}) => {
  const [formData, setFormData] = useState<Omit<ReservationItem, 'id'>>({
    firstName: reservation.firstName,
    lastName: reservation.lastName,
    email: reservation.email,
    phoneNumber: reservation.phoneNumber,
    dateTime: reservation.dateTime,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-700 text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-700 text-white"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Phone</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Date & Time</label>
          <input
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
            required
          />
        </div>
        <div className="flex justify-end space-x-2 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    );
  }

  return (
    <button
      onClick={onEdit}
      className="bg-orange-500 hover:bg-orange-600 text-gray-900 font-bold py-2 px-4 rounded-md transition duration-200 transform hover:scale-105 btn btn-xs"
    >
      Update
    </button>
  );
}

const Reservations = () => {
  const { reservations, addReservation, updateReservation } = useStore();
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const reservation = {
      id: uuidv4(),
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      dateTime: formData.get("dateTime") as string,
    };

    addReservation(reservation);
    toast.success(
      `${reservation.firstName} ${reservation.lastName} has been added to the reservations list.`, {
     
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      position: "bottom-right",
    });
    e.currentTarget.reset();
  };
  return (
    <div className=" min-h-screen bg-gray-900 text-gray-100 p-6 m-24 lg:m-36">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-orange-500">Make a Reservation</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName"
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName"
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300">Phone Number</label>
            <input 
              type="tel" 
              id="phoneNumber" 
              name="phoneNumber"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="dateTime" className="block text-sm font-medium text-gray-300">Date and Time</label>
            <input 
              type="datetime-local" 
              id="dateTime" 
              name="dateTime"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-orange-500 hover:bg-orange-600 text-gray-900 font-bold py-3 px-4 rounded-md transition duration-200 transform hover:scale-105"
          >
            Reserve Table
          </button>
        </form>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-orange-500">Upcoming Reservations</h3>
          <ul className="space-y-3">
            {reservations && reservations.length > 0 ? (
              reservations.map((reservation) => (
                <li 
                  key={reservation.id} 
                  className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-750 transition"
                >
                  <div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{reservation.firstName} {reservation.lastName}</span>
                        <p className="text-sm text-gray-400">{reservation.email}</p>
                        <p className="text-sm text-gray-400">{reservation.phoneNumber}</p>
                        <p className="text-sm text-gray-400">{new Date(reservation.dateTime).toLocaleString()}</p>
                      </div>
                      {editingId !== reservation.id && (
                        <div className="flex items-center space-x-2 flex-col space-y-2">
                          <span className="text-orange-500 text-sm">Confirmed</span>
                          <UpdateRegistrationButton 
                            reservation={reservation}
                            isEditing={false}
                            onEdit={() => setEditingId(reservation.id)}
                            onCancel={() => {}}
                            onSave={() => {}}
                          />
                        </div>
                      )}
                    </div>
                    {editingId === reservation.id && (
                      <UpdateRegistrationButton 
                        reservation={reservation}
                        isEditing={true}
                        onEdit={() => {}}
                        onCancel={() => setEditingId(null)}
                        onSave={(updates) => {
                          updateReservation(reservation.id, updates);
                          setEditingId(null);
                          toast.success('Reservation updated successfully!', {
                            autoClose: 3000,
                            theme: 'dark',
                            position: 'bottom-right'
                          });
                        }}
                      />
                    )}
                  </div>
                </li>
              ))
            ) : (
              <li className="text-center py-6 text-gray-400">No upcoming reservations</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
