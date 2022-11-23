function Navbar(props) {
	return (
		<nav class="navbar navbar-light bg-light">
			<span class="navbar-brand mb-0 h1">
				Navbar
				<span className="badge badge-secondary badge-pill">
					{props.totalCounters}
				</span>
			</span>
		</nav>
	);
}
export default Navbar;
