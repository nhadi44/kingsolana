import { Layout } from '../layout/Layout';
import image_01 from '../assets/images/image-01.jpg';

export const Presale = () => {
	return (
		<div>
			<Layout>
				<div className='presale__assets min-h-screen flex items-center justify-center w-full'>
					<div className='flex items-center justify-center -translate-y-32 relative'>
						<div className='group mx-3 bg-red-500'>
							<img src={image_01} alt="kingsolana" className='blur-sm w-96 group-hover:w-[25rem] group-hover:blur-0 transition-all duration-200' />
						</div>	
						<div className='group mx-3 bg-red-500'>
							<img src={image_01} alt="kingsolana" className='blur-sm w-96 group-hover:w-[25rem] group-hover:blur-0 transition-all duration-200' />
						</div>	
						<div className='group mx-3 bg-red-500'>
							<img src={image_01} alt="kingsolana" className='blur-sm w-96 group-hover:w-[25rem] group-hover:blur-0 transition-all duration-200' />
						</div>	
					</div>
				</div>
			</Layout>
		</div>
	);
};
