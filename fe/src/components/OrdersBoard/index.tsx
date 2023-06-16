import { useState } from 'react';
import { Order } from '../../types/Order';
import OrderModal from '../OrderModal';
import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export default function OrdersBoard({icon, title, orders}: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal( ) {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {
        orders.length > 0 && (
          <OrdersContainer>
            {orders.map((order: Order) => (
              <button
                type='button'
                key={order._id}
                onClick={() => handleOpenModal(order)}
              >
                <strong>Mesa 2</strong>
                <span>2 itens</span>
              </button>
            ))}
          </OrdersContainer>
        )
      }
    </Board>
  );
}
