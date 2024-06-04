'use client'
import React, { useState, useTransition } from 'react'
import CardWrapper from './CardWrapper'
import * as z from 'zod'
import { LoginSchema } from '@/schemas'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { login } from '@/actions/login'
import ShowError from './ShowError'
import ShowSuccess from './ShowSuccess'

const LoginForm = () => {
    const [isPending, startTransition] = useTransition()
    // const [success, setSuccess] = useState<string | undefined>('')
    const [error, setError] = useState<string | undefined>('')

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: ''
        },
    })

    const loginHandler = (values: z.infer<typeof LoginSchema>) => {
        // axios.post('/yourapi/route', values).then and catch
        setError('')
        // setSuccess('')

        startTransition(() => {
            login(values)
                .then((data) => {
                    setError(data?.error)
                    // setSuccess(data?.success)
                })
        })
    }
    return (
        <CardWrapper
            headerLabel="Login"
            headerDescription="Welcome Back!"
            backButtonHref="/auth/register"
            backButtonLabel="Don't have an account?"
            showSocial
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(loginHandler)}
                    className='space-y-6'
                >
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder='doejohn@gmail.com'
                                            type='email'
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder='******'
                                            type='password'
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <ShowError message={error} />
                    {/* <ShowSuccess message={success} /> */}
                    <Button
                        type='submit'
                        className='w-full'
                        disabled={isPending}
                    >
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default LoginForm