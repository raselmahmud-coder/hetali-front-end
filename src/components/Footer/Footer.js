import footerLogo from "../../assets/images/footerLogo.png";
import footerDivider from "../../assets/images/footerDivider.png";
const Footer = () => {
  return (
    <section className="grid lg:grid-cols-2 bg-green-400">
      <div>
        <img src={footerLogo} alt="" />
      </div>
      <div>
        <h2>lorem</h2>
        <h2>ipsum</h2>
        <h2>Projects In Mumbai</h2>
          </div>
          <img src={footerDivider} alt="" />
          <p>
          Copyright &copy; 2022 Hetali Enterprises - All Rights Reserved.
          </p>
    </section>
  );
};

export default Footer;
