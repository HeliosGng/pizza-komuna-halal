import { Review } from '../types';

export const initialReviews: Review[] = [
  {
    id: 'rev-1',
    author: 'Andrés Jorge',
    rating: 5,
    date: '1 month ago',
    comment: 'We tried the sandwiches and they’re amazing. They’re well toasted and taste great. I’m not a fan of mayonnaise, but even without it, the sandwiches are just right.',
    tags: ['sandwiches', 'food', 'staff'],
    likes: 12,
  },
  {
    id: 'rev-2',
    author: 'Keli Serdari',
    rating: 5,
    date: '2 weeks ago',
    comment: 'The best in town 🍕🤌🏼 Food: 5/5, Service: 5/5. Authentic halal pizzas and fast delivery!',
    tags: ['pizzas', 'food', 'service'],
    likes: 8,
  },
  {
    id: 'rev-3',
    author: 'jumna demiri',
    rating: 5,
    date: '1 year ago',
    comment: 'the place its a little small but the staff is very good and kind i dont even need to talk about the pasta they are amazing',
    tags: ['staff', 'pasta', 'wonderful staff'],
    likes: 15,
  },
  {
    id: 'rev-4',
    author: 'Arben Hoxha',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Pica Komuna e Parisit është më e mira në zonë! Përbërësit hallall shumë të freskët dhe buka e pjekur perfekt në furrë me dru.',
    tags: ['pizzas', 'halal', 'food'],
    likes: 6,
  },
  {
    id: 'rev-5',
    author: 'Elena R.',
    rating: 5,
    date: '2 months ago',
    comment: 'Super fast delivery and the toasted ham & cheese sandwich was warm and super crispy. Highly recommend if you are around Komuna e Parisit!',
    tags: ['sandwiches', 'service'],
    likes: 9,
  },
];
