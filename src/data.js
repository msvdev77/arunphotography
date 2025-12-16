// Helper to generate image paths
const generateImages = (count, prefix = '', ext = '.jpg') => {
    return Array.from({ length: count }, (_, i) => ({
        id: `generated-${i}`,
        category: 'birthday',
        src: `/src/assets/images/anitha/${i + 2}${ext}`, // Starting from 2.jpg based on file list
        title: `Birthday Moment ${i + 1}`,
        description: 'Capturing pure joy.'
    }));
};

// Existing curated list + generated list
export const portfolioData = [
    {
        id: 1,
        category: 'wedding',
        src: '/src/assets/images/DSC00032 2.jpg',
        title: 'Sarah & Mike',
        description: 'A beautiful ceremony in the garden.'
    },
    {
        id: 2,
        category: 'wedding',
        src: '/src/assets/images/DSC03699 2.jpg',
        title: 'The Vows',
        description: 'Emotional moments at the altar.'
    },
    {
        id: 3,
        category: 'wedding',
        src: '/src/assets/images/DSC09021 2.jpg',
        title: 'First Dance',
        description: 'Dancing under the stars.'
    },
    {
        id: 7,
        category: 'wedding',
        src: '/src/assets/images/DSC09087 3.jpg',
        title: 'Golden Hour',
        description: 'Sunset portraits.'
    },
    {
        id: 8,
        category: 'wedding',
        src: '/src/assets/images/DSC09148 copy.jpg',
        title: 'Details',
        description: 'The little things that matter.'
    },
    // Add some Anitha images manually for the hero to ensure they exist
    {
        id: 'ani-1',
        category: 'birthday',
        src: '/src/assets/images/anitha/2.jpg',
        title: 'Little Princess',
        description: 'Royal birthday celebration.'
    },
    {
        id: 'ani-2',
        category: 'birthday',
        src: '/src/assets/images/anitha/3.jpg',
        title: 'Joyful Laughter',
        description: 'Candid moments.'
    },
    {
        id: 'ani-3',
        category: 'birthday',
        src: '/src/assets/images/anitha/4.jpg',
        title: 'Cake Smash',
        description: 'Fun with cake.'
    },
    {
        id: 'ani-4',
        category: 'birthday',
        src: '/src/assets/images/anitha/5.jpg',
        title: 'Family Love',
        description: 'Family portraits.'
    },
    {
        id: 'ani-5',
        category: 'birthday',
        src: '/src/assets/images/anitha/6.jpg',
        title: 'Magical Day',
        description: 'A day to remember.'
    },
    ...generateImages(45) // Generate 45 more images from the folder (2.jpg to 46.jpg approx)
];

export const heroImage = '/src/assets/images/Poster_6 copy.jpg';
