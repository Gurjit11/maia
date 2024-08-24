const ConsultationCard = ({ date, time, tags }) => {
    return (
      <div className="p-6 bg-[#FEF3EA] rounded-md w-full md:w-80">
        <p className="text-sm text-[#606060]">Consultation Date: {date}</p>
        <p className="text-sm text-[#606060]">Consultation Time: {time}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <div key={index} className="px-3 py-1 border border-[#DEDEDE] bg-white text-[#606060] rounded-md text-sm whitespace-nowrap">
              {tag}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ConsultationCard;
  