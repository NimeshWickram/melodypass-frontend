// src/components/EventCard.jsx
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa';

const EventCard = ({ event }) => {
  const { id, title, image, date, venue, category, price  } = event;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 m-2 rounded-full text-sm">
          {category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <FaCalendarAlt className="mr-2" />
          <span>{date}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <FaMapMarkerAlt className="mr-2" />
          <span>{venue}</span>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-indigo-600 font-bold">LKR.{price}</span>
          <Link 
            to={`/events/${id}`} 
            className="flex items-center bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
          >
            <FaTicketAlt className="mr-1" />
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;