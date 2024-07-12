import React from "react";

const LoginModal = ({ mobileNumber, setMobileNumber, onNext }) => {
  const handleSendOtp = () => {
    // Perform validation and send OTP logic here
    onNext();
  };

  return (
    <div className="bg-white text-black">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <button onClick={handleSendOtp}>Send OTP</button>
    </div>
  );
};

export default LoginModal;
