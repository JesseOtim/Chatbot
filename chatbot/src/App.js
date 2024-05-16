// import Chatbot from './Chatbot';
import ChatBot from "react-simple-chatbot";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";

// const steps = [
//   {
//       id: '0',
//       message: 'Hey Geek!',

//       // This calls the next id
//       // i.e. id 1 in this case
//       trigger: '1',
//   }, {
//       id: '1',

//       // This message appears in
//       // the bot chat bubble
//       message: 'Please write your username',
//       trigger: '2'
//   }, {
//       id: '2',

//       // Here we want the user
//       // to enter input
//       user: true,
//       trigger: '3',
//   }, {
//       id: '3',
//       message: " hi {previousValue}, how can I help you?",
//       trigger: 4
//   }, {
//       id: '4',
//       options: [

//           // When we need to show a number of
//           // options to choose we create alist
//           // like this
//           // { value: 1, label: 'View Courses' },
//           // { value: 2, label: 'Read Articles' },

//       ],
//       end: true
//   }
// ];

// // Creating our own theme
// const theme = {
//   background: '#C9FF8F',
//   headerBgColor: '#197B22',
//   headerFontSize: '20px',
//   botBubbleColor: '#0F3789',
//   headerFontColor: 'white',
//   botFontColor: 'white',
//   userBubbleColor: '#FF5733',
//   userFontColor: 'white',
// };

// // Set some properties of the bot
// const config = {
//   botAvatar: "img.png",
//   floating: true,
// };

// function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to Geeksforgeeks</h1>

//       <ThemeProvider theme={theme}>
//                 <ChatBot

//                     // This appears as the header
//                     // text for the chat bot
//                     headerTitle="GeekBot"
//                     steps={steps}
//                     {...config}

//                 />
//             </ThemeProvider>
//       {/* <header className="App-header">
//       <h1>My React Chatbot</h1>
//       </header> */}
//       {/* <main>
//         <Chatbot />
//       </main> */}
//     </div>
//   );
// }
function App() {
  // Define initial state for the username
  const [ setUsername] = useState("");

  // Define steps for the chatbot
  const steps = [
    {
      id: "0",
      message: "Hey Friend!",
      trigger: "1",
    },
    {
      id: "1",
      message: "How can i help you",
      trigger: "getUsername",
    },
    {
      id: "getUsername",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: ({ previousValue }) =>
        `Hi ${previousValue}, how can I help you?`,
      trigger: "4",
    },
    {
      id: "4",
      options: [
        { value: 1, label: "View Courses" },
        { value: 2, label: "Read Articles" },
      ],
      end: true,
    },
  ];

  // Theme for the chatbot
  const theme = {
    background: "darkgreen",
    headerBgColor: "orangered",
    headerFontSize: "20px",
    botBubbleColor: "#0F3789",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "#FF5733",
    userFontColor: "white",
  };

  // Configuration for the chatbot
  const config = {
    botAvatar: "",
    floating: true,
  };

  // Function to handle username submission
  const handleUsernameSubmit = (value) => {
    setUsername(value);
  };

  return (
    <div className="App">
      <h1>Welcome to my Circus</h1>
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="GeekBot"
          steps={steps}
          {...config}
          // Pass the function to handle username submission
          handleEnd={(params) => handleUsernameSubmit(params.values[0])}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
