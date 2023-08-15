
function CategoryBar({ categories, c_class }) {

    //console.log("CategoryBar: "+JSON.stringify(categories));

    const setClass = "category p-2 " + c_class;
    return (
        <>
            {
                categories.map(category => (
                    <a key={category} href={"/" + category.replace(/ /g, '-')} className={setClass}>
                        {category}
                    </a>
                ))
            }
        </>
    )
}

export default CategoryBar;