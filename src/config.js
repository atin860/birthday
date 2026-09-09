/**
 * ===================================================================
 * 🎂 BIRTHDAY WEBSITE CONFIGURATION FILE 🎂
 * ===================================================================
 * 
 * Edit any text, image URLs, or music links below to personalize 
 * the birthday surprise for your best friend!
 */

export const BIRTHDAY_CONFIG = {
  // -----------------------------------------------------------------
  // 1. RECIPIENT & HERO SECTION
  // -----------------------------------------------------------------
  recipientName: "Bestie",

  hero: {
    badge: "Special Birthday Surprise 💝",
    title: "Happy Birthday! 🎂✨",
    subtitle: "Some people come into your life and quietly make everything a little brighter. You are one of those people.",
    ctaButton: "Your Surprise Awaits 💝",
    madeWithLove: "Made with ❤️ just for you"
  },

  // -----------------------------------------------------------------
  // 2. MAIN PHOTO SECTION
  // -----------------------------------------------------------------
  photo: {
    url: "./bestie-photo.jpg",
    alt: "Best Friend Photo",
    caption: "The smile that makes everything better ✨"
  },

  // -----------------------------------------------------------------
  // 3. PERSONAL BIRTHDAY MESSAGE
  // -----------------------------------------------------------------
  message: {
    title: "A Little Note For You ❤️",
    paragraphs: [
      "Happy Birthday to one of the most special people in my life! ❤️",

      "I honestly don't know how to explain how lucky I feel to have a friend like you. From random conversations and stupid jokes to those moments when we don't even need words, every memory with you is something I'll always value.",

      "You have this amazing way of making ordinary days feel better just by being around. Your smile, your craziness, your kindness and the way you care about people make you truly special.",

      "On your birthday, I just want you to know that I hope life gives you everything you deserve — endless happiness, beautiful memories, success, peace, and lots of reasons to smile.",

      "Keep being the amazing person you are. Never change yourself just to fit into someone else's world.",

      "And no matter how much life changes, I hope our friendship always remains one of those beautiful things that never fades.",

      "Happy Birthday once again! 🎂💖\nStay happy, stay crazy, and keep smiling — always."
    ]
  },

  // -----------------------------------------------------------------
  // 4. OUR MEMORIES SECTION
  // -----------------------------------------------------------------
  memories: [
    {
      id: 1,
      title: "The Favorite Smile ✨",
      date: "Core Memory",
      image: "./bestie-photo.jpg",
      caption: "That bright smile that instantly brings positive vibes everywhere."
    },
    {
      id: 2,
      title: "Uncontrollable Laughter 🤣",
      date: "Pure Happiness",
      image: "./memory-1.jpg",
      caption: "Hours going by like seconds talking about absolute nonsense."
    },
    {
      id: 3,
      title: "Another Unforgettable Moment 🌸",
      date: "Good Times",
      image: "./memory-2.jpg",
      caption: "Creating core memories one adventure at a time."
    },
    {
      id: 4,
      title: "Endless Memories 🌙",
      date: "Always & Forever",
      image: "./bestie-photo.jpg",
      caption: "Celebrating another year of you being completely amazing."
    }
  ],

  // -----------------------------------------------------------------
  // 5. THINGS I LOVE ABOUT YOU SECTION
  // -----------------------------------------------------------------
  qualities: [
    {
      id: "smile",
      title: "Your Smile 😊",
      description: "It lights up the whole room instantly and makes bad days feel so much lighter.",
      gradient: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)"
    },
    {
      id: "kindness",
      title: "Your Kindness ❤️",
      description: "The genuine warmth and love you give to everyone around you is truly rare.",
      gradient: "linear-gradient(135deg, #7b2cbf 0%, #9d4edd 100%)"
    },
    {
      id: "craziness",
      title: "Your Crazy Side 😂",
      description: "The unhinged humor, weird noises, and stupid jokes that make my life 100x funnier.",
      gradient: "linear-gradient(135deg, #fda085 0%, #f6d365 100%)"
    },
    {
      id: "energy",
      title: "Your Positive Energy ✨",
      description: "No matter how gloomy things get, you bring hopeful, cozy vibes everywhere.",
      gradient: "linear-gradient(135deg, #ffb7b2 0%, #ff9aa2 100%)"
    },
    {
      id: "support",
      title: "Your Support 🤝",
      description: "Knowing you always have my back no matter what means more than words can say.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: "you",
      title: "Simply Being You 💖",
      description: "Authentic, unapologetic, beautiful, and irreplaceable. Never change for anyone.",
      gradient: "linear-gradient(135deg, #ff758c 0%, #ffb7b2 100%)"
    }
  ],

  // -----------------------------------------------------------------
  // 6. BIRTHDAY WISH & FINAL SECTION
  // -----------------------------------------------------------------
  wishSection: {
    quote: "Here's to another beautiful year of YOU. 🥂✨",
    subtext: "May this year bring you more happiness than you can imagine, more memories than you can count, and countless reasons to smile.",
    buttonText: "Make a Wish 🎂",
    wishConfirmationTitle: "Wish Made! ✨",
    wishConfirmationText: "Now go make this year unforgettable. ❤️"
  },

  // -----------------------------------------------------------------
  // 7. BACKGROUND MUSIC CONFIGURATION
  // -----------------------------------------------------------------
  // ⚠️ PASTE YOUR PREFERRED BACKGROUND AUDIO FILE URL HERE
  // Royalty-free acoustic acoustic/ambient music stream fallback:
  music: {
    // High quality royalty-free ambient piano stream or audio URL:
    url: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=sweet-piano-melody-112344.mp3",
    title: "Sweet Melody",
    artist: "Birthday Magic"
  }
};
