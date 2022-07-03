import React, { useState } from "react"
import { useRouter } from 'next/router'
import Alert from "@/src/components/alert"

export default function Home() {

  const router = useRouter()
  const [alert, setAlert] = useState({show: false, color: "primary", title: "title", message: "message"})

  function submit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email-form')
    const password = formData.get('password-form')
    if ( !email ) return setAlert({show: true, color: "danger", title: "Error", message: "Email is required"})
    if ( !password ) return setAlert({show: true, color: "danger", title: "Error", message: "Password is required"})
    setAlert({show: true, color: "warning", title: "Processing", message: "Wait for validation"})
    setTimeout(() => {
      if ( email === 'tofik@ndalu.id' && password === 'oaoe') {
        return setTimeout(() => {
          setAlert({show: true, color: "success", title: "Success", message: "Success post"})
          setTimeout(() => {
            router.push('/admin')
          }, 1_000)
        }, 1_000)
      }
      setAlert({show: true, color: "danger", title: "Error", message: "Email or Password is not match"})
    }, 2000)
  }

  function callbackAlert() {
    setAlert({show: false, color: "primary", title: "title", message: "message"})
  }

  return (
    <div style={{width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div className="text-center px-6 py-4 shadow round bg-primary text-white fw-bold" style={{borderRadius: "3px", width: "300px"}}>
        <form onSubmit={ submit }>
          <h1 className="text-white mt-3">LOGIN</h1>
          { alert.show ? <Alert color={alert.color} title={alert.title} message={alert.message} callback={ callbackAlert } /> : null}
          <hr />
          <label className="mt-3" htmlFor="email-form">Email</label>
          <input id="email-form" name="email-form" type="email" className="form-control my-3" placeholder="email" />
          <label htmlFor="password-form">password</label>
          <input id="password-form" name="password-form" type="password" className="form-control my-3" placeholder="password" />
          { !alert.show ? <button className="btn btn-danger my-3">SUBMIT</button> : null}
        </form>
      </div>
    </div>
  )

}