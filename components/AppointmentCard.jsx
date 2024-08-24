const AppointmentCard = ({ photo, name, token, date, clinic, patientName }) => {
    return (
      <div className="p-6 bg-[#E6F3F2] flex flex-col gap-2 rounded-md w-full md:w-80">
        <div className="bg-[#F7F5F3] rounded-full w-24 px-2 ">
          <p className="text-[#E29578] text-center">Token : {token}</p>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 ">
                <img src={photo} className="rounded-full"/>
            </div>
            <p className="font-semibold text-sm text-[#2B4360]">{name}</p>
        </div>
       
        <p className="text-sm text-[#606060]">Patient Name : {patientName}</p>
        <p className="text-sm text-[#606060]">Appointment Date : {date}</p>
        <p className="text-sm text-[#606060]">Clinic : {clinic}</p>
      </div>
    );
  };
  
  export default AppointmentCard;