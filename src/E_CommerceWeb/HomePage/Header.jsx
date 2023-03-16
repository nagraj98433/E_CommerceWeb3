import React from 'react'

function Header() {
  return (
    <>
      <div className='container-fluid py-2'>
        <div className='row d-flex justify-content-evenly'>
          <div className="col-3 col-lg-4 col-md-4 pe-md-0 col-sm-4 px-sm-0 text-start TopHeader_font d-flex align-items-center">
            <span className='TopHeader_phoneIcone TopHeaderIcons text-center'><i class="fas fa-envelope"></i></span>demo@gmail.com</div>
          <div className="col-3 text-center d-flex align-items-center justify-content-center">
            {/* img */}
          </div>
          <div className="col-3 col-lg-4 col-md-4 col-sm-3">
            <div className="row">
              <div className="col-5 col-md-4 col-sm-8 pe-0 text-end">
                {/* <!-- Example single danger button --> */}
                <div className="btn-group-sm">
                  <i class="fas fa-shopping-cart"></i>
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

export default Header
