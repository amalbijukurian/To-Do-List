import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header>
      <h1 className="logo">My To-Do</h1>
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home{' '}
        </Link>
        <Link to="/about" className="nav-link">
          {' '}
          About
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
