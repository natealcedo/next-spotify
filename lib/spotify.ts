"use server";

interface Image {
  height: null | number;
  url: string | null;
  width: null | number;
}

export interface PlayList {
  collaborative: false;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Image[];
  name: string;
  primary_color: null;
  type: "playlist";
  uri: "spotify:playlist:37i9dQZEVXcHur2O5LT4Tr";
}

export interface SpotifyResponse {
  href: string;
  items: PlayList[];
  limit: number;
  next: string;
  offset: number;
  previous: null | string;
  total: number;
}

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

export async function getUsersTopPlaylists(token: string): Promise<SpotifyResponse> {
  return fetch("https://api.spotify.com/v1/me/playlists?limit=6", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
}
