import {Button} from "@/components/ui/button";
import { auth } from "@/auth"
import {redirect} from "next/navigation";
import {SignOut} from "@/components/signOut";
export default async function Home() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return (
      <>
        <Button>Click me</Button>
        {session ? "Authenticated" : "Not Authenticated"}
          <SignOut/>
      </>
  );
}
