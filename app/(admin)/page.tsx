import { UserInfo } from "@/components/User/UserInfo";
import { redirect } from "next/navigation";
import getSession from "@/lib/getSession";

const HomePage = async () => {
    const session = await getSession()

    return (
        <div className="max-w-4xl mx-auto py-10 h-full">
            {session?.user ? <UserInfo user={session.user} /> : redirect('/login')}
        </div>
    )
}

export default HomePage