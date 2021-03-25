import React from "react";

// reactstrap components
import {
	Badge,
	Card,
	CardHeader,
	CardFooter,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Media,
	Pagination,
	PaginationItem,
	PaginationLink,
	Progress,
	Table,
	Container,
	Row,
	UncontrolledTooltip,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import TitreHeader from "components/Headers/TitreHeader.js";

function Tables() {
	return (
		<>
			<TitreHeader />
			{/* Page content */}
			<Container className="mt--7" fluid>
				{/* Table */}
				<Row>
					<div className="col">
						<Card className="shadow">
							{/*<CardHeader className="border-0">
								<h3 className="mb-0">Mes Titres</h3>
							</CardHeader>*/}
							<Table className="align-items-center table-flush" responsive>
								<thead className="thead-light">
									<tr>
										<th scope="col" colspan="2">EAN</th>
										<th scope="col">Titre</th>
										<th scope="col">Maison</th>
										<th scope="col" align="right">Date de parution</th>
										<th scope="col">Format</th>
										<th scope="col" align="right">Ventes 2020</th>
										<th scope="col" align="right">Ventes depuis parution</th>
										<th scope="col" />
									</tr>
								</thead>
								<tbody>
									<tr>
										<th scope="row">
											<Media className="align-items-center">
												<a
													className=""
													href="article"
												>
													<img
														height="48"
														alt="..."
														src={require("assets/img/couverture/9782070146413.jpg")}
													/>
												</a>
											</Media>
										</th>
										<td>9782070146413</td>
										<td>CHECK-POINT</td>
										<td>BLANCHE</td>
										<td align="right">10/04/2015</td>
										<td>LIVRE</td>
										<td align="right">1 000</td>
										<td align="right">200 000</td>
										<td className="text-right">
											<UncontrolledDropdown>
												<DropdownToggle
													className="btn-icon-only text-light"
													href="#pablo"
													role="button"
													size="sm"
													color=""
													onClick={(e) => e.preventDefault()}
												>
													<i className="fas fa-ellipsis-v" />
												</DropdownToggle>
												<DropdownMenu className="dropdown-menu-arrow" right>
													<DropdownItem
														href="#pablo"
														onClick={(e) => e.preventDefault()}
													>
														Action
                          </DropdownItem>
													<DropdownItem
														href="#pablo"
														onClick={(e) => e.preventDefault()}
													>
														Another action
                          </DropdownItem>
													<DropdownItem
														href="#pablo"
														onClick={(e) => e.preventDefault()}
													>
														Something else here
                          </DropdownItem>
												</DropdownMenu>
											</UncontrolledDropdown>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<Media className="align-items-center">
												<a
													className=""
													href="#pablo"
													onClick={(e) => e.preventDefault()}
												>
													<img
														height="48"
														alt="..."
														src={require("assets/img/couverture/9782070455379.jpg")}
													/>
												</a>
											</Media>
										</th>
										<td>9782070455379</td>
										<td>Immortelle randonnée - Compostelle malgré moi</td>
										<td>FOLIO</td>
										<td align="right">02/10/2014</td>
										<td>LIVRE</td>
										<td align="right">8 000</td>
										<td align="right">180 000</td>
										<td className="text-right">
											<UncontrolledDropdown>
												<DropdownToggle
													className="btn-icon-only text-light"
													href="#pablo"
													role="button"
													size="sm"
													color=""
													onClick={(e) => e.preventDefault()}
												>
													<i className="fas fa-ellipsis-v" />
												</DropdownToggle>
												<DropdownMenu className="dropdown-menu-arrow" right>
													<DropdownItem
														href="#pablo"
														onClick={(e) => e.preventDefault()}
													>
														Action
                          </DropdownItem>
													<DropdownItem
														href="#pablo"
														onClick={(e) => e.preventDefault()}
													>
														Another action
                          </DropdownItem>
													<DropdownItem
														href="#pablo"
														onClick={(e) => e.preventDefault()}
													>
														Something else here
                          </DropdownItem>
												</DropdownMenu>
											</UncontrolledDropdown>
										</td>
									</tr>
									<tr>
										<th scope="row">
											<Media className="align-items-center">
												<a
													className=""
													href="#pablo"
													onClick={(e) => e.preventDefault()}
												>
													<img
														height="48"
														alt="..."
														src={require("assets/img/couverture/9782081420250.jpg")}
													/>
												</a>
											</Media>
										</th>
										<td>9782081420250</td>
										<td>Les trois femmes du consul</td>
										<td>FLAMMARION</td>
										<td align="right">09/10/2019</td>
										<td>LIVRE</td>
										<td align="right">5 000</td>
										<td align="right">100 000</td>
										<td className="text-right">
											<UncontrolledDropdown>
												<DropdownToggle
													className="btn-icon-only text-light"
													href="#pablo"
													role="button"
													size="sm"
													color=""
													onClick={(e) => e.preventDefault()}
												>
													<i className="fas fa-ellipsis-v" />
												</DropdownToggle>
												<DropdownMenu className="dropdown-menu-arrow" right>
													<DropdownItem
														href="#pablo"
														onClick={(e) => e.preventDefault()}
													>
														Action
                          </DropdownItem>
													<DropdownItem
														href="#pablo"
														onClick={(e) => e.preventDefault()}
													>
														Another action
                          </DropdownItem>
													<DropdownItem
														href="#pablo"
														onClick={(e) => e.preventDefault()}
													>
														Something else here
                          </DropdownItem>
												</DropdownMenu>
											</UncontrolledDropdown>
										</td>
									</tr>
									<tr>
										<th scope="row">
										</th>
										<td>9782290005569</td>
										<td>Le parfum d'Adam</td>
										<td>J'AI LU</td>
										<td align="right">10/01/2007</td>
										<td>LIVRE</td>
										<td align="right">500</td>
										<td align="right">10 000</td>
										<td className="text-right">
											<UncontrolledDropdown>
												<DropdownToggle
													className="btn-icon-only text-light"
													href="#pablo"
													role="button"
													size="sm"
													color=""
													onClick={(e) => e.preventDefault()}
												>
													<i className="fas fa-ellipsis-v" />
												</DropdownToggle>
												<DropdownMenu className="dropdown-menu-arrow" right>
													<DropdownItem
														href="#pablo"
														onClick={(e) => e.preventDefault()}
													>
														Action
                          </DropdownItem>
													<DropdownItem
														href="#pablo"
														onClick={(e) => e.preventDefault()}
													>
														Another action
                          </DropdownItem>
													<DropdownItem
														href="#pablo"
														onClick={(e) => e.preventDefault()}
													>
														Something else here
                          </DropdownItem>
												</DropdownMenu>
											</UncontrolledDropdown>
										</td>
									</tr>
								</tbody>
							</Table>
							<CardFooter className="py-4">
								<nav aria-label="...">
									<Pagination
										className="pagination justify-content-end mb-0"
										listClassName="justify-content-end mb-0"
									>
										<PaginationItem className="disabled">
											<PaginationLink
												href="#pablo"
												onClick={(e) => e.preventDefault()}
												tabIndex="-1"
											>
												<i className="fas fa-angle-left" />
												<span className="sr-only">Previous</span>
											</PaginationLink>
										</PaginationItem>
										<PaginationItem className="active">
											<PaginationLink
												href="#pablo"
												onClick={(e) => e.preventDefault()}
											>
												1
                      </PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink
												href="#pablo"
												onClick={(e) => e.preventDefault()}
											>
												2 <span className="sr-only">(current)</span>
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink
												href="#pablo"
												onClick={(e) => e.preventDefault()}
											>
												3
                      </PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink
												href="#pablo"
												onClick={(e) => e.preventDefault()}
											>
												<i className="fas fa-angle-right" />
												<span className="sr-only">Next</span>
											</PaginationLink>
										</PaginationItem>
									</Pagination>
								</nav>
							</CardFooter>
						</Card>
					</div>
				</Row>
			</Container>
		</>
	);
}

Tables.layout = Admin;

export default Tables;
