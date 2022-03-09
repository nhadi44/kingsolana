import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Siderbar';

export const Layout = (props) => {
	return (
		<div className={props.className}>
			<Navbar />
			<Sidebar />
			<main>
				<div className="bg-body-background min-h-screen">{props.children}</div>
			</main>
		</div>
	);
};
