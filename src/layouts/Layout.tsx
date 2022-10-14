import React, { ReactNode } from 'react';
import { Flex } from '../components/Flex/Flex';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <Flex dir="col">
            <ThemeToggle />
            {children}
        </Flex>
    );
};

export default function getLayout(page: JSX.Element) {
    return <Layout>{page}</Layout>;
}
