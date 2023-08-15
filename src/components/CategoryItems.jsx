import React from 'react';
import ItemCard from './ItemCard';

export default function CategorItems({category, catindex, items}) {

   // console.log("CategorItems: "+JSON.stringify(items));

   const catName = category.replace(/ /g, '-'); // remove spaces to shwo in key
    return (
        <div key={"Catkey_"+catindex}>
            <div key={catName} className="menu-section-title m-5">
                <h2>{category}</h2>
            </div >
            <div className="row m-5 ">
                {
                    items.map(item => <ItemCard key={item.id}  itemKey={item.id} itemDetail={item} />)
                }
            </div>
        </div>
    )
}
