// import io from "socket.io-client";
// import "./Notifications.css";

// const Notifications = () => {
//   const socket = io("http://localhost:3001");

//   const form = document.getElementById("form");
//   const input = document.getElementById("input");
//   const messages = document.getElementById("messages");

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     if (input.value) {
//       socket.emit("send_notification", input.value);
//       input.value = "";
//     }
//   });

//   socket.on("send_notification", (msg) => {
//     const item = document.createElement("li");
//     item.textContent = msg;
//     messages.appendChild(item);
//     window.scrollTo(0, document.body.scrollHeight);
//   });

//   socket.on("receive_notification", (msg) => {
//     console.log("this is it :", msg);
//   });
//   return (
//     <div className="Notifications-big-container">
//       <ul id="messages"></ul>
//       <form id="form" action="">
//         <input id="input" autocomplete="off" />
//         <button>Send</button>
//       </form>
//     </div>
//   );
// };

// export default Notifications;
