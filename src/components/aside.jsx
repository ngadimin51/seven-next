import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AsideSecondary from '@/src/components/asideSecondary'
import AsidePrimary from './asidePrimary'
import Header from './header'

export default function Aside({children, ...rest}) {

    const router = useRouter()
    const [drawer, setDrawer] = useState(false)

    function handleDrawer() {
        drawer ? setDrawer(false) : setDrawer('drawer drawer-start drawer-on')
    }

    function minimizeAside() {
        document.querySelector('#minimize-aside').classList.toggle('active')
        const body = document.body
        if (body.getAttribute('data-kt-aside-minimize')) {
            body.removeAttribute('data-kt-aside-minimize')
        } else {
            body.setAttribute('data-kt-aside-minimize', 'on')
        }
    }

    useEffect(() => {
        setDrawer(false)
    }, [router])

    return (
        <>
            <div id="kt_aside" className={`aside aside-extended bg-white ${drawer}`} data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="auto" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_toggle">
                
                <AsidePrimary />
                <AsideSecondary />

                {/* TOGGLE ASIDE */}
                <button id="minimize-aside" className="btn btn-sm btn-icon bg-body btn-color-gray-600 btn-active-primary position-absolute translate-middle start-100 end-0 bottom-0 shadow-sm d-none d-lg-flex" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="aside-minimize" style={{marginBottom: "1.35rem"}} onClick={ minimizeAside }>
                    {/* begin::Svg Icon | path: icons/duotune/arrows/arr063.svg */}
                    <span className="svg-icon svg-icon-2 rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="black" />
                            <path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="black" />
                        </svg>
                    </span>
                    {/* end::Svg Icon */}
                </button>

            </div>

            <div id="kt_wrapper" className="wrapper d-flex flex-column flex-row-fluid">
                <Header drawer={ handleDrawer } />
                { children }
                <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
                    <div className="container-xxl d-flex flex-column flex-md-row flex-stack">
                        <div className="text-dark order-2 order-md-1">
                            <span className="text-gray-400 fw-bold me-1">Created by</span>
                            <a href="https://keenthemes.com" target="_blank" className="text-muted text-hover-primary fw-bold me-2 fs-6">Keenthemes</a>
                        </div>
                        <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                            <li className="menu-item">
                                <a href="https://keenthemes.com" target="_blank" className="menu-link px-2">About</a>
                            </li>
                            <li className="menu-item">
                                <a href="https://keenthemes.com/support" target="_blank" className="menu-link px-2">Support</a>
                            </li>
                            <li className="menu-item">
                                <a href="https://keenthemes.com/products/seven-html-pro" target="_blank" className="menu-link px-2">Purchase</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {
                drawer ? (
                    <div style={{zIndex: "109"}} className="drawer-overlay" onClick={ handleDrawer }></div>
                ) : null
            }
        </>
    )
}
