import IzcyForms from "@/components/izcyforms/izcy-forms";
import NotFound from "../notfound";
import { JSX, useCallback, useEffect, useState } from "react";

const EventRegistration = () => {
  // const { competitionName } = useParams();
  const competitionName = "Presale";
  const getContent = useCallback(() => {
    switch (competitionName) {
      case "Presale":
        return (
          <>
            <IzcyForms
            color="bg-[#ffcc00]"
              competitionName={competitionName}
              fieldComponents={{}}
              formTitle={
                (competitionName?.toUpperCase() || "") + " REGISTRATION"
              }
            />
          </>
        );
    }

    return null;
  }, [competitionName]);

  const [content, setContent] = useState<JSX.Element | null>(null);
  useEffect(() => {
    const currentContent = getContent();
    if (!currentContent) {
      setContent(<NotFound />);
      return;
    }

    const content = (
      <main className="flex flex-col overflow-x-hidden">{currentContent}</main>
    );
    setContent(content);
  }, [competitionName, getContent]);

  return content;
};

export default EventRegistration;
