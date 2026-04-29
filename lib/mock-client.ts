import type {
  Product,
  Collection,
  Cart,
  Shop,
  CartLine,
} from "./catalog/types";
import {
  mockShop,
  mockProducts,
  mockCollections,
  mockCarts,
  generateMockCart,
} from "./mock-data";

export async function getShop(): Promise<Shop> {
  return mockShop;
}

export async function getProducts(options?: {
  first?: number;
  sortKey?: string;
  reverse?: boolean;
  query?: string;
}): Promise<Product[]> {
  let products = [...mockProducts];

  // Filter by query if provided
  if (options?.query) {
    const searchTerm = options.query.toLowerCase();
    products = products.filter(
      (p) =>
        p.title.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.tags.some((tag) => tag.toLowerCase().includes(searchTerm)),
    );
  }

  // Sort products
  if (options?.sortKey) {
    switch (options.sortKey) {
      case "TITLE":
        products.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "PRICE":
        products.sort(
          (a, b) =>
            parseFloat(a.priceRange.minVariantPrice.amount) -
            parseFloat(b.priceRange.minVariantPrice.amount),
        );
        break;
      case "CREATED_AT":
        // Mock data doesn't have created_at, so we'll keep the original order
        break;
      case "BEST_SELLING":
      default:
        // Keep original order for best selling
        break;
    }

    if (options.reverse) {
      products.reverse();
    }
  }

  // Limit results
  const limit = options?.first ?? 20;
  return products.slice(0, limit);
}

export async function getProductByHandle(
  handle: string,
): Promise<Product | null> {
  return mockProducts.find((p) => p.handle === handle) || null;
}

export async function getCollections(): Promise<Collection[]> {
  return mockCollections;
}

export async function getCollectionByHandle(
  handle: string,
): Promise<Collection | null> {
  return mockCollections.find((c) => c.handle === handle) || null;
}

export async function searchProducts(
  query: string,
  first?: number,
): Promise<Product[]> {
  return getProducts({
    query,
    first: first ?? 20,
  });
}

export async function getFeaturedProducts(first?: number): Promise<Product[]> {
  // Return the first N products as featured
  return mockProducts.slice(0, first ?? 8);
}

export async function createCart(): Promise<Cart> {
  const cart = generateMockCart();
  mockCarts.set(cart.id, cart);
  return cart;
}

export async function getCart(cartId: string): Promise<Cart> {
  const cart = mockCarts.get(cartId);
  if (!cart) {
    const newCart = generateMockCart();
    mockCarts.set(newCart.id, newCart);
    return newCart;
  }
  return cart;
}

export async function addToCart(
  cartId: string,
  lines: Array<{ merchandiseId: string; quantity: number }>,
): Promise<Cart> {
  const cart = mockCarts.get(cartId) || generateMockCart();

  for (const line of lines) {
    const product = mockProducts.find((p) =>
      p.variants.edges.some((v) => v.node.id === line.merchandiseId),
    );

    if (product) {
      const variant = product.variants.edges.find(
        (v) => v.node.id === line.merchandiseId,
      );

      if (variant) {
        const existingLine = cart.lines.edges.find(
          (l) => l.node.merchandise.id === line.merchandiseId,
        );

        if (existingLine) {
          existingLine.node.quantity += line.quantity;
        } else {
          const cartLine: CartLine = {
            id: `line-${Date.now()}`,
            quantity: line.quantity,
            merchandise: {
              id: variant.node.id,
              title: variant.node.title,
              selectedOptions: variant.node.selectedOptions,
              product: {
                id: product.id,
                handle: product.handle,
                title: product.title,
                featuredImage: product.featuredImage,
              },
              price: variant.node.price,
              compareAtPrice: variant.node.compareAtPrice,
            },
          };
          cart.lines.edges.push({ node: cartLine });
        }

        cart.totalQuantity += line.quantity;
      }
    }
  }

  // Recalculate totals
  updateCartTotals(cart);
  mockCarts.set(cartId, cart);
  return cart;
}

export async function updateCart(
  cartId: string,
  lines: Array<{ id: string; quantity: number }>,
): Promise<Cart> {
  const cart = mockCarts.get(cartId);
  if (!cart) throw new Error("Cart not found");

  for (const line of lines) {
    const cartLine = cart.lines.edges.find((l) => l.node.id === line.id);
    if (cartLine) {
      const quantityDiff = line.quantity - cartLine.node.quantity;
      cart.totalQuantity += quantityDiff;
      cartLine.node.quantity = line.quantity;
    }
  }

  updateCartTotals(cart);
  mockCarts.set(cartId, cart);
  return cart;
}

export async function removeFromCart(
  cartId: string,
  lineIds: string[],
): Promise<Cart> {
  const cart = mockCarts.get(cartId);
  if (!cart) throw new Error("Cart not found");

  for (const lineId of lineIds) {
    const index = cart.lines.edges.findIndex((l) => l.node.id === lineId);
    if (index !== -1) {
      const line = cart.lines.edges[index];
      cart.totalQuantity -= line.node.quantity;
      cart.lines.edges.splice(index, 1);
    }
  }

  updateCartTotals(cart);
  mockCarts.set(cartId, cart);
  return cart;
}

function updateCartTotals(cart: Cart): void {
  let subtotal = 0;

  for (const line of cart.lines.edges) {
    const linePrice = parseFloat(line.node.merchandise.price.amount);
    subtotal += linePrice * line.node.quantity;
  }

  const tax = subtotal * 0.1; // 10% tax for mock
  const total = subtotal + tax;

  cart.cost.subtotalAmount.amount = subtotal.toFixed(2);
  cart.cost.totalTaxAmount = {
    amount: tax.toFixed(2),
    currencyCode: "USD",
  };
  cart.cost.totalAmount.amount = total.toFixed(2);
}

export async function getPage(
  handle: string,
): Promise<{ body: string } | null> {
  // Mock implementation - return null as we don't have pages in mock data
  return null;
}
