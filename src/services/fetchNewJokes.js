import axios from "axios";
// hooks(funcs)

export default function fetchNewJokes(onUpdateJokes, onUpdateLoaded) {
  onUpdateLoaded(false);

  const fetches = [];
  const data = [];

  // for (let i = 0; i < 10; i++) {
  let request = axios.get("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });

  request.then((response) => {
    const { id, joke } = response.data;
    const isDuplicate = data.some((j) => j.id === id);

    if (!isDuplicate) {
      data.push({
        id,
        joke,
      });
    }
  });

  fetches.push(request);
}

Promise.all(fetches).then(() => {
  onUpdateLoaded(true);
  onUpdateJokes(data);
});
// }
