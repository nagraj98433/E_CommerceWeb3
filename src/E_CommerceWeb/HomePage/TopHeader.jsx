import { React } from 'react'
import '../All_CSS/TopHeader.css'


function TopHeader() {
  return (
    <>
      <div className='container-fluid TopHeader_bg_clr py-2'>
        <div className='row d-flex justify-content-evenly'>
          <div className="col-3 col-lg-4 col-md-4 pe-md-0 col-sm-4 px-sm-0 text-start TopHeader_font d-flex align-items-center">
            <span className='TopHeader_phoneIcone TopHeaderIcons text-center'><i className="fas fa-phone-alt"></i></span>Call us: 0126 - 922 - 0162</div>
          <div className="col-3 text-center d-flex align-items-center justify-content-center">
            <div className="col-1 TopHeaderIcons px-0"><i className="fab fa-facebook-f"></i></div>
            <div className="col-1 TopHeaderIcons px-0"><i className="fab fa-twitter"></i></div>
            <div className="col-1 TopHeaderIcons px-0"><i className="fab fa-linkedin-in"></i></div>
            <div className="col-1 TopHeaderIcons px-0"><i className="fab fa-instagram"></i></div>
          </div>
          <div className="col-3 col-lg-4 col-md-4 col-sm-3">
            <div className="row">
              <div className="col-5 col-md-4 col-sm-8 pe-0 text-end">
                {/* <!-- Example single danger button --> */}
                <div className="btn-group-sm">
                  <button type="button" className="btn border border-2 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    English
                  </button>
                  <ul className="dropdown-menu shadow">
                    <li><a className="dropdown-item active" href="/">English</a></li>
                    <li><a className="dropdown-item" href="/">German</a></li>
                    <li><a className="dropdown-item" href="/">Chinese</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-7 col-md-8 col-sm-12 d-flex align-items-center justify-content-center p-0"><span> Open hour: 8.00 - 18.00</span></div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default TopHeader
