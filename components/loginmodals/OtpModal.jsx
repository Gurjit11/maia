import React from "react";

const OtpModal = ({ otp, setOtp, onVerify }) => {
  const handleVerifyOtp = () => {
    // Perform OTP verification logic here
    onVerify();
  };

  return (
    <div className="modal">
      <h2>Verify OTP</h2>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerifyOtp}>Verify OTP</button>
    </div>
  );
};

export default OtpModal;
