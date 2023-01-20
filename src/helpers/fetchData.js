export function fetchData(url, data) {
  return new Promise((resolve) => {
    const dataToSend = {
      method: "POST",
      headers: {
        Accept: "application/json",

        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(url, dataToSend)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        resolve(error);
      });
  });
}
