export class Product{
    productId: string;
    categoryId: number;
    productName: string;
    description: string;
    rating: string;
    price: number;
    productImg: string;
    isAvailable: string;
    color: string;
    reviews: number;

    constructor(options: any = {}){
        this.productId = options.productId || '' ;
        this.categoryId = options.categoryId || null;
        this.productName = options.productName || '' ;
        this.description = options.description || '' ;
        this.rating = options.rating || '' ;
        this.price = options.price || null ;
        this.productImg = options.productImg || '' ;
        this.isAvailable = options.isAvailable || '' ;
        this.color = options.color || '' ;
        this.reviews = options.reviews || null;

    }
}