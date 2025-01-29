const mongoose = require("mongoose");
const Product = require("./productModel"); 


mongoose.connect("mongodb://localhost:27017/saida/productsDB")
  .then(() => console.log("Connected to MongoDB successfully!"))
  .catch(err => console.error("MongoDB connection error:", err));

console.log("Product:", Product);

const addProduct = async () => {
  try {
    const newProduct = new Product({
      title: "Laptop",
      price: 50000,
      category: "Electronics",
      inStock: true,
    });

    const savedProduct = await newProduct.save(); 
    console.log("Product added successfully:", savedProduct);
  } catch (error) {
    console.error("Error adding product:", error);
  }
};


addProduct();
