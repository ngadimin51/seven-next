import React, { useState, useEffect } from 'react'
import Admin from '@/src/layout/admin'
// components
import TableUser from '@/src/components/element/tableUser'

const user = [
  [{id: 1, name: "Ana Simons", avatar: "/assets/media/avatars/150-11.jpg", skilss: "HTML, JS, ReactJS", company: "intertico", divition: "Web, UI/UX Design", progress: "20"}],
  [{id: 2, name: "Jessie Clarcson", avatar: "/assets/media/avatars/150-1.jpg", skilss: "C#, ASP.NET, MS SQL", company: "Agoda", divition: "Houses & Hotels", progress: "70"}],
  [{id: 3, name: "Lebron Wayde", avatar: "/assets/media/avatars/150-13.jpg", skilss: "PHP, Laravel, VueJS", company: "RoadGee", divition: "Transportation", progress: "60"}],
  [{id: 4, name: "Natali Goodwin", avatar: "/assets/media/avatars/150-14.jpg", skilss: "Python, PostgreSQL, ReactJS", company: "The Hill", divition: "Insurance", progress: "50"}],
  [{id: 5, name: "Kevin Leonard", avatar: "/assets/media/avatars/150-15.jpg", skilss: "HTML, JS, ReactJS", company: "Agoda", divition: "Art Director", progress: "90"}]
]

export default function TablePage() {

  const [userData, setUserData] = useState(user)
  const [updateData, setUpdateData] = useState(false)

  function loadUser() {
    setUserData([...user])
  }

  function handleCallback(childData) {
    if ( childData.action === 'delete' ) {
      deleteUser(childData.id)
    } else {
      updateUser(childData)
    }
  }

  function deleteUser(id) {
    let arr = []
    userData.forEach( x => {
        if ( x[0].id != id) {
            arr.push(x)
        }
    })
    setUserData(arr)
  }

  function updateUser(childData) {
    const data = userData.filter(x => x[0].id == childData.id)
    setUpdateData({
      title: childData.action,
      data: data[0][0]
    })
  }

  function removeBackdrop() {
    const backdrop = document.querySelector('#backdrop')
    if ( backdrop ) {
      backdrop.removeAttribute('class')
    }
  }

  useEffect(() => {
    const body = document.body
    const backdrop = document.querySelector('#backdrop')
    if (updateData) {
      // body.classList.add('modal-open')
      body.setAttribute("style", 'overflow: hidden; padding-right: 0px;')
      backdrop.classList.add('modal-backdrop')
      backdrop.classList.add('fade')
      backdrop.classList.add('show')
    } else {
        body.classList.remove('modal-open')
        body.removeAttribute('style')
        removeBackdrop()
    }
    // updateData ? body.classList.add('modal-open') : body.classList.remove('modal-open')
}, [updateData])

  return (
    <div className="row gy-5 g-xl-12">

      <div className="col-xl-12">
        <div className="card card-xl-stretch mb-5 mb-xl-8">

          {/* CARD HEADER START */}
          <div className="card-header border-0 bg-primary py-5">
            <h3 className="card-title fw-bolder text-white">Sales Progress</h3>
            <div className="card-toolbar">
              <button type="button" className="btn btn-sm btn-icon btn-color-white btn-active-white btn-active-color- border-0 me-n3" onClick={ loadUser }>
                <span className="svg-icon svg-icon-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
                      <rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
                      <rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
                      <rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
                    </g>
                  </svg>
                </span>
              </button>
            </div>
          </div>
          {/* CARD HEADER END */}

          {/* CARD BODY START */}
          <div className="card-body p-0">
            <div className="charts-widget-2-chart card-rounded-bottom bg-primary mb-6"></div>
            <div className="card-rounded bg-body mt-n10 position-relative card-px py-2">
              <TableUser user={ userData } callback={ handleCallback } />
            </div>
          </div>
          {/* CARD BODY END */}

        </div>
      </div>

      {
        updateData
          ? (
            <div className="modal fade show" tabIndex="-1" style={{display: "block"}} aria-modal="true" role="dialog">
              <div className="modal-dialog modal-dialog-centered mw-900px">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2>{updateData.title}</h2>
                    <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal" onClick={() => setUpdateData(false)}>
                      <span className="svg-icon svg-icon-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black"></rect>
                          <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black"></rect>
                        </svg>
                      </span>
                    </div>
                  </div>
                  
                  <div className="modal-body py-lg-10 px-lg-10">
                    <div className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid">
                      <pre>{ JSON.stringify(updateData.data, undefined, 2) }</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
          : null
      }

    </div>
  )
}

TablePage.layout = Admin