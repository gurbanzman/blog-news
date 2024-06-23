import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Marked from "./pages/marked/Marked";
import CreatePost from "./pages/create-post/CreatePost";
import Posts from "./pages/posts/Posts";
import EditProfile from "./pages/edit-profile/EditProfile";
import NotFound from "./pages/not-found/Not-Found";
import ContactUs from "./pages/contact-us/ContactUs";
import AboutUs from "./pages/about-us/AboutUs";
import InnerCategory from "./pages/category/InnerCategory";
import InnerPost from "./pages/innerPost/InnerPost";
import UserProfile from "./pages/user-profile/UserProfile";
import SignUp from "./pages/sign-up/page";
import Register from "./pages/register/page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:slug" element={<InnerPost />} />

        <Route path="/profile/:user/:token" element={<UserProfile />} />
        <Route path="/home/:user/:id" element={<Marked />} />
        <Route path="/:user/posts/:id" element={<Posts />} />
        <Route path="/:user/edit/:id" element={<EditProfile />} />
        <Route path="/:user/create/:id" element={<CreatePost />} />

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/category/:name" element={<InnerCategory />} />

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
