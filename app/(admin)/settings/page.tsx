import { UserInfo } from '@/components/UserInfo'
import { redirect } from 'next/navigation'
import getSession from '@/lib/getSession'
import PageTitle from '@/components/PageTitle'

export const metadata = {
    title: 'Settings page',
    description: 'Settings page',
}

const SettingsPage = async () => {
    const session = await getSession()

    if (!session?.user) {
        redirect('/login')
    }

    return (
        <div className='h-full'>
            <h1><PageTitle title="Settings page" /></h1>

            <UserInfo user={session.user} className="col-span-3 justify-self-start" />
        </div>
    )
}

export default SettingsPage