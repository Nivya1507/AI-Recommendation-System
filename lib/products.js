/**
 * Sample Product Catalog for AI-Powered Product Recommendation System
 * Each product has a unique ID, category, pricing, detailed specifications,
 * and key features for intelligent semantic matching.
 */

export const products = [
  // --- SMARTPHONES ---
  {
    id: "phone-01",
    name: "Google Pixel 8a",
    category: "Smartphones",
    price: 449,
    rating: 4.6,
    reviewsCount: 1420,
    badge: "Best Value Camera",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80",
    description: "Flagship Google AI camera features, Tensor G3 processor, and 7 years of software updates in an affordable package.",
    features: ["Tensor G3 AI Chip", "64MP Dual Camera", "120Hz OLED Display", "4492mAh Battery", "IP67 Water Resistance"],
    inStock: true
  },
  {
    id: "phone-02",
    name: "Samsung Galaxy A54 5G",
    category: "Smartphones",
    price: 379,
    rating: 4.4,
    reviewsCount: 2180,
    badge: "Under $400 Pick",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80",
    description: "Premium Super AMOLED 120Hz screen with multi-day battery life and microSD storage expansion.",
    features: ["6.4\" Super AMOLED 120Hz", "50MP Triple Camera", "5000mAh Battery", "MicroSD Slot", "5G Capable"],
    inStock: true
  },
  {
    id: "phone-03",
    name: "iPhone 15 Pro",
    category: "Smartphones",
    price: 999,
    rating: 4.8,
    reviewsCount: 4500,
    badge: "Top Tier Flagship",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
    description: "Aerospace-grade titanium design with A17 Pro chip, customizable Action button, and 48MP Pro camera system.",
    features: ["A17 Pro Bionic", "Titanium Frame", "48MP Main Camera with 3x Telephoto", "USB-C with 10Gbps", "Action Button"],
    inStock: true
  },
  {
    id: "phone-04",
    name: "OnePlus Nord N30 5G",
    category: "Smartphones",
    price: 249,
    rating: 4.3,
    reviewsCount: 910,
    badge: "Ultra Budget Pick",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    description: "Sub-$250 powerhouse with 50W fast charging, 108MP camera, and smooth 120Hz display.",
    features: ["50W SUPERVOOC Fast Charge", "108MP Camera", "120Hz FHD+ Display", "Dual Stereo Speakers", "Headphone Jack"],
    inStock: true
  },

  // --- LAPTOPS ---
  {
    id: "laptop-01",
    name: "Apple MacBook Air 13\" (M2)",
    category: "Laptops",
    price: 899,
    rating: 4.9,
    reviewsCount: 3890,
    badge: "Top Pick for Developers",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    description: "Fanless silent design with incredible 18-hour battery life, vivid Liquid Retina display, and blazing fast Apple Silicon.",
    features: ["Apple M2 Chip (8-Core CPU)", "18-Hour Battery Life", "Liquid Retina Display", "MagSafe Charging", "Silent Fanless Design"],
    inStock: true
  },
  {
    id: "laptop-02",
    name: "Lenovo ThinkPad E14 Gen 5",
    category: "Laptops",
    price: 689,
    rating: 4.5,
    reviewsCount: 1120,
    badge: "Best Value Workstation",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80",
    description: "Legendary ThinkPad keyboard and durability with AMD Ryzen 7 processor, ideal for software engineering and multitasking.",
    features: ["AMD Ryzen 7 7730U", "16GB RAM + 512GB SSD", "14\" IPS Anti-Glare", "Mil-Spec Durability", "Full Port Selection"],
    inStock: true
  },
  {
    id: "laptop-03",
    name: "ASUS ROG Zephyrus G14",
    category: "Laptops",
    price: 1499,
    rating: 4.8,
    reviewsCount: 2300,
    badge: "Ultimate Gaming & AI",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
    description: "Compact 14-inch powerhouse featuring NVIDIA RTX 4070 and OLED ROG Nebula display for gaming and AI model training.",
    features: ["NVIDIA RTX 4070 8GB", "AMD Ryzen 9 8945HS", "3K OLED 120Hz Display", "32GB LPDDR5X RAM", "Vapor Chamber Cooling"],
    inStock: true
  },
  {
    id: "laptop-04",
    name: "Acer Aspire 5 Slim",
    category: "Laptops",
    price: 449,
    rating: 4.3,
    reviewsCount: 1640,
    badge: "Budget Student Pick",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    description: "Reliable daily laptop under $500 for web browsing, student coursework, and everyday lightweight development.",
    features: ["Intel Core i5-1335U", "8GB RAM + 512GB SSD", "15.6\" Full HD IPS", "Wi-Fi 6 Support", "Backlit Keyboard"],
    inStock: true
  },

  // --- AUDIO ---
  {
    id: "audio-01",
    name: "Sony WH-1000XM5 Wireless Headphones",
    category: "Audio",
    price: 348,
    rating: 4.7,
    reviewsCount: 5200,
    badge: "Best Noise Cancelling",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    description: "Industry-leading active noise cancellation with 2 processors, 8 microphones, and crystal clear hands-free calling.",
    features: ["Dual Processor ANC", "30-Hour Battery", "Multipoint Bluetooth", "Speak-to-Chat", "Hi-Res Audio LDAC"],
    inStock: true
  },
  {
    id: "audio-02",
    name: "Anker Soundcore Life Q30",
    category: "Audio",
    price: 79,
    rating: 4.5,
    reviewsCount: 7800,
    badge: "Best Budget Audio (<$100)",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
    description: "Incredible value with hybrid active noise cancellation, custom EQ app, and 40-hour battery life on a single charge.",
    features: ["Hybrid ANC (3 Modes)", "40-Hour Battery with ANC", "Customizable EQ App", "Fast USB-C Charging", "NFC Fast Pairing"],
    inStock: true
  },
  {
    id: "audio-03",
    name: "Apple AirPods Pro (2nd Gen, USB-C)",
    category: "Audio",
    price: 249,
    rating: 4.8,
    reviewsCount: 6100,
    badge: "Top In-Ear ANC",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=600&q=80",
    description: "Adaptive Audio, Pro-level Active Noise Cancellation, Transparency mode, and personalized Spatial Audio.",
    features: ["H2 Headphone Chip", "Adaptive Noise Cancellation", "Touch Volume Control", "USB-C MagSafe Case", "IP54 Dust & Sweat Resistant"],
    inStock: true
  },

  // --- WEARABLES & ACCESSORIES ---
  {
    id: "wearable-01",
    name: "Garmin Forerunner 165 Running Watch",
    category: "Wearables",
    price: 249,
    rating: 4.7,
    reviewsCount: 880,
    badge: "Runner's Choice",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    description: "Brilliant AMOLED touchscreen with personalized training metrics, HRV status, recovery time, and built-in GPS.",
    features: ["1.2\" AMOLED Display", "Built-in GPS & GLONASS", "Wrist-based Heart Rate & HRV", "11-Day Battery Life", "Sleep Coach"],
    inStock: true
  },
  {
    id: "wearable-02",
    name: "Amazfit Band 7 Fitness Tracker",
    category: "Wearables",
    price: 49,
    rating: 4.3,
    reviewsCount: 1540,
    badge: "Under $50 Fitness Tracker",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=600&q=80",
    description: "Ultra-affordable fitness band with 18-day battery life, 120 sports modes, and 24/7 heart rate and blood oxygen monitoring.",
    features: ["1.47\" Large HD AMOLED", "18-Day Battery Life", "24H SpO2 & Heart Rate", "120 Sports Modes", "5 ATM Water Resistance"],
    inStock: true
  },
  {
    id: "wearable-03",
    name: "Apple Watch Series 9",
    category: "Wearables",
    price: 399,
    rating: 4.8,
    reviewsCount: 3200,
    badge: "Best Smartwatch",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80",
    description: "Powerful S9 SiP chip with Double Tap gesture, brighter display, ECG, temperature sensing, and advanced crash detection.",
    features: ["S9 SiP Chip", "Double Tap Gesture Control", "ECG & Blood Oxygen", "Crash & Fall Detection", "2000 Nits Brightness"],
    inStock: true
  }
];

export const categories = [
  "All",
  "Smartphones",
  "Laptops",
  "Audio",
  "Wearables"
];
