import { Order } from '../../types/Order';
import OrdersBoard from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '63750ee81354e55af79af1ad',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1668614660652-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '63750ee81354e55af79af1ae'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668652140790-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '63750ee81354e55af79af1af'
      }
    ],
  },
];

export default function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕐"
        title="Na fila"
        orders={orders}

      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  );
}
