import { Link } from "react-router-dom";
import MainLayout from "../../layout/mainLayout/Index";
import backProfile from "../../assets/images/profil-back.png";
import avatar from "../../assets/images/avatar.png";
// import sportGirl from "../../assets/images/sport-girl.png";

export default function CreatePost() {
  return (
    <MainLayout>
      <div className="page-name mt-20">
      <div className="page-name_container container-mega">
         <ul className="page-name_lists">
            <li className="page-name-lists_option">
               <Link to="/" className="page-name-link">Home</Link>
            </li>
            <li className="page-name-lists_option">
               <Link className="page-name-link" aria-disabled="true">Profile Send Post</Link>
            </li>
         </ul>
      </div>
   </div>

   <header className="inner-header mt-4 profile-main">
      <section className="inner-header_section container-mega sidebar">
         <div className="col-lg-12 back-profil-logo">
            <img src={backProfile} alt="profile-back.png" className="b-12" />
         </div>
         <div className="inner-header_info position-relative">
            <div className="inner-header-info_media">
               <div className="post-user_logo">
                  <img src={avatar} alt="avatar.png" className="b-12" />
               </div>
               <ul className="post-user_desc" id="user-marked">
                  <li className="post-user_name">James</li>
               </ul>
            </div>
            <ul className="inner-main_info" id="main-info-marked">
               <li className="inner-main-info_list">
                  <Link to="profile-marked.html">Marked</Link>
               </li>
               <li className="post-main_head inner-main-info_list">
                  <Link to="profile-send-post.html">Send Post</Link>
               </li>
               <li className="inner-main-info_list">
                  <Link to="profile-posts.html">Posts</Link>
               </li>
            </ul>
            <div className="inner-header_btn">
               <Link to="profile-edit.html" className="btn btn-small-row reply-btn btn-light edit-btn"><span>Edit Profile</span></Link>
            </div>
         </div>
      </section>
   </header>

   <main className="main mt-4 res-section res-section">
      <section className="main-section post-section">
         <div className="container-mega post-section_window">
            <ul className="post-link_section">
               <li className="sidebar post-link_option btn-medium-row post-main_head">
                  <Link to="#" className="post-link_list">Send Post</Link>
               </li>
            </ul>
            <form className="send-post_form mt-4">
               <div className="col-lg-7 send-post-form_section">
                  <div className="send-post-form_head">
                     <div className="send-form-head_title col-lg-12">
                        <label htmlFor="title" className="send-form-head_text">Title</label>
                        <input type="text" name="title" placeholder="write title"
                           className="send-form-head_input sidebar btn" />
                     </div>
                     <div className="send-form-head_title col-lg-12 position-relative">
                        <label htmlFor="tags" className="send-form-head_text">Add Tags</label>
                        <input type="text" name="tags" placeholder="write tags"
                           className="send-form-head_input sidebar btn" />
                        <button type="button" className="send-add_btn reply-btn btn btn-add"></button>
                        <ul className="send-tags">
                           <li className="send-tags_list">
                              <span className="tags-name">mountain</span>
                              <button type="button" className="close-tags btn reply-btn"></button>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="send-post-form_body">
                     <label htmlFor="text" className="send-form-head_text">Explanation</label>
                     <div className="send-post-form-body_section sidebar">
                        <ul className="inner-sidebar_lists">
                           <li className="sidebar-option">
                              <button type="button" className="btn btn-small-row reply-btn side-option_btn">
                                 <span className="side-option-btn_text">Image</span>
                              </button>
                           </li>
                           <li className="sidebar-option">
                              <button type="button" className="btn btn-small-row reply-btn side-option_btn">
                                 <span className="side-option-btn_text">Color</span>
                              </button>
                           </li>
                           <li className="sidebar-option">
                              <button type="button" className="btn btn-small-row reply-btn side-option_btn">
                                 <span className="side-option-btn_text">Text</span>
                              </button>
                           </li>
                           <li className="sidebar-option">
                              <button type="button" className="btn btn-small-row reply-btn side-option_btn">
                                 <span className="side-option-btn_text">Align</span>
                              </button>
                           </li>
                           <li className="sidebar-option">
                              <button type="button" className="btn btn-small-row reply-btn side-option_btn">
                                 <span className="side-option-btn_text">Link</span>
                              </button>
                           </li>
                        </ul>
                        <textarea name="textarea" placeholder="write"
                           className="send-post-form-body_messages send-form-head_input sidebar btn input--comment"></textarea>
                     </div>
                  </div>
               </div>
               <div className="col-lg-2 send-post-media_section">
                  <div className="send-post-media_head">
                     <label htmlFor="title" className="send-form-head_text">add image</label>
                     <div className="send-media sidebar">
                        <div className="send-media_section sidebar">
                           <p className="icon-insert_photo"></p>
                           <p className="media-info">Drop image here, paste or</p>
                           <button type="button" className="send-image_btn btn btn-small-row reply-btn ">Select</button>
                        </div> 
                     </div>
                  </div>
                  <ul className="inner-sidebar_lists" id="banner-list">
                     <li className="sidebar-option col-lg-12">
                        <button type="button" className="btn btn-small-row reply-btn side-option_btn col-lg-12 btn-other">
                           <span className="side-option-btn_text">draft</span>
                        </button>
                     </li>
                     <li className="sidebar-option col-lg-12">
                        <button type="button" className="btn btn-small-row reply-btn side-option_btn col-lg-12 btn-other">
                           <span className="side-option-btn_text">Preview</span>
                        </button>
                     </li>
                     <li className="sidebar-option col-lg-12">
                        <button type="button" className="btn btn-small-row reply-btn side-option_btn col-lg-12 btn-other">
                           <span className="side-option-btn_text">public</span>
                        </button>
                     </li>
                  </ul>
               </div>
            </form>
         </div>
      </section>
   </main>
    </MainLayout>
  )
}
