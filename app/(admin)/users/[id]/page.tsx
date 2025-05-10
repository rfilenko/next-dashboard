import PageTitle from '@/components/PageTitle'
import UserAccountActivity from '@/components/User/UserAccountActivity'
import UserLoginHistory from '@/components/User/UserLoginHistory'
import UserDetails from '@/components/User/UserDetails'

interface UserPageProps {
    params: Promise<{ id: string }>
}

const UserPage = async ({ params }: UserPageProps) => {
    const { id } = await params

    const response = await fetch(`http://localhost:3000/api/users/${id}`)
    const user = await response.json()

    if (!user) {
        return <div>User not found</div>
    }

    return (
        <div>
            <h1 className='mb-8'><PageTitle title={`User's details page`} /></h1>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <UserDetails user={user} />
                <UserLoginHistory history={user.loginHistory} />
                <UserAccountActivity user={user} />
            </div>
        </div>
    )
}


export default UserPage