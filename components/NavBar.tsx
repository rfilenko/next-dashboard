import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { SignOut } from './Form/SignOut'
import getSession from '@/lib/getSession'
import { getUserRole } from '@/lib/getUserRole'
import { UserCogIcon } from 'lucide-react'
import ModeToggle from './ModeToggle'

const NavBar = async () => {
    const session = await getSession()

    return (
        <nav className="flex justify-between items-center p-4 gap-2">
            {session?.user && (
                <>
                    <h2 className='text-lg font-semibold flex items-center gap-2'>{getUserRole(session.user) === 'admin' ? 'Welcome, admin' : `Welcome, ${session.user.name}`}</h2>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-2 avatar'>
                            <Avatar>
                                {session.user.image && <AvatarImage src={session.user.image || ''} />}
                                <AvatarFallback>{session.user.name?.[0].toUpperCase() || <UserCogIcon className={`h-4 w-4`} />}</AvatarFallback>
                            </Avatar>
                        </div>
                        <ModeToggle />
                        <SignOut />
                    </div>
                </>
            )}
        </nav>
    )
}

export default NavBar