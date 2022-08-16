import footerLogo from "../../assets/images/footerLogo.png";
import footerDivider from "../../assets/images/footerDivider.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#004A74] shadow-[0px_0px_4px_rgba(0,0,0,0.25)] px-[79px] pt-[16px]">
        <div className="grid lg:grid-cols-2 ">
          <div>
            <img src={footerLogo} alt="" />
          </div>
          <div className="pt-[25.55px] grid grid-cols-3 gap-[3px]">
            <div className="flex flex-col justify-self-end">
              <p className="pb-[12px] font-['Roboto_flex'] not-italic font-[600] text-[12px] leading-[150%] text-[#fff]">
                Quick Links
              </p>
              <small className="pb-[3px] font-['Roboto_flex'] not-italic font-[300] text-[12px] leading-[150%] text-[#fff]">
                Contact Us
              </small>
              <small className="pb-[3px] font-['Roboto_flex'] not-italic font-[300] text-[12px] leading-[150%] text-[#fff]">
                About Us
              </small>
              <small className="pb-[3px] font-['Roboto_flex'] not-italic font-[300] text-[12px] leading-[150%] text-[#fff]">
                Testimonial
              </small>
              <small className="pb-[3px] font-['Roboto_flex'] not-italic font-[300] text-[12px] leading-[150%] text-[#fff]">
                Gallery
              </small>
              <small className="font-['Roboto_flex'] not-italic font-[300] text-[12px] leading-[150%] text-[#fff]">
                Site Map
              </small>
            </div>
            <div className="flex flex-col justify-self-end">
              <p className="pb-[12px] font-['Roboto_flex'] not-italic font-[600] text-[12px] leading-[150%] text-[#fff]">
                Flats in Mumbai
              </p>
              <small className="pb-[3px] font-['Roboto_flex'] not-italic font-[300] text-[12px] leading-[150%] text-[#fff]">
                1BHK Andheri West
              </small>
              <small className="pb-[3px] font-['Roboto_flex'] not-italic font-[300] text-[12px] leading-[150%] text-[#fff]">
                2 BHK Andheri West
              </small>
              <small className="pb-[3px] font-['Roboto_flex'] not-italic font-[300] text-[12px] leading-[150%] text-[#fff]">
                3 BHK Andheri West
              </small>
              <small className="pb-[3px] font-['Roboto_flex'] not-italic font-[300] text-[12px] leading-[150%] text-[#fff]">
                1BHK Goregaon East
              </small>
              <small className="font-['Roboto_flex'] not-italic font-[300] text-[12px] leading-[150%] text-[#fff]">
                2BHK Goregaon East
              </small>
            </div>
            <div className="flex flex-col justify-self-end">
              <p className="pb-[12px] font-['Roboto_flex'] not-italic font-[600] text-[12px] leading-[150%] text-[#fff]">
                Projects in Mumbai
              </p>
              <small className="pb-[3px] font-['Roboto_flex'] not-italic font-[300] text-[12px] leading-[150%] text-[#fff]">
                Ongoing
              </small>
              <small className="pb-[3px] font-['Roboto_flex'] not-italic font-[300] text-[12px] leading-[150%] text-[#fff]">
                Upcoming
              </small>
              <small className="pb-[3px] font-['Roboto_flex'] not-italic font-[300] text-[12px] leading-[150%] text-[#fff]">
                Completed
              </small>
              <small className="pb-[3px] font-['Roboto_flex'] not-italic font-[300] text-[12px] leading-[150%] text-[#fff]">
                Hetali Blessings
              </small>
              <small className="font-['Roboto_flex'] not-italic font-[300] text-[12px] leading-[150%] text-[#fff]">
                Hetali Anuchhaya
              </small>
            </div>
          </div>
        </div>
        <img src={footerDivider} alt="" className="w-full mx-auto" />
          <p className="font-['Roboto_flex'] not-italic font-[400] text-[10px] leading-[150%] text-[#fff] text-center pt-[20px] pb-[36px]">
            Copyright &copy; 2022 Hetali Enterprises - All Rights Reserved.
          </p>
       
      </footer>
    </>
  );
};

export default Footer;
