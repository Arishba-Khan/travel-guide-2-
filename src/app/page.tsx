import Contact from "./component/contact";
import HeroSection from "./component/hero";
import Reason from "./component/reason";
import View from "./component/view";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Reason />
      <View />
      <Contact />
    </div>
  );
}
