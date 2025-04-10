import MenuIcon from "@/components/icons/menu-icon";

const NavBar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between py-4 px-4">
      <div className="flex flex-row gap-4 items-center justify-between w-full">
        <div className="flex items-center gap-4">
          {/*<div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center font-bold text-2xl">
            AS
          </div>*/}
        </div>
        <div className="flex items-center gap-4">
          <button className="cursor-pointer">
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
