const baseUrl = import.meta.env.VITE_BASE_URL?.replace(/\/+$/, "");

class ApiServices {
  async request(path) {
    if (!baseUrl) {
      throw new Error("Missing VITE_BASE_URL in the environment variables.");
    }

    const response = await fetch(`${baseUrl}${path}`);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}.`);
    }

    return response.json();
  }

  async getProducts() {
    return this.request("/products");
  }

  async getProductById(productId) {
    return this.request(`/products/${productId}`);
  }
}

export const apiServices = new ApiServices();
