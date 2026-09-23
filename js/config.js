/**
 * =========================================================================
 * CONFIG.JS - WEBSITE REBRANDING CONFIGURATION & ENGINE
 * =========================================================================
 * 
 * INSTRUCTIONS:
 * 1. Modify Section 1 (Data Entry) to update branding, styles, images, and content.
 * 2. Include this script at the end of index.html after index.js:
 *    
 * =========================================================================
 */

/* =========================================================================
   SECTION 1: DATA ENTRY CONFIGURATION
   ========================================================================= */
const REBRAND_CONFIG = {
  // --- BRAND IDENTIFICATION & META DATA ---
  brand: {
    name: "BAITHACK",
    suffix: ".",
    tagline: "Taste of Kulhad",
    description: "Baithack - Taste of Kulhad. Cozy cafe in Borivali West serving authentic Kulhad chai, Kulhad pizza, pasta, rice bowls, and budget-friendly delicious bites.",
    keywords: "baithack, taste of kulhad, kulhad pizza, borivali cafe, tea, coffee, pasta, rice bowl, mumbai cafe, jain food",
    themeColor: "#0d0e12",
    domain: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west",
    ogImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmOGkxzK5XRuCwzwC2ad2aJFrIjozxfqfvqLjL4t_m968KzXy90dxFd_wAK3ZrrbwszUr1PEtSys__GNKXBEOX37euJ7vBZHus0w6UupIDjT7NlzhyD894s6EUbEqECE5aS89Ot1PZ2g3DKM=s680-w680-h510-rw",
    faviconEmoji: "☕",
    whatsappNumber: "918097383026"
  },

  // --- GLOBAL STYLES & THEMING ---
  styles: {
    colors: {
      bg: "#0d0e12",
      bgCard: "#15181e",
      bgLight: "#1c2028",
      primary: "#d4a373",
      primaryHover: "#faedcd",
      text: "#e0e2ec",
      textMuted: "#9aa0b4",
      accent: "#2c313c"
    },
    fonts: {
      heading: "'Syne', sans-serif",
      body: "'Plus Jakarta Sans', sans-serif"
    }
  },

  // --- HERO SECTION ---
  hero: {
    subtitle: "Taste of Kulhad",
    title: "Sip, Relax & Savor Authentic Goodness",
    description: "Welcome to Baithack! Enjoy delicious Kulhad treats, freshly baked pizzas, creamy pastas, and warm cozy vibes right in Borivali West.",
    bgImage: "https://lh3.googleusercontent.com/grass-cs/ACvplmOGkxzK5XRuCwzwC2ad2aJFrIjozxfqfvqLjL4t_m968KzXy90dxFd_wAK3ZrrbwszUr1PEtSys__GNKXBEOX37euJ7vBZHus0w6UupIDjT7NlzhyD894s6EUbEqECE5aS89Ot1PZ2g3DKM=s680-w680-h510-rw",
    stats: [
      { value: "100%", label: "Vegetarian & Jain Friendly" },
      { value: "4.9 ★", label: "Local Favorite" },
      { value: "12 PM - 12 AM", label: "Open Daily" }
    ]
  },

  // --- ABOUT US SECTION ---
  about: {
    subtitle: "About Us",
    title: "Bringing People Together Over Kulhad & Great Food",
    paragraphs: [
      "Located in the heart of Borivali West, Baithack is your go-to neighborhood cafe for relaxing with friends, enjoying budget-friendly comfort food, and savoring authentic Kulhad flavors.",
      "From signature Kulhad Pizzas and loaded rice bowls to rich hot chocolate and Jain-friendly offerings, we craft every dish with love to ensure you always have a memorable time."
    ],
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlYCOLIslOuQMPZIaBbyRJWtvNnpmZ4Z6iuSjzu6PUBFoNETB2lrWBAv3YcIXymvw_xJwYppOynEQR88y4vaZ1uUievw0SrDqu4i5eDkC78cTFxV7Wgsym6jw4TQtinG8mH2qZpFj5bGzz2=s680-w680-h510-rw",
    imageAlt: "Inside view of Baithack cafe",
    experienceValue: "100%",
    experienceLabel: "Good Vibes Only"
  },

  // --- SPECIALS / NEWLY ADDED FOOD ---
  specials: {
    subtitle: "Fresh From Kitchen",
    title: "Signature Kulhad Specials",
    badge: "Must Try",
    description: "Our famous baked treats served fresh in traditional clay kulhads.",
    items: [
      {
        badge: "Bestseller",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        alt: "Veggie Kulhad Pizza",
        diet: "veg",
        title: "Veggie Kulhad Pizza",
        price: "₹180",
        desc: "Layers of fresh vegetables, molten cheese, and signature spices baked directly in a clay kulhad."
      },
      {
        badge: "Chef's Special",
        img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600",
        alt: "Paneer Makhani Kulhad Pizza",
        diet: "veg",
        title: "Paneer Makhani Kulhad Pizza",
        price: "₹200",
        desc: "Soft paneer cubes drenched in rich makhani sauce and melted cheese, baked to perfection in a kulhad."
      },
      {
        badge: "Popular",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLAvJlv7elYWniETmLszeS6y3neoVggq6GVnC72ARmLw&s=10",
        alt: "Pink Sauce Pasta",
        diet: "veg",
        title: "Pink Sauce Pasta",
        price: "₹220",
        desc: "Penne pasta cooked in a velvety blend of rich white sauce and tangy red sauce, seasoned with herbs."
      }
    ]
  },

  // --- OFFERS SECTION ---
  offers: {
    subtitle: "Exclusive Savings",
    title: "Current Deals & Combos",
    items: [
      {
        tag: "COMBO OFFER",
        tagline: "KULHAD SPECIAL",
        title: "Kulhad Combo",
        desc: "Get any Kulhad Pizza with a refreshing Hot Chocolate or Strong Chocolate Coffee.",
        code: "BAITHACK20",
        highlight: false
      },
      {
        tag: "HAPPY HOURS",
        title: "Flat Discount on Order",
        desc: "Order online via Swiggy or Zomato for exclusive late-night and lunch discounts.",
        code: "SPECIALDEAL",
        highlight: true
      },
      {
        tag: "GROUP HANGOUT",
        title: "Pizza & Rice Bowl Deal",
        desc: "Pair any Baithack Spl. Pizza with a Paneer Makhani Rice Bowl at special store rates.",
        code: "BAITHACKPAIR",
        highlight: false
      }
    ]
  },

  // --- FEATURED MENU SECTION ---
  menu: {
    subtitle: "Our Full Menu",
    title: "Freshly Prepared & Delicious",
    pdfUrl: "assets/baithack-menu.pdf",
    pdfFilename: "Baithack_Menu.pdf",
    categories: [
      { id: "all", label: "All Items", active: true },
      { id: "pizza", label: "Pizza", active: false },
      { id: "kulhad", label: "Kulhad Pizza", active: false },
      { id: "pasta", label: "Pasta", active: false },
      { id: "rice", label: "Rice Bowl", active: false }
    ],
    items: [
      // PIZZA CATEGORY
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        title: "Onion Pizza",
        price: "₹160",
        diet: "veg",
        desc: "Classic cheese pizza topped with crunchy sliced onions and herbs.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600",
        title: "Corn Pizza",
        price: "₹170",
        diet: "veg",
        desc: "Loaded with sweet juicy golden corn and melted mozzarella cheese.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=600",
        title: "Corn & Onion Pizza",
        price: "₹180",
        diet: "veg",
        desc: "Delightful combination of sweet corn and crisp onions with cheese.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600",
        title: "Veggies Pizza",
        price: "₹190",
        diet: "veg",
        desc: "Fresh garden vegetables including capsicum, onion, and tomatoes.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&q=80&w=600",
        title: "Double Cheese Pizza",
        price: "₹200",
        diet: "veg",
        desc: "Loaded with an extra layer of melted mozzarella and cheddar blend.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1339336/dineout"
      },
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600",
        title: "Paneer Makhani Pizza",
        price: "₹210",
        diet: "veg",
        desc: "Succulent paneer cubes tossed in rich makhani gravy over crisp pizza crust.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?auto=format&fit=crop&q=80&w=600",
        title: "Olive Baby Corn Pizza",
        price: "₹210",
        diet: "veg",
        desc: "Topped with sliced black olives, tender baby corn, and mozzarella.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=600",
        title: "Cheese Burst Pizza",
        price: "₹230",
        diet: "veg",
        desc: "Decadent pizza crust bursting with liquid cheese inside every bite.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },
      {
        category: "pizza",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        title: "Baithack Spl. Pizza",
        price: "₹250",
        diet: "veg",
        desc: "Our house special loaded with premium veggies, extra cheese, and secret spices.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },

      // KULHAD PIZZA CATEGORY
      {
        category: "kulhad",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        title: "Veggie Kulhad Pizza",
        price: "₹180",
        diet: "veg",
        desc: "Fresh veggies, pizza sauce, and gooey cheese baked in an earthy earthen pot.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },
      {
        category: "kulhad",
        img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600",
        title: "Gold Corn Kulhad Pizza",
        price: "₹190",
        diet: "veg",
        desc: "Sweet golden corn layered with cheese and baked hot inside a clay kulhad.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },
      {
        category: "kulhad",
        img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600",
        title: "Paneer Makhani Kulhad Pizza",
        price: "₹200",
        diet: "veg",
        desc: "Rich paneer makhani and cheese baked in a traditional clay kulhad.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },

      // PASTA CATEGORY
      {
        category: "pasta",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7EyIlRYYdCRgBmxy8Og9K7ZUlk5LRHoaValwvFu54Ag&s=10",
        title: "Aglio Olio In Penne",
        price: "₹190",
        diet: "veg",
        desc: "Penne tossed with garlic, olive oil, chili flakes, and fresh parsley.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },
      {
        category: "pasta",
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=600",
        title: "Red Sauce Pasta",
        price: "₹200",
        diet: "veg",
        desc: "Penne pasta cooked in tangy basil tomato arrabbiata sauce.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },
      {
        category: "pasta",
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600",
        title: "Schezwan Sauce Pasta",
        price: "₹210",
        diet: "veg",
        desc: "Spicy fusion pasta tossed in hot Schezwan sauce and fresh veggies.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },
      {
        category: "pasta",
        img: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=600",
        title: "White Sauce Pasta",
        price: "₹220",
        diet: "veg",
        desc: "Creamy béchamel white sauce pasta with herbs and sweet corn.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },
      {
        category: "pasta",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLAvJlv7elYWniETmLszeS6y3neoVggq6GVnC72ARmLw&s=10",
        title: "Pink Sauce Pasta",
        price: "₹220",
        diet: "veg",
        desc: "Perfect combination of creamy white sauce and tangy red sauce.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },
      {
        category: "pasta",
        img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=600",
        title: "Peri Peri Fries Pasta",
        price: "₹240",
        diet: "veg",
        desc: "Unique fusion of creamy pasta topped with crispy peri peri seasoned french fries.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },
      {
        category: "pasta",
        img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&q=80&w=600",
        title: "Creamy Mushroom Pasta",
        price: "₹250",
        diet: "veg",
        desc: "Rich mushroom pasta coated in garlic cream sauce.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },

      // RICE BOWL CATEGORY
      {
        category: "rice",
        img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600",
        title: "Italian Rice Bowl",
        price: "₹240",
        diet: "veg",
        desc: "Herbed rice topped with Italian style vegetables and rich sauce.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },
      {
        category: "rice",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
        title: "Paneer Makhani Rice Bowl",
        price: "₹260",
        diet: "veg",
        desc: "Fragrant rice served with creamy cottage cheese in butter makhani gravy.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },
      {
        category: "rice",
        img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600",
        title: "Korean Rice Bowl",
        price: "₹260",
        diet: "veg",
        desc: "Savory Korean style rice bowl with spicy marinated veggies.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      },
      {
        category: "rice",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
        title: "Pot Rice",
        price: "₹260",
        diet: "veg",
        desc: "Delicious hot pot rice layered with oriental sauces and crisp vegetables.",
        swiggyUrl: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout",
        zomatoUrl: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1"
      }
    ]
  },

  // --- REVIEWS & TESTIMONIALS ---
  reviews: {
    subtitle: "Testimonials",
    title: "What Our Guests Say",
    items: [
      {
        stars: 5,
        text: "\"The ambience was warm, cozy, and perfect for spending quality time with friends. The food was delicious, budget-friendly, and offered great value for money. I personally loved the hot chocolate—it was rich, comforting, and absolutely delicious. The loaded nachos were flavorful and generously topped, while the veggie pizza was fresh, cheesy, and tasted amazing. As a Jain person, one of the things I appreciated the most was that they offer Jain food options. Overall, it's a perfect spot to hang out with friends, enjoy good food, and relax in a pleasant atmosphere. If you're looking for a budget-friendly café with good food, a great vibe, and Jain options, I would definitely recommend giving Baithak a try.\"",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
        name: "Ayushi Chheda",
        role: "Local Guide"
      },
      {
        stars: 5,
        text: "\"Highly recommended. Had pink sauce pasta, hot chocolate, strong chocolate coffee and everything was well prepared and service, vibes were on point\"",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
        name: "Jignesh Nishar",
        role: "Local Guide"
      },
      {
        stars: 5,
        text: "\"100/100 totally out standing v r really appreciate for everything food service ambience everything\"",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
        name: "Sattva Homebaker",
        role: "Customer"
      }
    ],
    googleCta: {
      title: "Enjoyed your time at Baithack?",
      desc: "Help others discover us by leaving a review on Google Maps!",
      url: "https://maps.google.com/?q=Baithack+Borivali+West"
    }
  },

  // --- GALLERY SECTION ---
  gallery: {
    subtitle: "Visual Experience",
    title: "Life Inside Baithack",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWln8eYB7mGujhKK8umM_C-clzNGDWCCOhtAzhp1237U2zolw_9tDCLI44lXk8IxlwncklFo7Xoi6Sm52znkbIkz77xL9koJXQYgq9l_k7WpVLmVUM32fTL8B4pl9TTzC2vbpFYkOMYn1-qw=s680-w680-h510-rw", alt: "Baithack ambience and seating" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk9dEV9f2dMZsiWavFOqlg8wIuy07bTPGkyO_ZX8OuADLL3BdGePfaDeTsBdRGmPeafelMZEcbHEUOvOnkPDZnkDGgJ3E7jnfGdEAbuMvO1aAgpJK4IoO3tHengFBbUxQEyrWLh2Pe_LNBc=s680-w680-h510-rw", alt: "Baithack interior" },
      { src: "https://lh3.googleusercontent.com/proxy/aivuK_PEOrC9BDY4vwxPURzleffUZDGmcnXskhTTuj3ipBYEiBByw9ITPdu8jSJmaPx64frGdkulwzaDIIiiG1W5ERNheNCAm39BeOu_q0M9AvDD3YjAEwiBDwcllIS0mFWp5fVrpJxAPoyaxi1neH-pQP1zYA=w160-h120-k-no", alt: "Baithack food and tea" },
      { src: "https://lh6.googleusercontent.com/proxy/LiX2asmyj251dfWhTP6D5-ZXl-qgX3-S81d0fgVgQpEtCNMk7QV4bUs4KXFZDDKsUnfIMtQ8OIu245_ffHZue8cawcvCJdNfE8iCguRxyFMagVnFgnCISScQgXRtZKr1d776wUb5Fr4GKyWbTvceU4RTTJN0eLw=w160-h120-k-no", alt: "Baithack dishes" }
    ]
  },

  // --- LOCATION & CONTACT SECTION ---
  location: {
    subtitle: "Locations & Hours",
    title: "Visit Our Cafe",
    description: "Located right next to Golden Delicacy in Borivali West. Drop by for authentic Kulhad tea, delicious snacks, and great memories with friends.",
    address: "Shop No. 4, Om Satyam Building, Shimpoli Rd, next to Golden Delicacy, Haridas Nagar, Borivali West, Mumbai, Maharashtra 400092",
    hours: [
      "Mon - Sun: 12:00 PM - 12:00 AM"
    ],
    email: "contact@baithack.com",
    phone: "+91 8097383026",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.873212004245!2d72.8488!3d19.2337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b13180000001%3A0x1000000000000000!2sBaithack!5e0!3m2!1sen!2sin!4v1614134823123!5m2!1sen!2sin"
  },

  // --- FOOTER SECTION ---
  footer: {
    description: "Serving authentic Kulhad tea, delicious pizzas, pasta, and budget-friendly street food in Borivali West.",
    socials: [
      { platform: "instagram", url: "https://www.instagram.com/baithack.borivali?stkn=MWFqZmhyaHB5cXpseA==", iconClass: "ph-instagram-logo" },
      { platform: "zomato", url: "https://www.zomato.com/mumbai/baithack-taste-of-kulhad-1-borivali-west?amp=1", iconClass: "ph-storefront" },
      { platform: "swiggy", url: "https://www.swiggy.com/restaurants/mumbai/borivali-west/baithack-taste-of-kulhad-1339336/dineout", iconClass: "ph-shopping-bag" }
    ],
    copyright: "© 2026 Baithack - Taste of Kulhad. All rights reserved."
  },

  // --- WI-FI MODAL SETTINGS ---
  wifi: {
    ssid: "Baithack_Guest_WiFi",
    password: "baithackkulhad"
  }
};

/* =========================================================================
   SECTION 2: REBRANDING ENGINE CODE
   ========================================================================= */
(function initRebrandingEngine(cfg) {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element|null}
   */
  const $ = (selector, ctx = document) => ctx.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [ctx]
   * @returns {Element[]}
   */
  const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));

  function applyStyles() {
    const root = document.documentElement;
    if (cfg.styles?.colors) {
      if (cfg.styles.colors.bg) root.style.setProperty('--color-bg', cfg.styles.colors.bg);
      if (cfg.styles.colors.bgCard) root.style.setProperty('--color-bg-card', cfg.styles.colors.bgCard);
      if (cfg.styles.colors.bgLight) root.style.setProperty('--color-bg-light', cfg.styles.colors.bgLight);
      if (cfg.styles.colors.primary) root.style.setProperty('--color-primary', cfg.styles.colors.primary);
      if (cfg.styles.colors.primaryHover) root.style.setProperty('--color-primary-hover', cfg.styles.colors.primaryHover);
      if (cfg.styles.colors.text) root.style.setProperty('--color-text', cfg.styles.colors.text);
      if (cfg.styles.colors.textMuted) root.style.setProperty('--color-text-muted', cfg.styles.colors.textMuted);
      if (cfg.styles.colors.accent) root.style.setProperty('--color-accent', cfg.styles.colors.accent);
    }
    if (cfg.styles?.fonts) {
      if (cfg.styles.fonts.heading) root.style.setProperty('--font-heading', cfg.styles.fonts.heading);
      if (cfg.styles.fonts.body) root.style.setProperty('--font-body', cfg.styles.fonts.body);
    }
  }

  function applyMeta() {
    if (!cfg.brand) return;
    
    const fullTitle = `${cfg.brand.name} | ${cfg.brand.tagline}`;
    document.title = fullTitle;

    /**
     * @param {string} selector
     * @param {string} content
     */
    const setMeta = (selector, content) => {
      const el = $(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="title"]', fullTitle);
    setMeta('meta[name="description"]', cfg.brand.description);
    setMeta('meta[name="keywords"]', cfg.brand.keywords);
    setMeta('meta[name="theme-color"]', cfg.brand.themeColor);

    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', cfg.brand.description);
    setMeta('meta[property="og:image"]', cfg.brand.ogImage);
    setMeta('meta[property="og:url"]', cfg.brand.domain);
    setMeta('meta[property="og:site_name"]', `${cfg.brand.name} Cafe`);

    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', cfg.brand.description);
    setMeta('meta[name="twitter:image"]', cfg.brand.ogImage);
    setMeta('meta[name="twitter:url"]', cfg.brand.domain);

    const favicon = $('link[rel="icon"]');
    if (favicon && cfg.brand.faviconEmoji) {
      favicon.setAttribute('href', `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${cfg.brand.faviconEmoji}</text></svg>`);
    }

    const schemaScript = $('script[type="application/ld+json"]');
    if (schemaScript) {
      try {
        const schemaData = JSON.parse(schemaScript.textContent);
        schemaData.name = `${cfg.brand.name} ${cfg.brand.tagline}`;
        schemaData.image = cfg.brand.ogImage;
        schemaData.url = cfg.brand.domain;
        schemaData["@id"] = cfg.brand.domain;
        if (cfg.location) {
          schemaData.telephone = cfg.location.phone;
        }
        schemaScript.textContent = JSON.stringify(schemaData, null, 2);
      } catch (err) {
        console.warn("Failed to update JSON-LD schema:", err);
      }
    }
  }

  function applyBrandLogos() {
    $$('.logo').forEach(logoEl => {
      if (logoEl.childNodes.length > 0) {
        logoEl.childNodes[0].nodeValue = cfg.brand.name;
      } else {
        logoEl.textContent = cfg.brand.name;
      }
      let span = $('span', logoEl);
      if (!span && cfg.brand.suffix) {
        span = document.createElement('span');
        logoEl.appendChild(span);
      }
      if (span) span.textContent = cfg.brand.suffix;
      logoEl.setAttribute('aria-label', `${cfg.brand.name} Home`);
    });
  }

  function applyHero() {
    if (!cfg.hero) return;
    const heroSec = $('#home');
    if (heroSec && cfg.hero.bgImage) {
      heroSec.style.background = `linear-gradient(to right, rgba(13,14,18,0.95), rgba(13,14,18,0.6)), url('${cfg.hero.bgImage}') center/cover no-repeat`;
    }
    
    const sub = $('.hero-content .section-subtitle');
    if (sub) sub.textContent = cfg.hero.subtitle;
    
    const title = $('.hero-title');
    if (title) title.textContent = cfg.hero.title;
    
    const desc = $('.hero-description');
    if (desc) desc.textContent = cfg.hero.description;

    const statsContainer = $('.hero-stats');
    if (statsContainer && cfg.hero.stats) {
      statsContainer.innerHTML = cfg.hero.stats.map(s => `
        <div class="stat-item">
          <p class="stat-value">${s.value}</p>
          <p class="stat-label">${s.label}</p>
        </div>
      `).join('');
    }
  }

  function applyAbout() {
    if (!cfg.about) return;
    const aboutSec = $('#about');
    if (!aboutSec) return;

    const img = $('.about-img', aboutSec);
    if (img) {
      img.src = cfg.about.image;
      img.alt = cfg.about.imageAlt;
    }

    const badge = $('.about-experience-badge', aboutSec);
    if (badge) {
      badge.innerHTML = `
        <div style="font-size: 1.8rem; line-height: 1;">${cfg.about.experienceValue}</div>
        <div style="font-size: 0.8rem;">${cfg.about.experienceLabel}</div>
      `;
    }

    const sub = $('.section-subtitle', aboutSec);
    if (sub) sub.textContent = cfg.about.subtitle;

    const title = $('.section-title', aboutSec);     if (title) title.textContent = cfg.about.title;      const textMuted = $$('.text-muted', aboutSec);
    if (cfg.about.paragraphs && cfg.about.paragraphs.length >= 2) {
      if (textMuted[0]) textMuted[0].textContent = cfg.about.paragraphs[0];
      if (textMuted[1]) textMuted[1].textContent = cfg.about.paragraphs[1];
    }
  }

  function applySpecials() {
    if (!cfg.specials) return;
    const specSec = $('#new-food');
    if (!specSec) return;

    const sub = $('.section-subtitle', specSec);
    if (sub) sub.textContent = cfg.specials.subtitle;

    const title = $('.section-title', specSec);
    if (title) {
      title.innerHTML = `${cfg.specials.title} <span class="badge-new">${cfg.specials.badge}</span>`;
    }

    const desc = $('.text-muted', specSec);
    if (desc) desc.textContent = cfg.specials.description;

    const grid = $('.new-items-grid', specSec);
    if (grid && cfg.specials.items) {
      grid.innerHTML = cfg.specials.items.map(item => `
        <article class="new-food-card">
          <div class="new-food-img-wrapper">
            <span class="new-food-badge">${item.badge}</span>
            <img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async">
          </div>
          <div class="new-food-content">
            <div class="new-food-header">
              <h3 class="new-food-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="new-food-price">${item.price}</span>
            </div>
            <p class="new-food-desc">${item.desc}</p>
            <a href="#location" class="btn btn-outline btn-compact">Order Fresh</a>
          </div>
        </article>
      `).join('');
    }
  }

  function applyOffers() {
    if (!cfg.offers) return;
    const offerSec = $('#offers');
    if (!offerSec) return;

    const sub = $('.section-subtitle', offerSec);
    if (sub) sub.textContent = cfg.offers.subtitle;

    const title = $('.section-title', offerSec);
    if (title) title.textContent = cfg.offers.title;

    const grid = $('.offers-grid', offerSec);
    if (grid && cfg.offers.items) {
      grid.innerHTML = cfg.offers.items.map(o => `
        <div class="offer-card ${o.highlight ? 'highlight-offer' : ''}">
          <div class="offer-tag">${o.tag}</div>
          <h3 class="offer-title">${o.title}</h3>
          <p class="offer-desc">${o.desc}</p>
          <div class="offer-code-wrapper">
            <span>Code: <strong>${o.code}</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  function applyMenu() {
    if (!cfg.menu) return;
    const menuSec = $('#menu');
    if (!menuSec) return;

    const sub = $('.section-subtitle', menuSec);
    if (sub) sub.textContent = cfg.menu.subtitle;

    const title = $('.section-title', menuSec);
    if (title) title.textContent = cfg.menu.title;

    const dlBtn = $('.btn-download-menu', menuSec);
    if (dlBtn) {
      dlBtn.setAttribute('href', cfg.menu.pdfUrl);
      dlBtn.setAttribute('download', cfg.menu.pdfFilename);
    }

    const catContainer = $('.category-filter-container', menuSec);
    if (catContainer && cfg.menu.categories) {
      catContainer.innerHTML = cfg.menu.categories.map(c => `
        <button class="category-btn ${c.active ? 'active' : ''}" role="tab" aria-selected="${c.active}" aria-controls="menu-grid" data-filter="${c.id}">${c.label}</button>
      `).join('');
    }

    const menuGrid = $('#menu-grid');
    if (menuGrid && cfg.menu.items) {
      menuGrid.innerHTML = cfg.menu.items.map(item => `
        <article class="food-card" data-category="${item.category}">
          <div class="food-card-img-wrapper">
            <img src="${item.img}" alt="${item.title}" loading="lazy" decoding="async">
          </div>
          <div class="food-card-body">
            <div class="food-card-header">
              <h3 class="food-card-title">
                <span class="diet-badge diet-${item.diet}" title="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}"></span> 
                ${item.title}
              </h3>
              <span class="food-card-price">${item.price}</span>
            </div>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-actions">
              <a href="${item.swiggyUrl}" target="_blank" rel="noopener" class="btn btn-order btn-swiggy">Order with Swiggy</a>
              <a href="${item.zomatoUrl}" target="_blank" rel="noopener" class="btn btn-order btn-zomato">Order with Zomato</a>
              <button type="button" class="btn btn-order btn-whatsapp order-wa-btn" data-item-name="${item.title}" data-item-price="${item.price}">Order via WhatsApp</button>
            </div>
          </div>
        </article>
      `).join('');
    }
  }

  function applyReviews() {
    if (!cfg.reviews) return;
    const revSec = $('#reviews');
    if (!revSec) return;

    const sub = $('.section-subtitle', revSec);
    if (sub) sub.textContent = cfg.reviews.subtitle;

    const title = $('.section-title', revSec);
    if (title) title.textContent = cfg.reviews.title;

    const grid = $('.reviews-grid', revSec);
    if (grid && cfg.reviews.items) {
      grid.innerHTML = cfg.reviews.items.map(r => `
        <figure class="review-card">
          <blockquote class="review-text">
            <div class="review-stars" aria-label="Rating: ${r.stars} out of 5 stars">
              ${Array(r.stars).fill('<i class="ph-fill ph-star" aria-hidden="true"></i>').join('')}
            </div>
            <p>${r.text}</p>
          </blockquote>
          <figcaption class="reviewer-info">
            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar" loading="lazy" decoding="async">
            <div>
              <span class="reviewer-name">${r.name}</span>
              <span class="reviewer-role">${r.role}</span>
            </div>
          </figcaption>
        </figure>
      `).join('');
    }

    if (cfg.reviews.googleCta) {
      const ctaTitle = $('.cta-title', revSec);
      if (ctaTitle) ctaTitle.textContent = cfg.reviews.googleCta.title;

      const ctaDesc = $('.cta-desc', revSec);
      if (ctaDesc) ctaDesc.textContent = cfg.reviews.googleCta.desc;

      const ctaBtn = $('.btn-google-review', revSec);
      if (ctaBtn) ctaBtn.setAttribute('href', cfg.reviews.googleCta.url);
    }
  }

  function applyGallery() {
    if (!cfg.gallery) return;
    const galSec = $('#gallery');
    if (!galSec) return;

    const sub = $('.section-subtitle', galSec);
    if (sub) sub.textContent = cfg.gallery.subtitle;

    const title = $('.section-title', galSec);
    if (title) title.textContent = cfg.gallery.title;

    const grid = $('.gallery-grid', galSec);
    if (grid && cfg.gallery.images) {
      grid.innerHTML = cfg.gallery.images.map(img => `
        <button type="button" class="gallery-item" aria-label="Expand image: ${img.alt}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async">
          <span class="gallery-overlay"><i class="ph ph-arrows-out-simple" aria-hidden="true"></i></span>
        </button>
      `).join('');
    }
  }

  function applyLocation() {
    if (!cfg.location) return;
    const locSec = $('#location');
    if (!locSec) return;

    const sub = $('.section-subtitle', locSec);
    if (sub) sub.textContent = cfg.location.subtitle;

    const title = $('.section-title', locSec);
    if (title) title.textContent = cfg.location.title;

    const desc = $('.text-muted', locSec);     if (desc) desc.textContent = cfg.location.description;      const infoItems = $$('.info-item', locSec);
    if (infoItems.length >= 3) {
      const addrText = $('.text-muted', infoItems[0]);       if (addrText) addrText.textContent = cfg.location.address;        const hoursContainer = infoItems[1];       if (hoursContainer && cfg.location.hours) {         const lines = $$('.text-muted', hoursContainer);
        cfg.location.hours.forEach((h, idx) => {
          if (lines[idx]) lines[idx].textContent = h;
        });
      }

      const contactText = $('.text-muted', infoItems[2]);
      if (contactText) contactText.textContent = `${cfg.location.email} | ${cfg.location.phone}`;
    }

    const mapIframe = $('iframe', locSec);
    if (mapIframe && cfg.location.mapEmbedUrl) {
      mapIframe.src = cfg.location.mapEmbedUrl;
    }
  }

  function applyFooter() {
    if (!cfg.footer) return;
    const foot = $('.footer');
    if (!foot) return;

    const desc = $('.footer-desc', foot);
    if (desc) desc.textContent = cfg.footer.description;

    const socialContainer = $('.social-links', foot);
    if (socialContainer && cfg.footer.socials) {
      socialContainer.innerHTML = cfg.footer.socials.map(s => `
        <a href="${s.url}" class="social-icon" aria-label="${s.platform}" target="_blank" rel="noopener">
          <i class="ph ${s.iconClass}" aria-hidden="true"></i>
        </a>
      `).join('');
    }

    const copy = $('.footer-bottom p', foot);
    if (copy) copy.textContent = cfg.footer.copyright;
  }

  function applyWifiModal() {
    if (!cfg.wifi) return;
    const wifiModal = $('#wifi-modal');
    if (!wifiModal) return;

    const qrImg = $('.wifi-qr-img', wifiModal);
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=WIFI:S:${cfg.wifi.ssid};T:WPA;P:${cfg.wifi.password};;`;
    }

    const values = $$('.wifi-value', wifiModal);
    if (values[0]) values[0].textContent = cfg.wifi.ssid;
    if (values[1]) values[1].textContent = cfg.wifi.password;
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyStyles();
    applyMeta();
    applyBrandLogos();
    applyHero();
    applyAbout();
    applySpecials();
    applyOffers();
    applyMenu();
    applyReviews();
    applyGallery();
    applyLocation();
    applyFooter();
    applyWifiModal();
  });
})(REBRAND_CONFIG);
