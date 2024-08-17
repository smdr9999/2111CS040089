package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import com.example.demo.util.PaginationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/{categoryname}/products")
    public List<Product> getProducts(
            @PathVariable String categoryname,
            @RequestParam(defaultValue = "10") int n,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice,
            @RequestParam(required = false) String sortBy,
            @RequestParam(required = false) String order) {

        List<Product> products = productService.getTopProducts(categoryname, minPrice != null ? minPrice : 0, maxPrice != null ? maxPrice : Double.MAX_VALUE);
        products = productService.sortProducts(products, sortBy, order);
        return PaginationUtil.paginate(products, n, page);
    }

    @GetMapping("/{categoryname}/products/{productid}")
    public Product getProductDetails(@PathVariable String categoryname, @PathVariable String productid) {
        return productService.getProductDetails(categoryname, productid);
    }
}
