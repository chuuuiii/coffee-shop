// import { useState } from "react"

// const menuItems = [
//   {
//     src: "https://cdn.pixabay.com/photo/2023/09/16/15/38/drink-8257030_640.jpg",
//     label: 'Juice',
//     category: 'Drinks'
//   },
//   {
//     src: "https://cdn.pixabay.com/photo/2016/11/22/23/48/beverage-1851261_640.jpg",
//     label: "Tea",
//     category: "Drinks"
//   },
//   {
//     src: "https://cdn.pixabay.com/photo/2015/05/31/10/54/coffee-791045_640.jpg",
//     label: "Hot Coffee",
//     category: "Drinks"
//   }
// ]

// export default function SidebarMenu() {
//   const [showSubItems, setShowSubItems] = useState(false)

//   const toggleSubItems = () => {
//     setShowSubItems(prevSubItems => !prevSubItems)
//   }

//   return (
//     <div className='px-10 mt-5'>
//       <div className='text-lg font-semibold flex justify-center space-x-5' onClick={toggleSubItems} style={{ cursor: 'pointer' }}>
//         {/* <button>Drinks</button> */}
//       </div>
//       {showSubItems && (
//         <div className="mt-5 flex justify-center space-x-5">
//           {menuItems.map((item, index) => (
//             <div key={index} className="flex items-center space-x-3">
//               <img
//                 src={item.src}
//                 alt={item.label}
//                 className=""
//               />
//               <div className="text-sm">{item.label}</div>

//             </div>
//           ))}
//         </div>
//       )}
  
//     </div>
//   )
// }
