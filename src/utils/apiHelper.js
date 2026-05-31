import fetch from "node-fetch";

export async function postData(url, payload) {
  let response = await fetch(url, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });
  const body = await response.json();
  return {
    status: response.status,
    body: body,
  };
}

export async function getData(url) {
  let response = await fetch(url, {
    method: "Get",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const body = await response.json();
  return {
    status: response.status,
    body: body,
  };
}
