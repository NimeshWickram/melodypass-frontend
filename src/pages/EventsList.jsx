// src/pages/EventsList.jsx
import { useState, useEffect } from 'react';
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa';
import EventCard from '../components/EventCard';

const EventsList = () => {
  // States
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [priceRange, setPriceRange] = useState(500); // Max price
  
  // Categories
  const categories = ['All', 'Musical', 'Concert', 'Festival', 'Theater', 'Comedy', 'Classical', 'Opera', 'Dance'];
  
  // Mock data - later this will come from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockEvents = [
        {
          id: 1,
          title: "Hamilton: The Musical",
          image: "https://via.placeholder.com/400x200.png?text=Hamilton",
          date: "June 15, 2025",
          venue: "Broadway Theater, NYC",
          category: "Musical",
          price: 149.99
        },
        {
          id: 2,
          title: "The Phantom of the Opera",
          image: "https://via.placeholder.com/400x200.png?text=Phantom",
          date: "July 22, 2025",
          venue: "Royal Opera House",
          category: "Opera",
          price: 129.99
        },
        {
          id: 3,
          title: "Coachella 2025",
          image: "https://via.placeholder.com/400x200.png?text=Coachella",
          date: "April 10, 2025",
          venue: "Indio, California",
          category: "Festival",
          price: 399.99
        },
        {
          id: 4,
          title: "The Lion King",
          image: "https://via.placeholder.com/400x200.png?text=Lion+King",
          date: "August 5, 2025",
          venue: "Minskoff Theatre",
          category: "Musical",
          price: 159.99
        },
        {
          id: 5,
          title: "Taylor Swift: The Eras Tour",
          image: "https://via.placeholder.com/400x200.png?text=Taylor+Swift",
          date: "September 18, 2025",
          venue: "Madison Square Garden",
          category: "Concert",
          price: 249.99
        },
        {
          id: 6,
          title: "Comedy Night with Dave Chappelle",
          image: "https://via.placeholder.com/400x200.png?text=Comedy+Night",
          date: "June 30, 2025",
          venue: "The Comedy Store",
          category: "Comedy",
          price: 89.99
        },
        {
          id: 7,
          title: "Swan Lake Ballet",
          image: "https://via.placeholder.com/400x200.png?text=Swan+Lake",
          date: "July 12, 2025",
          venue: "Lincoln Center",
          category: "Dance",
          price: 120.00
        },
        {
          id: 8,
          title: "Chicago Symphony Orchestra",
          image: "https://via.placeholder.com/400x200.png?text=Symphony",
          date: "August 22, 2025",
          venue: "Symphony Center",
          category: "Classical",
          price: 95.00
        }
      ];
      
      setEvents(mockEvents);
      setFilteredEvents(mockEvents);
      setLoading(false);
    }, 1000);
  }, []);
  
  // Apply filters
  useEffect(() => {
    let result = [...events];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.venue.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter(event => event.category === selectedCategory);
    }
    
    // Apply price filter
    result = result.filter(event => event.price <= priceRange);
    
    // Apply date filter (simplified for now)
    if (selectedDate) {
      // In a real app, you'd parse and compare dates properly
      result = result.filter(event => event.date.includes(selectedDate));
    }
    
    setFilteredEvents(result);
  }, [searchTerm, selectedCategory, priceRange, selectedDate, events]);

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Reset filters
  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedDate('');
    setPriceRange(500);
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Events</h1>
        
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Search Input */}
            <div className="flex items-center flex-grow bg-gray-100 rounded-lg px-3 py-2">
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search events or venues..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="bg-transparent w-full focus:outline-none"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="text-gray-400 hover:text-gray-600">
                  <FaTimes />
                </button>
              )}
            </div>
            
            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center px-4 py-2 rounded-lg ${
                showFilters ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <FaFilter className="mr-2" />
              Filters
            </button>
            
            {/* Reset Button - Only shown when filters are applied */}
            {(selectedCategory || selectedDate || priceRange < 500 || searchTerm) && (
              <button
                onClick={resetFilters}
                className="px-4 py-2 text-indigo-600 hover:text-indigo-800"
              >
                Reset All
              </button>
            )}
          </div>
          
          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Date Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Month
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Any Time</option>
                  <option value="April">April 2025</option>
                  <option value="May">May 2025</option>
                  <option value="June">June 2025</option>
                  <option value="July">July 2025</option>
                  <option value="August">August 2025</option>
                  <option value="September">September 2025</option>
                </select>
              </div>
              
              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Max Price: ${priceRange}
                </label>
                <input
                  type="range"
                  min="0"
                  max="500"
                  step="10"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)} //COPILET
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>
        
        {/* Events Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading events...</p>
          </div>
        ) : filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No events found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsList;