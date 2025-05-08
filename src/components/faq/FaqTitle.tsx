import TitleWrapper from "../title-wrapper";

interface FaqTitleProps {
  title: string;
  color: string;
}

const FaqTitle = ({title, color}: FaqTitleProps) => {
  return (
    <h2 className="font-damn text-putih max-lg:space-y-2 space-y-5 max-lg:text-5xl max-xl:text-8xl text-9xl text-center">
      FREQUENTLY ASKED QUESTIONS
      <br />
      <TitleWrapper
        label={title}
        color={color} 
        variant="bottom-left"
      />
    </h2>
  );
};

export default FaqTitle;
