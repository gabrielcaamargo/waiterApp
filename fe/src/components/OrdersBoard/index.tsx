import { Order } from '../../types/Order';
import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export default function OrdersBoard({icon, title, orders}: OrdersBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {
        orders.length > 0 && (
          <OrdersContainer>
            {orders.map((order: Order) => (
              <button type='button' key={order._id}>
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
