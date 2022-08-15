import image1 from "../../assets/images/image 3.png";
import image2 from "../../assets/images/image 5.png";
import image3 from "../../assets/images/image 9.png";
const GroupCompanies = () => {
  return (
    <section>
      <h2 className="text-center text-[#474747] font-normal text-[32px] leading-[48px] font-[Cinzel]">
        Founder's Message
      </h2>
      <div className="grid lg:grid-cols-3">
        <div>
          <img src={image1} alt="" />
          <h3>Agriculture</h3>
        </div>
        <div>
          <img src={image2} alt="" />
          <h3>Fuel</h3>
        </div>
        <div>
          <img src={image3} alt="" />
          <h3>Foods</h3>
        </div>
      </div>
    </section>
  );
};

export default GroupCompanies;
