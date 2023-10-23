// assets
import Minus from 'assets/images/minus.svg';
import Add from 'assets/images/add.svg';

// styles
import './index.css';
import { useContext, useState } from 'react';
import { ProductContext } from 'contexts/ProductsProvider';
import { useToast } from 'hooks/useToast';

import QuantityControl from 'components/QuantityChange';

export const ProductItem: React.FC = (): JSX.Element => {
  const { cart, onDeleteProductFromCart, onUpdateCart } = useContext(ProductContext);
  const [showModal, setShowModal] = useState(false);
  const { showToast, hideToast } = useToast();

  const handleDecreaseQuantity = (id: string) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(item.quantity - 1, 0),
            price: item.initialPrice * Math.max(item.quantity - 1, 0)
          }
        : item
    );

    const updatedItem = updatedCart.find((item) => item.id === id);
    if (updatedItem) {
      const { quantity, price } = updatedItem;
      onUpdateCart(id, { quantity, price });
    }
  };

  const handleIncreaseQuantity = (id: string) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1, price: item.price * (item.quantity + 1) }
        : item
    );

    const updatedItem = updatedCart.find((item) => item.id === id);
    if (updatedItem) {
      const { quantity, price } = updatedItem;
      onUpdateCart(id, { quantity, price });
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    setShowModal(true);
    try {
      await onDeleteProductFromCart(productId);
      showToast('success', 'Product deleted successfully');
    } catch (error) {
      showToast('error', 'Failed to delete product');
    } finally {
      setShowModal(false);
    }
  };

  return (
    <section className='flex-column list-cart'>
      {cart.map((element) => (
        <div className='item-cart' key={element.id}>
          <img src={element.image} className='flex-container item-image' />
          <div className='flex-column content-item'>
            <div className='flex-column product-box'>
              <h1 className='title'>{element.name}</h1>
              <div className='flex-space-between-container product-value'>
                <QuantityControl
                  quantity={element.quantity}
                  onDecrease={() => handleDecreaseQuantity(element.id)}
                  onIncrease={() => handleIncreaseQuantity(element.id)}
                />
                <p className='price'>${element.price}</p>
              </div>
            </div>

            <button
              className='flex-container btn remove-btn'
              onClick={() => handleDeleteProduct(element.id)}>
              <i className='fa-regular fa-trash-can'></i>
            </button>
          </div>
        </div>
      ))}

      <div className='flex-space-between-container subtotal'>
        <h4 className='sub-title'>Subtotal</h4>
        <p className='subtotal-price'>
          ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </p>
      </div>
    </section>
  );
};
