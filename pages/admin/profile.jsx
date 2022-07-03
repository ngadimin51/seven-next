import React from 'react'
import Admin from "src/layout/admin"

export default function Profile() {
  return (
    <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
						{/* begin::Container */}
						<div className="container-xxl" id="kt_content_container">
							{/* begin::Navbar */}
							<div className="card mb-5 mb-xl-10">
								<div className="card-body pt-9 pb-0">
									{/* begin::Details */}
									<div className="d-flex flex-wrap flex-sm-nowrap mb-3">
										{/* begin: Pic */}
										<div className="me-7 mb-4">
											<div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
												<img src="/assets/media/avatars/150-2.jpg" alt="image" />
												<div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
											</div>
										</div>
										{/* end::Pic */}
										{/* begin::Info */}
										<div className="flex-grow-1">
											{/* begin::Title */}
											<div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
												{/* begin::User */}
												<div className="d-flex flex-column">
													{/* begin::Name */}
													<div className="d-flex align-items-center mb-2">
														<a href="#" className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1">Max Smith</a>
														<a href="#">
															{/* begin::Svg Icon | path: icons/duotune/general/gen026.svg */}
															<span className="svg-icon svg-icon-1 svg-icon-primary">
																<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																	<path d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z" fill="#00A3FF" />
																	<path className="permanent" d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z" fill="white" />
																</svg>
															</span>
															{/* end::Svg Icon */}
														</a>
														<a href="#" className="btn btn-sm btn-light-success fw-bolder ms-2 fs-8 py-1 px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade to Pro</a>
													</div>
													{/* end::Name */}
													{/* begin::Info */}
													<div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
														<a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
														{/* begin::Svg Icon | path: icons/duotune/communication/com006.svg */}
														<span className="svg-icon svg-icon-4 me-1">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path opacity="0.3" d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z" fill="black" />
																<path d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z" fill="black" />
															</svg>
														</span>
														{/* end::Svg Icon */}Developer</a>
														<a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
														{/* begin::Svg Icon | path: icons/duotune/general/gen018.svg */}
														<span className="svg-icon svg-icon-4 me-1">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black" />
																<path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="black" />
															</svg>
														</span>
														{/* end::Svg Icon */}SF, Bay Area</a>
														<a href="#" className="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
														{/* begin::Svg Icon | path: icons/duotune/communication/com011.svg */}
														<span className="svg-icon svg-icon-4 me-1">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="black" />
																<path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="black" />
															</svg>
														</span>
														{/* end::Svg Icon */}max@kt.com</a>
													</div>
													{/* end::Info */}
												</div>
												{/* end::User */}
												{/* begin::Actions */}
												<div className="d-flex my-2">
													<a href="#" className="btn btn-light me-3" id="kt_user_follow_button">
														{/* begin::Svg Icon | path: icons/duotune/arrows/arr012.svg */}
														<span className="svg-icon svg-icon-3 d-none">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path opacity="0.3" d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="black" />
																<path d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z" fill="black" />
															</svg>
														</span>
														{/* end::Svg Icon */}
														{/* begin::Indicator */}
														<span className="indicator-label">Follow</span>
														<span className="indicator-progress">Please wait...
														<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
														{/* end::Indicator */}
													</a>
													<a href="#" className="btn btn-primary me-3" data-kt-drawer-show="true" data-kt-drawer-target="#kt_drawer_chat">Send Message</a>
													{/* begin::Menu */}
													<div className="me-0">
														<button className="btn btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
															<i className="bi bi-three-dots fs-3"></i>
														</button>
														{/* begin::Menu 3 */}
														<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true">
															{/* begin::Heading */}
															<div className="menu-item px-3">
																<div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
															</div>
															{/* end::Heading */}
															{/* begin::Menu item */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">Create Invoice</a>
															</div>
															{/* end::Menu item */}
															{/* begin::Menu item */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link flex-stack px-3">Create Payment
																<i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i></a>
															</div>
															{/* end::Menu item */}
															{/* begin::Menu item */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">Generate Bill</a>
															</div>
															{/* end::Menu item */}
															{/* begin::Menu item */}
															<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
																<a href="#" className="menu-link px-3">
																	<span className="menu-title">Subscription</span>
																	<span className="menu-arrow"></span>
																</a>
																{/* begin::Menu sub */}
																<div className="menu-sub menu-sub-dropdown w-175px py-4">
																	{/* begin::Menu item */}
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">Plans</a>
																	</div>
																	{/* end::Menu item */}
																	{/* begin::Menu item */}
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">Billing</a>
																	</div>
																	{/* end::Menu item */}
																	{/* begin::Menu item */}
																	<div className="menu-item px-3">
																		<a href="#" className="menu-link px-3">Statements</a>
																	</div>
																	{/* end::Menu item */}
																	{/* begin::Menu separator */}
																	<div className="separator my-2"></div>
																	{/* end::Menu separator */}
																	{/* begin::Menu item */}
																	<div className="menu-item px-3">
																		<div className="menu-content px-3">
																			{/* begin::Switch */}
																			<label className="form-check form-switch form-check-custom form-check-solid">
																				{/* begin::Input */}
																				<input className="form-check-input w-30px h-20px" type="checkbox" value="1" defaultChecked="checked" name="notifications" />
																				{/* end::Input */}
																				{/* end::Label */}
																				<span className="form-check-label text-muted fs-6">Recuring</span>
																				{/* end::Label */}
																			</label>
																			{/* end::Switch */}
																		</div>
																	</div>
																	{/* end::Menu item */}
																</div>
																{/* end::Menu sub */}
															</div>
															{/* end::Menu item */}
															{/* begin::Menu item */}
															<div className="menu-item px-3 my-1">
																<a href="#" className="menu-link px-3">Settings</a>
															</div>
															{/* end::Menu item */}
														</div>
														{/* end::Menu 3 */}
													</div>
													{/* end::Menu */}
												</div>
												{/* end::Actions */}
											</div>
											{/* end::Title */}
											{/* begin::Stats */}
											<div className="d-flex flex-wrap flex-stack">
												{/* begin::Wrapper */}
												<div className="d-flex flex-column flex-grow-1 pe-8">
													{/* begin::Stats */}
													<div className="d-flex flex-wrap">
														{/* begin::Stat */}
														<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
															{/* begin::Number */}
															<div className="d-flex align-items-center">
																{/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
																<span className="svg-icon svg-icon-3 svg-icon-success me-2">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																		<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="black" />
																		<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black" />
																	</svg>
																</span>
																{/* end::Svg Icon */}
																<div className="fs-2 fw-bolder" data-kt-countup="true" data-kt-countup-value="4500" data-kt-countup-prefix="$">0</div>
															</div>
															{/* end::Number */}
															{/* begin::Label */}
															<div className="fw-bold fs-6 text-gray-400">Earnings</div>
															{/* end::Label */}
														</div>
														{/* end::Stat */}
														{/* begin::Stat */}
														<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
															{/* begin::Number */}
															<div className="d-flex align-items-center">
																{/* begin::Svg Icon | path: icons/duotune/arrows/arr065.svg */}
																<span className="svg-icon svg-icon-3 svg-icon-danger me-2">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																		<rect opacity="0.5" x="11" y="18" width="13" height="2" rx="1" transform="rotate(-90 11 18)" fill="black" />
																		<path d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z" fill="black" />
																	</svg>
																</span>
																{/* end::Svg Icon */}
																<div className="fs-2 fw-bolder" data-kt-countup="true" data-kt-countup-value="75">0</div>
															</div>
															{/* end::Number */}
															{/* begin::Label */}
															<div className="fw-bold fs-6 text-gray-400">Projects</div>
															{/* end::Label */}
														</div>
														{/* end::Stat */}
														{/* begin::Stat */}
														<div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
															{/* begin::Number */}
															<div className="d-flex align-items-center">
																{/* begin::Svg Icon | path: icons/duotune/arrows/arr066.svg */}
																<span className="svg-icon svg-icon-3 svg-icon-success me-2">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																		<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="black" />
																		<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black" />
																	</svg>
																</span>
																{/* end::Svg Icon */}
																<div className="fs-2 fw-bolder" data-kt-countup="true" data-kt-countup-value="60" data-kt-countup-prefix="%">0</div>
															</div>
															{/* end::Number */}
															{/* begin::Label */}
															<div className="fw-bold fs-6 text-gray-400">Success Rate</div>
															{/* end::Label */}
														</div>
														{/* end::Stat */}
													</div>
													{/* end::Stats */}
												</div>
												{/* end::Wrapper */}
												{/* begin::Progress */}
												<div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
													<div className="d-flex justify-content-between w-100 mt-auto mb-2">
														<span className="fw-bold fs-6 text-gray-400">Profile Compleation</span>
														<span className="fw-bolder fs-6">50%</span>
													</div>
													<div className="h-5px mx-3 w-100 bg-light mb-3">
														<div className="bg-success rounded h-5px" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
													</div>
												</div>
												{/* end::Progress */}
											</div>
											{/* end::Stats */}
										</div>
										{/* end::Info */}
									</div>
									{/* end::Details */}
									{/* begin::Navs */}
									<div className="d-flex overflow-auto h-55px">
										<ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap">
											{/* begin::Nav item */}
											<li className="nav-item">
												<a className="nav-link text-active-primary me-6 active" href="../dist/account/overview.html">Overview</a>
											</li>
											{/* end::Nav item */}
											{/* begin::Nav item */}
											<li className="nav-item">
												<a className="nav-link text-active-primary me-6" href="#">Settings</a>
											</li>
											{/* end::Nav item */}
											{/* begin::Nav item */}
											<li className="nav-item">
												<a className="nav-link text-active-primary me-6" href="#">Security</a>
											</li>
											{/* end::Nav item */}
											{/* begin::Nav item */}
											<li className="nav-item">
												<a className="nav-link text-active-primary me-6" href="#">Audit Logs</a>
											</li>
											{/* end::Nav item */}
											{/* begin::Nav item */}
											<li className="nav-item">
												<a className="nav-link text-active-primary me-6" href="#">Activity</a>
											</li>
											{/* end::Nav item */}
										</ul>
									</div>
									{/* begin::Navs */}
								</div>
							</div>
							{/* end::Navbar */}
							{/* begin::details View */}
							<div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
								{/* begin::Card header */}
								<div className="card-header cursor-pointer">
									{/* begin::Card title */}
									<div className="card-title m-0">
										<h3 className="fw-bolder m-0">Profile Details</h3>
									</div>
									{/* end::Card title */}
									{/* begin::Action */}
									<a href="#" className="btn btn-primary align-self-center">Edit Profile</a>
									{/* end::Action */}
								</div>
								{/* begin::Card header */}
								{/* begin::Card body */}
								<div className="card-body p-9">
									{/* begin::Row */}
									<div className="row mb-7">
										{/* begin::Label */}
										<label className="col-lg-4 fw-bold text-muted">Full Name</label>
										{/* end::Label */}
										{/* begin::Col */}
										<div className="col-lg-8">
											<span className="fw-bolder fs-6 text-gray-800">Max Smith</span>
										</div>
										{/* end::Col */}
									</div>
									{/* end::Row */}
									{/* begin::Input group */}
									<div className="row mb-7">
										{/* begin::Label */}
										<label className="col-lg-4 fw-bold text-muted">Company</label>
										{/* end::Label */}
										{/* begin::Col */}
										<div className="col-lg-8 fv-row">
											<span className="fw-bold fs-6 text-gray-800">Keenthemes</span>
										</div>
										{/* end::Col */}
									</div>
									{/* end::Input group */}
									{/* begin::Input group */}
									<div className="row mb-7">
										{/* begin::Label */}
										<label className="col-lg-4 fw-bold text-muted">Contact Phone
										<i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Phone number must be active"></i></label>
										{/* end::Label */}
										{/* begin::Col */}
										<div className="col-lg-8 d-flex align-items-center">
											<span className="fw-bolder fs-6 me-2 text-gray-800">044 3276 454 935</span>
											<span className="badge badge-success">Verified</span>
										</div>
										{/* end::Col */}
									</div>
									{/* end::Input group */}
									{/* begin::Input group */}
									<div className="row mb-7">
										{/* begin::Label */}
										<label className="col-lg-4 fw-bold text-muted">Company Site</label>
										{/* end::Label */}
										{/* begin::Col */}
										<div className="col-lg-8">
											<a href="#" className="fw-bold fs-6 text-gray-800 text-hover-primary">keenthemes.com</a>
										</div>
										{/* end::Col */}
									</div>
									{/* end::Input group */}
									{/* begin::Input group */}
									<div className="row mb-7">
										{/* begin::Label */}
										<label className="col-lg-4 fw-bold text-muted">Country
										<i className="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Country of origination"></i></label>
										{/* end::Label */}
										{/* begin::Col */}
										<div className="col-lg-8">
											<span className="fw-bolder fs-6 text-gray-800">Germany</span>
										</div>
										{/* end::Col */}
									</div>
									{/* end::Input group */}
									{/* begin::Input group */}
									<div className="row mb-7">
										{/* begin::Label */}
										<label className="col-lg-4 fw-bold text-muted">Communication</label>
										{/* end::Label */}
										{/* begin::Col */}
										<div className="col-lg-8">
											<span className="fw-bolder fs-6 text-gray-800">Email, Phone</span>
										</div>
										{/* end::Col */}
									</div>
									{/* end::Input group */}
									{/* begin::Input group */}
									<div className="row mb-10">
										{/* begin::Label */}
										<label className="col-lg-4 fw-bold text-muted">Allow Changes</label>
										{/* begin::Label */}
										{/* begin::Label */}
										<div className="col-lg-8">
											<span className="fw-bold fs-6">Yes</span>
										</div>
										{/* begin::Label */}
									</div>
									{/* end::Input group */}
									{/* begin::Notice */}
									<div className="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
										{/* begin::Icon */}
										{/* begin::Svg Icon | path: icons/duotune/general/gen044.svg */}
										<span className="svg-icon svg-icon-2tx svg-icon-warning me-4">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="black" />
												<rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="black" />
												<rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="black" />
											</svg>
										</span>
										{/* end::Svg Icon */}
										{/* end::Icon */}
										{/* begin::Wrapper */}
										<div className="d-flex flex-stack flex-grow-1">
											{/* begin::Content */}
											<div className="fw-bold">
												<h4 className="text-gray-900 fw-bolder">We need your attention!</h4>
												<div className="fs-6 text-gray-700">Your payment was declined. To start using tools, please
												<a className="fw-bolder" href="#">Add Payment Method</a>.</div>
											</div>
											{/* end::Content */}
										</div>
										{/* end::Wrapper */}
									</div>
									{/* end::Notice */}
								</div>
								{/* end::Card body */}
							</div>
							{/* end::details View */}
							{/* begin::Row */}
							<div className="row gy-10 gx-xl-10">
								{/* begin::Col */}
								<div className="col-xl-6">
									{/* begin::Mixed Widget 2 */}
									<div className="card card-xxl-stretch mb-5 mb-xl-10">
										{/* begin::Header */}
										<div className="card-header border-0 bg-primary py-5">
											<h3 className="card-title fw-bolder text-white">Sales Progress</h3>
											<div className="card-toolbar">
												{/* begin::Menu */}
												<button type="button" className="btn btn-sm btn-icon btn-color-white btn-active-white btn-active-color- border-0 me-n3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
													{/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
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
													{/* end::Svg Icon */}
												</button>
												{/* begin::Menu 3 */}
												<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true">
													{/* begin::Heading */}
													<div className="menu-item px-3">
														<div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
													</div>
													{/* end::Heading */}
													{/* begin::Menu item */}
													<div className="menu-item px-3">
														<a href="#" className="menu-link px-3">Create Invoice</a>
													</div>
													{/* end::Menu item */}
													{/* begin::Menu item */}
													<div className="menu-item px-3">
														<a href="#" className="menu-link flex-stack px-3">Create Payment
														<i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i></a>
													</div>
													{/* end::Menu item */}
													{/* begin::Menu item */}
													<div className="menu-item px-3">
														<a href="#" className="menu-link px-3">Generate Bill</a>
													</div>
													{/* end::Menu item */}
													{/* begin::Menu item */}
													<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
														<a href="#" className="menu-link px-3">
															<span className="menu-title">Subscription</span>
															<span className="menu-arrow"></span>
														</a>
														{/* begin::Menu sub */}
														<div className="menu-sub menu-sub-dropdown w-175px py-4">
															{/* begin::Menu item */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">Plans</a>
															</div>
															{/* end::Menu item */}
															{/* begin::Menu item */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">Billing</a>
															</div>
															{/* end::Menu item */}
															{/* begin::Menu item */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">Statements</a>
															</div>
															{/* end::Menu item */}
															{/* begin::Menu separator */}
															<div className="separator my-2"></div>
															{/* end::Menu separator */}
															{/* begin::Menu item */}
															<div className="menu-item px-3">
																<div className="menu-content px-3">
																	{/* begin::Switch */}
																	<label className="form-check form-switch form-check-custom form-check-solid">
																		{/* begin::Input */}
																		<input className="form-check-input w-30px h-20px" type="checkbox" value="1" defaultChecked="checked" name="notifications" />
																		{/* end::Input */}
																		{/* end::Label */}
																		<span className="form-check-label text-muted fs-6">Recuring</span>
																		{/* end::Label */}
																	</label>
																	{/* end::Switch */}
																</div>
															</div>
															{/* end::Menu item */}
														</div>
														{/* end::Menu sub */}
													</div>
													{/* end::Menu item */}
													{/* begin::Menu item */}
													<div className="menu-item px-3 my-1">
														<a href="#" className="menu-link px-3">Settings</a>
													</div>
													{/* end::Menu item */}
												</div>
												{/* end::Menu 3 */}
												{/* end::Menu */}
											</div>
										</div>
										{/* end::Header */}
										{/* begin::Body */}
										<div className="card-body p-0">
											{/* begin::Chart */}
											<div className="charts-widget-2-chart card-rounded-bottom bg-primary" data-kt-color="primary" style={{height: "225px"}}></div>
											{/* end::Chart */}
											{/* begin::Stats */}
											<div className="card-rounded bg-body mt-n10 position-relative card-px py-15">
												{/* begin::Row */}
												<div className="row g-0 mb-7">
													{/* begin::Col */}
													<div className="col mx-5">
														<div className="fs-6 text-gray-400">Avarage Sale</div>
														<div className="fs-2 fw-bolder text-gray-800">$650</div>
													</div>
													{/* end::Col */}
													{/* begin::Col */}
													<div className="col mx-5">
														<div className="fs-6 text-gray-400">Comissions</div>
														<div className="fs-2 fw-bolder text-gray-800">$29,500</div>
													</div>
													{/* end::Col */}
												</div>
												{/* end::Row */}
												{/* begin::Row */}
												<div className="row g-0">
													{/* begin::Col */}
													<div className="col mx-5">
														<div className="fs-6 text-gray-400">Revenue</div>
														<div className="fs-2 fw-bolder text-gray-800">$55,000</div>
													</div>
													{/* end::Col */}
													{/* begin::Col */}
													<div className="col mx-5">
														<div className="fs-6 text-gray-400">Expenses</div>
														<div className="fs-2 fw-bolder text-gray-800">$1,130,600</div>
													</div>
													{/* end::Col */}
												</div>
												{/* end::Row */}
											</div>
											{/* end::Stats */}
										</div>
										{/* end::Body */}
									</div>
									{/* end::Mixed Widget 2 */}
								</div>
								{/* end::Col */}
								{/* begin::Col */}
								<div className="col-xl-6">
									{/* begin::Tables Widget 1 */}
									<div className="card card-xxl-stretch mb-5 mb-xl-10">
										{/* begin::Header */}
										<div className="card-header border-0 pt-5">
											<h3 className="card-title align-items-start flex-column">
												<span className="card-label fw-bolder fs-3 mb-1">Latest Arrivals</span>
												<span className="text-muted mt-1 fw-bold fs-7">More than 100 new products</span>
											</h3>
											<div className="card-toolbar">
												{/* begin::Menu */}
												<button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
													{/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
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
													{/* end::Svg Icon */}
												</button>
												{/* begin::Menu 1 */}
												<div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_613a48bae4e41">
													{/* begin::Header */}
													<div className="px-7 py-5">
														<div className="fs-5 text-dark fw-bolder">Filter Options</div>
													</div>
													{/* end::Header */}
													{/* begin::Menu separator */}
													<div className="separator border-gray-200"></div>
													{/* end::Menu separator */}
													{/* begin::Form */}
													<div className="px-7 py-5">
														{/* begin::Input group */}
														<div className="mb-10">
															{/* begin::Label */}
															<label className="form-label fw-bold">Status:</label>
															{/* end::Label */}
															{/* begin::Input */}
															<div>
																<select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_613a48bae4e41" data-allow-clear="true">
																	<option></option>
																	<option value="1">Approved</option>
																	<option value="2">Pending</option>
																	<option value="2">In Process</option>
																	<option value="2">Rejected</option>
																</select>
															</div>
															{/* end::Input */}
														</div>
														{/* end::Input group */}
														{/* begin::Input group */}
														<div className="mb-10">
															{/* begin::Label */}
															<label className="form-label fw-bold">Member Type:</label>
															{/* end::Label */}
															{/* begin::Options */}
															<div className="d-flex">
																{/* begin::Options */}
																<label className="form-check form-check-sm form-check-custom form-check-solid me-5">
																	<input className="form-check-input" type="checkbox" value="1" />
																	<span className="form-check-label">Author</span>
																</label>
																{/* end::Options */}
																{/* begin::Options */}
																<label className="form-check form-check-sm form-check-custom form-check-solid">
																	<input className="form-check-input" type="checkbox" value="2" defaultChecked="checked" />
																	<span className="form-check-label">Customer</span>
																</label>
																{/* end::Options */}
															</div>
															{/* end::Options */}
														</div>
														{/* end::Input group */}
														{/* begin::Input group */}
														<div className="mb-10">
															{/* begin::Label */}
															<label className="form-label fw-bold">Notifications:</label>
															{/* end::Label */}
															{/* begin::Switch */}
															<div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
																<input className="form-check-input" type="checkbox" value="" name="notifications" defaultChecked="checked" />
																<label className="form-check-label">Enabled</label>
															</div>
															{/* end::Switch */}
														</div>
														{/* end::Input group */}
														{/* begin::Actions */}
														<div className="d-flex justify-content-end">
															<button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
															<button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
														</div>
														{/* end::Actions */}
													</div>
													{/* end::Form */}
												</div>
												{/* end::Menu 1 */}
												{/* end::Menu */}
											</div>
										</div>
										{/* end::Header */}
										{/* begin::Body */}
										<div className="card-body py-3">
											{/* begin::Table container */}
											<div className="table-responsive">
												{/* begin::Table */}
												<table className="table align-middle gs-0 gy-5">
													{/* begin::Table head */}
													<thead>
														<tr>
															<th className="p-0 w-50px"></th>
															<th className="p-0 min-w-150px"></th>
															<th className="p-0 min-w-150px"></th>
															<th className="p-0 min-w-125px"></th>
															<th className="p-0 min-w-40px"></th>
														</tr>
													</thead>
													{/* end::Table head */}
													{/* begin::Table body */}
													<tbody>
														<tr>
															<td>
																<div className="symbol symbol-50px me-2">
																	<span className="symbol-label">
																		<img src="/assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
																	</span>
																</div>
															</td>
															<td>
																<a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Top Authors</a>
																<span className="text-muted fw-bold d-block fs-7">Successful Fellas</span>
															</td>
															<td className="text-end">
																<span className="badge badge-light-danger fw-bold me-1">Angular</span>
																<span className="badge badge-light-info fw-bold me-1">PHP</span>
															</td>
															<td className="text-end">
																<span className="text-muted fw-bold">4600 Users</span>
															</td>
															<td className="text-end">
																<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
																	{/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
																	<span className="svg-icon svg-icon-2">
																		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																			<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																			<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																		</svg>
																	</span>
																	{/* end::Svg Icon */}
																</a>
															</td>
														</tr>
														<tr>
															<td>
																<div className="symbol symbol-50px me-2">
																	<span className="symbol-label">
																		<img src="/assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
																	</span>
																</div>
															</td>
															<td>
																<a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Popular Authors</a>
																<span className="text-muted fw-bold d-block fs-7">Most Successful</span>
															</td>
															<td className="text-end">
																<span className="badge badge-light-danger fw-bold me-1">HTML</span>
																<span className="badge badge-light-info fw-bold me-1">CSS</span>
															</td>
															<td className="text-end">
																<span className="text-muted fw-bold">7200 Users</span>
															</td>
															<td className="text-end">
																<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
																	{/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
																	<span className="svg-icon svg-icon-2">
																		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																			<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																			<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																		</svg>
																	</span>
																	{/* end::Svg Icon */}
																</a>
															</td>
														</tr>
														<tr>
															<td>
																<div className="symbol symbol-50px me-2">
																	<span className="symbol-label">
																		<img src="/assets/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
																	</span>
																</div>
															</td>
															<td>
																<a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">New Users</a>
																<span className="text-muted fw-bold d-block fs-7">Awesome Users</span>
															</td>
															<td className="text-end">
																<span className="badge badge-light-danger fw-bold me-1">React</span>
																<span className="badge badge-light-info fw-bold me-1">SASS</span>
															</td>
															<td className="text-end">
																<span className="text-muted fw-bold">890 Users</span>
															</td>
															<td className="text-end">
																<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
																	{/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
																	<span className="svg-icon svg-icon-2">
																		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																			<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																			<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																		</svg>
																	</span>
																	{/* end::Svg Icon */}
																</a>
															</td>
														</tr>
														<tr>
															<td>
																<div className="symbol symbol-50px me-2">
																	<span className="symbol-label">
																		<img src="/assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
																	</span>
																</div>
															</td>
															<td>
																<a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Active Customers</a>
																<span className="text-muted fw-bold d-block fs-7">Best Customers</span>
															</td>
															<td className="text-end">
																<span className="badge badge-light-danger fw-bold me-1">Java</span>
																<span className="badge badge-light-info fw-bold me-1">PHP</span>
															</td>
															<td className="text-end">
																<span className="text-muted fw-bold">6370 Users</span>
															</td>
															<td className="text-end">
																<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
																	{/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
																	<span className="svg-icon svg-icon-2">
																		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																			<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																			<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																		</svg>
																	</span>
																	{/* end::Svg Icon */}
																</a>
															</td>
														</tr>
														<tr>
															<td>
																<div className="symbol symbol-50px me-2">
																	<span className="symbol-label">
																		<img src="/assets/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
																	</span>
																</div>
															</td>
															<td>
																<a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Bestseller Theme</a>
																<span className="text-muted fw-bold d-block fs-7">Amazing Templates</span>
															</td>
															<td className="text-end">
																<span className="badge badge-light-danger fw-bold me-1">Python</span>
																<span className="badge badge-light-info fw-bold me-1">MySQL</span>
															</td>
															<td className="text-end">
																<span className="text-muted fw-bold">354 Users</span>
															</td>
															<td className="text-end">
																<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
																	{/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
																	<span className="svg-icon svg-icon-2">
																		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																			<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																			<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																		</svg>
																	</span>
																	{/* end::Svg Icon */}
																</a>
															</td>
														</tr>
													</tbody>
													{/* end::Table body */}
												</table>
												{/* end::Table */}
											</div>
											{/* end::Table container */}
										</div>
										{/* end::Body */}
									</div>
									{/* end::Tables Widget 1 */}
								</div>
								{/* end::Col */}
							</div>
							{/* end::Row */}
							{/* begin::Row */}
							<div className="row gy-10 gx-xl-10">
								{/* begin::Col */}
								<div className="col-xl-6">
									{/* begin::List Widget 2 */}
									<div className="card card-xxl-stretch mb-5 mb-xl-10">
										{/* begin::Header */}
										<div className="card-header border-0">
											<h3 className="card-title fw-bolder text-dark">Notifications</h3>
											<div className="card-toolbar">
												{/* begin::Menu */}
												<button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
													{/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
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
													{/* end::Svg Icon */}
												</button>
												{/* begin::Menu 3 */}
												<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true">
													{/* begin::Heading */}
													<div className="menu-item px-3">
														<div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
													</div>
													{/* end::Heading */}
													{/* begin::Menu item */}
													<div className="menu-item px-3">
														<a href="#" className="menu-link px-3">Create Invoice</a>
													</div>
													{/* end::Menu item */}
													{/* begin::Menu item */}
													<div className="menu-item px-3">
														<a href="#" className="menu-link flex-stack px-3">Create Payment
														<i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i></a>
													</div>
													{/* end::Menu item */}
													{/* begin::Menu item */}
													<div className="menu-item px-3">
														<a href="#" className="menu-link px-3">Generate Bill</a>
													</div>
													{/* end::Menu item */}
													{/* begin::Menu item */}
													<div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
														<a href="#" className="menu-link px-3">
															<span className="menu-title">Subscription</span>
															<span className="menu-arrow"></span>
														</a>
														{/* begin::Menu sub */}
														<div className="menu-sub menu-sub-dropdown w-175px py-4">
															{/* begin::Menu item */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">Plans</a>
															</div>
															{/* end::Menu item */}
															{/* begin::Menu item */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">Billing</a>
															</div>
															{/* end::Menu item */}
															{/* begin::Menu item */}
															<div className="menu-item px-3">
																<a href="#" className="menu-link px-3">Statements</a>
															</div>
															{/* end::Menu item */}
															{/* begin::Menu separator */}
															<div className="separator my-2"></div>
															{/* end::Menu separator */}
															{/* begin::Menu item */}
															<div className="menu-item px-3">
																<div className="menu-content px-3">
																	{/* begin::Switch */}
																	<label className="form-check form-switch form-check-custom form-check-solid">
																		{/* begin::Input */}
																		<input className="form-check-input w-30px h-20px" type="checkbox" value="1" defaultChecked="checked" name="notifications" />
																		{/* end::Input */}
																		{/* end::Label */}
																		<span className="form-check-label text-muted fs-6">Recuring</span>
																		{/* end::Label */}
																	</label>
																	{/* end::Switch */}
																</div>
															</div>
															{/* end::Menu item */}
														</div>
														{/* end::Menu sub */}
													</div>
													{/* end::Menu item */}
													{/* begin::Menu item */}
													<div className="menu-item px-3 my-1">
														<a href="#" className="menu-link px-3">Settings</a>
													</div>
													{/* end::Menu item */}
												</div>
												{/* end::Menu 3 */}
												{/* end::Menu */}
											</div>
										</div>
										{/* end::Header */}
										{/* begin::Body */}
										<div className="card-body pt-0">
											{/* begin::Item */}
											<div className="d-flex align-items-center bg-light-warning rounded p-5 mb-7">
												{/* begin::Icon */}
												<span className="svg-icon svg-icon-warning me-5">
													{/* begin::Svg Icon | path: icons/duotune/abstract/abs027.svg */}
													<span className="svg-icon svg-icon-1">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															<path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="black" />
															<path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="black" />
														</svg>
													</span>
													{/* end::Svg Icon */}
												</span>
												{/* end::Icon */}
												{/* begin::Title */}
												<div className="flex-grow-1 me-2">
													<a href="#" className="fw-bolder text-gray-800 text-hover-primary fs-6">Group lunch celebration</a>
													<span className="text-muted fw-bold d-block">Due in 2 Days</span>
												</div>
												{/* end::Title */}
												{/* begin::Lable */}
												<span className="fw-bolder text-warning py-1">+28%</span>
												{/* end::Lable */}
											</div>
											{/* end::Item */}
											{/* begin::Item */}
											<div className="d-flex align-items-center bg-light-success rounded p-5 mb-7">
												{/* begin::Icon */}
												<span className="svg-icon svg-icon-success me-5">
													{/* begin::Svg Icon | path: icons/duotune/abstract/abs027.svg */}
													<span className="svg-icon svg-icon-1">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															<path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="black" />
															<path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="black" />
														</svg>
													</span>
													{/* end::Svg Icon */}
												</span>
												{/* end::Icon */}
												{/* begin::Title */}
												<div className="flex-grow-1 me-2">
													<a href="#" className="fw-bolder text-gray-800 text-hover-primary fs-6">Navigation optimization</a>
													<span className="text-muted fw-bold d-block">Due in 2 Days</span>
												</div>
												{/* end::Title */}
												{/* begin::Lable */}
												<span className="fw-bolder text-success py-1">+50%</span>
												{/* end::Lable */}
											</div>
											{/* end::Item */}
											{/* begin::Item */}
											<div className="d-flex align-items-center bg-light-danger rounded p-5 mb-7">
												{/* begin::Icon */}
												<span className="svg-icon svg-icon-danger me-5">
													{/* begin::Svg Icon | path: icons/duotune/abstract/abs027.svg */}
													<span className="svg-icon svg-icon-1">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															<path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="black" />
															<path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="black" />
														</svg>
													</span>
													{/* end::Svg Icon */}
												</span>
												{/* end::Icon */}
												{/* begin::Title */}
												<div className="flex-grow-1 me-2">
													<a href="#" className="fw-bolder text-gray-800 text-hover-primary fs-6">Rebrand strategy planning</a>
													<span className="text-muted fw-bold d-block">Due in 5 Days</span>
												</div>
												{/* end::Title */}
												{/* begin::Lable */}
												<span className="fw-bolder text-danger py-1">-27%</span>
												{/* end::Lable */}
											</div>
											{/* end::Item */}
											{/* begin::Item */}
											<div className="d-flex align-items-center bg-light-info rounded p-5">
												{/* begin::Icon */}
												<span className="svg-icon svg-icon-info me-5">
													{/* begin::Svg Icon | path: icons/duotune/abstract/abs027.svg */}
													<span className="svg-icon svg-icon-1">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															<path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="black" />
															<path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="black" />
														</svg>
													</span>
													{/* end::Svg Icon */}
												</span>
												{/* end::Icon */}
												{/* begin::Title */}
												<div className="flex-grow-1 me-2">
													<a href="#" className="fw-bolder text-gray-800 text-hover-primary fs-6">Product goals strategy</a>
													<span className="text-muted fw-bold d-block">Due in 7 Days</span>
												</div>
												{/* end::Title */}
												{/* begin::Lable */}
												<span className="fw-bolder text-info py-1">+8%</span>
												{/* end::Lable */}
											</div>
											{/* end::Item */}
										</div>
										{/* end::Body */}
									</div>
									{/* end::List Widget 2 */}
								</div>
								{/* end::Col */}
								{/* begin::Col */}
								<div className="col-xl-6">
									{/* begin::Tables Widget 2 */}
									<div className="card card-xxl-stretch mb-5 mb-xl-10">
										{/* begin::Header */}
										<div className="card-header border-0 pt-5">
											<h3 className="card-title align-items-start flex-column">
												<span className="card-label fw-bolder fs-3 mb-1">Latest Products</span>
												<span className="text-muted mt-1 fw-bold fs-7">More than 400 new products</span>
											</h3>
											<div className="card-toolbar">
												<ul className="nav">
													<li className="nav-item">
														<a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bolder px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_5_tab_1">Month</a>
													</li>
													<li className="nav-item">
														<a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_5_tab_2">Week</a>
													</li>
													<li className="nav-item">
														<a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bolder px-4" data-bs-toggle="tab" href="#kt_table_widget_5_tab_3">Day</a>
													</li>
												</ul>
											</div>
										</div>
										{/* end::Header */}
										{/* begin::Body */}
										<div className="card-body py-3">
											<div className="tab-content">
												{/* begin::Tap pane */}
												<div className="tab-pane fade show active" id="kt_table_widget_5_tab_1">
													{/* begin::Table container */}
													<div className="table-responsive">
														{/* begin::Table */}
														<table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
															{/* begin::Table head */}
															<thead>
																<tr className="border-0">
																	<th className="p-0 w-50px"></th>
																	<th className="p-0 min-w-150px"></th>
																	<th className="p-0 min-w-140px"></th>
																	<th className="p-0 min-w-110px"></th>
																	<th className="p-0 min-w-50px"></th>
																</tr>
															</thead>
															{/* end::Table head */}
															{/* begin::Table body */}
															<tbody>
																<tr>
																	<td>
																		<div className="symbol symbol-45px me-2">
																			<span className="symbol-label">
																				<img src="/assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
																			</span>
																		</div>
																	</td>
																	<td>
																		<a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Brad Simmons</a>
																		<span className="text-muted fw-bold d-block">Movie Creator</span>
																	</td>
																	<td className="text-end text-muted fw-bold">React, HTML</td>
																	<td className="text-end">
																		<span className="badge badge-light-success">Approved</span>
																	</td>
																	<td className="text-end">
																		<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
																			{/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
																			<span className="svg-icon svg-icon-2">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																					<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																					<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																				</svg>
																			</span>
																			{/* end::Svg Icon */}
																		</a>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div className="symbol symbol-45px me-2">
																			<span className="symbol-label">
																				<img src="/assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
																			</span>
																		</div>
																	</td>
																	<td>
																		<a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Popular Authors</a>
																		<span className="text-muted fw-bold d-block">Most Successful</span>
																	</td>
																	<td className="text-end text-muted fw-bold">Python, MySQL</td>
																	<td className="text-end">
																		<span className="badge badge-light-warning">In Progress</span>
																	</td>
																	<td className="text-end">
																		<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
																			{/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
																			<span className="svg-icon svg-icon-2">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																					<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																					<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																				</svg>
																			</span>
																			{/* end::Svg Icon */}
																		</a>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div className="symbol symbol-45px me-2">
																			<span className="symbol-label">
																				<img src="/assets/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
																			</span>
																		</div>
																	</td>
																	<td>
																		<a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">New Users</a>
																		<span className="text-muted fw-bold d-block">Awesome Users</span>
																	</td>
																	<td className="text-end text-muted fw-bold">Laravel,Metronic</td>
																	<td className="text-end">
																		<span className="badge badge-light-primary">Success</span>
																	</td>
																	<td className="text-end">
																		<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
																			{/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
																			<span className="svg-icon svg-icon-2">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																					<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																					<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																				</svg>
																			</span>
																			{/* end::Svg Icon */}
																		</a>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div className="symbol symbol-45px me-2">
																			<span className="symbol-label">
																				<img src="/assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
																			</span>
																		</div>
																	</td>
																	<td>
																		<a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Active Customers</a>
																		<span className="text-muted fw-bold d-block">Movie Creator</span>
																	</td>
																	<td className="text-end text-muted fw-bold">AngularJS, C#</td>
																	<td className="text-end">
																		<span className="badge badge-light-danger">Rejected</span>
																	</td>
																	<td className="text-end">
																		<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
																			{/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
																			<span className="svg-icon svg-icon-2">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																					<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																					<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																				</svg>
																			</span>
																			{/* end::Svg Icon */}
																		</a>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div className="symbol symbol-45px me-2">
																			<span className="symbol-label">
																				<img src="/assets/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
																			</span>
																		</div>
																	</td>
																	<td>
																		<a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Bestseller Theme</a>
																		<span className="text-muted fw-bold d-block">Best Customers</span>
																	</td>
																	<td className="text-end text-muted fw-bold">ReactJS, Ruby</td>
																	<td className="text-end">
																		<span className="badge badge-light-warning">In Progress</span>
																	</td>
																	<td className="text-end">
																		<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
																			{/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
																			<span className="svg-icon svg-icon-2">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																					<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																					<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																				</svg>
																			</span>
																			{/* end::Svg Icon */}
																		</a>
																	</td>
																</tr>
															</tbody>
															{/* end::Table body */}
														</table>
													</div>
													{/* end::Table */}
												</div>
												{/* end::Tap pane */}
												{/* begin::Tap pane */}
												<div className="tab-pane fade" id="kt_table_widget_5_tab_2">
													{/* begin::Table container */}
													<div className="table-responsive">
														{/* begin::Table */}
														<table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
															{/* begin::Table head */}
															<thead>
																<tr className="border-0">
																	<th className="p-0 w-50px"></th>
																	<th className="p-0 min-w-150px"></th>
																	<th className="p-0 min-w-140px"></th>
																	<th className="p-0 min-w-110px"></th>
																	<th className="p-0 min-w-50px"></th>
																</tr>
															</thead>
															{/* end::Table head */}
															{/* begin::Table body */}
															<tbody>
																<tr>
																	<td>
																		<div className="symbol symbol-45px me-2">
																			<span className="symbol-label">
																				<img src="/assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
																			</span>
																		</div>
																	</td>
																	<td>
																		<a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Brad Simmons</a>
																		<span className="text-muted fw-bold d-block">Movie Creator</span>
																	</td>
																	<td className="text-end text-muted fw-bold">React, HTML</td>
																	<td className="text-end">
																		<span className="badge badge-light-success">Approved</span>
																	</td>
																	<td className="text-end">
																		<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
																			{/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
																			<span className="svg-icon svg-icon-2">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																					<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																					<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																				</svg>
																			</span>
																			{/* end::Svg Icon */}
																		</a>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div className="symbol symbol-45px me-2">
																			<span className="symbol-label">
																				<img src="/assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
																			</span>
																		</div>
																	</td>
																	<td>
																		<a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Popular Authors</a>
																		<span className="text-muted fw-bold d-block">Most Successful</span>
																	</td>
																	<td className="text-end text-muted fw-bold">Python, MySQL</td>
																	<td className="text-end">
																		<span className="badge badge-light-warning">In Progress</span>
																	</td>
																	<td className="text-end">
																		<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
																			{/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
																			<span className="svg-icon svg-icon-2">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																					<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																					<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																				</svg>
																			</span>
																			{/* end::Svg Icon */}
																		</a>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div className="symbol symbol-45px me-2">
																			<span className="symbol-label">
																				<img src="/assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
																			</span>
																		</div>
																	</td>
																	<td>
																		<a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Active Customers</a>
																		<span className="text-muted fw-bold d-block">Movie Creator</span>
																	</td>
																	<td className="text-end text-muted fw-bold">AngularJS, C#</td>
																	<td className="text-end">
																		<span className="badge badge-light-danger">Rejected</span>
																	</td>
																	<td className="text-end">
																		<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
																			{/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
																			<span className="svg-icon svg-icon-2">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																					<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																					<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																				</svg>
																			</span>
																			{/* end::Svg Icon */}
																		</a>
																	</td>
																</tr>
															</tbody>
															{/* end::Table body */}
														</table>
													</div>
													{/* end::Table */}
												</div>
												{/* end::Tap pane */}
												{/* begin::Tap pane */}
												<div className="tab-pane fade" id="kt_table_widget_5_tab_3">
													{/* begin::Table container */}
													<div className="table-responsive">
														{/* begin::Table */}
														<table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
															{/* begin::Table head */}
															<thead>
																<tr className="border-0">
																	<th className="p-0 w-50px"></th>
																	<th className="p-0 min-w-150px"></th>
																	<th className="p-0 min-w-140px"></th>
																	<th className="p-0 min-w-110px"></th>
																	<th className="p-0 min-w-50px"></th>
																</tr>
															</thead>
															{/* end::Table head */}
															{/* begin::Table body */}
															<tbody>
																<tr>
																	<td>
																		<div className="symbol symbol-45px me-2">
																			<span className="symbol-label">
																				<img src="/assets/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
																			</span>
																		</div>
																	</td>
																	<td>
																		<a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Bestseller Theme</a>
																		<span className="text-muted fw-bold d-block">Best Customers</span>
																	</td>
																	<td className="text-end text-muted fw-bold">ReactJS, Ruby</td>
																	<td className="text-end">
																		<span className="badge badge-light-warning">In Progress</span>
																	</td>
																	<td className="text-end">
																		<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
																			{/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
																			<span className="svg-icon svg-icon-2">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																					<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																					<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																				</svg>
																			</span>
																			{/* end::Svg Icon */}
																		</a>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div className="symbol symbol-45px me-2">
																			<span className="symbol-label">
																				<img src="/assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
																			</span>
																		</div>
																	</td>
																	<td>
																		<a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Active Customers</a>
																		<span className="text-muted fw-bold d-block">Movie Creator</span>
																	</td>
																	<td className="text-end text-muted fw-bold">AngularJS, C#</td>
																	<td className="text-end">
																		<span className="badge badge-light-danger">Rejected</span>
																	</td>
																	<td className="text-end">
																		<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
																			{/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
																			<span className="svg-icon svg-icon-2">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																					<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																					<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																				</svg>
																			</span>
																			{/* end::Svg Icon */}
																		</a>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div className="symbol symbol-45px me-2">
																			<span className="symbol-label">
																				<img src="/assets/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
																			</span>
																		</div>
																	</td>
																	<td>
																		<a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">New Users</a>
																		<span className="text-muted fw-bold d-block">Awesome Users</span>
																	</td>
																	<td className="text-end text-muted fw-bold">Laravel,Metronic</td>
																	<td className="text-end">
																		<span className="badge badge-light-primary">Success</span>
																	</td>
																	<td className="text-end">
																		<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
																			{/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
																			<span className="svg-icon svg-icon-2">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																					<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																					<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																				</svg>
																			</span>
																			{/* end::Svg Icon */}
																		</a>
																	</td>
																</tr>
																<tr>
																	<td>
																		<div className="symbol symbol-45px me-2">
																			<span className="symbol-label">
																				<img src="/assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
																			</span>
																		</div>
																	</td>
																	<td>
																		<a href="#" className="text-dark fw-bolder text-hover-primary mb-1 fs-6">Popular Authors</a>
																		<span className="text-muted fw-bold d-block">Most Successful</span>
																	</td>
																	<td className="text-end text-muted fw-bold">Python, MySQL</td>
																	<td className="text-end">
																		<span className="badge badge-light-warning">In Progress</span>
																	</td>
																	<td className="text-end">
																		<a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
																			{/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
																			<span className="svg-icon svg-icon-2">
																				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																					<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																					<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																				</svg>
																			</span>
																			{/* end::Svg Icon */}
																		</a>
																	</td>
																</tr>
															</tbody>
															{/* end::Table body */}
														</table>
													</div>
													{/* end::Table */}
												</div>
												{/* end::Tap pane */}
											</div>
										</div>
										{/* end::Body */}
									</div>
									{/* end::Tables Widget 2 */}
								</div>
								{/* end::Col */}
							</div>
							{/* end::Row */}
						</div>
						{/* end::Container */}
					</div>
  )
}

Profile.layout = Admin