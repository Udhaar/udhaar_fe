import React from "react";

export const SmallNavbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <div className="py-1 px-3 border-b-2 border-[#3C64B9] bg-[#EAF1FF] md2:hidden flex justify-between">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#3C64B9"
          className="cursor-pointer relative"
          onClick={() => setShowMenu((value) => !value)}
        >
          <path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-15 13.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm4.5 0c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm4.5 0c0 .828-.671 1.5-1.5 1.5s-1.5-.672-1.5-1.5.671-1.5 1.5-1.5 1.5.672 1.5 1.5z" />
        </svg>
        {showMenu && (
          <div className="absolute top-7 left-3 bg-[#EAF1FF] rounded-lg border-2 border-[#3C64B9]">
            <div>
              <div className="px-6 py-2 cursor-pointer text-lg hover:bg-[#3C64B9] hover:text-white focus:bg-[#3C64B9] focus:text-white">
                Transactions
              </div>
              <div className="px-6 py-2 cursor-pointer text-lg hover:bg-[#3C64B9] hover:text-white focus:bg-[#3C64B9] focus:text-white">
                Personal
              </div>
              <div className="px-6 py-2 cursor-pointer text-lg hover:bg-[#3C64B9] hover:text-white focus:bg-[#3C64B9] focus:text-white">
                Preferences
              </div>
              <div className="px-6 py-2 cursor-pointer text-lg hover:bg-[#3C64B9] hover:text-white focus:bg-[#3C64B9] focus:text-white">
                Profile
              </div>
              <div className="px-6 py-2 cursor-pointer text-lg hover:bg-[#3C64B9] hover:text-white focus:bg-[#3C64B9] focus:text-white">
                Notifications
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <img src="/images/Logo_main.svg" alt="logo" className="w-16" />
      </div>
    </div>
  );
};
