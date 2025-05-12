import PageTitle from '@/components/PageTitle'
import UserAccountActivity from '@/components/user/UserAccountActivity'
import UserLoginHistory from '@/components/user/UserLoginHistory'
import UserDetails from '@/components/user/UserDetails'
import { users as usersData } from '@/app/(admin)/users/users'

interface UserPageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: UserPageProps) {
    const { id } = await params
    const user = usersData.find(user => user.id === parseInt(id))
    return {
        title: user ? `Details page - ${user.firstName} ${user.lastName}` : 'User not found',
        description: user ? `Details page - ${user.firstName} ${user.lastName}` : 'User not found',
    }
}


const UserPage = async ({ params }: UserPageProps) => {
    const { id } = await params

    const user = usersData.find(user => user.id === parseInt(id))

    if (!user) {
        return <div>User not found</div>
    }

    return (
        <div>
            <h1 className='mb-8'><PageTitle title={`Details page`} /></h1>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <UserDetails user={user} />
                <UserLoginHistory history={user.loginHistory} />
                <UserAccountActivity user={user} />
            </div>
        </div>
    )
}


export default UserPage