import { Navbar } from '../components/Navbar';

export const Layout = (props) => {
	return (
		<div className={props.className}>
			<Navbar />
			<main>
				<div className="bg-body-background min-h-screen">{props.children}</div>
			</main>
		</div>
	);
};
