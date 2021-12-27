import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark py-3">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">User Management System</span>
          <div>
            <ul className="nav justify-content-end px-5">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  <a className="btn btn-secondary">HOME PAGE</a>
                </Link>
                <Link href="/addUser" passHref>
                  <button className="btn btn-info ms-2 ">ADD USER</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
