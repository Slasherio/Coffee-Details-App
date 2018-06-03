import { API_URL } from "./constants";

class ProductsService {
  static requestHeaders() {
    return {
      "Content-type": "application/json"
    };
  }
  static getAllProducts() {
    const headers = this.requestHeaders();
    const request = new Request(API_URL, {
      method: "GET",
      headers
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }

  static getProductById(id) {
    const headers = this.requestHeaders();
    const request = new Request(`${API_URL}/${id}`, {
      method: "GET",
      headers
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }
}

export default ProductsService;
