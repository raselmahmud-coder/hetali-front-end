import image1 from "../../assets/images/image 3.png";
import image2 from "../../assets/images/image 5.png";
import image3 from "../../assets/images/image 9.png";
import divider from "../../assets/images/Logo divider.png";
const GroupCompanies = () => {
  return (
    <section className="py-[50px] bg-[#FAFAFA]">
      <h2 className="text-center text-[#474747] font-normal text-[32px] leading-[150%] font-[Cinzel] tracking-widest">
        Group Companies
      </h2>
      <img src={divider} className="my-[50px] mx-auto" alt="" />
      <div className="flex lg:justify-center max-w-[1168.49px] mx-auto">
        <div className="mr-[50px]">
          <img src={image1} alt="" />
          <h3 className="text-center not-italic text-[#474747] font-[1000] text-[24px] leading-[150%] font-['Roboto_Flex'] tracking-widest mt-[10px]">Agriculture</h3>
        </div>
        <div className="mr-[50px]">
          <img src={image2} alt="" />
          <h3 className="text-center not-italic text-[#474747] font-[1000] text-[24px] leading-[150%] font-['Roboto_Flex'] tracking-widest mt-[10px]">Fuel</h3>
        </div>
        <div>
          <img src={image3} className='h-[88%]' alt="" />
          <h3 className="text-center not-italic text-[#474747] font-[1000] text-[24px] leading-[150%] font-['Roboto_Flex'] tracking-widest mt-[10px]">Foods</h3>
        </div>
      </div>
    </section>
  );
};

export default GroupCompanies;
