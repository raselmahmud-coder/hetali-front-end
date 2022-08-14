import logo from "../../assets/images/logo.png";
const NavBar = () => {
  return (
    <div>
      <ul className="flex justify-evenly items-center no-underline my-3">
        <li>
          <img src={logo} alt="this is logo" className="w-[120px]" />
        </li>
        <li className="bg-gradient-to-r from-[#0F497E] to-[#53CAF5]">
          <a className="bg-white pt-4" href="##">
            ABOUT US
          </a>
        </li>
        <li>
          <a href="##">PROJECTS</a>
        </li>
        <li>
          <a href="##">DIVERSIFICATION</a>
        </li>
        <li>
          <a href="##">OUR PROCESS</a>
        </li>
        <li>
          <a href="##">TESTIMONIALS</a>
        </li>
        <li>
          <a href="##">CAREERS</a>
        </li>
        <li>
          <a href="##">CONTACT US</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
