import { Trip } from "@/types/trip";

export const TRIPS: Trip[] = [
  {
    id: "trip-1",
    slug: "island-hopper-adventure",
    title: "Island Hopper Adventure",
    destination: "El Nido, Palawan",
    destinationSlug: "el-nido-philippines",
    country: "Philippines",
    duration: "5 days / 4 nights",
    durationDays: 5,
    style: "Adventure",
    price: 890,
    originalPrice: 1050,
    description:
      "Hop from secluded white-sand beaches to emerald hidden lagoons in Palawan. Experience private catamaran cruising, guided coral snorkeling, sunset kayaking, and beachfront starlit dining.",
    shortDescription: "Hop from beach to beach in Palawan with boat tours, guided snorkeling and a sunset cruise.",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    ],
    groupSize: "Small Group (Max 8 travelers)",
    physicalRating: "Moderate",
    highlights: [
      "Private catamaran access to Big Lagoon before public crowds",
      "Snorkeling over vibrant reef gardens with green sea turtles",
      "Sunset golden hour bonfire on a secluded sandbar",
      "Eco-resort accommodation nestled between cliffside and sea",
    ],
    included: [
      "4 nights boutique beachfront eco-resort accommodation",
      "All island-hopping permits, environmental fees, and private boat charters",
      "Daily artisan breakfasts, 3 seafood beach lunches, and 1 welcome dinner",
      "High-grade snorkeling gear and sea kayak rentals",
      "Certified local marine naturalist guide throughout",
    ],
    excluded: [
      "International and domestic flights to Puerto Princesa / El Nido",
      "Personal travel insurance",
      "Alcoholic beverages outside designated tastings",
      "Optional gratuities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paradise & Golden Hour Welcome",
        description:
          "Arrive at El Nido airport and transfer to your beachfront eco-lodge. Unwind with fresh coconut cocktails and an orientation dinner featuring freshly caught yellowfin tuna and local tropical fruits.",
        location: "El Nido Bay",
        accommodation: "Boutique Beachfront Lodge",
        meals: "Dinner included",
      },
      {
        day: 2,
        title: "Bacuit Bay Lagoons & Hidden Caves",
        description:
          "Board your private wooden catamaran at sunrise to enter the Big Lagoon in serene solitude. Paddle through emerald chambers surrounded by 200-meter karst walls, then swim through a hidden hole into the Secret Beach.",
        location: "Bacuit Archipelago",
        meals: "Breakfast, Lunch",
      },
      {
        day: 3,
        title: "Coral Reefs & Sea Turtle Sanctuary",
        description:
          "Cruise to Shimizu Island and Helicopter Island for world-class reef snorkeling alongside resident sea turtles and schools of reef fish. Enjoy a fresh grilled seafood lunch on an uninhabited sandspit.",
        location: "Outer Islands",
        meals: "Breakfast, Lunch",
      },
      {
        day: 4,
        title: "Nacpan Twin Beaches & Sunset Kayaking",
        description:
          "Take an inland scenic scooter or electric jeepney ride through coconut groves to Nacpan's four-kilometer golden shoreline. In the late afternoon, embark on a twilight kayak excursion.",
        location: "North Palawan Coast",
        meals: "Breakfast",
      },
      {
        day: 5,
        title: "Farewell Island Vista & Departure",
        description:
          "Enjoy a leisurely sunrise breakfast overlooking the calm bay. Take an optional walk to the Taraw viewpoint or pick up handcrafted souvenirs before your airport transfer.",
        location: "El Nido",
        meals: "Breakfast",
      },
    ],
    featured: true,
    rating: 4.93,
    reviewCount: 164,
  },
  {
    id: "trip-2",
    slug: "northern-highland-escape",
    title: "Northern Highland Escape",
    destination: "Baguio & Sagada",
    destinationSlug: "baguio-philippines",
    country: "Philippines",
    duration: "4 days / 3 nights",
    durationDays: 4,
    style: "Nature",
    price: 520,
    originalPrice: 650,
    description:
      "Experience the crisp mountain breeze of Baguio and the mystical hanging coffins and subterranean rivers of Sagada with scenic views, specialty Arabica coffee, and vibrant indigenous art.",
    shortDescription: "Experience the cool breeze of Baguio and Sagada with scenic views, food trips, and local art.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    ],
    groupSize: "Small Group (Max 10 travelers)",
    physicalRating: "Moderate",
    highlights: [
      "Breathtaking mountain passes through the Cordillera Central",
      "Private tour of BenCab Museum with an indigenous art curator",
      "Dawn sunrise sea of clouds at Marlboro Hills",
      "Farm-to-cup Benguet specialty Arabica coffee cupping",
    ],
    included: [
      "3 nights boutique mountain lodge accommodations",
      "Private air-conditioned mountain transport throughout",
      "All entrance tickets, museum passes, and indigenous ancestral domain permits",
      "Daily breakfast and 2 traditional Cordilleran feasts",
      "Registered mountain guides for Sagada cave exploration",
    ],
    excluded: [
      "Travel to and from Manila meeting point",
      "Optional souvenirs and extra activities",
      "Personal travel insurance",
    ],
    itinerary: [
      {
        day: 1,
        title: "Ascent into the Clouds & Pine Grove Retreat",
        description:
          "Wind up the dramatic Kennon Road into the pine-covered highlands. Check in to your heritage mountain lodge and visit the BenCab Museum surrounded by tranquil mist and sculpture gardens.",
        location: "Baguio City",
        accommodation: "Heritage Mountain Lodge",
        meals: "Welcome Dinner",
      },
      {
        day: 2,
        title: "Highland Highway to Sagada",
        description:
          "Journey across the highest mountain highway in the Philippines with panoramic canyon vistas. Arrive in Sagada and visit the centuries-old Echo Valley Hanging Coffins.",
        location: "Sagada",
        meals: "Breakfast, Dinner",
      },
      {
        day: 3,
        title: "Sea of Clouds & Underground Caves",
        description:
          "Awaken before dawn to witness golden sunlight breaking over an undulating ocean of clouds at Marlboro Hills. In the afternoon, explore the limestone formations of Sumaguing Cave.",
        location: "Sagada Highlands",
        meals: "Breakfast",
      },
      {
        day: 4,
        title: "Strawberry Valleys & Return Journey",
        description:
          "Sample fresh strawberry shortcake and single-origin Cordillera coffee before a smooth return trip through scenic mountain valleys.",
        location: "Benguet",
        meals: "Breakfast",
      },
    ],
    featured: true,
    rating: 4.86,
    reviewCount: 98,
  },
  {
    id: "trip-3",
    slug: "alpine-lakes-retreat",
    title: "Alpine Lakes & Peaks Retreat",
    destination: "Dolomites, South Tyrol",
    destinationSlug: "dolomites-italy",
    country: "Italy",
    duration: "7 days / 6 nights",
    durationDays: 7,
    style: "Adventure",
    price: 1680,
    originalPrice: 1950,
    description:
      "Venture deep into the majestic Italian Dolomites. Hike beneath towering pale limestone pinnacles, row wooden boats on emerald alpine lakes, and stay in authentic South Tyrolean mountain rifugios.",
    shortDescription: "Hike world-famous alpine trails, row wooden boats on turquoise lakes, and relax in cozy mountain huts.",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    ],
    groupSize: "Small Group (Max 8 travelers)",
    physicalRating: "Challenging",
    highlights: [
      "Sunrise photography at Lago di Braies before park visitors arrive",
      "The complete circuit hike around the legendary Tre Cime di Lavaredo",
      "Overnight stay at a scenic high-altitude mountain rifugio",
      "Traditional South Tyrolean knödel and apple strudel cooking masterclass",
    ],
    included: [
      "6 nights handpicked alpine chalets & mountain rifugios",
      "All cable cars, mountain passes, and private group transfers",
      "Daily hearty alpine breakfasts and 4 gourmet three-course dinners",
      "Certified UIAGM mountain guide on all hiking days",
      "Trekking poles and safety gear",
    ],
    excluded: [
      "Flights to Venice or Innsbruck",
      "Lunches on trail (available at mountain huts)",
      "Travel and medical insurance",
    ],
    itinerary: [
      {
        day: 1,
        title: "Cortina d'Ampezzo Gathering",
        description:
          "Assemble in the chic alpine hamlet of Cortina d'Ampezzo with views of towering crags. Enjoy an introductory briefing and welcoming glass of Alto Adige wine.",
        location: "Cortina d'Ampezzo",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "Lago di Braies & Val Fiscalina",
        description:
          "Glance at early morning reflections on Lago di Braies' emerald waters. Row hand-crafted wooden skiffs, then hike through the larch forests of Val Fiscalina.",
        location: "Prags Dolomites",
        meals: "Breakfast, Dinner",
      },
      {
        day: 3,
        title: "Tre Cime di Lavaredo High Circuit",
        description:
          "Hike the dramatic 10-kilometer loop around the iconic three limestone monoliths, learning about WWI historical mountain tunnels along the route.",
        location: "Tre Cime",
        meals: "Breakfast",
      },
      {
        day: 4,
        title: "High-Altitude Rifugio Night Under the Stars",
        description:
          "Trek to a cliff-hanging mountain refuge perched at 2,400m. Watch the peaks turn flaming rose during the famed Enrosadira sunset.",
        location: "Passo Giau",
        meals: "Breakfast, Dinner",
      },
      {
        day: 5,
        title: "Seceda Ridgeline & Val Gardena",
        description:
          "Ascend the Seceda cable car to admire the razor-sharp green blade cliffs plunging into deep valleys. Descend into Val Gardena for woodcarving artisan studio visits.",
        location: "Val Gardena",
        meals: "Breakfast",
      },
      {
        day: 6,
        title: "Alpe di Siusi Wildflower Meadows",
        description:
          "Stroll Europe's largest high-altitude alpine plateau with endless rolling green pastures framed by the dramatic Sassolungo peak.",
        location: "Alpe di Siusi",
        meals: "Breakfast, Celebration Dinner",
      },
      {
        day: 7,
        title: "Farewell Alpine Breakfast",
        description:
          "Enjoy a final panorama and espresso before transfer to Bolzano or Venice for your onward travels.",
        location: "Bolzano",
        meals: "Breakfast",
      },
    ],
    featured: true,
    rating: 4.97,
    reviewCount: 215,
  },
  {
    id: "trip-4",
    slug: "culture-and-cuisine-japan",
    title: "Culture & Cuisine in Ancient Japan",
    destination: "Kyoto & Kansai",
    destinationSlug: "kyoto-japan",
    country: "Japan",
    duration: "6 days / 5 nights",
    durationDays: 6,
    style: "Culture",
    price: 1540,
    originalPrice: 1780,
    description:
      "Immerse yourself in centuries of living tradition. Wander dawn bamboo forests, meditate in tranquil Zen rock gardens, savor private multi-course Kaiseki dinners, and learn tea ceremony secrets from fifth-generation masters.",
    shortDescription: "Explore historic temples, serene zen gardens, and Michelin-starred culinary secrets across Kyoto.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80",
    ],
    groupSize: "Small Group (Max 8 travelers)",
    physicalRating: "Easy",
    highlights: [
      "Private after-hours access to a 14th-century Zen temple rock garden",
      "Authentic multi-course Kaiseki dinner with an apprentice Geiko (Maiko)",
      "Hands-on soba noodle making masterclass in Uji",
      "Dawn photography walk at Fushimi Inari's thousands of vermilion torii gates",
    ],
    included: [
      "5 nights in a luxury traditional Machiya townhouse or boutique Ryokan",
      "Private tea ceremony, temple entrance tickets, and culinary workshop fees",
      "Daily Japanese breakfast and 3 curated dinners including Kaiseki",
      "Luggage transfer service between destinations",
      "Expert bilingual cultural scholar host",
    ],
    excluded: [
      "International flights to Osaka Kansai (KIX) or Tokyo",
      "Shinkansen bullet train pass (can be pre-arranged)",
      "Personal shopping and souvenirs",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in the Imperial City & Lantern Welcome",
        description:
          "Settle into your restored historic wooden Machiya townhouse in Gion. Stroll along the lantern-lit Shirakawa canal followed by a seasonal introductory dinner.",
        location: "Gion, Kyoto",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "Bamboo Whispers & Zen Meditation",
        description:
          "Walk Arashiyama's towering bamboo grove at 7:00 AM before crowds arrive. Experience a private Zen meditation session with the head priest at Tenryu-ji.",
        location: "Arashiyama",
        meals: "Breakfast, Lunch",
      },
      {
        day: 3,
        title: "Uji Matcha Harvest & Soba Workshop",
        description:
          "Travel to the tea capital of Uji. Tour organic centuries-old tea fields, grind your own ceremonial matcha, and learn the delicate craft of hand-rolled soba noodles.",
        location: "Uji",
        meals: "Breakfast, Lunch",
      },
      {
        day: 4,
        title: "Fushimi Inari Sunrise & Artisan Alleyways",
        description:
          "Hike through the 10,000 torii gates up Mount Inari in soft morning light. In the afternoon, meet Master potters in Kiyomizu and try wheel throwing.",
        location: "Higashiyama",
        meals: "Breakfast",
      },
      {
        day: 5,
        title: "The Art of Kaiseki & Maiko Conversation",
        description:
          "Spend an unforgettable evening at an exclusive Ryotei restaurant savoring 10 seasonal courses prepared with delicate artistry, accompanied by a traditional Maiko performance.",
        location: "Miyagawacho",
        meals: "Breakfast, Kaiseki Banquet",
      },
      {
        day: 6,
        title: "Peaceful Gardens & Departure",
        description:
          "Final contemplative walk through the dry landscape garden of Ryoan-ji before bullet train departure.",
        location: "Kyoto Station",
        meals: "Breakfast",
      },
    ],
    featured: true,
    rating: 4.98,
    reviewCount: 310,
  },
  {
    id: "trip-5",
    slug: "coastal-portugal-explorer",
    title: "Coastal Portugal Explorer",
    destination: "Lisbon & Sintra",
    destinationSlug: "lisbon-portugal",
    country: "Portugal",
    duration: "6 days / 5 nights",
    durationDays: 6,
    style: "Coastal",
    price: 1190,
    originalPrice: 1380,
    description:
      "From Lisbon's sun-bleached tiles to Sintra's cloud-capped palaces and Cascais' windswept Atlantic cliffs. Sample crisp Vinho Verde, ride vintage yellow trams, and savor golden egg custard tarts straight from the oven.",
    shortDescription: "Discover charming pastel streets, cliffside Atlantic castles, and authentic coastal gastronomy.",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1200&q=80",
    ],
    groupSize: "Small Group (Max 10 travelers)",
    physicalRating: "Easy",
    highlights: [
      "Private vintage tram charter through historic Alfama",
      "Exclusive early entry to Sintra's vibrant Pena Palace",
      "Sunset catamaran cruise with Portuguese wine on the Tagus River",
      "Pastel de Nata baking workshop with a master pastry chef",
    ],
    included: [
      "5 nights boutique design hotel in Chiado",
      "Private coastal van transfers to Sintra and Cascais",
      "All museum entrances, palace permits, and wine tastings",
      "Daily gourmet breakfasts and 2 wine-paired dinners",
      "Local Lisbon historian and guide",
    ],
    excluded: ["International flights", "Personal expenses", "Optional tips"],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Lisbon & Sunset Toast",
        description:
          "Check in to your boutique Chiado hotel. Meet fellow travelers for a rooftop glass of port wine overlooking the red terracotta roofs.",
        location: "Chiado, Lisbon",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "Alfama Trams, Fado & Street Delights",
        description:
          "Climb the maze of Alfama aboard a private historic tram. Listen to an intimate Fado performance in a candlelit tavern.",
        location: "Alfama",
        meals: "Breakfast, Lunch",
      },
      {
        day: 3,
        title: "Fairytale Sintra Palaces",
        description:
          "Escape to the mystical microclimate of Sintra. Explore the romanticist towers of Pena Palace and the esoteric underground wells of Quinta da Regaleira.",
        location: "Sintra",
        meals: "Breakfast",
      },
      {
        day: 4,
        title: "Cabo da Roca & Coastal Cascais",
        description:
          "Stand on continental Europe's westernmost cape where land ends and ocean begins. Relax in the charming seaside village of Cascais.",
        location: "Cascais Coast",
        meals: "Breakfast, Seafood Lunch",
      },
      {
        day: 5,
        title: "Belém Architecture & Golden Hour Sail",
        description:
          "Admire the ornate Manueline stonework of Jerónimos Monastery, eat warm Pastéis de Belém, and embark on a private sunset yacht cruise.",
        location: "Belém & Tagus",
        meals: "Breakfast, Farewell Dinner",
      },
      {
        day: 6,
        title: "Obrigado Lisbon",
        description:
          "Final morning espresso at a grand 19th-century café before onward connections.",
        location: "Lisbon",
        meals: "Breakfast",
      },
    ],
    featured: false,
    rating: 4.91,
    reviewCount: 188,
  },
  {
    id: "trip-6",
    slug: "tropical-bali-getaway",
    title: "Tropical Bali & Islands Getaway",
    destination: "Bali, Indonesia",
    destinationSlug: "bali-indonesia",
    country: "Indonesia",
    duration: "7 days / 6 nights",
    durationDays: 7,
    style: "Relaxation",
    price: 980,
    originalPrice: 1150,
    description:
      "Indulge in holistic wellness, terraced jade rice fields, sacred water cleansing rituals, and peaceful cliff-top ocean views across Ubud, Uluwatu, and Nusa Penida.",
    shortDescription: "Find peace among Ubud's rice terraces, sacred springs, and Uluwatu's dramatic ocean cliffs.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
    ],
    groupSize: "Small Group (Max 8 travelers)",
    physicalRating: "Easy",
    highlights: [
      "Private infinity villa nestled within Ubud rainforest canopy",
      "Purification water ceremony at Tirta Empul with a local Balinese elder",
      "Mount Batur sunrise jeep safari avoiding steep dawn trekking",
      "Cliffside Kecak fire dance overlooking sunset waves at Uluwatu",
    ],
    included: [
      "6 nights in premium 5-star eco-villas with private pools",
      "Private chauffeured transportation throughout Bali",
      "Daily organic tropical breakfasts and 3 wellness dining experiences",
      "All temple offerings, sarong rentals, and ceremony permissions",
      "Daily morning yoga and meditation sessions",
    ],
    excluded: ["International flights", "Spa treatments outside included package", "Gratuities"],
    itinerary: [
      {
        day: 1,
        title: "Arrival into the Jungle Sanctuary",
        description:
          "Airport greeting with frangipani flower leis and escort to your rainforest villa in Ubud. Traditional Balinese herbal welcome tea.",
        location: "Ubud",
        meals: "Welcome Dinner",
      },
      {
        day: 2,
        title: "Tegallalang Terraces & Sacred Water Blessing",
        description:
          "Stroll through morning mist over emerald rice terraces. Participate in a traditional spiritual cleansing ritual at ancient Tirta Empul spring.",
        location: "Tegallalang",
        meals: "Breakfast, Lunch",
      },
      {
        day: 3,
        title: "Sound Healing & Herbal Medicine Workshop",
        description:
          "Experience a transformative Tibetan sound bowl healing session at the Pyramids of Chi, followed by traditional Jamu herbal drink formulation.",
        location: "Ubud",
        meals: "Breakfast",
      },
      {
        day: 4,
        title: "Mount Batur Sunrise Jeep & Hot Springs",
        description:
          "Ride custom 4WD open-air jeeps across black volcanic lava fields to watch the golden sunrise over Mount Agung, followed by natural thermal hot springs.",
        location: "Kintamani",
        meals: "Breakfast, Lunch",
      },
      {
        day: 5,
        title: "Transfer to Uluwatu Ocean Cliffs",
        description:
          "Move southward to Uluwatu's dramatic limestone clifftops. Lounge by infinity pools and enjoy a candlelit seafood barbecue at Jimbaran Bay.",
        location: "Uluwatu",
        meals: "Breakfast, Seafood Dinner",
      },
      {
        day: 6,
        title: "Kecak Fire Dance at Twilight",
        description:
          "Explore the clifftop temple where monkeys roam freely. Watch the mesmerizing chorus of 70 performers during the sunset fire dance.",
        location: "Uluwatu Temple",
        meals: "Breakfast",
      },
      {
        day: 7,
        title: "Morning Ocean Yoga & Farewell",
        description:
          "Peaceful ocean-facing yoga class before private chauffeur transfer to Denpasar International Airport.",
        location: "Denpasar",
        meals: "Breakfast",
      },
    ],
    featured: false,
    rating: 4.88,
    reviewCount: 142,
  },
];
