// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import kuweniImage from '../assets/images/image1.jpg';
import KathaNayaka from '../assets/images/image3.jpg';
import Singhabahu from '../assets/images/image4.jpg';
import interstellar from '../assets/images/image5.jpg';


const Home = () => {
  // Mock data for now - later this will come from your API
  const [featuredEvents, setFeaturedEvents] = useState([
    {
      id: 1,
      title: "KUWENI LIVE IN CONCERT",
      image: kuweniImage,
      date: "June 15, 2025  • 07.00 PM IST",
      venue: "Nelum Pokuna Theater, Colombo",
      category: "Concert",
      price: 2500
    },
    {
      id: 2,
      title: "GARU KATHANAYAKA THUMANI",
      image: KathaNayaka,  
      date: "July 22, 2025  • 04.30 PM IST",
      venue: "Lionel Wendt Theatre, Colombo",
      category: "Stage Drama",
      price: 499
    },
    {
      id: 3,
      title: "SINHABAHU STAGE DRAMA",
      image: Singhabahu,  
      date: "April 10, 2025  • 06.00 PM IST",
      venue: "Namel Malini Punchi Theatre, Colombo",
      category: "Stage Drama",
      price: 1000
    },
    {
      id: 4,
      title: "INTERSTELLAR EDM NIGHT",
      image: interstellar,
      date: "August 5, 2025 • 08.00 PM IST",
      venue: "Fort City, Colombo ",
      category: "Musical",
      price: 3000 
    },
 
    
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white">
        <div className="container mx-auto px-4 py-24 max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">MelodyPass</h1>
            <p className="text-xl mb-10">Discover and book tickets to the best musicals and events</p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto flex space-x-2">
      <input 
        type="text" 
        placeholder="Search for events, artists, or venues..." 
        className="bg-white flex-grow py-3 px-4 rounded-lg border-2 border-indigo-100 focus:outline-none focus:border-indigo-300 text-black shadow-sm"
      />
      <button className="bg-indigo-800 hover:bg-indigo-950 text-white py-3 px-6 rounded-lg font-medium transition duration-300 shadow-sm">
        Search
      </button>
   
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Events */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Events</h2>
          <Link to="/events" className="text-indigo-600 hover:text-indigo-800">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
      
      {/* Categories Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Browse by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Musicals', 'Concerts', 'Festivals', 'Theater', 'Comedy', 'Classical', 'Opera', 'Dance'].map(category => (
              <Link 
                key={category} 
                to={`/events?category=${category.toLowerCase()}`}
                className="bg-white rounded-lg p-6 text-center shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-medium text-gray-800">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Don't Miss Out on Amazing Events</h2>
          <p className="text-xl mb-8">Sign up for early access to tickets and exclusive offers</p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white flex-grow py-3 px-5 rounded-lg text-white-800 border-2 border-indigo-200 focus:border-indigo-400 focus:outline-none text-black shadow-sm"
            />
            <button className="bg-indigo-800 hover:bg-indigo-950 text-white py-3 px-6 rounded-lg font-medium transition duration-300 shadow-sm">
            
            Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;