import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function requireAuth() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    redirect('/auth/sign-in')
  }

  return session
}

export async function requireAdmin() {
  const session = await requireAuth()

  if (session.user.role !== 'ADMIN') {
    redirect('/')
  }

  return session
}

export async function getSession() {
  // Returns null if not logged in — does NOT redirect
  // Use this when you want to check auth without forcing login
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  return session
}