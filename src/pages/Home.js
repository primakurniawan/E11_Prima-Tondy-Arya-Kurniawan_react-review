import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow nav">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="./img/logo-ALTA@2x.png" alt="" height="50" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active text-uppercase fw-bold" to="/">
                Home
              </Link>
              <a className="nav-link text-uppercase fw-bold" href="#">
                Experience
              </a>
              <a className="nav-link text-uppercase fw-bold" href="#">
                About
              </a>
              <Link className="nav-link text-uppercase fw-bold" to="/contact_us">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="main main--hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4 text-md-center text-lg-start">
              <img src="./img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg" alt="" width="355" height="355" className="img--profile" />
            </div>
            <div className="col-md-12 col-lg-8 text-md-center text-lg-start">
              <h4 className="fw-bolder">Hi, my name is</h4>
              <h1 className="display-1 fw-bold lh-1">Anne Sullivan</h1>
              <h2 className="fw-bolder">I build things for the web</h2>
              <a href="#" className="btn btn-warning">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
