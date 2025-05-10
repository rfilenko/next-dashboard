import { UserInfo } from '@/components/UserInfo'
import { redirect } from 'next/navigation'
import getSession from '@/lib/getSession'

const SettingsPage = async () => {
    const session = await getSession()

    if (!session?.user) {
        redirect('/login')
    }

    return (
        <div className='h-full'>
            <h1 className="my-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">Settings page</h1>

            <UserInfo user={session.user} className="col-span-3 justify-self-start" />
        </div>
    )
}

export default SettingsPage