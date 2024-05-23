import MainLayout from "../../layout/mainLayout/Index";

export default function NotFound() {
  return (
    <MainLayout>
      <main className="fount-main mt-4">
      <section className="fount-main_section">
         <div className="fount-main_container container-mega section-top">
            <div className="fount-main_message">
               <h1 className="fount-message_title">404</h1>
               <p className="fount-message_subtitle">OOPS! Page you are looking for does not exist. Please use search for help</p>
            </div>
         </div>
      </section>
   </main>
    </MainLayout>
  )
}
