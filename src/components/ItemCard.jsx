
function ItemCard({itemKey,itemDetail}) {

    //console.log("ItemCard: "+itemKey+" => "+JSON.stringify(itemDetail));
    //const itemDetail = items;
    return (
        <>
            <div className="p-3 col-lg-4 col-md-6 col-sm-12" key={itemKey}>
                <div className="menu-item bg-white d-flex p-3 justify-content-between">
                    <div className="menu-item-detail">
                        <div className="menu-item-title">{itemDetail.title}</div>
                        <p className="card-text">{itemDetail.detail}</p>
                        <div className="menu-item-price">Rs. {itemDetail.price}</div>
                    </div>
                    <div className="menu-item-image">
                        <img src={itemDetail.image} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
  
export default ItemCard;