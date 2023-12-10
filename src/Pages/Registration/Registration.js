// import React, { useState } from "react";
// import RegistrationOne from "./RegistrationOne";
// import RegistrationTwo from "./RegistrationTwo";

// const Registration = () => {
//   const [step, setStep] = useState(1);

//   const handleNext = () => {
//     setStep(step + 1);
//   };

//   const handleRegister = () => {
//     // Perform registration logic here, e.g., submit data to the database
//     console.log("Registration completed!");
//   };

//   return (
//     <div>
//       {step === 1 && <RegistrationOne onNext={handleNext} />}
//       {step === 2 && <RegistrationTwo onRegister={handleRegister} />}
//     </div>
//   );
// };

// export default Registration;

// Registration.js
// import React, { useState } from "react";
// import RegistrationOne from "./RegistrationOne";
// import RegistrationTwo from "./RegistrationTwo";

// const Registration = () => {
//   const [step, setStep] = useState(1);

//   const handleNext = () => {
//     setStep(step + 1);
//   };

//   const handleRegister = (userData) => {
//     // Here, you can perform the registration logic like submitting data to the database
//     // For example, assuming you have an API call for registration:
//     fetch('your_registration_endpoint', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData), // userData contains the registration data
//     })
//     .then(response => response.json())
//     .then(data => {
//       // Handle success response
//       console.log("Registration successful:", data);
//     })
//     .catch(error => {
//       // Handle error
//       console.error("Registration failed:", error);
//     });
//   };

//   return (
//     <div>
//       {step === 1 && <RegistrationOne onNext={handleNext} />} {/* Ensure passing onNext */}
//       {step === 2 && <RegistrationTwo onRegister={handleRegister} />}
//     </div>
//   );
// };

// export default Registration;
// Registration.js
// import React, { useState } from "react";
// import RegistrationOne from "./RegistrationOne";
// import RegistrationTwo from "./RegistrationTwo";

// const Registration = () => {
//   const [step, setStep] = useState(1);

//   const handleNext = () => {
//     setStep(step + 1);
//   };

//   return (
//     <div>
//       {step === 1 && <RegistrationOne onNext={handleNext} />}
//       {step === 2 && <RegistrationTwo />}
//     </div>
//   );
// };

// export default Registration;
