import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import Images from '../assets/images';
import { NextArrow, PrevArrow } from '../assets/icons/icons';

const ProductCarousel: React.FC = () => {
	const [activeItem, setActiveItem] = useState(0);
	useEffect(() => {
		window!.scroll(0, 0);
	}, []);

	const onChange = (currentSlide: number) => {
		setActiveItem(currentSlide);
	};

	return (
		<div className="product_carousel">
			<Carousel
				adaptiveHeight
				draggable
				afterChange={onChange}
				autoplay
				arrows
				nextArrow={
					<button>
						<NextArrow />
					</button>
				}
				prevArrow={
					<button>
						<PrevArrow />
					</button>
				}
			>
				<div>
					<img alt="product" src={Images.carousel1} />
				</div>
				<div>
					<img alt="product" src={Images.carousel2} />
				</div>
			</Carousel>
			<div className="carousel_items">
				<div>
					<img
						className={activeItem === 0 ? 'active' : ''}
						alt="product"
						src={Images.carousel1}
					/>
				</div>
				<div>
					<img
						className={activeItem === 1 ? 'active' : ''}
						alt="product"
						src={Images.carousel2}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductCarousel;
