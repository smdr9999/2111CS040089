package com.example.demo.model;
public class Product {
    private String id;
    private String productName;
    private double price;
    private double rating;
    private double discount;
    private String availability;

    public Product() {
    }

    public Product(String id, String productName, double price, double rating, double discount, String availability) {
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.rating = rating;
        this.discount = discount;
        this.availability = availability;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public double getDiscount() {
        return discount;
    }

    public void setDiscount(double discount) {
        this.discount = discount;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    @Override
    public String toString() {
        return "Product{" +
               "id='" + id + '\'' +
               ", productName='" + productName + '\'' +
               ", price=" + price +
               ", rating=" + rating +
               ", discount=" + discount +
               ", availability='" + availability + '\'' +
               '}';
    }
}
