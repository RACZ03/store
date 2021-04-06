export interface ProductI {
    code:          string,
    name:          string,
    description?:  string,
    price?:        string,
    colors?:       string[],     
    clasification?:string,
    category?:     number,
    photo?:        string[],
    status?:       string,
    type:          number,
    date:          number
}