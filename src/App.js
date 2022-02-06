import AboutUsComponent from "./pages/landingpage/AboutUsComponent";
import FeaturesComponent from "./pages/landingpage/FeaturesComponent";
import FooterComponent from "./pages/landingpage/FooterComponent";
import IntroductionComponent from "./pages/landingpage/IntroductionComponent";
import PartnerComponent from "./pages/landingpage/PartnerComponent";
import SecodaryPartnerForm from "./pages/landingpage/SecodaryPartnerForm";
import SpecialistTools from "./pages/landingpage/SpecialistToolsComponent";

function App() {
  return (
    <div>
      <IntroductionComponent />
      <SpecialistTools />
      <PartnerComponent />
      <AboutUsComponent />
      <FeaturesComponent />
      <SecodaryPartnerForm />
      <FooterComponent />
    </div>
  );
}

export default App;
