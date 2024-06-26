import { Link, useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layout/mainLayout/Index";
import backProfile from "../../assets/images/profil-back.png";
import avatar from "../../assets/images/avatar.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import styles from "./styles.module.css";

export default function CreatePost() {
  const [find, setFind] = useState({});
  const [tags, setTags] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [save,setSave] = useState(false);
  const [color, setColor] = useState("");
  const [align, setAlign] = useState(false);
  const [post, setPost] = useState({
    title: "",
    desc: "",
    imageURL: "",
    tags: [],
  });

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.put(`http://localhost:3000/user/${id}`);
        setFind(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const handlePostName = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3000`, {
        ...post,
        imageURL: imageURL ? imageURL : "",
        userID: find.id,
      })
      .then((res) => {
        res.data;
        setSave(true)
      })
      .catch((err) => {
        console.error(err);
        setSave(save)
      });
  };

  useEffect(()=> {
   if(save) {
      navigate(`/${find.fname}/posts/${find.id}`);
   }
  })

  const handleClickTags = () => {
    setPost((post) => ({
      ...post,
      tags: [...post.tags, { id: nanoid(), title: tags }],
    }));
    setTags("");
  };

  const handleTagsChange = (e) => {
    const { value } = e.target;
    setTags(value);
  };

  const handleCloseTags = (id) => {
    setPost((prevPost) => {
      const find = prevPost.tags.filter((item) => item.id !== id);
      return {
        ...prevPost,
        tags: find,
      };
    });
  };

  const handleShare = (e) => {
    console.log(e);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleAlignClick = () => {
    setAlign((align) => !align);
  };

  const previewFiles = (file, state) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      state(reader.result);
    };
  };

  const handleOnChange = async (e, state) => {
    const file = e.target.files[0];
    previewFiles(file, state);
  };

  return (
    <MainLayout>
      <div className="page-name mt-20">
        <div className="page-name_container container-mega">
          <ul className="page-name_lists">
            <li className="page-name-lists_option">
              <Link to="/" className="page-name-link">
                Home
              </Link>
            </li>
            <li className="page-name-lists_option">
              <Link className="page-name-link" aria-disabled="true">
                Profile Send Post
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <header className="inner-header mt-4 profile-main">
        <section className="inner-header_section container-mega sidebar">
          <div className="col-lg-12 back-profil-logo">
            <img
              src={find.photoURL ? find.photoURL : backProfile}
              alt="profile-back.png"
              className="b-12"
            />
          </div>
          <div className="inner-header_info position-relative">
            <div className="inner-header-info_media">
              <div className="post-user_logo">
                <img
                  src={find.logo ? find.logo : avatar}
                  alt="avatar.png"
                  className="b-12"
                />
              </div>
              <ul className="post-user_desc" id="user-marked">
                <li className="post-user_name">James</li>
              </ul>
            </div>
            <ul className="inner-main_info" id="main-info-marked">
            <li className="inner-main-info_list">
                <Link to={`/home/${find.fname}/${find.id}`}>Marked</Link>
              </li>
              <li className="inner-main-info_list post-main_head">
                <Link to={`/${find.fname}/create/${find.id}`}>Send Post</Link>
              </li>
              <li className="inner-main-info_list">
                <Link to={`/${find.fname}/posts/${find.id}`}>Posts</Link>
              </li>
            </ul>
            <div className="inner-header_btn">
              <Link
                to={`/${find.fname}/edit/${find.id}`}
                className="btn btn-small-row reply-btn btn-light edit-btn"
              >
                <span>Edit Profile</span>
              </Link>
            </div>
          </div>
        </section>
      </header>

      <main className="main mt-4 res-section res-section">
        <section className="main-section post-section">
          <div className="container-mega post-section_window">
            <ul className="post-link_section">
              <li className="sidebar post-link_option btn-medium-row post-main_head">
                <Link to="#" className="post-link_list">
                  Send Post
                </Link>
              </li>
            </ul>
            <form className="send-post_form mt-4" onSubmit={handleSubmit}>
              <div className="col-lg-7 send-post-form_section">
                <div className="send-post-form_head">
                  <div className="send-form-head_title col-lg-12">
                    <label htmlFor="title" className="send-form-head_text">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      onChange={handlePostName}
                      placeholder="write title"
                      className="send-form-head_input sidebar btn"
                    />
                  </div>
                  <div className="send-form-head_title col-lg-12 position-relative">
                    <label htmlFor="tags" className="send-form-head_text">
                      Add Tags
                    </label>
                    <input
                      type="text"
                      name="tags"
                      value={tags}
                      placeholder="write tags"
                      className="send-form-head_input sidebar btn"
                      onChange={handleTagsChange}
                    />
                    <button
                      type="button"
                      className="send-add_btn reply-btn btn btn-add"
                      onClick={handleClickTags}
                    ></button>
                    {!post.tags ? (
                      ""
                    ) : (
                      <ul className="send-tags">
                        {post.tags.map((item, index) => {
                          return (
                            <li key={index} className="send-tags_list">
                              <span className="tags-name">{item.title}</span>
                              <button
                                type="button"
                                className="close-tags btn reply-btn"
                                onClick={() => handleCloseTags(item.id)}
                              ></button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="send-post-form_body">
                  <label htmlFor="text" className="send-form-head_text">
                    Explanation
                  </label>
                  <div className="send-post-form-body_section sidebar">
                    <ul className="inner-sidebar_lists">
                      <li className="sidebar-option">
                        <button
                          type="button"
                          className="btn btn-small-row reply-btn side-option_btn"
                        >
                          <input
                            type="color"
                            className={`side-option-btn_text ${
                              styles[`text--input`]
                            }`}
                            onChange={handleColorChange}
                          />
                        </button>
                      </li>
                      <li className="sidebar-option">
                        <button
                          type="button"
                          className="btn btn-small-row reply-btn side-option_btn"
                        >
                          <span className="side-option-btn_text">Text</span>
                        </button>
                      </li>
                      <li className="sidebar-option">
                        <button
                          type="button"
                          onClick={handleAlignClick}
                          className="btn btn-small-row reply-btn side-option_btn"
                        >
                          <span className="side-option-btn_text">Align</span>
                        </button>
                      </li>
                      <li className="sidebar-option">
                        <button
                          type="button"
                          className="btn btn-small-row reply-btn side-option_btn"
                        >
                          <span className="side-option-btn_text">Link</span>
                        </button>
                      </li>
                    </ul>
                    <textarea
                      name="desc"
                      placeholder="write"
                      onChange={handlePostName}
                      style={{
                        textAlign: `${align ? "center" : "left"}`,
                        color: `${color ? color : ""}`,
                      }}
                      className="send-post-form-body_messages send-form-head_input sidebar btn input--comment"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 send-post-media_section">
                <div className="send-post-media_head">
                  <label htmlFor="title" className="send-form-head_text">
                    add image
                  </label>
                  <div className="send-media sidebar">
                    <div className="send-media_section sidebar">
                      {imageURL ? (
                        <img src={imageURL} />
                      ) : (
                        <>
                          <p className="icon-insert_photo"></p>
                          {/* <p className="media-info">
                            Drop image here, paste or
                          </p> */}
                          {/* <button
                            type="button"
                            className="send-image_btn btn btn-small-row reply-btn "
                          >
                            Select
                          </button> */}
                          <input
                            type="file"
                            name="imageURL"
                            onChange={(e) => handleOnChange(e, setImageURL)}
                            accept=".jpeg, .png, .jpg"
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <ul className="inner-sidebar_lists" id="banner-list">
                  <li className="sidebar-option col-lg-12">
                    <button
                      type="button"
                      onClick={handleShare}
                      className="btn btn-small-row reply-btn side-option_btn col-lg-12 btn-other"
                    >
                      <span className="side-option-btn_text">draft</span>
                    </button>
                  </li>
                  <li className="sidebar-option col-lg-12">
                    <button
                      type="button"
                      className="btn btn-small-row reply-btn side-option_btn col-lg-12 btn-other"
                    >
                      <span className="side-option-btn_text">Preview</span>
                    </button>
                  </li>
                  <li className="sidebar-option col-lg-12">
                    <button
                      type="submit"
                      onSubmit={handleSubmit}
                      className="btn btn-small-row reply-btn side-option_btn col-lg-12 btn-other"
                    >
                      <span className="side-option-btn_text">Send</span>
                    </button>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
