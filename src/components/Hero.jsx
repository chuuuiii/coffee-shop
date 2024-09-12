
import Button from "../components/common/Button";

export default function Hero() {

  const images = [
    {
      src: "https://cdn.pixabay.com/photo/2016/01/02/04/59/coffee-1117933_640.jpg",
      title: "Fresh Coffee, Fresh Start",
      subtitle: "Start your day with our signature blends",
      buttonType: "order",
      buttonText: "Order Now",
    },
    {
      src: "https://cdn.pixabay.com/photo/2019/10/31/07/14/coffee-4591159_640.jpg",
      title: "A Perfect Blend",
      subtitle: "Crafted for moments of relaxation",
      buttonType: "explore_more",
      buttonText: "Explore More",
    },
    {
      src: "https://cdn.pixabay.com/photo/2024/05/16/21/05/latte-8766985_640.jpg",
      title: "Sip into serenity",
      subtitle: "Experience the perfect balance of flavor and relaxation with every cup.",
      buttonType: "order",
      buttonText: "Order Now"
    },
    {
      src: "https://cdn.pixabay.com/photo/2022/01/25/11/30/takeaway-6965921_640.jpg",
      title: "Your treat awaits!",
      subtitle:
        "Enjoy exclusive rewards perks, including a free drink with your qualifying purchase during your first week. Sip, savor, and celebrate—valid for one-time use only.",
      buttonType: "registration",
      buttonText: "Join Now",
    },
  ];

  return (
    <div>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative h-screen bg-cover bg-center mt-5"
          style={{ backgroundImage: `url(${image.src})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-6xl font-bold mb-4">{image.title}</h1>
            <p className="text-2xl mb-8">{image.subtitle}</p>
            <Button type={image.buttonType}>{image.buttonText}</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
