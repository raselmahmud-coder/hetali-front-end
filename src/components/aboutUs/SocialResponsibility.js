import divider from "../../assets/images/Logo divider.png";
import charityPic from "../../assets/images/charityPic.png";

const SocialResponsibility = () => {
  return (
    <section className="bg-[#F5F7F8] my-[50px] py-[20px]">
      <h2 className="text-center text-[#474747] font-normal text-[32px] tracking-widest font-[Cinzel]">
        Corporate Social Responsibility
      </h2>
      <img src={divider} className="mt-[50px]" alt="" />
      <div className="grid lg:grid-cols-2 w-[1250px] h-[560px] my-[50px]">
        <div className="mr-[40px]">
          <div className="bg-[#FAFAFA] p-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px]">
            <h3 className="text-[#474747] font-[1000] text-[24px] tracking-widest font-['Roboto_Flex'] leading-[150%] not-italic">
              Education for the under-privileged
            </h3>
            <p className="text-[#474747] font-[400] text-[24px] tracking-[0.03em] font-['Roboto_Flex'] leading-[150%]">
              We believe that our future lies in the holistic educational
              foundation of the youth and we have nurtured that cause by
              providing the necessary books and monetary support to the
              under-privileged children of Mumbai & also at several villages in
              Gujarat. As the Trustees of the H A Desai Boarding School in
              Matunga, Mumbai, we have been providing living and hospitality
              services to the academically bright students from the weaker
              monetary sections of the society.
            </p>
          </div>
          <h3 className="font-['Roboto_flex'] font-[1000] text-[24px] tracking-widest text-[#919191] p-[10px] bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] my-[15px]">
            Support for Rural Farmers
          </h3>
          <h3 className="font-['Roboto_flex'] font-[1000] text-[24px] tracking-widest text-[#919191] p-[10px] bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px]">
            Spiritual
          </h3>
        </div>
        <div className="ml-[40px]">
          <img src={charityPic} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SocialResponsibility;
