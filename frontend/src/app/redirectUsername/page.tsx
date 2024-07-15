"use client"; // marks the component as a client component
import nookies from 'nookies';
import React from 'react'
import {getUserData} from '@/app/utils/firebaseFirestore'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import * as z from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
const formSchema = z.object({
  username: z.string().min(3).max(20),
})

// I want to get passed into here the user email and UID then 
// user will create a username
// We will take all the username, email, and UID and store it in the database
// Then we will redirect to the homepage



// interface for our user object
interface User {
  email: string;
  uid: string;
  username: string;

}


function FormPage() {
  const [user, setUser] = useState<User | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ''
    }
  })

  useEffect(() => {
    async function fetchUserData() {
        try {
            const response = await fetch("/api/user", {
                method: 'GET',

            });

            if (response.ok) {
                const data = await response.json();
                console.log("User data:", data);
                setUser(data);
            } else {
                console.error("Failed to get user data");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    fetchUserData();
}, []);
  const handleSubmit = () => {
    console.log('Submitted')
  }


  return (
    <div className='h-screen flex justify-center items-center bg-black'>
      <main className='flex flex-col '>
        <h1 className=' flex items-center justify-center font-extrabold text-6xl text-mustard '> Form Page</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4 h-[300px]">
            <FormField control={form.control} name="username" render={({field}) =>{
              return <FormItem>
                <FormLabel className="flex justify-center text-white text-3xl font-bold"> User name</FormLabel>
                <FormControl>
                  <Input placeholder='Enter' {...field } />
                </FormControl>
                <FormMessage/>
              </FormItem>
            } }/>
            <Button typeof='submit' className='w-full bg-darkest-purple'> Submit </Button>
            </form>

          </Form>
      </main>
    </div>
  )
}

export default FormPage
