const Button = ({ type, onClick, children }) => {

  const baseStyles = "px-4 py-2 font-medium rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 mt-2";

  const typeStyles = {
    signin: "border border-black bg-transparent text-black hover:bg-gray-300 transition-colors",
    registration: "text-white rounded p-2 bg-custom-100 border-custom-100 ml-2 lg:ml-4 mt-4 lg:mt-0 hover:bg-custom-100 hover:bg-gray-900",
    order: "",
    learn_more: "rounded p-2 border border-custom-200 ml-2 lg:ml-4 mt-4 lg:mt-0 hover:bg-custom-100 hover:text-white"
  }

  return ( 
    <button onClick={onClick} className={`${baseStyles} ${typeStyles[type]}`}>
      {children}
    </button>
  );
}
 
export default Button;
