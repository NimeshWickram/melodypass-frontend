// src/services/eventService.js
import api from './api';

// Since we don't have an actual backend yet, we'll use some mock data
const mockEvents = [
  {
    id: 1,
    title: "Hamilton: The Musical",
    image: "https://via.placeholder.com/400x200.png?text=Hamilton",
    date: "June 15, 2025",
    venue: "Broadway Theater, NYC",
    category: "Musical",
    price: 149.99,
    description: "Hamilton is the story of America then, told by America now. Featuring a score that blends hip-hop, jazz, R&B, and Broadway, Hamilton has taken the story of American founding father Alexander Hamilton and created a revolutionary moment in theatre.",
    availableSeats: 120,
    totalSeats: 500
  },
  {
    id: 2,
    title: "The Phantom of the Opera",
    image: "https://via.placeholder.com/400x200.png?text=Phantom",
    date: "July 22, 2025",
    venue: "Royal Opera House",
    category: "Opera",
    price: 129.99,
    description: "The Phantom of the Opera is a haunting love story. The tale of a man who goes to extreme lengths to win the love of his life.",
    availableSeats: 80,
    totalSeats: 300
  },
  {
    id: 3,
    title: "Coachella 2025",
    image: "https://via.placeholder.com/400x200.png?text=Coachella",
    date: "April 10, 2025",
    venue: "Indio, California",
    category: "Festival",
    price: 399.99,
    description: "Coachella Valley Music and Arts Festival is an annual music and arts festival held in California, featuring many genres of music including rock, pop, indie, hip hop and electronic dance music.",
    availableSeats: 5000,
    totalSeats: 100000
  },
  {
    id: 4,
    title: "The Lion King",
    image: "https://via.placeholder.com/400x200.png?text=Lion+King",
    date: "August 5, 2025",
    venue: "Minskoff Theatre",
    category: "Musical",
    price: 159.99,
    description: "Experience the stunning visual artistry, the unforgettable music and the exhilarating choreography of one of the most awe-inspiring shows ever brought to life on stage.",
    availableSeats: 200,
    totalSeats: 1000
  }
];

// Mock delay to simulate API call
const mockDelay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// Get all events
export const getAllEvents = async () => {
  try {
    // In a real app, you would do:
    // const response = await api.get('/events');
    // return response.data;
    
    // Simulate API delay
    await mockDelay();
    
    return { success: true, data: mockEvents };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || 'Failed to fetch events' 
    };
  }
};

// Get single event by ID
export const getEventById = async (id) => {
  try {
    // In a real app, you would do:
    // const response = await api.get(`/events/${id}`);
    // return response.data;
    
    // Simulate API delay
    await mockDelay();
    
    const event = mockEvents.find(event => event.id === parseInt(id));
    
    if (!event) {
      throw new Error('Event not found');
    }
    
    return { success: true, data: event };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || error.message || 'Failed to fetch event' 
    };
  }
};

// Search events
export const searchEvents = async (query) => {
  try {
    // In a real app, you would do:
    // const response = await api.get(`/events/search?q=${query}`);
    // return response.data;
    
    // Simulate API delay
    await mockDelay();
    
    const filteredEvents = mockEvents.filter(event => 
      event.title.toLowerCase().includes(query.toLowerCase()) ||
      event.venue.toLowerCase().includes(query.toLowerCase()) ||
      event.category.toLowerCase().includes(query.toLowerCase())
    );
    
    return { success: true, data: filteredEvents };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || 'Failed to search events' 
    };
  }
};

// Filter events
export const filterEvents = async (filters) => {
  try {
    // In a real app, you would do:
    // const response = await api.post('/events/filter', filters);
    // return response.data;
    
    // Simulate API delay
    await mockDelay();
    
    let filteredEvents = [...mockEvents];
    
    // Apply category filter
    if (filters.category && filters.category !== 'All') {
      filteredEvents = filteredEvents.filter(event => 
        event.category === filters.category
      );
    }
    
    // Apply price filter
    if (filters.maxPrice) {
      filteredEvents = filteredEvents.filter(event => 
        event.price <= filters.maxPrice
      );
    }
    
    // Apply date filter (simplified for now)
    if (filters.month) {
      filteredEvents = filteredEvents.filter(event => 
        event.date.includes(filters.month)
      );
    }
    
    return { success: true, data: filteredEvents };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || 'Failed to filter events' 
    };
  }
};

// For admin: Create new event
export const createEvent = async (eventData) => {
  try {
    // In a real app, you would do:
    // const response = await api.post('/events', eventData);
    // return response.data;
    
    // Simulate API delay
    await mockDelay();
    
    // Mock validation
    if (!eventData.title || !eventData.venue || !eventData.date) {
      throw new Error('Missing required fields');
    }
    
    return { 
      success: true, 
      message: 'Event created successfully',
      data: {
        id: mockEvents.length + 1,
        ...eventData
      }
    };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || error.message || 'Failed to create event' 
    };
  }
};

// For admin: Update event
export const updateEvent = async (id, eventData) => {
  try {
    // In a real app, you would do:
    // const response = await api.put(`/events/${id}`, eventData);
    // return response.data;
    
    // Simulate API delay
    await mockDelay();
    
    // Check if event exists
    const eventIndex = mockEvents.findIndex(event => event.id === parseInt(id));
    
    if (eventIndex === -1) {
      throw new Error('Event not found');
    }
    
    return { 
      success: true, 
      message: 'Event updated successfully',
      data: {
        ...mockEvents[eventIndex],
        ...eventData
      }
    };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || error.message || 'Failed to update event' 
    };
  }
};

// For admin: Delete event
export const deleteEvent = async (id) => {
  try {
    // In a real app, you would do:
    // const response = await api.delete(`/events/${id}`);
    // return response.data;
    
    // Simulate API delay
    await mockDelay();
    
    // Check if event exists
    const eventIndex = mockEvents.findIndex(event => event.id === parseInt(id));
    
    if (eventIndex === -1) {
      throw new Error('Event not found');
    }
    
    return { 
      success: true, 
      message: 'Event deleted successfully' 
    };
  } catch (error) {
    return { 
      success: false, 
      error: error.response?.data?.message || error.message || 'Failed to delete event' 
    };
  }
};