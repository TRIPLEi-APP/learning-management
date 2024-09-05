

const Setting = () => {
    return (
        <div>
               {/* Button group */}
      <div className="flex items-center mb-10">
          <button className="px-4 py-2 bg-[#A9BF1C] text-white mr-4">Password Setting</button>
          <button className="px-4 py-2 bg-[#F4F6F8] text-[#1D2026] hover:bg-[#A9BF1C] hover:text-white mr-4">Social Media</button>
          <button className="px-4 py-2 bg-[#F4F6F8] text-[#1D2026] hover:bg-[#A9BF1C] hover:text-white mr-4">Linked Accounts</button> 
          <button className="px-4 py-2 bg-[#F4F6F8] text-[#1D2026] hover:bg-[#A9BF1C] hover:text-white mr-4">Notification</button>
      </div>
        </div>
    );
};

export default Setting;