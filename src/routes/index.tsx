import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import RootLayout from "./root-layout";
import NotFound from "@/pages/notfound";
import IDEAS from "@/pages/ideas";
import { insightCornerData } from "@/components/ideas/insight-corner/insight-corner-data";
import InsightDetail from "@/pages/insight-detail";
import InformationIdeas from "@/pages/registration/ideas/information-ideas";
import IdeasRegistrationForm from "@/pages/registration/ideas/ideas-registration-form";
import GMBCC from "@/pages/gmbcc";
import EventRegistration from "@/pages/registration/event-registration";
import ContactUs from "@/components/contact-us/contact-us";
import RegistrationInformationGmbcc from "@/components/registration/gmbcc/registration-information-gmbcc";
import RegisterGmbcc from "@/components/gmbcc/register/register";
import EXPOSURE from "@/pages/exposure";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/contact"
          element={<ContactUs />}
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/gmbcc"
          element={<GMBCC />}
        />
        <Route
          path="/ideas"
          element={<IDEAS />}
        />
        {insightCornerData.map((item, idx) => {
          const slug = item.href.split("/").pop(); // take only the last part
          return (
            <Route
              key={idx}
              path={`/ideas/insight-corner/${slug}`}
              element={<InsightDetail />}
            />
          );
        })}
        <Route
          path="/exposure"
          element={<EXPOSURE />}
        />

        <Route path="registration">
          <Route path="ideas">
            <Route
              index
              element={<InformationIdeas />}
            />
            <Route
              path="register"
              element={<IdeasRegistrationForm />}
            />
          </Route>
          <Route path="gmbcc">
            <Route
              index
              element={<RegisterGmbcc />}
            />
            <Route
              path="individual"
              element={
                <RegistrationInformationGmbcc
                  title="GMBCC REGISTRATION FOR INDIVIDUAL"
                  registrantType="individual"
                />
              }
            />
            <Route
              path="team"
              element={
                <RegistrationInformationGmbcc
                  title="GMBCC REGISTRATION FOR TEAM"
                  registrantType="team"
                />
              }
            />
          </Route>
          <Route
            path=":competitionName"
            element={<EventRegistration />}
          />{" "}
        </Route>
      </Route>
    </Routes>
  );
}
