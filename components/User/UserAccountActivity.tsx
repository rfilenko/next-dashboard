import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CirclePower, Clock, UserIcon } from 'lucide-react'
import { User } from '@/app/types'

const UserAccountActivity = ({ user }: { user: User }) => {
    return (
        <Card className="w-full" data-name="UserAccountActivity">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <CardTitle>
                        <h2 className="text-lg font-semibold">
                            Account activity
                        </h2>
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <p className="text-sm flex items-center gap-2">Role: {user.role} <UserIcon className={`h-4 w-4`} /></p>
                    <p className="text-sm flex items-center gap-2">
                        <span className="font-medium">Status:</span> {user.status} <CirclePower className={`h-4 w-4 ${user.status === "online" ? "text-green-500" : "text-red-500"}`} />
                    </p>
                    <p className="text-sm flex items-center gap-2">
                        <span className="font-medium">Last active:</span> {user.lastActive ? new Date(user.lastActive).toISOString().split("T")[0] : "-"} <Clock className={`h-4 w-4`} />
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}

export default UserAccountActivity