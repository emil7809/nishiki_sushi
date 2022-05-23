import NewOffersSection from "./NewOffersSection";
import VisitUsSection from "./VisitUsSection";
import CateringAndEventsSection from "./CateringAndEventsSection";
import BurgerMenu from "./BurgerMenu";
import useWindowDimensions from "./screenResize_hook";

export default function LandingPage() {
  const screenSize = useWindowDimensions();

  return (
    <>
      {screenSize.width > 799 && <BurgerMenu page={"home"} />}
      {/*  {screenSize.width < 799 && <MobileNav page={"home"} />} */}
      <section className="thumbnail_images">
        <img
          src="../icons/logo.svg"
          alt="The logo icon."
          className="header_logo"
        />
        <a href="" className="thumbnail_img restaurant_thumbnail">
          <h4 className="restaurant_title">
            <b>BESØG RESTAURANTEN</b>
          </h4>
        </a>
        <a href="" className="thumbnail_img takeaway_thumbnail">
          <h4 className="takeaway_title">
            <b>TAKEAWAY</b>
          </h4>
        </a>
      </section>
      <NewOffersSection />
      <VisitUsSection />
      <CateringAndEventsSection />
    </>
  );
}
