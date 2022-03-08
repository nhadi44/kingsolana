import { Layout } from '../layout/Layout';
import logo from '../assets/icons/body-icon.png';

import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Home = () => {
	return (
		<div>
			<Layout>
				<AnimationOnScroll animateIn="animate__zoomIn">
					<div className="min-h-screen flex justify-center items-center">
						<img src={logo} alt="body-icon" className="w-2/3" />
					</div>
				</AnimationOnScroll>
			</Layout>
		</div>
	);
};
