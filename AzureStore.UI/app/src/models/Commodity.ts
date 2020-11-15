export default interface Commodity {
    id: number;
    name: string;
    type: number;
    description: string;
    images: string[];
    price: number;
    salePrice: number | undefined;
    onSale: boolean;
    amount: number;
    currency: string;
}