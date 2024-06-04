'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import Social from './Social';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';

interface CardWrapperInterface {
    children: React.ReactNode;
    headerLabel: string;
    headerDescription: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial: boolean;
}

const CardWrapper = (
    { children, headerLabel, headerDescription, backButtonLabel, backButtonHref, showSocial }: CardWrapperInterface) => {
    return (
        <Card className="w-[400px]">
            <CardHeader className='text-center'>
                <CardTitle>{headerLabel}</CardTitle>
                <CardDescription>{headerDescription}</CardDescription>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter className='text-center justify-center'>
                <Link href={backButtonHref} className={`${buttonVariants({ variant: "link", size: 'sm' })} flex items-center`}>{backButtonLabel}</Link>
            </CardFooter>
        </Card>
    )
}

export default CardWrapper