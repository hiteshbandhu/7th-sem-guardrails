'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  // First, sign up the user
  const { data: authData, error: signUpError } = await supabase.auth.signUp(data)

  if (signUpError) {
    console.error('Signup error:', signUpError)
    redirect('/error')
  }

  if (authData.user) {
    try {
      // Update the existing profile with company info
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          company_name: formData.get('company') as string,
          updated_at: new Date().toISOString()
        })
        .eq('id', authData.user.id)

      if (profileError) {
        console.error('Error updating profile:', profileError)
        throw profileError
      }
    } catch (error) {
      console.error('Profile update failed:', error)
      redirect('/error')
    }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}