const tarotCards = [
    {
        number: 0,
        card: "The Fool",
        meaning: "New beginnings, innocence, spontaneity",
        string1: "Embrace new opportunities with an open heart.",
        string2: "Take a leap of faith and trust in the journey ahead.",
        string3: "Embrace your inner child and follow your instincts."
    },
    {
        number: 1,
        card: "The Magician",
        meaning: "Manifestation, resourcefulness, power",
        string1: "Tap into your creative potential and manifest your desires.",
        string2: "Use your skills and talents to achieve your goals.",
        string3: "Harness the power of your thoughts to create your reality."
    },
    {
        number: 2,
        card: "The High Priestess",
        meaning: "Intuition, secrets, hidden knowledge",
        string1: "Trust your intuition and listen to your inner voice.",
        string2: "Explore the depths of your subconscious mind.",
        string3: "Seek wisdom and understanding in the unknown."
    },
    {
        number: 3,
        card: "The Empress",
        meaning: "Abundance, nurturing, fertility",
        string1: "Nurture and care for yourself and those around you.",
        string2: "Embrace the abundance of life and celebrate its blessings.",
        string3: "Connect with your creative energy and give birth to new ideas."
    },
    {
        number: 4,
        card: "The Emperor",
        meaning: "Authority, structure, discipline",
        string1: "Establish a solid foundation for your ambitions.",
        string2: "Exercise authority with fairness and responsibility.",
        string3: "Embrace discipline and take control of your life."
    },
    {
        number: 5,
        card: "The Hierophant",
        meaning: "Tradition, conformity, spiritual guidance",
        string1: "Seek guidance from established traditions and wisdom.",
        string2: "Respect the beliefs and values of others.",
        string3: "Find spiritual fulfillment through traditional practices."
    },
    {
        number: 6,
        card: "The Lovers",
        meaning: "Choices, relationships, love",
        string1: "Make decisions based on love and harmony.",
        string2: "Embrace the power of relationships in your life.",
        string3: "Choose paths that align with your heart's desires."
    },
    {
        number: 7,
        card: "The Chariot",
        meaning: "Willpower, control, determination",
        string1: "Harness your willpower to overcome obstacles.",
        string2: "Maintain control over your emotions and actions.",
        string3: "Stay determined and focused on your goals."
    },
    {
        number: 8,
        card: "Strength",
        meaning: "Inner strength, self-discipline, compassion",
        string1: "Find strength within yourself to face challenges.",
        string2: "Exercise self-discipline in all aspects of your life.",
        string3: "Approach situations with compassion and understanding."
    },
    {
        number: 9,
        card: "The Hermit",
        meaning: "Solitude, introspection, guidance",
        string1: "Take time for introspection and self-discovery.",
        string2: "Seek inner guidance and wisdom in solitude.",
        string3: "Embrace the journey of self-discovery and enlightenment."
    },
    {
        number: 10,
        card: "The Wheel of Fortune",
        meaning: "Change, destiny, fate",
        string1: "Embrace the changes occurring in your life.",
        string2: "Trust in the cycles of life and embrace your destiny.",
        string3: "Believe in the power of fate and remain open to opportunities."
    },
    {
        number: 11,
        card: "Justice",
        meaning: "Balance, karma, fairness",
        string1: "Strive for fairness and balance in all your dealings.",
        string2: "Trust in the workings of karma and the universe.",
        string3: "Seek justice with integrity and compassion."
    },
    {
        number: 12,
        card: "The Hanged Man",
        meaning: "Sacrifice, perspective, letting go",
        string1: "Be willing to sacrifice short-term gains for long-term growth.",
        string2: "Gain a new perspective by letting go of old patterns.",
        string3: "Surrender to the flow of life and release attachment."
    },
    {
        number: 13,
        card: "Death",
        meaning: "Transformation, renewal, rebirth",
        string1: "Embrace the process of transformation and renewal.",
        string2: "Release what no longer serves you to make way for new beginnings.",
        string3: "Embrace the cycles of life and trust in the process of rebirth."
    },
    {
        number: 14,
        card: "Temperance",
        meaning: "Balance, harmony, moderation",
        string1: "Seek balance and moderation in all areas of your life.",
        string2: "Harmonize your inner and outer selves to find peace.",
        string3: "Practice patience and moderation to achieve your goals."
    },
    
    {
        number: 15,
        card: "The Devil",
        meaning: "Temptation, addiction, materialism",
        string1: "Beware of succumbing to temptation and negative influences.",
        string2: "Free yourself from limiting beliefs and addictions.",
        string3: "Reject materialism and embrace spiritual growth."
    },
    {
        number: 16,
        card: "The Tower",
        meaning: "Upheaval, chaos, revelation",
        string1: "Embrace unexpected changes as opportunities for growth.",
        string2: "Find clarity and understanding in moments of chaos.",
        string3: "Release what no longer serves you and rebuild from the ground up."
    },
    {
        number: 17,
        card: "The Star",
        meaning: "Hope, inspiration, positive energy",
        string1: "Stay hopeful and optimistic about the future.",
        string2: "Find inspiration and guidance in the stars above.",
        string3: "Embrace positive energy and allow it to guide your path."
    },
    {
        number: 18,
        card: "The Moon",
        meaning: "Intuition, illusion, mystery",
        string1: "Trust your intuition to navigate through uncertainty.",
        string2: "Beware of illusions and deception clouding your judgment.",
        string3: "Find comfort in the mysteries of life and embrace the unknown."
    },
    {
        number: 19,
        card: "The Sun",
        meaning: "Joy, success, fulfillment",
        string1: "Bask in the warmth of joy and happiness.",
        string2: "Celebrate your successes and achievements.",
        string3: "Find fulfillment and contentment in the simple pleasures of life."
    },
    {
        number: 20,
        card: "Judgement",
        meaning: "Rebirth, awakening, self-awareness",
        string1: "Embrace a new chapter of self-discovery and growth.",
        string2: "Experience a spiritual awakening and transformation.",
        string3: "Reflect on past experiences and embrace self-awareness."
    },
    {
        number: 21,
        card: "The World",
        meaning: "Completion, fulfillment, integration",
        string1: "Celebrate the completion of a major milestone or goal.",
        string2: "Experience a sense of fulfillment and wholeness.",
        string3: "Integrate all aspects of yourself into a harmonious whole."
    }
];

// Define an array to hold image objects
const preloadedImages = [];

// Function to preload images
function preloadImages() {
    for (let i = 0; i < tarotCards.length; i++) {
        const image = new Image();
        image.src = `assets/cards/${tarotCards[i].number}.jpg`; // Adjust the path and file extension as needed
        preloadedImages.push(image);
    }
}

// Call the preloadImages function to preload all images when the page loads
preloadImages();