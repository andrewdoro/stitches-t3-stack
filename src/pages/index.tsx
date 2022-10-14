import type { NextPage } from 'next';
import { trpc } from '../utils/trpc';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import { TechnologyCard } from '../components/PreviewComponents/TechnologyCard/TechnologyCard';
import { AuthShowcase } from '../components/PreviewComponents/AuthShowcase/AuthShowcase';
import { Flex } from '../components/Flex/Flex';
import { Box } from '../components/Box/Box';

const Home: NextPage = () => {
    const hello = trpc.example.hello.useQuery({ text: 'from tRPC' });

    return (
        <Flex dir="col">
            <Box css={{ marginLeft: 'auto' }}>
                <ThemeToggle />
            </Box>
            <Flex dir="col" align="center">
                <h1>
                    Create <span>T3</span> App
                </h1>
                <p>This stack uses:</p>
                <Flex dir="col" gap="md">
                    <TechnologyCard
                        name="NextJS"
                        description="The React framework for production"
                        documentation="https://nextjs.org/"
                    />
                    <TechnologyCard
                        name="TypeScript"
                        description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
                        documentation="https://www.typescriptlang.org/"
                    />
                    <TechnologyCard
                        name="Stitches"
                        description="CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience."
                        documentation="https://stitches.dev/"
                    />
                    <TechnologyCard
                        name="tRPC"
                        description="End-to-end typesafe APIs made easy"
                        documentation="https://trpc.io/"
                    />
                    <TechnologyCard
                        name="Next-Auth"
                        description="Authentication for Next.js"
                        documentation="https://next-auth.js.org/"
                    />
                    <TechnologyCard
                        name="Prisma"
                        description="Build data-driven JavaScript & TypeScript apps in less time"
                        documentation="https://www.prisma.io/docs/"
                    />
                </Flex>
                <div>{hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}</div>
                <AuthShowcase />
            </Flex>
        </Flex>
    );
};

export default Home;
