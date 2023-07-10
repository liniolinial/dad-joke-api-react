import axios from "axios";
// hooks(funcs)

const LIMIT = 10;

export default function fetchNewJokes(page, onUpdateJokes, onUpdateLoaded) {
  onUpdateLoaded(false);

  const fetches = [];
  const data = [];

  // for (let i = 0; i < 10; i++) {
  let request = axios.get(
    `https://icanhazdadjoke.com/search?page=${page}&limit=10`,
    {
      headers: { Accept: "application/json" },
    },
  );

  request
    .then((response) => {
      console.log(response);
      response.data.results.forEach((item) => {
        data.push(item);
      });
      onUpdateJokes(data);

      // const { id, joke } = response.data;
      // console.log(response.data);
      // const isDuplicate = data.some((j) => j.id === id);

      // if (!isDuplicate) {
      //   data.push({
      //     id,
      //     joke,
      //   });
      // }
    })
    .then(() => {
      onUpdateLoaded(true);
    });

  // fetches.push(request);

  // }

  // Promise.all(fetches).then(() => {
  //   // onUpdateLoaded(true);
  //   // onUpdateJokes(data);
  // });
}
