import type { Book } from '../types/book'

export const books: Book[] = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 18.99,
    category: 'Self Growth',
    rating: 4.9,
    description: 'A proven framework for building good habits, breaking bad ones, and creating lasting change.',
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
    featured: true,
    tag: 'Bestseller',
  },
  {
    id: 2,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    price: 16.5,
    category: 'Fiction',
    rating: 4.8,
    description: 'A moving and imaginative story about regret, hope, and the possibility of second chances.',
    image:
      'https://images.unsplash.com/photo-1526243741027-444d633d7365?auto=format&fit=crop&w=900&q=80',
    featured: true,
    tag: 'Trending',
  },
  {
    id: 3,
    title: 'Deep Work',
    author: 'Cal Newport',
    price: 21.0,
    category: 'Productivity',
    rating: 4.7,
    description: 'Learn how to focus deeply, eliminate distractions, and produce meaningful work.',
    image:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    title: 'Ikigai',
    author: 'Héctor García',
    price: 17.25,
    category: 'Mindset',
    rating: 4.8,
    description: 'A practical and inspiring guide to finding purpose, balance, and joy in everyday life.',
    image:
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    price: 29.99,
    category: 'Technology',
    rating: 4.9,
    description: 'A classic for developers who want to write readable, maintainable, and efficient code.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: 20.75,
    category: 'Finance',
    rating: 4.8,
    description: 'A clear and engaging look at how behavior shapes financial success and long-term wealth.',
    image:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80',
  },
]
