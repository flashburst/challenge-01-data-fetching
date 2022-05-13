function accountDataApi() {
  let controller;
  return (url, data) => {
    controller?.abort();
    controller = new AbortController();

    return fetch(url, {
      signal: controller.signal,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((e) => {
        if (isUserAbortedRequest(e)) {
          return console.log('User Aborted Request. Do nothing');
        }

        // else rethrow error so we can catch it externally
        throw new Error(e);
      });
  };
}

export const getData = accountDataApi();

/**
 * errorMessage
 */
function isUserAbortedRequest(errorMessage) {
  return errorMessage.message.includes('The user aborted a request');
}
