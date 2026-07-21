export const authConfig = {
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt"
  },
  callbacks: {
    authorized({ auth, request }: { auth: { user?: unknown } | null; request: Request & { nextUrl: URL } }) {
      const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
      if (!isAdminRoute) return true;
      return Boolean(auth?.user);
    }
  },
  providers: []
};
