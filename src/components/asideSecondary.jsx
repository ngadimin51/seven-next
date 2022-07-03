import React, { useEffect } from 'react'
import AdminRouter from 'src/router/admin'
import SideMenu from 'src/components/sideMenu'

export default function AsideSecondary() {

    const [search, setSearch] = React.useState(null)

    function closeMenuAccordion() {
        const menuItem = document.querySelectorAll('.menu-item')
        if (menuItem) menuItem.forEach( x => {
            if ( x.classList.contains('here')) {
                x.classList.remove('here')
            }
        })
        const subMenuAccordion = document.querySelectorAll('.menu-sub-accordion')
        if (subMenuAccordion) subMenuAccordion.forEach( x => {
            if (x.classList.contains('show')) {
                x.classList.remove('show')
            }
        })
    }

    function handleSearch(e) {
        e.preventDefault()
        if ( search === null ) return
        console.log(search)
    }

    return (
        <div className='aside-secondary d-flex flex-row-fluid'>
            <div className="aside-workspace my-5 p-5" id="kt_aside_wordspace">
                <div className="d-flex h-100 flex-column">
                    {/* begin::Wrapper */}
                    <div className="flex-column-fluid hover-scroll-y" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_aside_wordspace" data-kt-scroll-dependencies="#kt_aside_secondary_footer" data-kt-scroll-offset="0px">
                        {/* begin::Tab content */}
                        <div className="tab-content">
                            {/* begin::Tab pane */}
                            <div className="tab-pane fade" id="kt_aside_nav_tab_projects" role="tabpanel">
                                {/* begin::Wrapper */}
                                <div className="m-0">
                                    {/* begin::Toolbar */}
                                    <div className="d-flex mb-10">
                                        {/* begin::Search */}
                                        <div id="kt_header_search" className="d-flex align-items-center w-lg-400px" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-menu-trigger="auto" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-start">
                                            {/* begin::Form */}
                                            <form data-kt-search-element="form" className="w-100 position-relative mb-5 mb-lg-0" autoComplete="off" value={ search } onSubmit={ handleSearch }>
                                                {/* begin::Hidden input(Added to disable form autocomplete) */}
                                                <input type="hidden" />
                                                {/* end::Hidden input */}
                                                {/* begin::Icon */}
                                                {/* begin::Svg Icon | path: icons/duotune/general/gen021.svg */}
                                                <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 translate-middle-y ms-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
                                                        <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
                                                    </svg>
                                                </span>
                                                {/* end::Svg Icon */}
                                                {/* end::Icon */}
                                                {/* begin::Input */}
                                                <input type="text" className="form-control form-control-solid ps-15" name="search" defaultValue="" placeholder="Search..." data-kt-search-element="input" onChange={ (e) => setSearch(e.target.value)} />
                                                {/* end::Input */}
                                                {/* begin::Spinner */}
                                                <span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
                                                    <span className="spinner-border h-15px w-15px align-middle text-gray-400"></span>
                                                </span>
                                                {/* end::Spinner */}
                                                {/* begin::Reset */}
                                                <span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4" data-kt-search-element="clear">
                                                    {/* begin::Svg Icon | path: icons/duotune/arrows/arr061.svg */}
                                                    <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
                                                            <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
                                                        </svg>
                                                    </span>
                                                    {/* end::Svg Icon */}
                                                </span>
                                                {/* end::Reset */}
                                            </form>
                                            {/* end::Form */}
                                        </div>
                                        {/* end::Search */}
                                    </div>
                                    {/* end::Toolbar */}
                                    {/* begin::Projects */}
                                    <div className="m-0">
                                        {/* begin::Heading */}
                                        <h1 className="text-gray-800 fw-bold mb-6 mx-5">Projects</h1>
                                        {/* end::Heading */}
                                        {/* begin::Items */}
                                        <div className="mb-10">
                                            {/* begin::Item */}
                                            <a href="../dist/pages/projects/project.html" className="custom-list d-flex align-items-center px-5 py-4">
                                                {/* begin::Symbol */}
                                                <div className="symbol symbol-40px me-5">
                                                    <span className="symbol-label">
                                                        <img src="/assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                                                    </span>
                                                </div>
                                                {/* end::Symbol */}
                                                {/* begin::Description */}
                                                <div className="d-flex flex-column flex-grow-1">
                                                    {/* begin::Title */}
                                                    <h5 className="custom-list-title fw-bold text-gray-800 mb-1">Briviba SaaS</h5>
                                                    {/* end::Title */}
                                                    {/* begin::Link */}
                                                    <span className="text-gray-400 fw-bold">By James</span>
                                                    {/* end::Link */}
                                                </div>
                                                {/* begin::Description */}
                                            </a>
                                            {/* end::Item */}
                                            {/* begin::Item */}
                                            <a href="../dist/pages/projects/project.html" className="custom-list d-flex align-items-center px-5 py-4">
                                                {/* begin::Symbol */}
                                                <div className="symbol symbol-40px me-5">
                                                    <span className="symbol-label">
                                                        <img src="/assets/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
                                                    </span>
                                                </div>
                                                {/* end::Symbol */}
                                                {/* begin::Description */}
                                                <div className="d-flex flex-column flex-grow-1">
                                                    {/* begin::Title */}
                                                    <h5 className="custom-list-title fw-bold text-gray-800 mb-1">Vine Quick Reports</h5>
                                                    {/* end::Title */}
                                                    {/* begin::Link */}
                                                    <span className="text-gray-400 fw-bold">By Andres</span>
                                                    {/* end::Link */}
                                                </div>
                                                {/* begin::Description */}
                                            </a>
                                            {/* end::Item */}
                                            {/* begin::Item */}
                                            <a href="../dist/pages/projects/project.html" className="custom-list d-flex align-items-center px-5 py-4">
                                                {/* begin::Symbol */}
                                                <div className="symbol symbol-40px me-5">
                                                    <span className="symbol-label">
                                                        <img src="/assets/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
                                                    </span>
                                                </div>
                                                {/* end::Symbol */}
                                                {/* begin::Description */}
                                                <div className="d-flex flex-column flex-grow-1">
                                                    {/* begin::Title */}
                                                    <h5 className="custom-list-title fw-bold text-gray-800 mb-1">KC Account CRM</h5>
                                                    {/* end::Title */}
                                                    {/* begin::Link */}
                                                    <span className="text-gray-400 fw-bold">By Keenthemes</span>
                                                    {/* end::Link */}
                                                </div>
                                                {/* begin::Description */}
                                            </a>
                                            {/* end::Item */}
                                            {/* begin::Item */}
                                            <a href="../dist/pages/projects/project.html" className="custom-list d-flex align-items-center px-5 py-4">
                                                {/* begin::Symbol */}
                                                <div className="symbol symbol-40px me-5">
                                                    <span className="symbol-label">
                                                        <img src="/assets/media/svg/brand-logos/beats-electronics.svg" className="h-50 align-self-center" alt="" />
                                                    </span>
                                                </div>
                                                {/* end::Symbol */}
                                                {/* begin::Description */}
                                                <div className="d-flex flex-column flex-grow-1">
                                                    {/* begin::Title */}
                                                    <h5 className="custom-list-title fw-bold text-gray-800 mb-1">Baloon SaaS</h5>
                                                    {/* end::Title */}
                                                    {/* begin::Link */}
                                                    <span className="text-gray-400 fw-bold">By SIA Team</span>
                                                    {/* end::Link */}
                                                </div>
                                                {/* begin::Description */}
                                            </a>
                                            {/* end::Item */}
                                            {/* begin::Item */}
                                            <a href="../dist/pages/projects/project.html" className="custom-list d-flex align-items-center px-5 py-4">
                                                {/* begin::Symbol */}
                                                <div className="symbol symbol-40px me-5">
                                                    <span className="symbol-label">
                                                        <img src="/assets/media/svg/brand-logos/rgb.svg" className="h-50 align-self-center" alt="" />
                                                    </span>
                                                </div>
                                                {/* end::Symbol */}
                                                {/* begin::Description */}
                                                <div className="d-flex flex-column flex-grow-1">
                                                    {/* begin::Title */}
                                                    <h5 className="custom-list-title fw-bold text-gray-800 mb-1">RGB Cloud System</h5>
                                                    {/* end::Title */}
                                                    {/* begin::Link */}
                                                    <span className="text-gray-400 fw-bold">By Andrei</span>
                                                    {/* end::Link */}
                                                </div>
                                                {/* begin::Description */}
                                            </a>
                                            {/* end::Item */}
                                            {/* begin::Item */}
                                            <a href="../dist/pages/projects/project.html" className="custom-list d-flex align-items-center px-5 py-4">
                                                {/* begin::Symbol */}
                                                <div className="symbol symbol-40px me-5">
                                                    <span className="symbol-label">
                                                        <img src="/assets/media/svg/brand-logos/disqus.svg" className="h-50 align-self-center" alt="" />
                                                    </span>
                                                </div>
                                                {/* end::Symbol */}
                                                {/* begin::Description */}
                                                <div className="d-flex flex-column flex-grow-1">
                                                    {/* begin::Title */}
                                                    <h5 className="custom-list-title fw-bold text-gray-800 mb-1">Disqus Forum</h5>
                                                    {/* end::Title */}
                                                    {/* begin::Link */}
                                                    <span className="text-gray-400 fw-bold">By Disqus Inc.</span>
                                                    {/* end::Link */}
                                                </div>
                                                {/* begin::Description */}
                                            </a>
                                            {/* end::Item */}
                                            {/* begin::Item */}
                                            <a href="../dist/pages/projects/project.html" className="custom-list d-flex align-items-center px-5 py-4">
                                                {/* begin::Symbol */}
                                                <div className="symbol symbol-40px me-5">
                                                    <span className="symbol-label">
                                                        <img src="/assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                                                    </span>
                                                </div>
                                                {/* end::Symbol */}
                                                {/* begin::Description */}
                                                <div className="d-flex flex-column flex-grow-1">
                                                    {/* begin::Title */}
                                                    <h5 className="custom-list-title fw-bold text-gray-800 mb-1">Proove Quick CRM</h5>
                                                    {/* end::Title */}
                                                    {/* begin::Link */}
                                                    <span className="text-gray-400 fw-bold">By Proove Limited</span>
                                                    {/* end::Link */}
                                                </div>
                                                {/* begin::Description */}
                                            </a>
                                            {/* end::Item */}
                                        </div>
                                        {/* end::Items */}
                                    </div>
                                    {/* end::Projects */}
                                </div>
                                {/* end::Wrapper */}
                            </div>
                            <div className="tab-pane fade active show" id="kt_aside_nav_tab_menu" role="tabpanel">
                                {/* begin::Menu */}
                                <div className="menu menu-column menu-fit menu-rounded menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0" id="kt_aside_menu" data-kt-menu="true">
                                    <div id="kt_aside_menu_wrapper" className="menu-fit">
                                        <SideMenu router={ AdminRouter } />
                                    </div>
                                </div>
                            </div>
                            {/* end::Tab pane */}
                        </div>
                        {/* end::Tab content */}
                    </div>
                    {/* end::Wrapper */}
                </div>
            </div>
        </div>
    )

}
