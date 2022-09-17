import React, { useContext } from 'react';
import '../styles/OrderItem.scss';
import closeIcon from '@icons/icon_close.png'
import AppContext from '../context/AppContext';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = item => {
		removeFromCart(item)
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={closeIcon} onClick={() => handleRemove(product)} alt="close" />
		</div>
	);
}

export default OrderItem;