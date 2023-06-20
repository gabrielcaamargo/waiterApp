import { FlatList } from 'react-native';
import { useState } from 'react';
import { products } from '../../mocks/products';
import { Text } from '../Text';
import { ProductContainer,
  ProductImage,
  ProductDetails,
  Separator,
  AddToCartButton
} from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { Product } from '../../@types/Product';
import ProductModal from '../ProductModal';

interface MenuProps {
  onAddToCart: (product: Product) => void
}

export default function Menu({onAddToCart}: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAddToCart={onAddToCart}
        product={selectedProduct}
      />

      <FlatList
        data={products}
        keyExtractor={(product) => product._id}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        ItemSeparatorComponent={Separator}
        renderItem={({item: product}) => {
          return (
            <ProductContainer onPress={() => handleOpenModal(product)}>
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

              <AddToCartButton onPress={() => onAddToCart(product)}>
                <PlusCircle />
              </AddToCartButton>
            </ProductContainer>
          );
        }}
      />
    </>
  );
}
