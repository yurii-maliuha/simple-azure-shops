export default interface Commodity {
    id: number;
    name: string;
    description: string;
    images: string[];
    price: number;
    salePrice: number | undefined;
    onSale: boolean;
    amount: number;
    currency: string;
}