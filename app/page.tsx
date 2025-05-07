import { UserInfo } from "@/components/UserInfo";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await auth()

  return (
    <div className="max-w-4xl mx-auto py-10 h-full">
      {session?.user ? <UserInfo user={session.user} /> : redirect('/login')}
    </div>
  );
}

export default Home
