import Button from '../components/common/Button'

const buttonTypes = ['menu', 'feature', 'previous', 'favorite'];

export default function Menu() {
  return (
    <div className='bg-gray-100 border-b shadow-sm'>
      <div className='ml-10'>
        {buttonTypes.map((type) => (
          <Button key={type} type={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</Button>
        ))}
      </div>
    </div>  
  )
}
