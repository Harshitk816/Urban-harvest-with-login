import ItemList from "./ItemList";

const RestarauntCategory=(props)=>{
    const{title,itemCards}=props.data;
    return(
        <div>
           {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                <div className="flex justify-between">
                    <span className="font-bold text-lg">{title} ({itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {/* {accordion body} */}
                <ItemList items={itemCards}/>
            </div>
            
            
        </div>
    )
};
export default RestarauntCategory;