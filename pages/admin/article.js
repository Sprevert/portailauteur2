import React from "react";
import classnames from "classnames";

import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
	Badge,
	Nav,
	NavItem,
	NavLink,
	Card,
	Col,
	CardHeader,
	CardBody,
	Container,
	Row,
	UncontrolledTooltip,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import Header from "components/Headers/TitreHeader.js";
import {
	chartOptions,
	parseOptions,
	chartExample1,
	chartExample2,
} from "variables/charts.js";

function Documents() {
	const [activeNav, setActiveNav] = React.useState(1);
	const [chartExample1Data] = React.useState("data1");
	if (window.Chart) {
		parseOptions(Chart, chartOptions());
	}

	const toggleNavs = (e, index) => {
		e.preventDefault();
		setActiveNav(index);
		setChartExample1Data("data" + index);
	};
	return (
		<>
			<Header />
			{/* Page content */}
			<Container className="mt--7" fluid>
				{/* Table */}
				<Row>
					<Col className="order-xl-2 mb-5 mb-xl-0" xl="6">
						<Card className="card-article shadow">
							<Row className="justify-content-center">
								<Col className="order-lg-2" lg="3">
									<div className="card-article-image">
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											<img
												alt="..."
												className=""
												src={require("assets/img/couverture/9782070146413.jpg")}
											/>
										</a>
									</div>
								</Col>
							</Row>
							<CardBody className="pt-0 pt-md-6">
								<div className="text-center">
									<Row>
										<Col>
											<span class="h6 text-muted">EAN</span>
											<h3>9782070146413</h3>
										</Col>
										<Col>
											<span class="h6 text-muted">Titre</span>
											<h3>Check-Point</h3>
										</Col>
									</Row>
									<Row>
										<Col>
											<span class="h6 text-muted">Maison d'édition</span>
											<h4>GALLIMARD</h4>
										</Col>
										
										<Col>
											<span class="h6 text-muted">Collection</span>
											<h4>BLANCHE</h4>
										</Col>
									</Row>
									<Row>
										<Col>
											<span class="h6 text-muted">Date 1ere MEV</span>
											<h4>10 Avril 2015</h4>
										</Col>
										<Col>
											<span class="h6 text-muted">Prix public TTC</span>
											<h4>21,00 €</h4>
										</Col>
									</Row>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col className="order-xl-2 mb-5 mb-xl-0" xl="6">
						<Card className="card-profile bg-secondary  shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<div className="col">
										<h3 className="text-uppercase ls-1 mb-1">Mes Ventes</h3>
									</div>
									<div className="col">
										<Nav className="justify-content-end" pills>
											<NavItem>
												<NavLink
													className={classnames("py-2 px-3", {
														active: activeNav === 1,
													})}
													href="#m"
													onClick={(e) => toggleNavs(e, 1)}
												>
													<span className="d-none d-md-block">Papiers</span>
													<span className="d-md-none" title="Papiers">P</span>
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													className={classnames("py-2 px-3", {
														active: activeNav === 2,
													})}
													data-toggle="tab"
													href="#w"
													onClick={(e) => toggleNavs(e, 2)}
												>
													<span className="d-none d-md-block">Numériques</span>
													<span className="d-md-none" title="Numériques">N</span>
												</NavLink>
											</NavItem>
										</Nav>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								<h3 className="heading-small text-muted mb-0">Ventes cumulées</h3>
								<div className="text-center">
									<Row>
										<Col>
											<span class="h6">depuis décembre 2020</span>
											<h3>1520</h3>
										</Col>
										<Col>
											<span class="h6">depuis parution</span>
											<h3>5020</h3>
										</Col>
									</Row>
									<div className="chart">
										<Bar
											data={chartExample1[chartExample1Data]}
											options={chartExample1.options}
											getDatasetAtEvent={(e) => console.log(e)}
										/>
									</div>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

Documents.layout = Admin;

export default Documents;
