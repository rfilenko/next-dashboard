import { redirect } from 'next/navigation'
import UsersList from '@/components/UsersList'
import getSession from '@/lib/getSession'
import { getUserRole } from '@/lib/getUserRole'
import PageTitle from '@/components/PageTitle'
import { Lock, UserCogIcon } from 'lucide-react'

const Dashboard = async () => {
    const session = await getSession()

    if (!session?.user) {
        redirect('/login')
    }

    return (
        <div className='flex flex-col gap-4'>
            <h1><PageTitle title="Dashboard page" /></h1>

            {getUserRole(session.user) === 'admin' ? <UsersList /> : (
                <div className='bg-red-100 border border-gray-100 p-4 mx-auto max-w-md w-full flex flex-col justify-center items-center gap-4 shadow-lg rounded-lg'>
                    <Lock className="h-6 w-6 text-red-500" />
                    <h2 className="text-base text-center font-bold text-balance text-gray-600">Sorry, you are not authorized to view users list.</h2>
                    <p className="text-base text-center text-gray-600 flex items-center gap-2">
                        <UserCogIcon className="h-4 w-4" />
                        Current user role: {getUserRole(session.user)}
                    </p>
                </div>
            )}
        </div>
    )
}

export default Dashboard