import { Link } from "react-router-dom";
import MainLayout from "../../layout/mainLayout/Index";

export default function EditProfile() {
  return (
    <MainLayout>
      <div className="page-name mt-20">
      <div className="page-name_container container-mega">
         <ul className="page-name_lists">
            <li className="page-name-lists_option">
               <Link to="index.html" className="page-name-link">Home</Link>
            </li>
            <li className="page-name-lists_option">
               <Link className="page-name-link" aria-disabled="true">Profile Edit</Link>
            </li>
         </ul>
      </div>
   </div>

   <main className="main mt-4 res-section">
      <section className="main-section post-section">
         <div className="container-mega post-section_window">
            <form className="send-post_form mt-4 profile-form">
               <div className="send-post-form_section col-lg-12 edit-form">
                  <div className="send-form-head_title col-lg-1">
                     <label htmlFor="title" className="send-form-head_text">First Name</label>
                     <input type="text" name="fname" placeholder="write first name"
                        className="send-form-head_input sidebar btn" />
                  </div>
                  <div className="send-form-head_title col-lg-1">
                     <label htmlFor="title" className="send-form-head_text">Last Name</label>
                     <input type="text" name="lname" placeholder="write last name"
                        className="send-form-head_input sidebar btn" />
                  </div>
                  <div className="send-form-head_title col-lg-1">
                     <label htmlFor="title" className="send-form-head_text">UserName</label>
                     <input type="text" name="username" placeholder="write username"
                        className="send-form-head_input sidebar btn" />
                  </div>
                  <div className="send-form-head_title col-lg-1">
                     <label htmlFor="title" className="send-form-head_text">Old Password</label>
                     <input type="password" name="oldpassword" placeholder="write old password"
                        className="send-form-head_input sidebar btn" />
                  </div>
                  <div className="send-form-head_title col-lg-1">
                     <label htmlFor="title" className="send-form-head_text">Password</label>
                     <input type="password" name="password" placeholder="write password"
                        className="send-form-head_input sidebar btn" />
                  </div>
                  <div className="send-form-head_title col-lg-1">
                     <label htmlFor="title" className="send-form-head_text">Email</label>
                     <input type="email" name="email" placeholder="write email"
                        className="send-form-head_input sidebar btn" />
                  </div>
               </div>
               <div className="col-lg-12 send-post-media_section profile-banner">
                  <div className="send-post-media_head">
                     <label htmlFor="title" className="send-form-head_text">add banner</label>
                     <div className="send-media sidebar">
                        <div className="send-media_section sidebar edit-form">
                           <p className="icon-insert_photo"></p>
                           <div className="add-banner">
                              <p className="media-info">Drop image here, paste or</p>
                              <button type="button" className="send-image_btn btn btn-small-row reply-btn ">Select</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-12 edit-banner-text">
                  <div className="send-post-form_body col-lg-7">
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
                  <div className="send-post-media_head col-lg-2">
                     <label htmlFor="title" className="send-form-head_text">add image</label>
                     <div className="send-media sidebar">
                        <div className="send-media_section sidebar">
                           <p className="icon-insert_photo"></p>
                           <p className="media-info">Drop image here, paste or</p>
                           <button type="button" className="send-image_btn btn btn-small-row reply-btn ">Select</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="profile-save_btn">
                  <button type="submit" className="btn reply-btn btn-small-row btn-red btn-save">Save</button>
               </div>
            </form>
         </div>
      </section>
   </main>
    </MainLayout>
  )
}