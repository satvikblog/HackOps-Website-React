import { Event } from '../types';

export const events: Event[] = [
  {
    id: '1',
    title: 'Getting into Cybersecurity',
    description: 'An event which gives you insights on various domains in cybersecurity and the perfect roadmap to land your first job!',
    date: '2024-12-28',
    type: 'workshop',
    status: 'upcoming',
    registrationLink: '#',
    detailsLink:'#',
    registrationStatus: 'notStarted',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    participants: {
      current: 0,
      total: 100
    }
  },
  {
    id: '2',
    title: 'Linux Masterclass',
    description: 'Intensive 2-day bootcamp covering Linux fundamentals.',
    date: '2024-12-29',
    type: 'workshop',
    detailsLink:"#",
    status: 'upcoming',
    registrationLink: '#',
    registrationStatus: 'notStarted',
    image: 'https://assets.techrepublic.com/uploads/2021/08/tux-new.jpg',
    participants: {
      current: 0,
      total: 50
    }
  },
  {
    id: '3',
    title: 'Network Security Webinar',
    description: 'Expert-led session on securing enterprise networks.',
    date: '2024-03-10',
    type: 'webinar',
    status: 'past',
    registrationStatus: 'notStarted',
    registrationLink: 'https://forms.example.com/network-security-webinar',
    detailsLink: 'https://example.com/past-event-details/network-security-webinar',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    participants: {
      current: 150,
      total: 200
    }
  },
  {
    id: '4',
    title: 'Wifi Hacking 101',
    description: 'Expert-led session on securing wifi networks.',
    date: '2025-01-10',
    type: 'workshop',
    status: 'upcoming',
    registrationStatus: 'notStarted',
    registrationLink: 'https://forms.example.com/network-security-webinar',
    detailsLink: 'https://example.com/past-event-details/network-security-webinar',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    participants: {
      current: 0,
      total: 60
    }
  }
];
