import { useEffect, useState } from 'react';
import { Order } from '../../types/Order';
import OrdersBoard from '../OrdersBoard';
import { Container } from './styles';
import { api } from '../../utils/api';

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get('/orders')
      .then(({data}) => {
        setOrders(data);
      });
  }, []);

  const waitingOrders = orders.filter(order => order.status === 'WAITING');
  const productionOrders = orders.filter(order => order.status === 'IN_PRODUCTION');
  const doneOrders = orders.filter(order => order.status === 'DONE');

  function handleCancelOrder(orderId: string) {
    setOrders((prevState) => prevState.filter(order => order._id !== orderId));
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders((prevState) => prevState.map((order) => (
      order._id === orderId
        ? { ...order, status}
        : order
    )));
  }

  return (
    <Container>
      <OrdersBoard
        icon="🕐️"
        title="Fila de espera"
        orders={waitingOrders}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={productionOrders}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={doneOrders}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleOrderStatusChange}
      />
    </Container>
  );
}
