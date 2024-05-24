import { Link } from "react-router-dom";
import MainLayout from "../../layout/mainLayout/Index";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function ContactUs() {
  return (
    <MainLayout>
      <div className="page-name mt-20">
        <div className="page-name_container container-mega">
          <ul className="page-name_lists">
            <li className="page-name-lists_option">
              <Link to="index.html" className="page-name-link">
                Home
              </Link>
            </li>
            <li className="page-name-lists_option">
              <Link
                to="contact-us.html"
                className="page-name-link"
                aria-disabled="true"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <main className="main mt-4 res-section">
        <section className="main-section post-section">
          <div className="container-mega post-section_window">
            <form className="send-post_form mt-4 profile-form">
              <div className="send-post-form_section col-lg-12 edit-form contact-form">
                <div className="send-form-head_title col-lg-1">
                  <label htmlFor="title" className="send-form-head_text">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="write first name"
                    className="send-form-head_input sidebar btn"
                  />
                </div>
                <div className="send-form-head_title col-lg-1">
                  <label htmlFor="title" className="send-form-head_text">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="write last name"
                    className="send-form-head_input sidebar btn"
                  />
                </div>
                <div className="send-form-head_title col-lg-1">
                  <label htmlFor="title" className="send-form-head_text">
                    Email
                  </label>
                  <input
                    type="email"
                    name="contact_email"
                    placeholder="write email"
                    className="send-form-head_input sidebar btn"
                  />
                </div>
              </div>
              <div className="col-lg-12 edit-banner-text">
                <div className="send-post-form_body col-lg-7">
                  <label htmlFor="text" className="send-form-head_text">
                    Explanation
                  </label>
                  <div className="send-post-form-body_section sidebar">
                    <CKEditor
                      editor={ClassicEditor}
                    />
                  </div>
                </div>
                <div className="send-post-media_head col-lg-2">
                  <label htmlFor="title" className="send-form-head_text">
                    add image
                  </label>
                  <div className="send-media sidebar">
                    <div className="send-media_section sidebar">
                      <p className="icon-insert_photo"></p>
                      <p className="media-info">Drop image here, paste or</p>
                      <button
                        type="button"
                        className="send-image_btn btn btn-small-row reply-btn "
                      >
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-save_btn">
                <button
                  type="submit"
                  className="btn reply-btn btn-small-row btn-red btn-send"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
