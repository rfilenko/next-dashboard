import { redirect } from 'next/navigation'
import UsersList from '@/components/UsersList'
import getSession from '@/lib/getSession'
import { getUserRole } from '@/lib/getUserRole'
import PageTitle from '@/components/PageTitle'

const Dashboard = async () => {
    const session = await getSession()

    if (!session?.user) {
        redirect('/login')          
    }

    return (
        <div>
            <h1><PageTitle title="Dashboard page" /></h1>

            {getUserRole(session.user) === 'admin' ? <UsersList /> : <p>Sorry, you are not authorized to view users list</p>}
        </div>
    )
}

export default Dashboard