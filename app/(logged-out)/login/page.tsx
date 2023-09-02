import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/auth-options";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginButton } from "@/app/(logged-out)/login/login-button";
import { redirect } from "next/navigation";

export default async function Login() {
  // @ts-ignore
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return (
    <div className="h-full flex flex-col items-center justify-center ">
      <Card className="w-[300px] flex flex-col gap-2">
        <CardHeader>
          <CardTitle>Next JS Spotify</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col">
          <LoginButton />
        </CardContent>
      </Card>
    </div>
  );
}
