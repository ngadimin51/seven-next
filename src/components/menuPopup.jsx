import React from 'react'

export default function MenuPopup({ popup }) {
  return (
    <div className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px ${popup}`} data-kt-menu="true" style={{zIndex: "111", position: "absolute", inset: "auto auto 0px 0px", margin: "0px", transform: "translate3d(15px, -70px, 0px)"}} data-popper-placement="top-start">
        {/* begin::Menu item */}
        <div className="menu-item px-3">
            <div className="menu-content d-flex align-items-center px-3">
            {/* begin::Avatar */}
            <div className="symbol symbol-50px me-5">
                <img alt="Logo" src="/assets/media/avatars/150-26.jpg" />
            </div>
            {/* end::Avatar */}
            {/* begin::Username */}
            <div className="d-flex flex-column">
                <div className="fw-bolder d-flex align-items-center fs-5">Max Smith
                <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span></div>
                <a href="#" className="fw-bold text-muted text-hover-primary fs-7">max@kt.com</a>
            </div>
            {/* end::Username */}
            </div>
        </div>
        {/* end::Menu item */}
        {/* begin::Menu separator */}
        <div className="separator my-2"></div>
        {/* end::Menu separator */}
        {/* begin::Menu item */}
        <div className="menu-item px-5">
            <a href="../dist/account/overview.html" className="menu-link px-5">My Profile</a>
        </div>
        {/* end::Menu item */}
        {/* begin::Menu item */}
        <div className="menu-item px-5">
            <a href="#" className="menu-link px-5">
            <span className="menu-text">My Audit Logs</span>
            <span className="menu-badge">
                <span className="badge badge-light-danger badge-circle fw-bolder fs-7">3</span>
            </span>
            </a>
        </div>
        {/* end::Menu item */}
        {/* begin::Menu item */}
        <div className="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
            <a href="#" className="menu-link px-5">
            <span className="menu-title">My Subscription</span>
            <span className="menu-arrow"></span>
            </a>
            {/* begin::Menu sub */}
            <div className="menu-sub menu-sub-dropdown w-175px py-4">
            {/* begin::Menu item */}
            <div className="menu-item px-3">
                <a href="#" className="menu-link px-5">Referrals</a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className="menu-item px-3">
                <a href="#" className="menu-link px-5">Billing</a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className="menu-item px-3">
                <a href="#" className="menu-link px-5">Payments</a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className="menu-item px-3">
                <a href="#" className="menu-link d-flex flex-stack px-5">Statements
                <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="" data-bs-original-title="View your statements" aria-label="View your statements"></i></a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className="separator my-2"></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className="menu-item px-3">
                <div className="menu-content px-3">
                <label className="form-check form-switch form-check-custom form-check-solid">
                    <input className="form-check-input w-30px h-20px" type="checkbox" value="1" defaultChecked="checked" name="notifications"/>
                    <span className="form-check-label text-muted fs-7">Notifications</span>
                </label>
                </div>
            </div>
            {/* end::Menu item */}
            </div>
            {/* end::Menu sub */}
        </div>
        {/* end::Menu item */}
        {/* begin::Menu item */}
        <div className="menu-item px-5">
            <a href="#" className="menu-link px-5">My Activities</a>
        </div>
        {/* end::Menu item */}
        {/* begin::Menu separator */}
        <div className="separator my-2"></div>
        {/* end::Menu separator */}
        {/* begin::Menu item */}
        <div className="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
            <a href="#" className="menu-link px-5">
                <span className="menu-title position-relative">Language
                    <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English
                        <img className="w-15px h-15px rounded-1 ms-2" src="/assets/media/flags/united-states.svg" alt="" />
                    </span>
                </span>
            </a>
            {/* begin::Menu sub */}
            <div className="menu-sub menu-sub-dropdown w-175px py-4">
            {/* begin::Menu item */}
            <div className="menu-item px-3">
                <a href="#" className="menu-link d-flex px-5 active">
                    <span className="symbol symbol-20px me-4">
                        <img className="rounded-1" src="/assets/media/flags/united-states.svg" alt="" />
                    </span>English
                </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className="menu-item px-3">
                <a href="#" className="menu-link d-flex px-5">
                <span className="symbol symbol-20px me-4">
                <img className="rounded-1" src="/assets/media/flags/spain.svg" alt=""/>
                </span>Spanish</a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className="menu-item px-3">
                <a href="#" className="menu-link d-flex px-5">
                <span className="symbol symbol-20px me-4">
                <img className="rounded-1" src="/assets/media/flags/germany.svg" alt=""/>
                </span>German</a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className="menu-item px-3">
                <a href="#" className="menu-link d-flex px-5">
                <span className="symbol symbol-20px me-4">
                <img className="rounded-1" src="/assets/media/flags/japan.svg" alt=""/>
                </span>Japanese</a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className="menu-item px-3">
                <a href="#" className="menu-link d-flex px-5">
                <span className="symbol symbol-20px me-4">
                <img className="rounded-1" src="/assets/media/flags/france.svg" alt=""/>
                </span>French</a>
            </div>
            {/* end::Menu item */}
            </div>
            {/* end::Menu sub */}
        </div>
        {/* end::Menu item */}
        {/* begin::Menu item */}
        <div className="menu-item px-5 my-1">
            <a href="#" className="menu-link px-5">Account Settings</a>
        </div>
        {/* end::Menu item */}
        {/* begin::Menu item */}
        <div className="menu-item px-5">
            <a href="#" className="menu-link px-5">Sign Out</a>
        </div>
        {/* end::Menu item */}
        {/* begin::Menu separator */}
        <div className="separator my-2"></div>
        {/* end::Menu separator */}
        {/* begin::Menu item */}
        <div className="menu-item px-5">
            <div className="menu-content px-5">
            <label className="form-check form-switch form-check-custom form-check-solid pulse pulse-success" htmlFor="kt_user_menu_dark_mode_toggle">
                <input className="form-check-input w-30px h-20px" type="checkbox" value="1" name="mode" id="kt_user_menu_dark_mode_toggle" data-kt-url="../dist/index.html" />
                <span className="pulse-ring ms-n1"></span>
                <span className="form-check-label text-gray-600 fs-7">Dark Mode</span>
            </label>
            </div>
        </div>
        {/* end::Menu item */}
    </div>
  )
}
