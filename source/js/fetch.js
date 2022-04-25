const Urls = {
  GET: 'https://22.javascript.pages.academy/kekstagram/data',
  POST: 'https://22.javascript.pages.academy/kekstagram',
};

//Функция для отправки заапроса на сервер и подгружения информации
const request = (onSuccess, onError, method, data) => {
  fetch(
    Urls[method],
    {
      method: method,
      body: data,
    },
  )
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    }).catch(() => {
      onError();
    });
};

export { request };
