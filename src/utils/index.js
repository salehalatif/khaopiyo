
export function getCatgoryItems(catIndex, items) {
    return  items.filter(item => item.category === catIndex);
    
}