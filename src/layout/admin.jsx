import React, { useEffect } from 'react'
import Aside from 'src/components/aside'
import { useRouter } from 'next/router'
import MenuPopup from '../components/menuPopup'
export default function Admin({ children, ...rest }) {

  const router = useRouter()
  const pathName = router.pathname
  
  // useEffect(() => {
  //   const elm = document.querySelectorAll('.menu-link')
  //   if (elm) elm.forEach( x => {
  //     const href = x.getAttribute('href')
  //     if ( href === pathName) {
  //       console.log(href)
  //       x.classList.add('active')
  //       const parent = x.parentNode
  //       parent.parentNode.classList.add('show')
  //       parent.parentElement.parentElement.classList.add('here')
  //     } else {
  //       x.classList.remove('active')
  //       const parent = x.parentNode
  //       parent.parentNode.classList.remove('show')
  //       parent.parentElement.parentElement.classList.remove('here')
  //     }
  //   })
  //   // console.log(pathName)
  // }, [pathName])

  return (
    <div className='d-flex flex-column flex-root'>
      <div className='page d-flex flex-row flex-column-fluid'>
        {/* <Navbar {...rest} /> */}
        <Aside {...rest}>
          { children }
        </Aside>
      </div>
    </div>
  )
}
