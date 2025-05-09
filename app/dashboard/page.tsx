import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { UserInfo } from '@/components/UserInfo'
import UsersList from '@/components/UsersList'

const Dashboard = async () => {
    const session = await auth()

    if (!session?.user) {
        redirect('/login')
    }

    return (
        <div className='space-y-8'>
            <h1 className="text-2xl font-bold mb-2 grid col-span-3 justify-self-start">Dashboard Page</h1>
            <UserInfo user={session.user} className="col-span-3 justify-self-start" />
            <UsersList />
        </div>
    )
}

export default Dashboard