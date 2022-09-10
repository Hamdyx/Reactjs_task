import React from 'react';
import { Layout, Typography, Carousel } from 'antd';
import HeaderWithBreadcrumb from '../../components/HeaderWithBreadcrumb';
import Images from '../../assets/images';
import {
	FilledStar,
	NextArrow,
	OutineStar,
	PrevArrow,
} from '../../assets/icons/icons';
import ColorsRow from '../../components/ColorsRows';
const { Title, Text } = Typography;

const ShopItem: React.FC = () => {
	return (
		<>
			<Layout className="main-header">
				<HeaderWithBreadcrumb />
			</Layout>
			<Layout className="Shop-content_container">
				<div className="shop-item_container">
					<div className="aa">
						ProductCarousel
						<img src={Images.Item1} alt="product item" />
					</div>
					<div className="item_details">
						<Title level={4}>Floating Phone</Title>
						<div className="review_container">
							<div className="stars">
								<FilledStar />
								<FilledStar />
								<FilledStar />
								<FilledStar />
								<OutineStar />
							</div>
							<Text>10 Reviews</Text>
						</div>
						<Title level={3} className="price">
							$1,139.33
						</Title>
						<div className="availability">
							<Text className="label">Availability :</Text>
							<Text className="status">In Stock</Text>
						</div>
						<Text className="details">
							Met minim Mollie non desert Alamo est sit cliquey dolor do met
							sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
							venial consequent sent nostrum met.
						</Text>
						<ColorsRow />
					</div>
				</div>
			</Layout>
		</>
	);
};
// const ProductCarousel: React.FC = () => {
// 	return (
// 		<Carousel
// 			autoplay
// 			arrows
// 			nextArrow={
// 				<button>
// 					<NextArrow />
// 				</button>
// 			}
// 			prevArrow={
// 				<button>
// 					<PrevArrow />
// 				</button>
// 			}
// 		>
// 			<div className="">
// 				<img src={Images.Item1} />
// 			</div>
// 			<div className="">
// 				<img src={Images.Item2} />
// 			</div>
// 			<div className="">
// 				<img src={Images.Item3} />
// 			</div>
// 		</Carousel>
// 	);
// };

export default ShopItem;
