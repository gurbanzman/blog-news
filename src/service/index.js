import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Post from "../models/index.js";
import cors from "cors";
import User from "../models/user.js";
import Auth from "../models/auth.js";
import github from "passport-github2";
import session from "express-session";
import passport from "passport";
import cloudinary from "../cloudinary/index.js";
// import { body } from "express-validator";
import bodyParser from "body-parser";
// import sharp from "sharp";

dotenv.config();

const connectedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo connected");
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

connectedDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(bodyParser.json({ limit: "3gb" }));
app.use(bodyParser.urlencoded({ limit: "3gb", extended: true }));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

passport.use(
  new github.Strategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/github",
    },
    (accessToken, refressToken, profile, done) => {
      return done(null, profile);
    }
  )
);

// get method post
app.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
  }
});

// get method user
app.get("/user", async (req, res) => {
  try {
    const posts = await User.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
  }
});

// post method post
app.post("/", async (req, res) => {
  try {
    const { title, desc, userID, imageURL, tags } = req.body;

    let imageUploadResponse;
    if (imageURL) {
      imageUploadResponse = await cloudinary.uploader.upload(imageURL, {
        upload_preset: "unsigned_upload",
        allowed_formats: ["png", "jpg", "jpeg", "svg", "webp", "jfif"],
      });
    }
    const newPost = new Post({
      title,
      desc,
      userID,
      tags,
      imageURL: imageUploadResponse ? imageUploadResponse : "",
    });
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// post method user
app.post("/user", async (req, res) => {
  try {
    const newPost = new User(req.body);
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/user/auth", async (req, res) => {
  try {
    const authPost = await Auth.find();
    res.status(200).json(authPost);
  } catch (error) {
    console.error(error);
  }
});

app.post("/user/auth", async (req, res) => {
  try {
    const authPost = await new Auth(req.body);
    await authPost.save();
    res.status(200).json(authPost);
  } catch (error) {
    console.error(error);
  }
});

// put method post
app.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const putPost = await Post.find({id});
    res.status(200).json(putPost);
  } catch (error) {
    console.error(error);
  }
});

// put method user
app.put("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const putPost = await User.findOne({ id });
    res.status(200).json(putPost);
  } catch (error) {
    console.error(error);
  }
});

app.patch("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      fname,
      lname,
      password,
      newPassword,
      username,
      email,
      photoURL,
      logo,
    } = req.body;

    // Eğer bir fotoğraf yüklenmişse Cloudinary'e yükleyin
    let imageUploadResponse;
    let logoUploadResponse;
    if (photoURL) {
      imageUploadResponse = await cloudinary.uploader.upload(photoURL, {
        upload_preset: "unsigned_upload",
        allowed_formats: ["png", "jpg", "jpeg", "svg", "webp", "jfif"],
      });
    }

    if (logo) {
      logoUploadResponse = await cloudinary.uploader.upload(logo, {
        upload_preset: "unsigned_upload",
        allowed_formats: ["png", "jpg", "jpeg", "svg", "webp", "jfif"],
      });
    }
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        fname,
        lname,
        password,
        newPassword,
        username,
        email,
        photoURL: imageUploadResponse ? imageUploadResponse.secure_url : "",
        logo: logoUploadResponse ? logoUploadResponse.secure_url : "",
      },
      { new: true, runValidators: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
  }
});

app.listen(3000, () => {
  console.log("Server is running!");
});
