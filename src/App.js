import React from 'react';



function App() {
  return (
    <div>
        {/* ======= Header ======= */}
        <header id="header" className="fixed-top d-flex align-items-center header-transparent">
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <div className="logo me-auto">
              {/* <h1><a href="index.html">Thai Tacos</a></h1> */}
              {/* Uncomment below if you prefer to use an image logo */}
              
            </div>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
                <li><a className="nav-link scrollto" href="#about">About</a></li>
                <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
            {/* .navbar */}
          </div>
        </header>
        {/* End Header */}
        
        {/* ======= Hero Section =======  */}
            
        <section id="hero">
          <div className="hero-container">
            <div id="heroCarousel" data-bs-interval={5000} className="carousel slide carousel-fade" data-bs-ride="carousel">
              <ol className="carousel-indicators" id="hero-carousel-indicators" />
              <div className="carousel-inner" role="listbox">
                {/* Slide 1 */}
                <div className="carousel-item active" style={{background: 'url(assets/img/slide/slide-1.jpg)'}}>
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2 className="animate__animated animate__fadeInDown"><span className= "vintage">Thai Tacos</span></h2>
                      <a href="index.html"><img className="animate__animated animate__fadeInUp" id="thaiflag" src="assets/img/logo.png" alt=""  /></a>
                      <div>
                        <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                        
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slide 2 */}
                <div className="carousel-item" style={{background: 'url(assets/img/slide/slide-2.jpg)'}}>
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                      <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                      <div>
                        <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                        <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slide 3 */}
                <div className="carousel-item" style={{background: 'url(assets/img/slide/slide-3.jpg)'}}>
                  <div className="carousel-background"><img src="assets/img/slide/slide-3.jpg" alt="" /></div>
                  <div className="carousel-container">
                    <div className="carousel-content">
                      <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                      <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                      <div>
                        <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                        <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Fixing Carousel */}
              {/* <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
              </a>
              <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
              </a> */}
            </div>
          </div>
        </section>
        {/* End Hero */}

        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="container-fluid">
              <div className="row">
                <div>
                <img className="aboutpic" src="assets/img/about.jpg" alt="mintbrown" />
                </div>
                <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
                  <div className="content">
                    <h2> About <span> The Owner</span></h2>
                    <br></br>
                    <p>
                      Mint Brown is a native of Thailand, who immigrated to the United States with her family in 2015.
                    </p>
                    <p className="font-italic">
                    She has been cooking since she was a young girl and brings with her a wealth of knowledge about traditional Thai cuisine.
                    Originally from the northeastern region of Isaan, the key ingredient of Mint's Thai Tacos is a spicy, minced meat dish called "Larb",
                    available in both beef and chicken varities.
                    </p>
                    <p>
                    Mint's fusion concept of this tasty Thai dish with MExican street tacos brings together the best of both worlds!
                    </p>
                    <p>
                    Thai Tacos by Mint can be found at the Pearl Street Farmer's Market from May through November.
                    </p>
                    <p>
                    <a href="https://www.southpearlstreet.com/farmers-market/">Pearl Street Farmer's Market</a> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End About Section */}

          
          {/* ======= Menu Section ======= */}
          <section id="menu" className="menu">
            <div className="container">
              <div className="section-title">
                <h2>Check our tasty <span>Menu</span></h2>
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="menu-flters">
                    <li data-filter="*" className="filter-active">Show All</li>
                    {/* <li data-filter=".filter-starters">Starters</li>
                    <li data-filter=".filter-salads">Salads</li>
                    <li data-filter=".filter-specialty">Specialty</li> */}
                  </ul>
                </div>
              </div>
              <div className="row menu-container">
                <div className="col-lg-6 menu-item filter-starters">
                  <div className="menu-content">
                    <a href="#">Thai Larb Tacos</a><span>$3ea or 3 for $9</span>
                  </div>
                  <div className="menu-ingredients">
                    Chicken seasoned to sour, salty, spicy and nutty perfection!
                    Topped with fresh aromatic herbs.
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-specialty">
                  <div className="menu-content">
                    <a href="#">Thai Fried Rice</a><span>$6.95</span>
                  </div>
                  <div className="menu-ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-starters">
                  <div className="menu-content">
                    <a href="#">Pad Thai</a><span>$7.95</span>
                  </div>
                  <div className="menu-ingredients">
                    A delicate crab cake served on a toasted roll with lettuce and tartar sauce
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-salads">
                  <div className="menu-content">
                    <a href="#">Kai Jeow (Thai Omelette)</a><span>$8.95</span>
                  </div>
                  <div className="menu-ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-specialty">
                  <div className="menu-content">
                    <a href="#">Tom Yum Soup</a><span>$9.95</span>
                  </div>
                  <div className="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-starters">
                  <div className="menu-content">
                    <a href="#">Gai Tod (Fried Chicken)</a><span>$4.95</span>
                  </div>
                  <div className="menu-ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-salads">
                  <div className="menu-content">
                    <a href="#">Green Papaya Salad</a><span>$9.95</span>
                  </div>
                  <div className="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-salads">
                  <div className="menu-content">
                    <a href="#">Laab (Spicy Salad)</a><span>$9.95</span>
                  </div>
                  <div className="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-specialty">
                  <div className="menu-content">
                    <a href="#">Pad Krapow (Fried Basil)</a><span>$12.95</span>
                  </div>
                  <div className="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Menu Section */}

          {/* ======= Gallery Section ======= */}
          <section id="gallery" className="gallery">
            <div className="container-fluid">
              <div className="section-title">
                <h2>Some photos of <span>Our Food</span></h2>
                {/* <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p> */}
              </div>
              <div className="row no-gutters">
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-1.jpg" className="gallery-lightbox">
                      <img src="assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-2.jpg" className="gallery-lightbox">
                      <img src="assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-3.jpg" className="gallery-lightbox">
                      <img src="assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-4.jpg" className="gallery-lightbox">
                      <img src="assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-5.jpg" className="gallery-lightbox">
                      <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-6.jpg" className="gallery-lightbox">
                      <img src="assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-7.jpg" className="gallery-lightbox">
                      <img src="assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-8.jpg" className="gallery-lightbox">
                      <img src="assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Gallery Section */}


          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact">
            <div className="container">
              <div className="section-title">
                <h2><span>Contact</span> Us</h2>
                {/* <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p> */}
              </div>
            </div>
            <div className="map">
              <iframe style={{border: 0, width: '100%', height: '350px'}} src="https://maps.google.com/maps?q=South%20Pearl%20Street%20Farmers%E2%80%99%20Market,%20S%20Pearl%20St,%20Denver,%20CO%2080210&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} allowFullScreen />
            </div>
            <div className="container mt-5">
              <div className="info-wrap">
                <div className="row">
                  <div className="col-lg-3 col-md-6 info">
                    <i className="bi bi-geo-alt" />
                    <h4>Location:</h4>
                    <p>1459 S Pearl Street <br />Denver, CO 80210</p>
                  </div>
                  <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                    <i className="bi bi-clock" />
                    <h4>Open Hours:</h4>
                    <p>Monday-Saturday:<br />10:00 AM - 06:30 PM</p>
                  </div>
                  <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                    <i className="bi bi-envelope" />
                    <h4>Email:</h4>
                    <p>ThailandMint@gmail.com<br /></p>
                  </div>
                  <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                    <i className="bi bi-phone" />
                    <h4>Call:</h4>
                    <p>(469)-989-7836<br /></p>
                  </div>
                </div>
              </div>
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </section>{/* End Contact Section */}
        </main>{/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="container">
            <h3>Thai Tacos</h3>
            <p>Hope to see you soon!</p>
            <div className="social-links">
              <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
            </div>
            <div className="copyright">
              © Copyright <strong><span>Thai Tacos</span></strong>. All Rights Reserved
            </div>
          </div>
        </footer>{/* End Footer */}
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
      </div>
  );
}

export default App;


            