import { useDispatch, useSelector } from 'react-redux'
import { add_cart_item } from '../Redux/CartConstant'
import { RootState } from '../Redux/store'

interface Props {
  item: {
    id: number | string;
    name: string;
    imageURL: string;
    price: number;
  };
}

const AddProduct: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((store: RootState) => store.CartReducer);

  return (
    <>
      <div className="product_card">
        <p className='product_title'>{item.name}</p>
        <img src={`${item.imageURL}`} alt=" PRODUCT IMAGES" />
        <div className="item_details">
          <p>Rs {item.price}</p>
          <button onClick={() => {
            // checking for duplicate item in the cart
            let itemIndex = cartData.findIndex((e) => parseInt(e.id) === parseInt(item.id));
            console.log(itemIndex)
            if (itemIndex !== -1) {
              alert("Item is already in the cart !!")
              return
            }
            // if there is no duplicate item then add it to cart
            dispatch(add_cart_item(item));
            alert(`${item.name} added in the cart !!`)
          }}>Add to Cart</button>
        </div>
      </div>

    </>
  )
}

export default AddProduct;
