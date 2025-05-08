import KetentuanNamaTim from "./ketentuan-nama-tim";
import IzcyForms from "../../izcyforms/izcy-forms";

const LeanCanvasForm = () => {
  return (
    <IzcyForms
      competitionName={"Lean Canvas"}
      fieldComponents={{
        team_name: KetentuanNamaTim
      }}
      formTitle="LEAN CANVAS REGISTRATION"
    />
  );
};

export default LeanCanvasForm;
