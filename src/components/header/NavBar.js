import logo from "../../assets/images/logo.png";
const NavBar = () => {
  // for half border
  const borderBottom = {
    borderBottom: "2px solid",
    borderImage:
      "linear-gradient(90deg, #0F497E 0%, #53CAF5, transparent 50%) 100% 1",
  };
  return (
    <div>
      <ul className="flex justify-evenly items-center no-underline my-3">
        <li>
          <img src={logo} alt="this is logo" className="w-[120px]" />
        </li>
        <li>
          <a className="pb-2" style={borderBottom} href="##">
            ABOUT US
          </a>
        </li>
        <li>
          <a className="pb-2" style={borderBottom} href="##">
            PROJECTS
          </a>
        </li>
        <li>
          <a className="pb-2" style={borderBottom} href="##">
            DIVERSIFICATION
          </a>
        </li>
        <li>
          <a className="pb-2" style={borderBottom} href="##">
            OUR PROCESS
          </a>
        </li>
        <li>
          <a className="pb-2" style={borderBottom} href="##">
            TESTIMONIALS
          </a>
        </li>
        <li>
          <a className="pb-2" style={borderBottom} href="##">
            CAREERS
          </a>
        </li>
        <li>
          <a className="pb-2" style={borderBottom} href="##">
            CONTACT US
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
