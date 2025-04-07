// import { Outlet } from "react-router-dom";
// import logo from "../images/library.png";
// const Layout = () => {
//   return (
//     <>
//       <nav class="navbar sticky-top navbar-expand-lg ">
//         <div class="container-fluid">
//         <a class="navbar-brand" href="#">
//               <img
//                 src={logo}
//                 class="me-2 ps-0"
//                 height="40"
//                 alt="Logo"
//               />
//               <small>School Management System</small>
//             </a>
//           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="/">Home</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link active" href="/Service">Dashboard</a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link active" href="/about">About</a>
//               </li>
//             </ul>
//           </div>
//           <br></br>
//         </div>
//       </nav>
//       <Outlet />
//     </>
//   )
// };

// export default Layout;





import { Outlet, Link } from "react-router-dom";
import logo from "../images/library.png";

const Layout = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid">
          {/* Logo Section */}
          <Link className="navbar-brand" to="/">
            <img src={logo} className="me-2 ps-0" height="40" alt="Logo" />
            <small>School Management System</small>
          </Link>

          {/* Mobile Navigation Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Service">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Outlet />
    </>
  );
};

export default Layout;
