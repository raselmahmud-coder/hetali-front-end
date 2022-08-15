import dotBg from "../../assets/images/dotVF.jpg";
import founderImg from "../../assets/images/founderImage.png";
import founderLogo from "../../assets/images/founderLogo.png";
import divider from "../../assets/images/Logo divider (1).png";

const FounderSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${dotBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        margin: "50px 0px",
      }}>
      <div>
        <h2 className="text-center text-[#474747] font-normal text-[32px] leading-[48px] font-[Cinzel]">
          Founder's Message
        </h2>
        <img src={founderImg} alt="" />
        <img src={founderLogo} alt="" />
        <h1>Mr. Jayesh H. Pandya</h1>
        <p>
          “When a customer buys a home, he is giving up a major chunk of his
          life's savings to do so. It is imperative to give him exactly what he
          looks for in his home.”
        </p>
        <span>
          We bring to our clients much wanted human values, integrity, trust and
          an assurance of responsibility all coupled with our expertise in
          construction, engineering & management. Our biggest assets have always
          been our small but highly trained team of professional managers and
          engineers who are backed by a very able team of administrators. We
          have a clear vision about building on our strengths and our
          achievements while holding dear to us our basic principles
        </span>
        <img src={divider} alt="" />
      </div>
    </section>
  );
};

export default FounderSection;
