import react from "react";
import "./Login.css";
import LoginImage from "../../Images/login.PNG";
const Login = () => {
    return(
        <div>
             <div className="Container" >
                {/* <div className="sticky-xl-top">
                    <nav className="Navbar-Container navbar navbar-expand-lg " >
                            <div className="container-fluid">
                                <a className="navbar-brand Icon" href="#" >
                                    <img src="https://www.freelogovectors.net/wp-content/uploads/2023/01/myntra-logo-freelogovectors.net_.png" alt="Bootstrap" width="60" height="35"/>
                                </a>
                                
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                    <ul className="Nav_list navbar-nav me-auto mb-2 mb-lg-0 " >
                                        <li className=" Nav-Tag-Men nav-item" >
                                        <a className="nav-link active" aria-current="page" href="https://www.myntra.com/shop/men">MEN</a>
                                        </li>
                                        <li className=" Nav-Tag-All nav-item" >
                                        <a className="nav-link active" aria-current="page" href="https://www.myntra.com/shop/women">WOMEN</a>
                                        </li>
                                        <li className=" Nav-Tag-All nav-item" >
                                        <a className="nav-link active" aria-current="page" href="https://www.myntra.com/shop/kids">KIDS</a>
                                        </li>
                                        <li className="Nav-Tag-All nav-item" >
                                        <a className="nav-link active" aria-current="page" href="https://www.myntra.com/shop/home-living">HOME & LIVING</a>
                                        </li>
                                        <li className="Nav-Tag-All nav-item" >
                                        <a className="nav-link active" aria-current="page" href="https://www.myntra.com/personal-care">BEAUTY</a>
                                        </li>
                                        <li className="Nav-Tag-All nav-item" >
                                        <a className="nav-link active" aria-current="page" href="https://www.myntra.com/studio/home">STUDIO</a>
                                        </li>
                                    </ul>
                                    <form className="Search-Bar d-flex" role="search" >
                                        <a className="Search-Bar-Icon" >
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="15" viewBox="0,0,256,256"  >
                                                <g fill-opacity="0.6902" fill="#1b1818" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(9.84615,9.84615)"><path d="M10,0.1875c-5.42187,0 -9.8125,4.39063 -9.8125,9.8125c0,5.42188 4.39063,9.8125 9.8125,9.8125c2.28906,0 4.39453,-0.80859 6.0625,-2.125l0.875,0.875c-0.36719,0.69141 -0.23828,1.57422 0.34375,2.15625l4.59375,4.625c0.71484,0.71484 1.87891,0.71484 2.59375,0l0.875,-0.875c0.71484,-0.71484 0.71484,-1.87891 0,-2.59375l-4.625,-4.59375c-0.58594,-0.58594 -1.46484,-0.6875 -2.15625,-0.3125l-0.875,-0.875c1.32422,-1.67187 2.125,-3.79297 2.125,-6.09375c0,-5.42187 -4.39062,-9.8125 -9.8125,-9.8125zM10,2c4.41797,0 8,3.58203 8,8c0,4.41797 -3.58203,8 -8,8c-4.41797,0 -8,-3.58203 -8,-8c0,-4.41797 3.58203,-8 8,-8zM4.9375,7.46875c-0.51562,0.83594 -0.8125,1.82031 -0.8125,2.875c0,3.02734 2.44141,5.46875 5.46875,5.46875c1.16797,0 2.26563,-0.37891 3.15625,-1c-0.23828,0.02734 -0.50391,0.03125 -0.75,0.03125c-3.91406,0 -7.0625,-3.14844 -7.0625,-7.0625c0,-0.10547 -0.00391,-0.20703 0,-0.3125z"></path></g></g>
                                            </svg>
                                        </a>
                                        <input className="Search-Bar-Input form-control me-2" type="search" placeholder="Search for product,brand and more" aria-label="Search" />
                                    </form>

                                    <ul className=" Nav-list-right navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="Nav-Tag-All nav-item" >
                                            <a className="nav-link active" aria-current="page" href="#">Profile</a>
                                        </li>
                                        <li className="Nav-Tag-All nav-item" >
                                            <a className="nav-link active" aria-current="page" href="https://www.myntra.com/wishlist">Wishlist</a>
                                        </li>
                                        <li className="Nav-Tag-All nav-item" >
                                            <a className="nav-link active" aria-current="page" href="https://www.myntra.com/checkout/cart">Bag</a>
                                        </li>
                                    </ul>
                                
                                </div>
                            </div>
                    </nav>
                </div> */}

                    <div className="Login-Container" >
                        <img className="Login-img" src={LoginImage} alt="" />

                        <h6 className="Login-Heading" >Login or Signup</h6>
                            <div className="Input-Container">
                                    <span className="Span"> +91  |</span>
                                    <input className="Input" type=""  placeholder="Mobile Number"/>
                            </div>
                            <div>
                            <button className="btn1" type="button"> Continue </button>

                            <h5 className="Signup"> Don't have an account? <a href="http://127.0.0.1:5500/Sign%20up.html" className="Tag"> Sign up </a> </h5>
                            </div>
                    </div>

            </div>  
        </div>
         
    )
}
export default Login;