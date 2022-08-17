import divider from "../../assets/images/Logo divider.png";
import missionPic from "../../assets/images/Mission-Pic.png";

const Mission = () => {
  return (
    <section className="mb-[50px]">
      <h2 className="text-center text-[#474747] font-normal text-[32px] tracking-widest font-[Cinzel]">
        Mission
      </h2>
      <img className="my-[50px] mx-auto" src={divider} alt="" />
      <div className="grid lg:grid-cols-2 lg:gap-[4px] max-w-[1250px] max-h-[405px] mx-auto">
        <img src={missionPic} alt="" className="w-[550px] " />
        <div className="max-w-[620px] my-[6px]">
          <div className="bg-[#f5f5f5] max-h-[138px] p-[10px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px]">
            <h3 className="font-['Roboto_flex'] font-[1000] text-[24px] tracking-widest text-[#474747]">
              Personalized
            </h3>
            <p className="font-['Roboto_flex'] font-[400] text-[24px] tracking-[0.03em] text-[#474747]">
              Our core idealogy is to provide personalised homes to meet the
              very specific needs of residents.
            </p>
          </div>
          <h3 className="font-['Roboto_flex'] font-[1000] text-[24px] tracking-widest text-[#919191] p-[10px] bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] my-[25px]">
            Committed
          </h3>
          <h3 className="font-['Roboto_flex'] font-[1000] text-[24px] tracking-widest text-[#919191] p-[10px] bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] mb-[25px]">
            Quality & Service Oriented
          </h3>
          <h3 className="font-['Roboto_flex'] font-[1000] text-[24px] tracking-widest text-[#919191] p-[10px] bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px]">
            Timely
          </h3>
          
        </div>
      </div>
    </section>
  );
};

export default Mission;
