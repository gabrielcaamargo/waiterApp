import { FlatList } from 'react-native';
import { products } from '../../mocks/products';
import { Text } from '../Text';

import { Product,
  ProductImage,
  ProductDetails,
  Separator,
  AddToCartButton
} from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';

export default function Menu() {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product._id}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      ItemSeparatorComponent={Separator}
      renderItem={({item: product}) => {
        return (
          <Product>
            <ProductImage
              source={{
                uri: `http://192.168.0.10:3001/uploads/${product.imagePath}`
              }}
            />
            <ProductDetails>
              <Text weight='600'>{product.name}</Text>
              <Text color='#666' size={14} style={{ marginVertical: 8 }}>{product.description}</Text>
              <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
            </ProductDetails>

            <AddToCartButton>
              <PlusCircle />
            </AddToCartButton>
          </Product>
        );
      }}
    />
  );
}
