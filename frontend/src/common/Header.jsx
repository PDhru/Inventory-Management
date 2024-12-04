import React from 'react'

const Header = () => {
  return (
  <div className="topbar d-print-none">
  <div className="container-xxl">
    <nav className="topbar-custom d-flex justify-content-between" id="topbar-custom">    
      <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">                        
        <li>
          <button className="nav-link mobile-menu-btn nav-icon" id="togglemenu">
            <i className="iconoir-menu-scale" />
          </button>
        </li> 
        <li className="mx-3 welcome-text">
          <h3 className="mb-0 fw-bold text-truncate">Good Morning</h3>
          {/* <h6 class="mb-0 fw-normal text-muted text-truncate fs-14">Here's your overview this week.</h6> */}
        </li>                   
      </ul>
      <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
        <li className="hide-phone app-search">
          <form role="search" action="#" method="get">
            <input type="search" name="search" className="form-control top-search mb-0" placeholder="Search here..." />
            <button type="submit"><i className="iconoir-search" /></button>
          </form>
        </li>     
        <li className="dropdown">
          <a className="nav-link dropdown-toggle arrow-none nav-icon" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
            <img src="images/flags/us_flag.jpg" alt className="thumb-sm rounded-circle" />
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#"><img src="images/flags/us_flag.jpg" alt height={15} className="me-2" />English</a>
            <a className="dropdown-item" href="#"><img src="images/flags/spain_flag.jpg" alt height={15} className="me-2" />Spanish</a>
            <a className="dropdown-item" href="#"><img src="images/flags/germany_flag.jpg" alt height={15} className="me-2" />German</a>
            <a className="dropdown-item" href="#"><img src="images/flags/french_flag.jpg" alt height={15} className="me-2" />French</a>
          </div>
        </li>{/*end topbar-language*/}
        <li className="dropdown topbar-item">
          <a className="nav-link dropdown-toggle arrow-none nav-icon" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
            <i className="icofont-bell-alt" />
            <span className="alert-badge" />
          </a>
          <div className="dropdown-menu stop dropdown-menu-end dropdown-lg py-0">
            <h5 className="dropdown-item-text m-0 py-3 d-flex justify-content-between align-items-center">
              Notifications <a href="#" className="badge text-body-tertiary badge-pill">
                <i className="iconoir-plus-circle fs-4" />
              </a>
            </h5>
            <ul className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-1" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link mx-0 active" data-bs-toggle="tab" href="#All" role="tab" aria-selected="true">
                  All <span className="badge bg-primary-subtle text-primary badge-pill ms-1">24</span>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link mx-0" data-bs-toggle="tab" href="#Projects" role="tab" aria-selected="false" tabIndex={-1}>
                  Projects
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link mx-0" data-bs-toggle="tab" href="#Teams" role="tab" aria-selected="false" tabIndex={-1}>
                  Team
                </a>
              </li>
            </ul>
            <div className="ms-0" style={{maxHeight: 230}} data-simplebar>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="All" role="tabpanel" aria-labelledby="all-tab" tabIndex={0}>
                  {/* item*/}
                  <a href="#" className="dropdown-item py-3">
                    <small className="float-end text-muted ps-2">2 min ago</small>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                        <i className="iconoir-wolf fs-4" />
                      </div>
                      <div className="flex-grow-1 ms-2 text-truncate">
                        <h6 className="my-0 fw-normal text-dark fs-13">Your order is placed</h6>
                        <small className="text-muted mb-0">Dummy text of the printing and industry.</small>
                      </div>{/*end media-body*/}
                    </div>{/*end media*/}
                  </a>{/*end-item*/}
                  {/* item*/}
                  <a href="#" className="dropdown-item py-3">
                    <small className="float-end text-muted ps-2">10 min ago</small>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                        <i className="iconoir-apple-swift fs-4" />
                      </div>
                      <div className="flex-grow-1 ms-2 text-truncate">
                        <h6 className="my-0 fw-normal text-dark fs-13">Added In Inventory</h6>
                        <small className="text-muted mb-0">It is a long established fact that a reader.</small>
                      </div>{/*end media-body*/}
                    </div>{/*end media*/}
                  </a>{/*end-item*/}
                  {/* item*/}
                  <a href="#" className="dropdown-item py-3">
                    <small className="float-end text-muted ps-2">1 hr ago</small>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                        <i className="iconoir-drone fs-4" />
                      </div>
                      <div className="flex-grow-1 ms-2 text-truncate">
                        <h6 className="my-0 fw-normal text-dark fs-13">Your order is placed</h6>
                        <small className="text-muted mb-0">It is a long established fact that a reader.</small>
                      </div>{/*end media-body*/}
                    </div>{/*end media*/}
                  </a>{/*end-item*/}
                </div>
                <div className="tab-pane fade" id="Projects" role="tabpanel" aria-labelledby="projects-tab" tabIndex={0}>
                  {/* item*/}
                  <a href="#" className="dropdown-item py-3">
                    <small className="float-end text-muted ps-2">40 min ago</small>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">                                                    
                        <i className="iconoir-birthday-cake fs-4" />
                      </div>
                      <div className="flex-grow-1 ms-2 text-truncate">
                        <h6 className="my-0 fw-normal text-dark fs-13">UX 3 Task complete.</h6>
                        <small className="text-muted mb-0">Dummy text of the printing.</small>
                      </div>{/*end media-body*/}
                    </div>{/*end media*/}
                  </a>{/*end-item*/}
                  {/* item*/}
                  <a href="#" className="dropdown-item py-3">
                    <small className="float-end text-muted ps-2">1 hr ago</small>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                        <i className="iconoir-drone fs-4" />
                      </div>
                      <div className="flex-grow-1 ms-2 text-truncate">
                        <h6 className="my-0 fw-normal text-dark fs-13">Your order is placed</h6>
                        <small className="text-muted mb-0">It is a long established fact that a reader.</small>
                      </div>{/*end media-body*/}
                    </div>{/*end media*/}
                  </a>{/*end-item*/}
                  {/* item*/}
                  <a href="#" className="dropdown-item py-3">
                    <small className="float-end text-muted ps-2">2 hrs ago</small>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                        <i className="iconoir-user fs-4" />
                      </div>
                      <div className="flex-grow-1 ms-2 text-truncate">
                        <h6 className="my-0 fw-normal text-dark fs-13">Payment Successfull</h6>
                        <small className="text-muted mb-0">Dummy text of the printing.</small>
                      </div>{/*end media-body*/}
                    </div>{/*end media*/}
                  </a>{/*end-item*/}
                </div>
                <div className="tab-pane fade" id="Teams" role="tabpanel" aria-labelledby="teams-tab" tabIndex={0}>
                  {/* item*/}
                  <a href="#" className="dropdown-item py-3">
                    <small className="float-end text-muted ps-2">1 hr ago</small>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                        <i className="iconoir-drone fs-4" />
                      </div>
                      <div className="flex-grow-1 ms-2 text-truncate">
                        <h6 className="my-0 fw-normal text-dark fs-13">Your order is placed</h6>
                        <small className="text-muted mb-0">It is a long established fact that a reader.</small>
                      </div>{/*end media-body*/}
                    </div>{/*end media*/}
                  </a>{/*end-item*/}
                  {/* item*/}
                  <a href="#" className="dropdown-item py-3">
                    <small className="float-end text-muted ps-2">2 hrs ago</small>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                        <i className="iconoir-user fs-4" />
                      </div>
                      <div className="flex-grow-1 ms-2 text-truncate">
                        <h6 className="my-0 fw-normal text-dark fs-13">Payment Successfull</h6>
                        <small className="text-muted mb-0">Dummy text of the printing.</small>
                      </div>{/*end media-body*/}
                    </div>{/*end media*/}
                  </a>{/*end-item*/}
                </div>
              </div>
            </div>
            {/* All*/}
            <a href="#" className="dropdown-item text-center text-dark fs-13 py-2">
              View All <i className="fi-arrow-right" />
            </a>
          </div>
        </li>
        <li className="dropdown topbar-item">
          <a className="nav-link dropdown-toggle arrow-none nav-icon" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
            <img src="images/users/avatar-1.jpg" alt className="thumb-lg rounded-circle" />
          </a>
          <div className="dropdown-menu dropdown-menu-end py-0">
            <div className="d-flex align-items-center dropdown-item py-2 bg-secondary-subtle">
              <div className="flex-shrink-0">
                <img src="images/users/avatar-1.jpg" alt className="thumb-md rounded-circle" />
              </div>
              <div className="flex-grow-1 ms-2 text-truncate align-self-center">
                <h6 className="my-0 fw-medium text-dark fs-13">William Martin</h6>
                <small className="text-muted mb-0">Front End Developer</small>
              </div>{/*end media-body*/}
            </div>
            <div className="dropdown-divider mt-0" />
            <small className="text-muted px-2 pb-1 d-block">Account</small>
            <a className="dropdown-item" href="#"><i className="las la-user fs-18 me-1 align-text-bottom" /> Profile</a>
            <a className="dropdown-item" href="#"><i className="las la-wallet fs-18 me-1 align-text-bottom" /> Earning</a>
            <small className="text-muted px-2 py-1 d-block">Settings</small>                        
            <a className="dropdown-item" href="#"><i className="las la-cog fs-18 me-1 align-text-bottom" />Account Settings</a>
            <a className="dropdown-item" href="#"><i className="las la-lock fs-18 me-1 align-text-bottom" /> Security</a>
            <a className="dropdown-item" href="#"><i className="las la-question-circle fs-18 me-1 align-text-bottom" /> Help Center</a>                       
            <div className="dropdown-divider mb-0" />
            <a className="dropdown-item text-danger" href="#"><i className="las la-power-off fs-18 me-1 align-text-bottom" /> Logout</a>
          </div>
        </li>
      </ul>{/*end topbar-nav*/}
    </nav>
    {/* end navbar*/}
  </div>
</div>

  )
}

export default Header