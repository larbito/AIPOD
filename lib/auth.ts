import { cookies } from 'next/headers'
import { SignJWT, jwtVerify } from 'jose'

const JWT_NAME = 'token'
const ALG = 'HS256'
const getSecret = () => new TextEncoder().encode(process.env.JWT_SECRET || 'dev_secret_change_me')

export type UserToken = {
  email: string
  isPro?: boolean
}

export async function getUser(): Promise<UserToken | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(JWT_NAME)?.value
  if (!token) return null
  try {
    const { payload } = await jwtVerify(token, getSecret())
    return payload as unknown as UserToken
  } catch {
    return null
  }
}

export async function requireUser(): Promise<UserToken> {
  const user = await getUser()
  return user || { email: '', isPro: false }
}

export async function createToken(user: UserToken): Promise<string> {
  return await new SignJWT(user as unknown as Record<string, unknown>)
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setExpirationTime('30d')
    .sign(getSecret())
}

export async function setUserCookie(user: UserToken) {
  const token = await createToken(user)
  const cookieStore = await cookies()
  cookieStore.set(JWT_NAME, token, { httpOnly: true, sameSite: 'lax', path: '/', secure: true, maxAge: 60*60*24*30 })
}

export async function clearUserCookie() {
  const cookieStore = await cookies()
  cookieStore.set(JWT_NAME, '', { path: '/', maxAge: 0 })
}
