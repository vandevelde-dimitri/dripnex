import type {
  Product,
  Collection,
  Cart,
  Shop,
  ProductImage,
} from "./catalog/types";

export const mockShop: Shop = {
  name: "Premium Store",
  description: "Your trusted store for premium products",
  primaryDomain: {
    url: "https://premium-store.example",
  },
  brand: {
    logo: null,
    slogan: "Curated essentials for everyday wear",
  },
};

export const mockProducts: Product[] = [
  {
    id: "prod-1",
    handle: "premium-wireless-headphones",
    title: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    descriptionHtml:
      "<p>High-quality wireless headphones with noise cancellation and 30-hour battery life</p>",
    productType: "Electronics",
    vendor: "TechPro",
    tags: ["audio", "wireless", "electronics"],
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: "199.99", currencyCode: "USD" },
      maxVariantPrice: { amount: "249.99", currencyCode: "USD" },
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: "299.99", currencyCode: "USD" },
      maxVariantPrice: { amount: "349.99", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      altText: "Wireless Headphones",
      width: 800,
      height: 800,
    },
    images: {
      edges: [
        {
          node: {
            url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
            altText: "Wireless Headphones",
            width: 800,
            height: 800,
          },
        },
        {
          node: {
            url: "https://images.unsplash.com/photo-1684703147716-014da6a31aa3?w=800&q=80",
            altText: "Wireless Headphones",
            width: 800,
            height: 800,
          },
        },
        {
          node: {
            url: "https://images.unsplash.com/photo-1505740106531-4243f3831c78?w=800&q=80",
            altText: "Wireless Headphones",
            width: 800,
            height: 800,
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "var-1-1",
            title: "Black",
            availableForSale: true,
            selectedOptions: [{ name: "Color", value: "Black" }],
            price: { amount: "199.99", currencyCode: "USD" },
            compareAtPrice: { amount: "299.99", currencyCode: "USD" },
            image: {
              url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
              altText: "Stylish Sunglasses",
              width: 800,
              height: 800,
            },
          },
        },
        {
          node: {
            id: "var-1-2",
            title: "Silver",
            availableForSale: true,
            selectedOptions: [{ name: "Color", value: "Silver" }],
            price: { amount: "199.99", currencyCode: "USD" },
            compareAtPrice: { amount: "299.99", currencyCode: "USD" },
            image: {
              url: "https://images.unsplash.com/photo-1684703147716-014da6a31aa3?w=800&q=80",
              altText: "Wireless Headphones",
              width: 800,
              height: 800,
            },
          },
        },
      ],
    },
    options: [
      {
        id: "opt-1",
        name: "Color",
        values: ["Black", "Silver", "Gold"],
      },
    ],
    seo: {
      title: "Premium Wireless Headphones",
      description: "Buy high-quality wireless headphones online",
    },
  },
  {
    id: "prod-2",
    handle: "luxury-smart-watch",
    title: "Luxury Smart Watch",
    description: "Premium smart watch with advanced features",
    descriptionHtml:
      "<p>Luxury smart watch with fitness tracking, heart rate monitor, and 7-day battery</p>",
    productType: "Wearables",
    vendor: "WatchCo",
    tags: ["wearable", "watch", "fitness"],
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: "349.99", currencyCode: "USD" },
      maxVariantPrice: { amount: "399.99", currencyCode: "USD" },
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: "499.99", currencyCode: "USD" },
      maxVariantPrice: { amount: "549.99", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      altText: "Premium Watch",
      width: 800,
      height: 800,
    },
    images: {
      edges: [
        {
          node: {
            url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
            altText: "Premium Watch",
            width: 800,
            height: 800,
          },
        },
        {
          node: {
            url: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?w=800&q=80",
            altText: "Wireless Headphones",
            width: 800,
            height: 800,
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "var-2-1",
            title: "Rose Gold - 40mm",
            availableForSale: true,
            selectedOptions: [
              { name: "Color", value: "Rose Gold" },
              { name: "Size", value: "40mm" },
            ],
            price: { amount: "349.99", currencyCode: "USD" },
            compareAtPrice: { amount: "499.99", currencyCode: "USD" },
            image: {
              url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
              altText: "Premium Watch",
              width: 800,
              height: 800,
            },
          },
        },
      ],
    },
    options: [
      {
        id: "opt-2-1",
        name: "Color",
        values: ["Rose Gold", "Black", "Silver"],
      },
      {
        id: "opt-2-2",
        name: "Size",
        values: ["40mm", "44mm"],
      },
    ],
    seo: {
      title: "Luxury Smart Watch",
      description: "Premium smart watch for active lifestyle",
    },
  },
  {
    id: "prod-3",
    handle: "professional-camera",
    title: "Professional Digital Camera",
    description: "Advanced DSLR camera for professionals",
    descriptionHtml:
      "<p>Professional-grade DSLR with 45MP sensor and 4K video recording</p>",
    productType: "Photography",
    vendor: "CameraWorks",
    tags: ["camera", "photography", "professional"],
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: "1299.99", currencyCode: "USD" },
      maxVariantPrice: { amount: "1299.99", currencyCode: "USD" },
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: "1699.99", currencyCode: "USD" },
      maxVariantPrice: { amount: "1699.99", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
      altText: "Camera",
      width: 800,
      height: 800,
    },
    images: {
      edges: [
        {
          node: {
            url: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
            altText: "Camera",
            width: 800,
            height: 800,
          },
        },
        {
          node: {
            url: "https://images.unsplash.com/photo-1698502453332-03fa2ddceb71?w=800&q=80",
            altText: "Premium Watch",
            width: 800,
            height: 800,
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "var-3-1",
            title: "Single Camera Body",
            availableForSale: true,
            selectedOptions: [{ name: "Package", value: "Body Only" }],
            price: { amount: "1299.99", currencyCode: "USD" },
            compareAtPrice: { amount: "1699.99", currencyCode: "USD" },
            image: {
              url: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
              altText: "Camera",
              width: 800,
              height: 800,
            },
          },
        },
      ],
    },
    options: [
      {
        id: "opt-3",
        name: "Package",
        values: ["Body Only", "With Lens Kit"],
      },
    ],
    seo: {
      title: "Professional Digital Camera",
      description: "High-quality DSLR for photography professionals",
    },
  },
  {
    id: "prod-4",
    handle: "designer-sunglasses",
    title: "Designer Sunglasses",
    description: "Stylish UV-protected designer sunglasses",
    descriptionHtml: "<p>Fashionable sunglasses with 100% UV protection</p>",
    productType: "Accessories",
    vendor: "StyleShade",
    tags: ["sunglasses", "accessories", "fashion"],
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: "79.99", currencyCode: "USD" },
      maxVariantPrice: { amount: "99.99", currencyCode: "USD" },
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: "149.99", currencyCode: "USD" },
      maxVariantPrice: { amount: "179.99", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
      altText: "Stylish Sunglasses",
      width: 800,
      height: 800,
    },
    images: {
      edges: [
        {
          node: {
            url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
            altText: "Stylish Sunglasses",
            width: 800,
            height: 800,
          },
        },
        {
          node: {
            url: "https://images.unsplash.com/photo-1732139637065-1088495050db?q=80&w=800",
            altText: "Camera",
            width: 800,
            height: 800,
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "var-4-1",
            title: "Brown",
            availableForSale: true,
            selectedOptions: [{ name: "Color", value: "Brown" }],
            price: { amount: "79.99", currencyCode: "USD" },
            compareAtPrice: { amount: "149.99", currencyCode: "USD" },
            image: {
              url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
              altText: "Stylish Sunglasses",
              width: 800,
              height: 800,
            },
          },
        },
      ],
    },
    options: [
      {
        id: "opt-4",
        name: "Color",
        values: ["Brown", "Black", "Gray"],
      },
    ],
    seo: {
      title: "Designer Sunglasses",
      description: "Premium UV-protected sunglasses",
    },
  },
  {
    id: "prod-5",
    handle: "running-shoes-pro",
    title: "Professional Running Shoes",
    description: "Engineered running shoes for performance",
    descriptionHtml:
      "<p>High-performance running shoes with advanced cushioning technology</p>",
    productType: "Footwear",
    vendor: "SportGear",
    tags: ["shoes", "running", "sports"],
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: "119.99", currencyCode: "USD" },
      maxVariantPrice: { amount: "139.99", currencyCode: "USD" },
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: "179.99", currencyCode: "USD" },
      maxVariantPrice: { amount: "199.99", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
      altText: "Running Shoes",
      width: 800,
      height: 800,
    },
    images: {
      edges: [
        {
          node: {
            url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
            altText: "Running Shoes",
            width: 800,
            height: 800,
          },
        },
        {
          node: {
            url: "https://images.unsplash.com/photo-1585944672394-4c58a015c1fb?w=800&q=80",
            altText: "Backpack",
            width: 800,
            height: 800,
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "var-5-1",
            title: "Size 10",
            availableForSale: true,
            selectedOptions: [{ name: "Size", value: "10" }],
            price: { amount: "119.99", currencyCode: "USD" },
            compareAtPrice: { amount: "179.99", currencyCode: "USD" },
            image: {
              url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
              altText: "Running Shoes",
              width: 800,
              height: 800,
            },
          },
        },
      ],
    },
    options: [
      {
        id: "opt-5",
        name: "Size",
        values: ["8", "9", "10", "11", "12", "13"],
      },
    ],
    seo: {
      title: "Professional Running Shoes",
      description: "High-performance athletic running shoes",
    },
  },
  {
    id: "prod-6",
    handle: "travel-backpack",
    title: "Premium Travel Backpack",
    description: "Durable backpack for travel and daily use",
    descriptionHtml:
      "<p>Versatile travel backpack with multiple compartments and USB charging port</p>",
    productType: "Bags",
    vendor: "TravelGear",
    tags: ["backpack", "travel", "bags"],
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: "89.99", currencyCode: "USD" },
      maxVariantPrice: { amount: "89.99", currencyCode: "USD" },
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: "129.99", currencyCode: "USD" },
      maxVariantPrice: { amount: "129.99", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
      altText: "Backpack",
      width: 800,
      height: 800,
    },
    images: {
      edges: [
        {
          node: {
            url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
            altText: "Backpack",
            width: 800,
            height: 800,
          },
        },
        {
          node: {
            url: "https://images.unsplash.com/photo-1673505705676-1cdb1db2273f?w=800&q=80",
            altText: "Running Shoes",
            width: 800,
            height: 800,
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "var-6-1",
            title: "Black",
            availableForSale: true,
            selectedOptions: [{ name: "Color", value: "Black" }],
            price: { amount: "89.99", currencyCode: "USD" },
            compareAtPrice: { amount: "129.99", currencyCode: "USD" },
            image: {
              url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
              altText: "Backpack",
              width: 800,
              height: 800,
            },
          },
        },
      ],
    },
    options: [
      {
        id: "opt-6",
        name: "Color",
        values: ["Black", "Navy", "Gray"],
      },
    ],
    seo: {
      title: "Premium Travel Backpack",
      description: "Durable backpack for travel and everyday use",
    },
  },
  {
    id: "prod-7",
    handle: "flagship-smartphone",
    title: "Flagship Smartphone",
    description: "Latest flagship smartphone with cutting-edge technology",
    descriptionHtml:
      "<p>Premium smartphone with 120Hz display, 108MP camera, and 5G connectivity</p>",
    productType: "Electronics",
    vendor: "TechVision",
    tags: ["smartphone", "electronics", "5g"],
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: "899.99", currencyCode: "USD" },
      maxVariantPrice: { amount: "999.99", currencyCode: "USD" },
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: "1099.99", currencyCode: "USD" },
      maxVariantPrice: { amount: "1199.99", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?w=800&q=80",
      altText: "Smart Phone",
      width: 800,
      height: 800,
    },
    images: {
      edges: [
        {
          node: {
            url: "https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?w=800&q=80",
            altText: "Smart Phone",
            width: 800,
            height: 800,
          },
        },
        {
          node: {
            url: "https://images.unsplash.com/photo-1620049185596-1f16f414c448?w=800&q=80",
            altText: "Laptop",
            width: 800,
            height: 800,
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "var-7-1",
            title: "256GB - Midnight",
            availableForSale: true,
            selectedOptions: [
              { name: "Storage", value: "256GB" },
              { name: "Color", value: "Midnight" },
            ],
            price: { amount: "899.99", currencyCode: "USD" },
            compareAtPrice: { amount: "1099.99", currencyCode: "USD" },
            image: {
              url: "https://images.unsplash.com/photo-1500382017468-f049863256f0?w=800&q=80",
              altText: "Smart Phone",
              width: 800,
              height: 800,
            },
          },
        },
        {
          node: {
            id: "var-7-2",
            title: "512GB - Midnight",
            availableForSale: true,
            selectedOptions: [
              { name: "Storage", value: "512GB" },
              { name: "Color", value: "Midnight" },
            ],
            price: { amount: "999.99", currencyCode: "USD" },
            compareAtPrice: { amount: "1199.99", currencyCode: "USD" },
            image: {
              url: "https://images.unsplash.com/photo-1500382017468-f049863256f0?w=800&q=80",
              altText: "Smart Phone",
              width: 800,
              height: 800,
            },
          },
        },
      ],
    },
    options: [
      {
        id: "opt-7-1",
        name: "Storage",
        values: ["256GB", "512GB"],
      },
      {
        id: "opt-7-2",
        name: "Color",
        values: ["Midnight", "White", "Gold"],
      },
    ],
    seo: {
      title: "Flagship Smartphone",
      description: "Latest technology smartphone with premium features",
    },
  },
  {
    id: "prod-8",
    handle: "ultrabook-laptop",
    title: "Ultrabook Pro Laptop",
    description: "Lightweight powerful laptop for professionals",
    descriptionHtml:
      "<p>Ultra-thin laptop with Intel Core i9, 32GB RAM, and SSD storage</p>",
    productType: "Computers",
    vendor: "ComputePro",
    tags: ["laptop", "computers", "ultrabook"],
    availableForSale: true,
    priceRange: {
      minVariantPrice: { amount: "1499.99", currencyCode: "USD" },
      maxVariantPrice: { amount: "1899.99", currencyCode: "USD" },
    },
    compareAtPriceRange: {
      minVariantPrice: { amount: "1999.99", currencyCode: "USD" },
      maxVariantPrice: { amount: "2299.99", currencyCode: "USD" },
    },
    featuredImage: {
      url: "https://images.unsplash.com/photo-1651746817904-abc832733480?q=80&w=800",
      altText: "Laptop",
      width: 800,
      height: 800,
    },
    images: {
      edges: [
        {
          node: {
            url: "https://images.unsplash.com/photo-1651746817904-abc832733480?q=80&w=800",
            altText: "Laptop",
            width: 800,
            height: 800,
          },
        },
        {
          node: {
            url: "https://images.unsplash.com/photo-1636032204336-213ce377e4ab?w=800&q=80",
            altText: "Wireless Headphones",
            width: 800,
            height: 800,
          },
        },
      ],
    },
    variants: {
      edges: [
        {
          node: {
            id: "var-8-1",
            title: "i7 - 16GB RAM",
            availableForSale: true,
            selectedOptions: [
              { name: "Processor", value: "Intel i7" },
              { name: "RAM", value: "16GB" },
            ],
            price: { amount: "1499.99", currencyCode: "USD" },
            compareAtPrice: { amount: "1999.99", currencyCode: "USD" },
            image: {
              url: "https://images.unsplash.com/photo-1552062407-c551eeda4bbb?w=800&q=80",
              altText: "Laptop",
              width: 800,
              height: 800,
            },
          },
        },
        {
          node: {
            id: "var-8-2",
            title: "i9 - 32GB RAM",
            availableForSale: true,
            selectedOptions: [
              { name: "Processor", value: "Intel i9" },
              { name: "RAM", value: "32GB" },
            ],
            price: { amount: "1899.99", currencyCode: "USD" },
            compareAtPrice: { amount: "2299.99", currencyCode: "USD" },
            image: {
              url: "https://images.unsplash.com/photo-1552062407-c551eeda4bbb?w=800&q=80",
              altText: "Laptop",
              width: 800,
              height: 800,
            },
          },
        },
      ],
    },
    options: [
      {
        id: "opt-8-1",
        name: "Processor",
        values: ["Intel i7", "Intel i9"],
      },
      {
        id: "opt-8-2",
        name: "RAM",
        values: ["16GB", "32GB", "64GB"],
      },
    ],
    seo: {
      title: "Ultrabook Pro Laptop",
      description: "Professional-grade lightweight laptop",
    },
  },
];

export const mockCollections: Collection[] = [
  {
    id: "col-1",
    handle: "electronics",
    title: "Electronics",
    description: "Latest electronic devices and gadgets",
    image: {
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      altText: "Wireless Headphones",
      width: 800,
      height: 800,
    },
    products: {
      edges: [
        { node: mockProducts[0] },
        { node: mockProducts[2] },
        { node: mockProducts[6] },
        { node: mockProducts[7] },
      ],
    },
  },
  {
    id: "col-2",
    handle: "fashion-accessories",
    title: "Fashion & Accessories",
    description: "Stylish fashion items and accessories",
    image: {
      url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
      altText: "Stylish Sunglasses",
      width: 800,
      height: 800,
    },
    products: {
      edges: [
        { node: mockProducts[1] },
        { node: mockProducts[3] },
        { node: mockProducts[4] },
        { node: mockProducts[5] },
      ],
    },
  },
  {
    id: "col-3",
    handle: "premium-collection",
    title: "Premium Collection",
    description: "Our finest premium products",
    image: {
      url: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
      altText: "Camera",
      width: 800,
      height: 800,
    },
    products: {
      edges: mockProducts.slice(0, 4).map((product) => ({ node: product })),
    },
  },
];

export const mockCarts: Map<string, Cart> = new Map();

export function generateMockCart(): Cart {
  return {
    id: `cart-${Date.now()}`,
    checkoutUrl: "#",
    totalQuantity: 0,
    cost: {
      totalAmount: { amount: "0", currencyCode: "USD" },
      subtotalAmount: { amount: "0", currencyCode: "USD" },
      totalTaxAmount: { amount: "0", currencyCode: "USD" },
    },
    lines: {
      edges: [],
    },
  };
}
