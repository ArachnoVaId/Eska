import IzcyForms from "@/components/izcyforms/izcy-forms";
import KetentuanSubmisiLeanCanvas from "@/components/registration/ideas/ketentuan-submisi-lean-canvas";
import LeanCanvasForm from "@/components/registration/ideas/lean-canvas-form";
import { useParams } from "react-router-dom";
import NotFound from "../notfound";
import { JSX, useCallback, useEffect, useState } from "react";
import KetentuanActiveStudents from "@/components/registration/gmbcc/ketentuan-active-students";
import KetentuanSocialMedia from "@/components/registration/gmbcc/ketentuan-socialmedia";
import KetentuanTwibbon from "@/components/registration/gmbcc/ketentuan-twibbon";
import KetentuanPoster from "@/components/registration/gmbcc/ketentuan-poster";

const EventRegistration = () => {
  const { competitionName } = useParams();
  const getContent = useCallback(() => {
    switch (competitionName) {
      case "GMBCC Team International":
        return (
          <>
            <IzcyForms
              competitionName={competitionName}
              fieldComponents={{
                ktm: KetentuanActiveStudents,
                proof_follow: KetentuanSocialMedia,
                twibbon: KetentuanTwibbon,
                poster: KetentuanPoster,
              }}
              formTitle={
                (competitionName?.toUpperCase() || "") + " REGISTRATION"
              }
              color="gmbcc"
            />
          </>
        );
      case "GMBCC Team National":
        return (
          <>
            <IzcyForms
              competitionName={competitionName}
              fieldComponents={{
                ktm: KetentuanActiveStudents,
                proof_follow: KetentuanSocialMedia,
                twibbon: KetentuanTwibbon,
                poster: KetentuanPoster,
              }}
              formTitle={
                (competitionName?.toUpperCase() || "") + " REGISTRATION"
              }
              color="gmbcc"
            />
          </>
        );
      case "GMBCC Individual International":
        return (
          <>
            <IzcyForms
              competitionName={competitionName}
              fieldComponents={{
                ktm: KetentuanActiveStudents,
                proof_follow: KetentuanSocialMedia,
                twibbon: KetentuanTwibbon,
                poster: KetentuanPoster,
              }}
              formTitle={
                (competitionName?.toUpperCase() || "") + " REGISTRATION"
              }
              color="gmbcc"
            />
          </>
        );
      case "GMBCC Individual National":
        return (
          <>
            <IzcyForms
              competitionName={competitionName}
              fieldComponents={{
                ktm: KetentuanActiveStudents,
                proof_follow: KetentuanSocialMedia,
                twibbon: KetentuanTwibbon,
                poster: KetentuanPoster,
              }}
              formTitle={
                (competitionName?.toUpperCase() || "") + " REGISTRATION"
              }
              color="gmbcc"
            />
          </>
        );
      case "Lean Canvas":
        return (
          <>
            <LeanCanvasForm />
            <KetentuanSubmisiLeanCanvas />
          </>
        );
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
