import React from 'react'
import "./Menu.css"


const Menu = () => {
 const menuItems=[
    {   name:"caffe latte", 
        description:"Fresh brewed coffee and steamed milk",
        price:"$2.95",tag:"NEW"},
    {   name:"White chocolate mocha", 
        description:"Espresso, white chocolate, milk, ice and cream",
        price:"$4.55"},
    {   name:"Caffe mocha", 
       description:"Espresso with milk and whipped cream",
       price:"$4.35"},
    {   name:"Iced caramel latte", 
        description:"Espresso, milk, ice and caramel sauce",
        price:"$4.25",tag:"SALE"},
    {   name:"Caramel machiato", 
        description:"Espresso, vanilla-flavored syrup and milk",
        price:"$2.95"},
    {   name:"Iced smoked latte", 
        description:"Espresso, ice, with smoked butterscotch",
        price:"$5.55"},        
    {   name:"Cappuccino", 
        description:"Espresso and smoothened layer of foam",
         price:"$4.35"},
   {   name:"Cappuccino", 
         description:"Espresso and smoothened layer of foam",
         price:"$4.35"},
   
]

return (
    <div id='menu'   className="menu-container">
    <h1 className='menu-title'>Our Coffee Flavours</h1>
    <div className='menu-list'>
        {menuItems.map((item,index)=>(
            <div key={index}>
            <div className='menu-item-details'>
            <h2 className='menu-item-name'>{item.name}</h2>
            <p className="menu-iten-description">{item.description}</p>
            </div>
          <div className='menu-item-price'>
            <span>{item.price}</span>
            {item.tag && <span className={`menu-item-tag ${item.tag.toLocaleLowerCase()}`}>
                {item.tag}</span>}

  </div>
  </div>
        ))}

    </div>
    </div>
  )
}

export default Menu;