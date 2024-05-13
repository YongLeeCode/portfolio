import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { NavLink, Link, Outlet } from "react-router-dom";
const drawerWidth = 300;
export default function LeftDrawer() {
	const activeStyle = {
		color: "black",
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<header>
				<h2>Yonghwan Lee</h2>
			</header>

			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="permanent"
				anchor="left"
			>
				<Toolbar />
				<Divider />
				<List>
					<ListItemButton to="Information">Information</ListItemButton>

					<ListItem disablePadding>
						<ListItemButton>
							<NavLink
								className="link"
								style={({ isActive }) => (isActive ? activeStyle : {})}
								to="/"
							>
								메인
							</NavLink>

							<NavLink
								className="link"
								style={({ isActive }) => (isActive ? activeStyle : {})}
								to="/healthadd"
							>
								건강기록
							</NavLink>

							<NavLink
								className="link"
								style={({ isActive }) => (isActive ? activeStyle : {})}
								to="/healthlist"
							>
								기록관리
							</NavLink>
							<Link to="/">
								<ListItemText>Home</ListItemText>
							</Link>
						</ListItemButton>
					</ListItem>
				</List>
				<Divider />
				<List>
					{["All mail", "Trash", "Spam"].map((text, index) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
}
