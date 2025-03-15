import { useState } from "react";

const StateObject = () => {
  const [OTT, setOTT] = useState({
    WebSeries: "Money Heist",             // Object as a Initial value
    Platform: "Amazon"
  });

  //   function changeState(event) {
  //     setOTT({
  //       WebSeries: "War",
  //       Platform: "Netflix",
  //     });
  //   }

  return (
    <div>
      <h1>Name : {OTT.WebSeries}</h1>
      <h1>Platform : {OTT.Platform}</h1>
      <button onClick={() => setOTT({ WebSeries: "War", Platform: "Netflix" })}>
        Change
      </button>
    </div>
  );
};
export default StateObject;



// By using Function

// import { useState } from "react";

// const StateObject = () => {
//   const [OTT, setOTT] = useState({
//     WebSeries: "Money Heist",
//     Platform: "Amazon"
//   });

//   function changeState(event) {
//     setOTT({
//       WebSeries: "War",
//       Platform: "Netflix",
//     });
//   }

//   return (
//     <div>
//       <h1>Name : {OTT.WebSeries}</h1>
//       <h1>Platform : {OTT.Platform}</h1>
//       <button onClick = {(event) => changeState(event)}>Change</button>
//     </div>
//   );
// };
// export default StateObject;
