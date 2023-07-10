import axios from "axios";
// hooks(funcs)

export default function fetchNewJokes(page, onUpdateJokes, onUpdateLoaded) {
  const data = [];
  onUpdateLoaded(false);

  let request = axios.get(
    `https://icanhazdadjoke.com/search?page=${page}&limit=10`,
    {
      headers: { Accept: "application/json" },
    },
  );

  request.then((response) => {
    const jokes = response.data.results;
    jokes.forEach((joke) => {
      data.push(joke);
    });

    onUpdateJokes(data);
  });

  // fetches.push(request);

  // Promise.all(fetches).then(() => {
  //   // onUpdateLoaded(true);
  //   onUpdateJokes(data);
  // });
  onUpdateLoaded(true);
}

//mit setTimeout
//  for (let initialPage = 1; initialPage < 75; initialPage++) {
// setTimeout(() => {
// let request = axios.get(
//   `https://icanhazdadjoke.com/?page=${initialPage}&limit=10`,
//   { headers: { Accept: "application/json" } },
// );
//       request.then((response) => {
//         const { id, joke } = response.data;

//         // deny jokes which have duplicated id
//         const isDuplicate = data.some((j) => j.id === id);
//         if (!isDuplicate) {
//           data.push({
//             id,
//             joke,
//           });
//         }
//       });

//       fetches.push(request);

//       if (fetches.length === 74) {
//         Promise.all(fetches).then(() => {
//           onUpdateLoaded(true);
//           onUpdateJokes(data);
//         });
//       }
//       // Dein bestehender Code für die Anfrage
//     }, 5000); // Verzögerung von 1 Sekunde zwischen den Anfragen
//   }
// }
