package com.example.demo.service;

import com.example.demo.model.Product;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class ProductService {

    private static final String API_BASE_URL = "http://20.244.56.144/test/companies";

    public List<Product> getTopProducts(String categoryName, double minPrice, double maxPrice) {
        List<Product> allProducts = new ArrayList<>();
        String[] companies = {"ANZ", "FLP", "SP", "HYN", "AZO"};
        RestTemplate restTemplate = new RestTemplate();

        for (String company : companies) {
            String url = String.format("%s/%s/categories/%s/products/top-10&minPrice-%f&maxPrice-%f", API_BASE_URL, company, categoryName, minPrice, maxPrice);
            try {
                Product[] products = restTemplate.getForObject(url, Product[].class);
                if (products != null) {
                    for (Product product : products) {
                        product.setId(generateUniqueId());
                        allProducts.add(product);
                    }
                }
            } catch (Exception e) {
                // Log the exception or handle it appropriately
            }
        }
        return allProducts;
    }

    private String generateUniqueId() {
        return java.util.UUID.randomUUID().toString();
    }

    public List<Product> sortProducts(List<Product> products, String sortBy, String order) {
        if (sortBy == null || order == null) return products;
        Collections.sort(products, (p1, p2) -> {
            int result = 0;
            switch (sortBy) {
                case "rating":
                    result = Double.compare(p1.getRating(), p2.getRating());
                    break;
                case "price":
                    result = Double.compare(p1.getPrice(), p2.getPrice());
                    break;
                case "discount":
                    result = Double.compare(p1.getDiscount(), p2.getDiscount());
                    break;
            }
            return "desc".equals(order) ? -result : result;
        });
        return products;
    }

    public Product getProductDetails(String categoryName, String productId) {
        RestTemplate restTemplate = new RestTemplate();
        String[] companies = {"ANZ", "FLP", "SP", "HYN", "AZO"};

        for (String company : companies) {
            String url = String.format("%s/%s/categories/%s/products/%s", API_BASE_URL, company, categoryName, productId);
            try {
                return restTemplate.getForObject(url, Product.class);
            } catch (Exception e) {
                // Log the exception or handle it appropriately
            }
        }
        return null;
    }
}
