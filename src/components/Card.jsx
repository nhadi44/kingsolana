import { Gallery } from './Gallery';

import image_01 from '../assets/images/image-01.jpg';
import image_02 from '../assets/images/image-02.jpg';
import image_03 from '../assets/images/image-03.jpg';

export const Card = () => {
	return (
		<div>
			<Gallery>
				<div>
					<img src={image_01} alt="nft-presale" className="w-1/3" />
				</div>
			</Gallery>
		</div>
	);
};
