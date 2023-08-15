// import React from 'react';
import CategoryItems from './CategoryItems';
import {getCatgoryItems} from '../utils';


export default function CategoryWiseMenu({categories, items}) {
    //console.log(JSON.stringify(items));
    return (
        <>
            <div className="menu-section">
                {
                    categories.map((category, index) => {
                        return <CategoryItems key={index} category={category} catindex={index} items={getCatgoryItems(index, items)} />
                    })
                }
            </div>
        </>
    )
}