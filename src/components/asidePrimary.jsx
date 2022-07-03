import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import MenuPopup from './menuPopup'

export default function AsidePrimary() {

    const [popup, setPopup] = useState(false)

    function toggleMenuPopUp() {
        popup ? setPopup(false) : setPopup('show')
    }

    function InactiveNavLink() {
        const navLink = document.querySelectorAll('.nav-link')
        navLink.forEach( x => {
            x.classList.remove('active')
        })
    }

    function hideTabPane(href) {
        
        // HIDE ALL TAB PANE
        const tabPane = document.querySelectorAll('.tab-pane')
        if (tabPane) tabPane.forEach( x => {
            if ( typeof x !== 'undefined' && x.classList.contains('show') ) {
                x.classList.remove('show')
                x.classList.remove('active')
            }
        })
        // SHOW SELECTED TAB PANE
        const element = document.querySelector(href)
        if ( typeof element === "undefined" || element === null ) {
            return;
        }
        element.classList.add('active')
        element.classList.add('show')
    }

    useEffect(() => {
        // setDrawer(false)
        const navLink = document.querySelectorAll('.nav-link')
        if ( navLink ) navLink.forEach( x => {
            if ( typeof x !== 'undefined') {
                const href = x.getAttribute('href')
                x.addEventListener('click', (e) => {
                    e.preventDefault()
                    InactiveNavLink()
                    hideTabPane(href)
                    x.classList.add('active')
                })
            }
        })
    }, [])

    return (
        <div className='aside-primary d-flex flex-column align-items-lg-center flex-row-auto'>
            {/* begin::Logo */}
            <div className="aside-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-10" id="kt_aside_logo">
                <Link href="/admin">
                    <a>
                        <img alt="Logo" src="/favicon.ico" className="h-50px" />
                    </a>
                </Link>
            </div>
            {/* end::Logo */}
            {/* begin::Nav */}
            <div className="aside-nav d-flex flex-column align-items-center flex-column-fluid w-100 pt-5 pt-lg-0" id="kt_aside_nav">
                {/* begin::Wrapper */}
                <div className="hover-scroll-y mb-10" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_aside_nav" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-offset="0px">
                    {/* begin::Nav */}
                    <ul className="nav flex-column">
                        {/* begin::Nav item */}
                        <li className="nav-item mb-2" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="right" data-bs-dismiss="click" title="Projects">
                            {/* begin::Nav link */}
                            <a className="nav-link btn btn-custom btn-icon" data-bs-toggle="tab" href="#kt_aside_nav_tab_projects">
                                {/* begin::Svg Icon | path: icons/duotune/abstract/abs042.svg */}
                                <span className="svg-icon svg-icon-2x">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z" fill="black" />
                                        <path opacity="0.3" d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z" fill="black" />
                                    </svg>
                                </span>
                                {/* end::Svg Icon */}
                            </a>
                            {/* end::Nav link */}
                        </li>
                        {/* end::Nav item */}
                        {/* begin::Nav item */}
                        <li className="nav-item mb-2" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="right" data-bs-dismiss="click" title="Menu">
                            {/* begin::Nav link */}
                            <a className="nav-link btn btn-custom btn-icon active" data-bs-toggle="tab" href="#kt_aside_nav_tab_menu">
                                {/* begin::Svg Icon | path: icons/duotune/general/gen025.svg */}
                                <span className="svg-icon svg-icon-2x">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="2" y="2" width="9" height="9" rx="2" fill="black" />
                                        <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black" />
                                        <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black" />
                                        <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black" />
                                    </svg>
                                </span>
                                {/* end::Svg Icon */}
                            </a>
                            {/* end::Nav link */}
                        </li>
                        {/* end::Nav item */}
                        {/* begin::Nav item */}
                        <li className="nav-item mb-2" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="right" data-bs-dismiss="click" title="Subscription">
                            {/* begin::Nav link */}
                            <a className="nav-link btn btn-custom btn-icon" data-bs-toggle="tab" href="#kt_aside_nav_tab_subscription">
                                {/* begin::Svg Icon | path: icons/duotune/general/gen032.svg */}
                                <span className="svg-icon svg-icon-2x">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="8" y="9" width="3" height="10" rx="1.5" fill="black" />
                                        <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="black" />
                                        <rect x="18" y="11" width="3" height="8" rx="1.5" fill="black" />
                                        <rect x="3" y="13" width="3" height="6" rx="1.5" fill="black" />
                                    </svg>
                                </span>
                                {/* end::Svg Icon */}
                            </a>
                            {/* end::Nav link */}
                        </li>
                        {/* end::Nav item */}
                        {/* begin::Nav item */}
                        <li className="nav-item mb-2" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="right" data-bs-dismiss="click" title="Tasks">
                            {/* begin::Nav link */}
                            <a className="nav-link btn btn-custom btn-icon" data-bs-toggle="tab" href="#kt_aside_nav_tab_tasks">
                                {/* begin::Svg Icon | path: icons/duotune/general/gen048.svg */}
                                <span className="svg-icon svg-icon-2x">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="black" />
                                        <path d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z" fill="black" />
                                    </svg>
                                </span>
                                {/* end::Svg Icon */}
                            </a>
                            {/* end::Nav link */}
                        </li>
                        {/* end::Nav item */}
                        {/* begin::Nav item */}
                        <li className="nav-item mb-2" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="right" data-bs-dismiss="click" title="Notifications">
                            {/* begin::Nav link */}
                            <a className="nav-link btn btn-custom btn-icon" data-bs-toggle="tab" href="#kt_aside_nav_tab_notifications">
                                {/* begin::Svg Icon | path: icons/duotune/abstract/abs027.svg */}
                                <span className="svg-icon svg-icon-2x">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="black" />
                                        <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="black" />
                                    </svg>
                                </span>
                                {/* end::Svg Icon */}
                            </a>
                            {/* end::Nav link */}
                        </li>
                        {/* end::Nav item */}
                        {/* begin::Nav item */}
                        <li className="nav-item mb-2" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="right" data-bs-dismiss="click" title="Authors">
                            {/* begin::Nav link */}
                            <a className="nav-link btn btn-custom btn-icon" data-bs-toggle="tab" href="#kt_aside_nav_tab_authors">
                                {/* begin::Svg Icon | path: icons/duotune/finance/fin006.svg */}
                                <span className="svg-icon svg-icon-2x">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="black" />
                                        <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="black" />
                                    </svg>
                                </span>
                                {/* end::Svg Icon */}
                            </a>
                            {/* end::Nav link */}
                        </li>
                        {/* end::Nav item */}
                    </ul>
                    {/* end::Tabs */}
                </div>
                {/* end::Nav */}
            </div>
            {/* end::Nav */}
            {/* begin::Footer */}
            <div className="aside-footer d-flex flex-column align-items-center flex-column-auto" id="kt_aside_footer">
                {/* begin::Chat */}
                <div className="d-flex align-items-center mb-2">
                    {/* begin::Menu wrapper */}
                    <div className="btn btn-icon btn-custom" id="kt_drawer_chat_toggle">
                        {/* begin::Svg Icon | path: icons/duotune/communication/com012.svg */}
                        <span className="svg-icon svg-icon-2 svg-icon-lg-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="black" />
                                <rect x="6" y="12" width="7" height="2" rx="1" fill="black" />
                                <rect x="6" y="7" width="12" height="2" rx="1" fill="black" />
                            </svg>
                        </span>
                        {/* end::Svg Icon */}
                    </div>
                    {/* end::Menu wrapper */}
                </div>
                {/* end::Chat */}
                {/* begin::Notifications */}
                <div className="d-flex align-items-center mb-2">
                    {/* begin::Menu wrapper */}
                    <div className="btn btn-icon btn-custom" data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="top-start" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-dismiss="click" title="Notifications">
                        {/* begin::Svg Icon | path: icons/duotune/general/gen025.svg */}
                        <span className="svg-icon svg-icon-2 svg-icon-lg-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect x="2" y="2" width="9" height="9" rx="2" fill="black" />
                                <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black" />
                                <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black" />
                                <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black" />
                            </svg>
                        </span>
                        {/* end::Svg Icon */}
                    </div>
                    {/* begin::Menu */}
                    <div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true">
                        {/* begin::Heading */}
                        <div className="d-flex flex-column bgi-no-repeat rounded-top" style={{backgroundImage: "url('/assets/media/misc/dropdown-header-bg.png')"}}>
                            {/* begin::Title */}
                            <h3 className="text-white fw-bold px-9 mt-10 mb-6">Notifications
                            <span className="fs-8 opacity-75 ps-3">24 reports</span></h3>
                            {/* end::Title */}
                            {/* begin::Tabs */}
                            <ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-bold px-9">
                                <li className="nav-item">
                                    <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_1">Alerts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white opacity-75 opacity-state-100 pb-4 active" data-bs-toggle="tab" href="#kt_topbar_notifications_2">Updates</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_3">Logs</a>
                                </li>
                            </ul>
                            {/* end::Tabs */}
                        </div>
                        {/* end::Heading */}
                        {/* begin::Tab content */}
                        <div className="tab-content">
                            {/* begin::Tab panel */}
                            <div className="tab-pane fade" id="kt_topbar_notifications_1" role="tabpanel">
                                {/* begin::Items */}
                                <div className="scroll-y mh-325px my-5 px-8">
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Symbol */}
                                            <div className="symbol symbol-35px me-4">
                                                <span className="symbol-label bg-light-primary">
                                                    {/* begin::Svg Icon | path: icons/duotune/technology/teh008.svg */}
                                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M11 6.5C11 9 9 11 6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5ZM17.5 2C15 2 13 4 13 6.5C13 9 15 11 17.5 11C20 11 22 9 22 6.5C22 4 20 2 17.5 2ZM6.5 13C4 13 2 15 2 17.5C2 20 4 22 6.5 22C9 22 11 20 11 17.5C11 15 9 13 6.5 13ZM17.5 13C15 13 13 15 13 17.5C13 20 15 22 17.5 22C20 22 22 20 22 17.5C22 15 20 13 17.5 13Z" fill="black" />
                                                            <path d="M17.5 16C17.5 16 17.4 16 17.5 16L16.7 15.3C16.1 14.7 15.7 13.9 15.6 13.1C15.5 12.4 15.5 11.6 15.6 10.8C15.7 9.99999 16.1 9.19998 16.7 8.59998L17.4 7.90002H17.5C18.3 7.90002 19 7.20002 19 6.40002C19 5.60002 18.3 4.90002 17.5 4.90002C16.7 4.90002 16 5.60002 16 6.40002V6.5L15.3 7.20001C14.7 7.80001 13.9 8.19999 13.1 8.29999C12.4 8.39999 11.6 8.39999 10.8 8.29999C9.99999 8.19999 9.20001 7.80001 8.60001 7.20001L7.89999 6.5V6.40002C7.89999 5.60002 7.19999 4.90002 6.39999 4.90002C5.59999 4.90002 4.89999 5.60002 4.89999 6.40002C4.89999 7.20002 5.59999 7.90002 6.39999 7.90002H6.5L7.20001 8.59998C7.80001 9.19998 8.19999 9.99999 8.29999 10.8C8.39999 11.5 8.39999 12.3 8.29999 13.1C8.19999 13.9 7.80001 14.7 7.20001 15.3L6.5 16H6.39999C5.59999 16 4.89999 16.7 4.89999 17.5C4.89999 18.3 5.59999 19 6.39999 19C7.19999 19 7.89999 18.3 7.89999 17.5V17.4L8.60001 16.7C9.20001 16.1 9.99999 15.7 10.8 15.6C11.5 15.5 12.3 15.5 13.1 15.6C13.9 15.7 14.7 16.1 15.3 16.7L16 17.4V17.5C16 18.3 16.7 19 17.5 19C18.3 19 19 18.3 19 17.5C19 16.7 18.3 16 17.5 16Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/* end::Svg Icon */}
                                                </span>
                                            </div>
                                            {/* end::Symbol */}
                                            {/* begin::Title */}
                                            <div className="mb-0 me-2">
                                                <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Project Alice</a>
                                                <div className="text-gray-400 fs-7">Phase 1 development</div>
                                            </div>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">1 hr</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Symbol */}
                                            <div className="symbol symbol-35px me-4">
                                                <span className="symbol-label bg-light-danger">
                                                    {/* begin::Svg Icon | path: icons/duotune/general/gen044.svg */}
                                                    <span className="svg-icon svg-icon-2 svg-icon-danger">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="black" />
                                                            <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="black" />
                                                            <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/* end::Svg Icon */}
                                                </span>
                                            </div>
                                            {/* end::Symbol */}
                                            {/* begin::Title */}
                                            <div className="mb-0 me-2">
                                                <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">HR Confidential</a>
                                                <div className="text-gray-400 fs-7">Confidential staff documents</div>
                                            </div>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">2 hrs</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Symbol */}
                                            <div className="symbol symbol-35px me-4">
                                                <span className="symbol-label bg-light-warning">
                                                    {/* begin::Svg Icon | path: icons/duotune/finance/fin006.svg */}
                                                    <span className="svg-icon svg-icon-2 svg-icon-warning">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="black" />
                                                            <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/* end::Svg Icon */}
                                                </span>
                                            </div>
                                            {/* end::Symbol */}
                                            {/* begin::Title */}
                                            <div className="mb-0 me-2">
                                                <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Company HR</a>
                                                <div className="text-gray-400 fs-7">Corporeate staff profiles</div>
                                            </div>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">5 hrs</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Symbol */}
                                            <div className="symbol symbol-35px me-4">
                                                <span className="symbol-label bg-light-success">
                                                    {/* begin::Svg Icon | path: icons/duotune/files/fil023.svg */}
                                                    <span className="svg-icon svg-icon-2 svg-icon-success">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M5 15C3.3 15 2 13.7 2 12C2 10.3 3.3 9 5 9H5.10001C5.00001 8.7 5 8.3 5 8C5 5.2 7.2 3 10 3C11.9 3 13.5 4 14.3 5.5C14.8 5.2 15.4 5 16 5C17.7 5 19 6.3 19 8C19 8.4 18.9 8.7 18.8 9C18.9 9 18.9 9 19 9C20.7 9 22 10.3 22 12C22 13.7 20.7 15 19 15H5ZM5 12.6H13L9.7 9.29999C9.3 8.89999 8.7 8.89999 8.3 9.29999L5 12.6Z" fill="black" />
                                                            <path d="M17 17.4V12C17 11.4 16.6 11 16 11C15.4 11 15 11.4 15 12V17.4H17Z" fill="black" />
                                                            <path opacity="0.3" d="M12 17.4H20L16.7 20.7C16.3 21.1 15.7 21.1 15.3 20.7L12 17.4Z" fill="black" />
                                                            <path d="M8 12.6V18C8 18.6 8.4 19 9 19C9.6 19 10 18.6 10 18V12.6H8Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/* end::Svg Icon */}
                                                </span>
                                            </div>
                                            {/* end::Symbol */}
                                            {/* begin::Title */}
                                            <div className="mb-0 me-2">
                                                <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Project Redux</a>
                                                <div className="text-gray-400 fs-7">New frontend admin theme</div>
                                            </div>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">2 days</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Symbol */}
                                            <div className="symbol symbol-35px me-4">
                                                <span className="symbol-label bg-light-primary">
                                                    {/* begin::Svg Icon | path: icons/duotune/maps/map001.svg */}
                                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M6 22H4V3C4 2.4 4.4 2 5 2C5.6 2 6 2.4 6 3V22Z" fill="black" />
                                                            <path d="M18 14H4V4H18C18.8 4 19.2 4.9 18.7 5.5L16 9L18.8 12.5C19.3 13.1 18.8 14 18 14Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/* end::Svg Icon */}
                                                </span>
                                            </div>
                                            {/* end::Symbol */}
                                            {/* begin::Title */}
                                            <div className="mb-0 me-2">
                                                <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Project Breafing</a>
                                                <div className="text-gray-400 fs-7">Product launch status update</div>
                                            </div>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">21 Jan</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Symbol */}
                                            <div className="symbol symbol-35px me-4">
                                                <span className="symbol-label bg-light-info">
                                                    {/* begin::Svg Icon | path: icons/duotune/general/gen006.svg */}
                                                    <span className="svg-icon svg-icon-2 svg-icon-info">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path opacity="0.3" d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z" fill="black" />
                                                            <path d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/* end::Svg Icon */}
                                                </span>
                                            </div>
                                            {/* end::Symbol */}
                                            {/* begin::Title */}
                                            <div className="mb-0 me-2">
                                                <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Banner Assets</a>
                                                <div className="text-gray-400 fs-7">Collection of banner images</div>
                                            </div>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">21 Jan</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Symbol */}
                                            <div className="symbol symbol-35px me-4">
                                                <span className="symbol-label bg-light-warning">
                                                    {/* begin::Svg Icon | path: icons/duotune/art/art002.svg */}
                                                    <span className="svg-icon svg-icon-2 svg-icon-warning">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                            <path opacity="0.3" d="M8.9 21L7.19999 22.6999C6.79999 23.0999 6.2 23.0999 5.8 22.6999L4.1 21H8.9ZM4 16.0999L2.3 17.8C1.9 18.2 1.9 18.7999 2.3 19.1999L4 20.9V16.0999ZM19.3 9.1999L15.8 5.6999C15.4 5.2999 14.8 5.2999 14.4 5.6999L9 11.0999V21L19.3 10.6999C19.7 10.2999 19.7 9.5999 19.3 9.1999Z" fill="black" />
                                                            <path d="M21 15V20C21 20.6 20.6 21 20 21H11.8L18.8 14H20C20.6 14 21 14.4 21 15ZM10 21V4C10 3.4 9.6 3 9 3H4C3.4 3 3 3.4 3 4V21C3 21.6 3.4 22 4 22H9C9.6 22 10 21.6 10 21ZM7.5 18.5C7.5 19.1 7.1 19.5 6.5 19.5C5.9 19.5 5.5 19.1 5.5 18.5C5.5 17.9 5.9 17.5 6.5 17.5C7.1 17.5 7.5 17.9 7.5 18.5Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/* end::Svg Icon */}
                                                </span>
                                            </div>
                                            {/* end::Symbol */}
                                            {/* begin::Title */}
                                            <div className="mb-0 me-2">
                                                <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Icon Assets</a>
                                                <div className="text-gray-400 fs-7">Collection of SVG icons</div>
                                            </div>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">20 March</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                </div>
                                {/* end::Items */}
                                {/* begin::View more */}
                                <div className="py-3 text-center border-top">
                                    <a href="../dist/pages/profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
                                    {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                    <span className="svg-icon svg-icon-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                        </svg>
                                    </span>
                                    {/* end::Svg Icon */}</a>
                                </div>
                                {/* end::View more */}
                            </div>
                            {/* end::Tab panel */}
                            {/* begin::Tab panel */}
                            <div className="tab-pane fade show active" id="kt_topbar_notifications_2" role="tabpanel">
                                {/* begin::Wrapper */}
                                <div className="d-flex flex-column px-9">
                                    {/* begin::Section */}
                                    <div className="pt-10 pb-0">
                                        {/* begin::Title */}
                                        <h3 className="text-dark text-center fw-bolder">Get Pro Access</h3>
                                        {/* end::Title */}
                                        {/* begin::Text */}
                                        <div className="text-center text-gray-600 fw-bold pt-1">Outlines keep you honest. They stoping you from amazing poorly about drive</div>
                                        {/* end::Text */}
                                        {/* begin::Action */}
                                        <div className="text-center mt-5 mb-9">
                                            <a href="#" className="btn btn-sm btn-primary px-6" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade</a>
                                        </div>
                                        {/* end::Action */}
                                    </div>
                                    {/* end::Section */}
                                    {/* begin::Illustration */}
                                    <div className="text-center px-4">
                                        <img className="mw-100 mh-200px" alt="metronic" src="/assets/media/illustrations/sigma-1/6.png" />
                                    </div>
                                    {/* end::Illustration */}
                                </div>
                                {/* end::Wrapper */}
                            </div>
                            {/* end::Tab panel */}
                            {/* begin::Tab panel */}
                            <div className="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">
                                {/* begin::Items */}
                                <div className="scroll-y mh-325px my-5 px-8">
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center me-2">
                                            {/* begin::Code */}
                                            <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                            {/* end::Code */}
                                            {/* begin::Title */}
                                            <a href="#" className="text-gray-800 text-hover-primary fw-bold">New order</a>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">Just now</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center me-2">
                                            {/* begin::Code */}
                                            <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                            {/* end::Code */}
                                            {/* begin::Title */}
                                            <a href="#" className="text-gray-800 text-hover-primary fw-bold">New customer</a>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">2 hrs</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center me-2">
                                            {/* begin::Code */}
                                            <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                            {/* end::Code */}
                                            {/* begin::Title */}
                                            <a href="#" className="text-gray-800 text-hover-primary fw-bold">Payment process</a>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">5 hrs</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center me-2">
                                            {/* begin::Code */}
                                            <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                            {/* end::Code */}
                                            {/* begin::Title */}
                                            <a href="#" className="text-gray-800 text-hover-primary fw-bold">Search query</a>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">2 days</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center me-2">
                                            {/* begin::Code */}
                                            <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                            {/* end::Code */}
                                            {/* begin::Title */}
                                            <a href="#" className="text-gray-800 text-hover-primary fw-bold">API connection</a>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">1 week</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center me-2">
                                            {/* begin::Code */}
                                            <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                            {/* end::Code */}
                                            {/* begin::Title */}
                                            <a href="#" className="text-gray-800 text-hover-primary fw-bold">Database restore</a>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">Mar 5</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center me-2">
                                            {/* begin::Code */}
                                            <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                            {/* end::Code */}
                                            {/* begin::Title */}
                                            <a href="#" className="text-gray-800 text-hover-primary fw-bold">System update</a>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">May 15</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center me-2">
                                            {/* begin::Code */}
                                            <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                            {/* end::Code */}
                                            {/* begin::Title */}
                                            <a href="#" className="text-gray-800 text-hover-primary fw-bold">Server OS update</a>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">Apr 3</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center me-2">
                                            {/* begin::Code */}
                                            <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                            {/* end::Code */}
                                            {/* begin::Title */}
                                            <a href="#" className="text-gray-800 text-hover-primary fw-bold">API rollback</a>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">Jun 30</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center me-2">
                                            {/* begin::Code */}
                                            <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                            {/* end::Code */}
                                            {/* begin::Title */}
                                            <a href="#" className="text-gray-800 text-hover-primary fw-bold">Refund process</a>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">Jul 10</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center me-2">
                                            {/* begin::Code */}
                                            <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                            {/* end::Code */}
                                            {/* begin::Title */}
                                            <a href="#" className="text-gray-800 text-hover-primary fw-bold">Withdrawal process</a>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">Sep 10</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                    {/* begin::Item */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Section */}
                                        <div className="d-flex align-items-center me-2">
                                            {/* begin::Code */}
                                            <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                            {/* end::Code */}
                                            {/* begin::Title */}
                                            <a href="#" className="text-gray-800 text-hover-primary fw-bold">Mail tasks</a>
                                            {/* end::Title */}
                                        </div>
                                        {/* end::Section */}
                                        {/* begin::Label */}
                                        <span className="badge badge-light fs-8">Dec 10</span>
                                        {/* end::Label */}
                                    </div>
                                    {/* end::Item */}
                                </div>
                                {/* end::Items */}
                                {/* begin::View more */}
                                <div className="py-3 text-center border-top">
                                    <a href="../dist/pages/profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
                                    {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                    <span className="svg-icon svg-icon-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                        </svg>
                                    </span>
                                    {/* end::Svg Icon */}</a>
                                </div>
                                {/* end::View more */}
                            </div>
                            {/* end::Tab panel */}
                        </div>
                        {/* end::Tab content */}
                    </div>
                    {/* end::Menu */}
                    {/* end::Menu wrapper */}
                </div>
                {/* end::Notifications */}
                {/* begin::Activities */}
                <div className="d-flex align-items-center mb-3">
                    {/* begin::Drawer toggle */}
                    <div className="btn btn-icon btn-custom" data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="top-start" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-dismiss="click" title="Activity Logs" id="kt_activities_toggle">
                        {/* begin::Svg Icon | path: icons/duotune/general/gen032.svg */}
                        <span className="svg-icon svg-icon-2 svg-icon-lg-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect x="8" y="9" width="3" height="10" rx="1.5" fill="black" />
                                <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="black" />
                                <rect x="18" y="11" width="3" height="8" rx="1.5" fill="black" />
                                <rect x="3" y="13" width="3" height="6" rx="1.5" fill="black" />
                            </svg>
                        </span>
                        {/* end::Svg Icon */}
                    </div>
                    {/* end::drawer toggle */}
                </div>
                {/* end::Activities */}
                {/* begin::User */}
                <div className="d-flex align-items-center mb-10" id="kt_header_user_menu_toggle">
                    {/* begin::Menu wrapper */}
                    <div onClick={ toggleMenuPopUp } className="cursor-pointer symbol symbol-40px" data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="top-start" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-dismiss="click" title="User profile">
                        <img src="/assets/media/avatars/150-26.jpg" alt="image" />
                    </div>
                    <MenuPopup popup={ popup } />
                </div>
                {/* end::User */}
            </div>
            {/* end::Footer */}
        </div>
    )
}
