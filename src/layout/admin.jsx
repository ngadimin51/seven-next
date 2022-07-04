import React, { useEffect } from 'react'
import Aside from 'src/components/aside'
export default function Admin({ children, ...rest }) {

  return (
    <div className='d-flex flex-column flex-root'>
      <div className='page d-flex flex-row flex-column-fluid'>
        {/* <Navbar {...rest} /> */}
        <Aside {...rest}>
          <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
            {/* begin::Container */}
            <div className="container-xxl" id="kt_content_container">
              { children }
            </div>
          </div>
        </Aside>
      </div>
    </div>
  )
}
