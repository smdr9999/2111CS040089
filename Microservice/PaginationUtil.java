package com.example.demo.util;

import com.example.demo.model.Product;

import java.util.List;

public class PaginationUtil {

    public static List<Product> paginate(List<Product> products, int pageSize, int page) {
        int start = page * pageSize;
        int end = Math.min(start + pageSize, products.size());
        if (start >= products.size()) {
            return List.of(); // Return empty list if page is out of bounds
        }
        return products.subList(start, end);
    }
}
