// ItemList.js  
import { useDispatch } from "react-redux";  
import { addItem } from "../utils/cartSlice";  
import { CDN_URL } from "../constants";  
import React from "react";  

const ItemList = ({ items, showAddButton = true }) => {  
    const dispatch = useDispatch();  

    const handleAddItem = (item) => {  
        dispatch(addItem(item));  
    };  

    return (  
        <div>  
            {items.map((item) => (  
                <div  
                    key={item.card.info.id}  
                    className="p-4 m-2 border-pink-200 border-b-2 text-left flex justify-between bg-pink-100 rounded-lg"  
                >  
                    <div className="w-9/12">  
                        <div className="py-2">  
                            <span className="font-bold text-pink-900">  
                                {item.card.info.name}  
                            </span>  
                            <span className="ml-2 text-pink-700">  
                                - ₹{(item.card.info.price / 100).toFixed(2)}  
                            </span>  
                        </div>  
                        <p className="text-xs text-gray-600">{item.card.info.description}</p>  
                    </div>  
                    <div className="w-3/12 p-4 relative">  
                        <img  
                            src={CDN_URL + item.card.info.imageId}  
                            className="w-full rounded-lg"  
                            alt={item.card.info.name}  
                        />  
                        {showAddButton && (  
                            <button  
                                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 p-2 rounded-lg bg-pink-500 text-white shadow-lg hover:bg-pink-600"  
                                onClick={() => handleAddItem(item)}  
                            >  
                                Add+  
                            </button>  
                        )}  
                    </div>  
                </div>  
            ))}  
        </div>  
    );  
};  

export default ItemList;