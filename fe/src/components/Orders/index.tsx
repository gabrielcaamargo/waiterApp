import OrdersBoard from '../OrdersBoard';
import { Container } from './styles';

export default function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕐"
        title="Na fila"
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
      />
    </Container>
  );
}
