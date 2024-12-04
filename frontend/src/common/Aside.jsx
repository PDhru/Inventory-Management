import React from 'react'
import { Link } from 'react-router-dom'

const Aside = () => {
  return (
    <div className="startbar d-print-none">
  {/*start brand*/}
  <div className="brand">
    <a href="index.html" className="logo">
      <span>
        <img src="images/logo-sm.png" alt="logo-small" className="logo-sm" />
      </span>
      <span className>
        <img src="images/logo-light.png" alt="logo-large" className="logo-lg logo-light" />
        <img src="images/logo-dark.png" alt="logo-large" className="logo-lg logo-dark" />
      </span>
    </a>
  </div>
  {/*end brand*/}
  {/*start startbar-menu*/}
  <div className="startbar-menu">
    <div className="startbar-collapse" id="startbarCollapse" data-simplebar>
      <div className="d-flex align-items-start flex-column w-100">
        {/* Navigation */}
        <ul className="navbar-nav mb-auto w-100">
          <li className="menu-label pt-0 mt-0">
            <span>Main Menu</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#inventory" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="inventory">
              <i className="iconoir-home-simple menu-icon" />
              <span>Inventory</span>
            </a>
            <div className="collapse " id="inventory">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link" to={"/add-inventory"}>Add Inventory</Link>
                </li>{/*end nav-item*/}
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>View Inventory</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#suppliers" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="suppliers">
              <i className="iconoir-home-simple menu-icon" />
              <span>Suppliers</span>
            </a>
            <div className="collapse " id="suppliers">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link" to={"/add-suppliers"}>Add Supplier</Link>
                </li>{/*end nav-item*/}
                <li className="nav-item">
                  <Link className="nav-link" to={"/suppliers"}>View Suppliers</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>

      </div>
    </div>
  </div>
</div>


  )
}

export default Aside