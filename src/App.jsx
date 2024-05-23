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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<InnerPost />} />
        <Route path="/post/create" element={<CreatePost />} />

        <Route path="/profile/:user" element={<UserProfile />} />
        <Route path="/profile/:user/marked" element={<Marked />} />
        <Route path="/profile/:user/posts" element={<Posts />} />
        <Route path="/profile/:user/edit/:id" element={<EditProfile />} />

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/category/:name" element={<InnerCategory />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
