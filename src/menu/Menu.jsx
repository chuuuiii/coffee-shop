import { useState } from 'react';
import Button from '../components/common/Button'
import SidebarMenu from '../sidebar-menu/SidebarMenu';

const buttonTypes = ['menu', 'featured', 'previous', 'favorite'];

export default function Menu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const handleClickMenu = (type) => {
    if (type === 'menu') {
      setIsSidebarOpen(!isSidebarOpen)
    }
  }

  return (
    <div className='bg-gray-100 border-b shadow-sm'>
      <div className='ml-10'>
        {buttonTypes.map((type) => (
          <Button 
            key={type} 
            type={type}
            onClick={() => handleClickMenu(type)}>{type.charAt(0).toUpperCase() + type.slice(1)}</Button>
        ))}
      </div>
      {isSidebarOpen && <SidebarMenu />}
    </div>  
  )
}
