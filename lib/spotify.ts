"use server";

export async function getMe(token: string) {
  return fetch("https://api.spotify.com/v1/me", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
}

export async function getTop(token: string, type: "artists" | "tracks") {
  return fetch(`https://api.spotify.com/v1/me/top/${type}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
}
