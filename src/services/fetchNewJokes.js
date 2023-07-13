import axios from "axios";

export default function fetchNewJokes(page, onUpdateJokes, onUpdateLoaded) {
  onUpdateLoaded(false);
  const data = [];

  let request = axios.get(
    `https://icanhazdadjoke.com/search?page=${page}&limit=10`,
    {
      headers: { Accept: "application/json" },
    },
  );

  request.then((response) => {
    const jokes = response.data.results;

    jokes.forEach((joke) => {
      joke.upVotes = 0;
      data.push(joke);
    });

    onUpdateJokes(data);
    onUpdateLoaded(true);
  });
}

//mit setTimeout
//  for (let initialPage = 1; initialPage < 75; initialPage++) {
// HIER PROBLEMATISCH!!!: EINMAL GEHT BIS ZUM 75-> ERROR 429(zu viel ANFRAGE)
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
