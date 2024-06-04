'use client'
import React, { useState, useTransition } from 'react'
import CardWrapper from './CardWrapper'
import * as z from 'zod'
import { RegisterSchema } from '@/schemas'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { register } from '@/actions/register'
import ShowError from './ShowError'
import ShowSuccess from './ShowSuccess'

const RegisterForm = () => {
    const [isPending, startTransition] = useTransition()
    const [success, setSuccess] = useState<string | undefined>('')
    const [error, setError] = useState<string | undefined>('')

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
    })

    const registerHandler = (values: z.infer<typeof RegisterSchema>) => {
        // axios.post('/yourapi/route', values).then and catch
        setError('')
        setSuccess('')

        startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error)
                    setSuccess(data.success)
                })
        })
    }
    return (
        <CardWrapper
            headerLabel="Register"
            headerDescription="Create an account"
            backButtonHref="/auth/login"
            backButtonLabel="Already have an account?"
            showSocial
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(registerHandler)}
                    className='space-y-6'
                >
                    <div className='space-y-4'>
                        <div className='flex items-center space-x-4'>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder='Jane doe'
                                                type='text'
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name='email'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder='jane@gmail.com'
                                                type='email'
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
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
                    <ShowSuccess message={success} />
                    <Button
                        type='submit'
                        className='w-full'
                        disabled={isPending}
                    >
                        Register
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default RegisterForm