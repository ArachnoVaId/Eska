interface RegistrationCardProps {
  title?: string;
  children: React.ReactNode;
}

const RegistrationCard = ({ title, children }: RegistrationCardProps) => {
  return (
    <div className="2xl:w-[1300px] xl:w-[1000px] lg:w-[800px] w-[85%] max-lg:px-12 max-lg:py-6 py-10 px-16 bg-putih/10 rounded-4xl backdrop-blur-2xl flex flex-col">
      <h3 className="font-damn text-6xl text-putih">{title}</h3>
      {children}
    </div>
  );
};

export default RegistrationCard;
