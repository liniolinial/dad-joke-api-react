import axios from "axios";
// hooks(funcs)

export default function fetchNewJokes(onUpdateJokes, onUpdateLoaded) {
  // loading btn: false->true->after loading->false
  onUpdateLoaded(false);

  // first loading then call api

  const fetches = [];
  const data = [];
  //load data
  for (let i = 0; i < 10; i++) {
    let request = axios.get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });

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
  }

  Promise.all(fetches).then(() => {
    onUpdateLoaded(true);
    onUpdateJokes(data);
  });
}
