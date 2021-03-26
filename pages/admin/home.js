import React from "react";
import Link from 'next/link'
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	NavItem,
	NavLink,
	Nav,
	Progress,
	Table,
	Container,
	Row,
	Col,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import {
	chartOptions,
	parseOptions,
	chartExample1
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Dashboard = (props) => {
	const [activeNav, setActiveNav] = React.useState(1);
	const [chartExample1Data, setChartExample1Data] = React.useState("data1");

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
				<Row>
					<Col className="mb-5" xl="6">
						<Card className="shadow">
							<CardHeader className="bg-transparent">
								<Row className="align-items-center">
									<div className="col">
										<Link href="titres"><h6 className="text-uppercase ls-1 mb-1">Mes Titres</h6></Link>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								<Table className="align-items-center table-flush" responsive>
									<thead className="thead-light">
										<tr>
											<th scope="col" colspan="2">Titre</th>
											<th scope="col">Maison</th>
											<th scope="col">Ventes 2020</th>
										</tr>
									</thead>
									<tbody>
										<Link href="article">
											<tr>
												<td><img height="60" src={require("assets/img/couverture/9782070146413.jpg")} /></td>
												<td>Check-Point</td>
												<td>BLANCHE</td>
												<td>1000</td>
											</tr>
										</Link>
										<Link href="article">
											<tr>
												<td><img height="60" src={require("assets/img/couverture/9782070455379.jpg")} /></td>
												<td>Immortelle randonnée - Compostelle malgré moi</td>
												<td>FOLIO</td>
												<td>8000</td>
											</tr>
										</Link>
									</tbody>
								</Table>
							</CardBody>
						</Card>
					</Col>
					<Col className="mb-5 " xl="6">
						<Card className="shadow">
							<CardHeader className="bg-transparent">
								<Row className="align-items-center">
									<div className="col">
										<h6 className="text-uppercase ls-1 mb-1">Ventes</h6>
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
													<span className="d-none d-md-block">Mois</span>
													<span className="d-md-none">M</span>
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
													<span className="d-none d-md-block">Semaines</span>
													<span className="d-md-none">W</span>
												</NavLink>
											</NavItem>
										</Nav>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								{/* Chart */}
								<div className="chart">
									<Line
										data={chartExample1[chartExample1Data]}
										options={chartExample1.options}
										getDatasetAtEvent={(e) => console.log(e)}
									/>
								</div>
							</CardBody>
						</Card>
					</Col>

				</Row>
			</Container>
		</>
	);
};

Dashboard.layout = Admin;

export default Dashboard;
