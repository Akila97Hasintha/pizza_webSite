import React from 'react'
import {MenuList} from "../helpers/menuList.js"
import MenuItem from '../component/menuItem.js'
import "../styles/Menu.css"

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTile'>Our Menu</h1>
        <div className='menuList'>
                {
                    MenuList.map((menuItem, key) => {
                        return <MenuItem
                        key={key} 
                        image={menuItem.iamge}
                         name={menuItem.name}
                          price={menuItem.price}
                          />
                    })
                }
        </div>
      
    </div>
  )
}

export default Menu
