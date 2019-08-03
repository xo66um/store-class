export class Item { 
    constructor(entity) { 
        Object.assign (this, {
            brand : '',
            title : '', 
            description : '', 
            descriptionFull : '', 
            price : '', 
            currency : '', 
        }, entity); 
    }
}

export default Item;
 
 