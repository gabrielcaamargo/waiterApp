import { Order } from '../../types/Order';
import OrdersBoard from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '648bb477bd3fd38efeedb8b4',
    'table': '22',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1686868144749-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 5,
        '_id': '648bb477bd3fd38efeedb8b5'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1686868576059-coca-cola.png',
          'price': 7,
        },
        'quantity': 3,
        '_id': '648bb477bd3fd38efeedb8b6'
      }
    ],
  }
];

export default function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕐️"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
