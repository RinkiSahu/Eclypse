export const navLinks = [
  { name: "Home", url: "#" },
  { name: "About", url: "#" },
  { name: "Buy", url: "#" },
  { name: "Our Customers", url: "#" },
  { name: "Contacts", url: "#" },
];

export const contactInfo = {
  phoneLabel: "Contact",
  phoneNumber: "+91 123-456-7890",
  emailLabel: "Email",
  emailAddress: "eclypse@gmail.com",
};

export const CustomersNames = [
  {
    id: 1,
    title: "Section 1",
    description: "Understated, but unforgettable. It feels like it was made for me",
    customerName:"Alice Johnson",
    place: "Paris, France",
    image: "assets/images/customer-1.png",
  },
  {
    id: 2,
    title: "Section 2",
    description: "A quiet masterpiece. A perfect balance of poise and personality, meant to be felt rather than seen.",
    customerName:"John Doe",
    place: "New York, USA",
    image: "assets/images/customer-1.png",
  },
  {
    id: 3,
    title: "Section 3",
    description: "Minimalist beauty with an edge-crafted with intention, worn with confidence, remembered forever",
    customerName:"Jane Smith",
    place: "London, UK",
    image: "assets/images/customer-1.png",
  },
];

export const productData = {
  name: "Silhouette No. 1 – Vermilion",
  price: "₹ 7,999",
  taxInfo: "Inclusive of all taxes",
  description:
    "A tailored masterpiece in vermilion, our blazer styled with a cropped silhouette and defined lapels. This power-forward ensemble will turn heads. Pair it with our matching trousers for the complete look.",
  images: [
    "../assets/images/product-0.png",
    "../assets/images/product-1.png",
    "/assets/images/product-2.png",
    "/assets/images/product-3.png",
  ],
  sizeChart: ["XS", "S", "M", "L", "XL"],
  accordionSections: [
    {
      id: "size",
      title: "Size & Fit",
      content: [
        "Model is 5'8\" and wearing size M",
        "Chest: 36-38 inches",
        "Length: 26 inches",
        "Sleeve: 24 inches",
        "Relaxed fit with structured shoulders",
      ],
    },
    {
      id: "delivery",
      title: "Delivery & Returns",
      content: [
        "Standard Delivery: 3-5 business days",
        "Express Delivery: 1-2 business days",
        "Return Window: 30 days",
        "Free returns on all orders above ₹2,000",
        "Items must be in original condition with tags",
      ],
    },
    {
      id: "howMade",
      title: "How This Was Made",
      content: [
        "Crafted from premium vermillion fabric",
        "Material: 70% Wool, 30% Polyester",
        "Origin: Handcrafted in India",
        "Care: Dry clean only",
        "Sustainably sourced materials with ethical manufacturing practices",
      ],
    },
  ],
};
