import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Menu({router}) {

    const pathName = useRouter().pathname
    const [accordion, setAccordion] = useState(false)

    function toggleAccordion(key) {
        accordion.key === key ? setAccordion(false) : setAccordion({key})
    }

    return (
        router.map( (props, key) => {
            if ( props.accordion ) {
                const array = props.accordion.map(x => x.href)
                const here = array.indexOf(pathName) >= 0
                return (
                    <div key={ key } data-kt-menu-trigger="click" onClick={ () => toggleAccordion(key) } className={`menu-item menu-accordion mb-1 ${accordion.key === key ? 'show' : ''} ${here ? 'here' : ''}`} >
                        <span className="menu-link">
                            <span className="menu-icon">
                                {/* begin::Svg Icon | path: icons/duotune/general/gen022.svg */}
                                <span className="svg-icon svg-icon-2">
                                    { props.svg }
                                </span>
                                {/* end::Svg Icon */}
                            </span>
                            <span className="menu-title">
                                { props.title }
                                { props.span ? (
                                    <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">{props.span}</span>
                                ) : null}
                            </span>
                            <span className="menu-arrow"></span>
                        </span>
                        <div className={`menu-sub menu-sub-accordion ${accordion.key === key ? 'show' : ''}`}>
                            {
                                props.accordion.map( (menu, i) => {
                                    return (
                                        <div key={ i } className="menu-item">
                                            <Link href={ menu.href }>
                                                <a className={`menu-link ${pathName === menu.href ? 'active' : ''}`}>
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">
                                                        { menu.title }
                                                        {menu.span ? (
                                                            <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">{menu.span}</span>
                                                        ) : null}
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            } else if (props.href) {
                return (
                    <div key={ key } className={`menu-item mb-1 ${props.href == pathName ? 'show' : ''}`} onClick={ () => toggleAccordion(key) }>
                        <Link href={ props.href }>
                            <a className="menu-link">
                                <span className="menu-icon">
                                    <span className="svg-icon svg-icon-2">
                                        { props.svg }
                                    </span>
                                    {/* end::Svg Icon */}
                                </span>
                                <span className="menu-title">
                                    { props.title }
                                    { props.span ? (
                                        <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">{props.span}</span>
                                    ) : null}
                                </span>
                            </a>
                        </Link>
                    </div>
                )
            } else {
                return (
                    <div key={ key } className={`menu-item ${props?.separator}`}>
                        <div className="menu-content pb-2">
                            <span className="menu-section text-muted text-uppercase fs-8 ls-1">
                                { props?.title }
                                { props.span ? (
                                    <span className="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1">{props.span}</span>
                                ) : null}
                            </span>
                        </div>
                    </div>
                )
            }
        })
    )
}
