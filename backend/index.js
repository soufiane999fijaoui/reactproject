const express = require("express");
const multer = require("multer");
const path = require("path");
const Product = require("./db/Products");
const User = require("./db/User");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./db/config");

const app = express();

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "No user found" });
    }
  } else {
    resp.send({ result: "Invalid credentials provided" });
  }
});

app.post("/add-products", async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});

app.get("/products", async (req, resp) => {
  try {
    const products = await Product.find();
    if (products.length > 0) {
      resp.send(products);
    } else {
      resp.send({ result: "No Product Found" });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    resp.status(500).send({ result: "Internal Server Error" });
  }
});

app.delete("/product/:id", async (req, resp) => {
  try {
    const result = await Product.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      return resp.status(404).send({ message: "Product not found" });
    }
    resp.send({ message: "Product deleted successfully" });
  } catch (err) {
    resp.status(500).send({ message: "Error deleting the product", error: err });
  }
});

app.get("/product/:id", async (req, resp) => {
  try {
    let result = await Product.findOne({ _id: req.params.id });
    if (result) {
      resp.send(result);
    } else {
      resp.status(404).send({ message: "No record found." });
    }
  } catch (error) {
    resp.status(500).send({ message: "Server error", error: error.message });
  }
});

app.put("/product/:id", upload.single("image"), async (req, res) => {
  try {
    const { name, price, category, company } = req.body;
    const updatedProductData = {
      name,
      price,
      category,
      company,
    };

    if (req.file) {
      updatedProductData.image = req.file.path;
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updatedProductData, { new: true });

    if (!updatedProduct) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.send(updatedProduct);
  } catch (error) {
    res.status(500).send({ message: "Error updating the product" });
  }
});

app.get("/search/:key", async (req, resp) => {
  try {
    const result = await Product.find({
      "$or": [
        { name: { $regex: req.params.key, $options: 'i' } },
        { company: { $regex: req.params.key, $options: 'i' } }
      ]
    });
    resp.send(result);
  } catch (error) {
    console.error("Error searching products:", error);
    resp.status(500).send({ message: "Error fetching products" });
  }
});


app.listen(400, () => {
  console.log("Server is running on port 400");
});
