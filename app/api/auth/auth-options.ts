import SpotifyProvider from "next-auth/providers/spotify";

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-email",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "app-remote-control",
  "streaming",
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
].join(",");

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account && user)
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000,
        };
      return token;
    },
    async session({ session, token }: any) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.username = token.username;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/error",
  },
  providers: [
    SpotifyProvider({
      authorization: `https://accounts.spotify.com/authorize?scope=${scopes}`,
      // @ts-ignore
      clientId: process.env.SPOTIFY_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
  ],
};
