import { API_URL } from "./constants";

class ProductsService {
  static getAllProducts() {
    return fetch(API_URL)
      .then(response => response.json())
      .catch(error => error);
  }

  static getProductById(id) {
    return fetch(`${API_URL}/${id}`)
      .then(response => response.json())
      .catch(error => error);
  }

  static sendData = data => {
    return fetch(`${API_URL}/sendemail`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json());
  };
}

export default ProductsService;
