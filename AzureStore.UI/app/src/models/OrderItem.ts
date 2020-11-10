import Commodity from './Commodity';

export default interface OrderItem {
    product: Commodity;
    quantity: number;
}