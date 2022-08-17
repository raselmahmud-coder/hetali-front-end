import mainBg from "../../assets/images/main-bg.jpg";
import founderImg from "../../assets/images/founderImage.png";
import founderLogo from "../../assets/images/founderLogo.png";
import divider from "../../assets/images/Logo divider (1).png";

const FounderSection = () => {
  const background = {
    backgroundImage: `url(${mainBg}), linear-gradient(rgb(245, 245, 245), rgb(245, 245, 245))`,
    backgroundBlendMode: "overlay",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: "0px 0px",
  }
  return (
    <section
      style={background}
      className="pt-[50px] pb-[120px]">
      <div className="bg-[rgba(245,245,245,0.5)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] mx-auto max-w-[1066.29px] rounded-[10px]">
        <h2 className="pt-[50px] pb-[41px] text-center text-[#474747] font-normal text-[32px] leading-[48px] font-[Cinzel]">
          Founder's Message
        </h2>
        <img className="mx-auto" src={founderImg} alt="" />
        <img className="mx-auto pt-[20px]" src={founderLogo} alt="" />
        <h1 className="mx-auto text-center mb-[20px] bg-[rgba(245,245,245,0.7)] not-italic font-['Roboto_Flex'] font-[1000] text-[32px] leading-[150%] tracking-widest text-[#474747] py-[10px] max-w-[521px]">
          Mr. Jayesh H. Pandya
        </h1>
        <p
          className="max-w-[600px] mx-auto text-center bg-[rgba(245,245,245,0.9)] italic font-['Roboto_Flex'] font-[671] pb-[20px] text-[20px] leading-[150%] tracking-[0.03em] text-[#474747]"
          style={{ fontStretch: "132" }}>
          “When a customer buys a home, he is giving up a major chunk of his
          life's savings to do so. It is imperative to give him exactly what he
          looks for in his home.”
        </p>
        <p className="max-w-[850px] mx-auto not-italic text-justify my-[50px] font-['Roboto_Flex'] font-[400] pb-[20px] text-[16px] leading-[150%] tracking-[0.03em] text-[#474747]">
          We bring to our clients much wanted human values, integrity, trust and
          an assurance of responsibility all coupled with our expertise in
          construction, engineering & management. Our biggest assets have always
          been our small but highly trained team of professional managers and
          engineers who are backed by a very able team of administrators. We
          have a clear vision about building on our strengths and our
          achievements while holding dear to us our basic principles
        </p>
      </div>
      <img src={divider} alt="" className="mx-auto"  />
    </section>
  );
};

export default FounderSection;
