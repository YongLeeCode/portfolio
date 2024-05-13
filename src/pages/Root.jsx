import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import LeftDrawer from "./LeftDrawer";
import Sidebar from "../Sidebar";

export default function Root() {
	return (
		<div>
			<header>
				<h2>Yonghwan Lee</h2>
			</header>
			<div className="structure">
				{/* <LeftDrawer></LeftDrawer> */}
				<Sidebar />
				
				<div className="body">
					<img src="/chevron-up-solid.svg" alt="up" />
					<div className="main">
						<Outlet></Outlet>
					</div>
					<img src="/chevron-down-solid.svg" alt="down" />
				</div>
			</div>
			<Footer />
		</div>
	);
}
