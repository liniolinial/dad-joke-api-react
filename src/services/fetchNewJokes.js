import axios from "axios";
// hooks(funcs)

export default function fetchNewJokes(
  initialPage,
  onUpdatePage,
  onUpdateJokes,
  onUpdateLoaded,
) {
  onUpdateLoaded(false);
  onUpdatePage(true);

  const fetches = [];
  const data = [];

  let request = axios.get(
    `https://icanhazdadjoke.com/?page=${initialPage}&limit=10`,
    { headers: { Accept: "application/json" } },
  );

  // fetches.push(request);

  // fetches.push(
  //   request.then((response) => {
  //     const jokes = response.results.joke;
  //     const id = response.data.id;

  //     const isDuplicate = data.some((j) => j.id === id);
  //     if (!isDuplicate) {
  //       data.push({
  //         id,
  //         joke: jokes,
  //       });
  //     }
  //   }),
  // );
  request.then((response) => {
    const { id, joke } = response.data;

    // deny jokes which have duplicated id
    const isDuplicate = data.some((j) => j.id === id);
    if (!isDuplicate) {
      data.push({
        id,
        joke,
      });
    }
  });
  fetches.push(request);

  Promise.all(fetches).then(() => {
    onUpdateLoaded(true);
    onUpdateJokes(data);
    onUpdatePage(data);
  });
}
