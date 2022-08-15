import divider from "../../assets/images/Logo divider.png";
import divider2 from "../../assets/images/Logo divider (1).png";
import coverImg from "../../assets/images/cover-image.png";
import clock from "../../assets/images/clock.png";
import star from "../../assets/images/star.png";
import handshake from "../../assets/images/handshake.png";
import real_state from "../../assets/images/real_estate_agent.png";
import black_divider from "../../assets/images/black-divider.png";
import vision from "../../assets/images/Vision.png";
import Cards from "../Card/Cards";
import Mission from "./Mission";
import SocialResponsibility from "./SocialResponsibility";
const AboutUs = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="uppercase font-[Cinzel] text-[32px] font-normal leading-[48px] my-3">
          About Us
        </h1>
        <img src={divider} alt="" />
      </div>
      <div className="my-8">
        <img src={coverImg} alt="" className="my-4" />
        <p className="w-[850px] italic mx-auto text-center text-[20px] text-[#474747] font-[1000]">
          We endeavour to build homes which make it's residents happy and proud
          of their address. Residents are at heart of everything we do, we build
          homes to live in, not houses to stay in.
        </p>
        <img src={divider2} className="my-5" alt="" />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 w-[850px] gap-x-[60px] gap-y-[15px] mx-auto my-[10px]">
        <Cards
          icon={clock}
          text={
            <p className="pt-[35px] text-[16px] leading-[24px]">
              Our track record has been impeccable with{" "}
              <span className="font-bold">project completion on time</span> and
              have surpassed expectations many a time, society members have
              positively received our redevelopment plans and encourage our{" "}
              <span className="font-bold">modern and urbane designs</span> to
              their neighbours.
            </p>
          }
        />
        <Cards
          icon={star}
          text={
            <p className="pt-[35px] text-[16px] leading-[24px]">
              The Hetali Group is a redeveloper like no other with a{" "}
              <span className="font-bold">profound focus on quality</span> and
              <span className="font-bold">
                {" "}
                long term satisfaction of its residents.
              </span>
            </p>
          }
        />
        <Cards
          icon={handshake}
          text={
            <p className="pt-[35px] text-[16px] leading-[24px]">
              They just don't endeavour but build homes which make it's
              residents proud of their address{" "}
              <span className="font-bold">
                by putting home-owners at the heart and soul of everything
              </span>
              they do from start to finish and post completion.
            </p>
          }
        />
        <Cards
          icon={real_state}
          text={
            <p className="pt-[35px] text-[16px] leading-[24px]">
              Hetali Group lives by the ethos of{" "}
              <span className="font-bold">
                building homes to live and not houses to stay in.
              </span>
            </p>
          }
        />
      </div>
      <section className="mb-[40px]">
        <div>
          <img src={black_divider} alt="" />
        </div>
        <img src={divider2} className="my-5" alt="" />
        <p className="w-[850px] mx-auto text-[#474747] text-justify font-normal text-[24px] font-['Roboto_Flex']">
          Established in 1992, Hetali Group is a leading real estate developer
          of residential spaces across Mumbai and have earned an unmatched
          reputation amongst its very loyal customers. The company's
          customer-centric values, project management proficiency and technical
          expertise are amplified with over 6.5 lakh sq.ft. built and almost 1
          lakh sq.ft underway leading to more than families!
          <br />
          <br />
          The Hetali Group promises a lifestyle second to none. In a span of
          over four decades, the group has proved to be one of the most reputed
          real estate builders in the western suburbs of Mumbai with residences
          in prime locations such as Andheri, Goregaon, Vile Parle and Juhu.
          <br />
          <br />
          Spearheaded by Mr Jayesh Pandya, the company's central ideology is to
          provide homes customized to the customer's requirements and home’s
          that are superior in nature keeping in mind the needs of the modern
          home user.
        </p>
      </section>
      <section
        style={{
          backgroundImage: `url(${vision})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          margin: "50px 0px",
        }}>
        <h2 className="text-center text-white pt-[40px] font-normal text-[32px] leading-[48px] font-[Cinzel]">
          Vision
        </h2>
        <p className="w-[850px] pb-[148px] pt-[40px] mx-auto font-['Roboto_flex'] font-[1000] italic text-[20px] leading-[30px] text-center text-[#fafafa] tracking-[0.0em]">
          We aim to ensure top-class service to our stakeholders & diversify our
          business to other service-oriented sectors with the ultimate goal of
          achieving customer satisfaction & end-user interaction.
        </p>
      </section>
      <Mission />
      <SocialResponsibility/>
    </>
  );
};

export default AboutUs;
