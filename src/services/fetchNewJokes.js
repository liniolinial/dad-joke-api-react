import axios from "axios";
// hooks(funcs)

export default function fetchNewJokes(
  initialPage,
  onUpdateJokes,
  onUpdateLoaded,
) {
  // loading btn: false->true->after loading->false
  onUpdateLoaded(false);

  // first loading then call api
  const fetches = [];
  const data = [];

  //load data
  let request = axios.get(
    `https://icanhazdadjoke.com/?page=${initialPage}&limit=10`,
    {
      headers: { Accept: "application/json" },
    },
  );

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
  });
}
