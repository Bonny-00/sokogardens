import React, { useEffect, useState } from 'react'

const Navbar = () => {
  // 2. Add state to store user
  const [user, setUser] = useState(null);

  // 3. Load user from localStorage
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedUser);
  }, []);

  // Step 3: Create Logout function
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <section className="row">
      <div className="col-md-12">
        <nav className="navbar navbar-expand-md bg-dark">
          <a href="/" className="navbar-brand text-danger">
            Outifits & Management
          </a>
          <button
            className="navbar-toggler"
            data-bs-target="#navbarcollapse"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarcollapse">
            {/* Left links */}
            <div className="navbar-nav ">
              <a href="/" className="nav-link text-primary">
                Home
              </a>
              <a href="/addproduct" className="nav-link text-primary">
                Add product
              </a>
              <a href="/" className='nav-link text-success'>
              Get product
              </a>
            </div>

            {/* Right links - Step 4: Update your Navbar UI */}
            <div className="navbar-nav ms-auto">
              {user ? (
                <>
                  <span className="nav-link text-white me-2">
                    Welcome {user.name}
                  </span>
                  <button onClick={logout} className="btn btn-danger">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <a href="/signup" className="btn btn-outline-warning text-primary">
                    Signup
                  </a>
            

                  <a href="/signin" className="btn btn-outline-danger text-primary me-2">
                    Signin
                  </a>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Navbar