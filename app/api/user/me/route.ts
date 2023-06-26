import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import prisma from '@/libs/prisma'

export async function GET(req: Request) {

    try {

        const { value: sessionToken } = cookies().get('sessionToken') ?? { value: '' }

        const payload: any = jwt.decode(sessionToken)

        if (!payload?.email) throw { xerr: 'Sessie is verlopen, log opnieuw in.', status: 401 }

        const user = await prisma.user.findFirst({ where: { email: payload.email } })
        if (!user) throw { xerr: 'Een ontwikkelaar met dit e-mailadres bestaat niet.', status: 404 }

        return NextResponse.json(
            {
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name
            },
            { status: 200 }
        )
    }

    catch (error: any) {
        !error.xerr && console.error(error)
        return NextResponse.json(
            error.xerr
                ? error.xerr
                : 'Er is iets mis gegaan, probeer het later nog eens.',
            { status: error.status ?? 500 }
        )
    }
}
