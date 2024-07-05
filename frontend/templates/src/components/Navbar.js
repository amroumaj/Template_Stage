import { Link } from 'react-router-dom';


const Navbar = ()=>{
    return(
      <nav className="navbar">
      <div className="nav-list max-w-4xl mx-auto p-4 flex justify-between ">
            <Link to ="/home">Home</Link>
            <Link to ="/Register">Sign up</Link>
            <Link to ="/Login">Login</Link>
      </div>
      </nav>

  );
}
export default Navbar;