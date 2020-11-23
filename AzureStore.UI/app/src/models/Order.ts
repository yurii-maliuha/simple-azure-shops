import OrderItem from "./OrderItem";

export default interface Order {
    id: string,
    total: number;
    userEmail: string;
    state: OrderState;
    orderItems: OrderItem[]
}

export enum OrderState {
    Pending,
    Payed,
    Invalid
}