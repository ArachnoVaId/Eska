import background from "@/assets/background.svg";

const Background = () => {
  return (
    <div className="absolute opacity-15 inset-0 bg-cover bg-center z-20 pointer-events-none">
      <img
        src={background}
        alt="Ornament"
        className="w-full h-full object-cover"
        draggable={false}
      />
    </div>
  );
};

export default Background;
