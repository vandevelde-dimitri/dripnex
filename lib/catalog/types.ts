export interface ProductImage {
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

export interface Money {
  amount: string;
  currencyCode: string;
}

export interface PriceRange {
  minVariantPrice: Money;
  maxVariantPrice: Money;
}

export interface ProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
  compareAtPrice: Money | null;
  image?: ProductImage;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  productType: string;
  vendor: string;
  tags: string[];
  availableForSale: boolean;
  priceRange: PriceRange;
  compareAtPriceRange: PriceRange;
  featuredImage: ProductImage | null;
  images: {
    edges: { node: ProductImage }[];
  };
  variants: {
    edges: { node: ProductVariant }[];
  };
  options: {
    id: string;
    name: string;
    values: string[];
  }[];
  seo: {
    title: string | null;
    description: string | null;
  };
}

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: ProductImage | null;
  products: {
    edges: { node: Product }[];
  };
}

export interface CartLine {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    product: {
      id: string;
      handle: string;
      title: string;
      featuredImage: ProductImage | null;
    };
    price: Money;
    compareAtPrice: Money | null;
  };
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    totalAmount: Money;
    subtotalAmount: Money;
    totalTaxAmount: Money | null;
  };
  lines: {
    edges: { node: CartLine }[];
  };
}

export interface Shop {
  name: string;
  description: string | null;
  primaryDomain: {
    url: string;
  };
  brand: {
    logo: {
      image: ProductImage | null;
    } | null;
    slogan: string | null;
  } | null;
}

export interface Page {
  id: string;
  handle: string;
  title: string;
  body: string;
  bodySummary: string;
}
