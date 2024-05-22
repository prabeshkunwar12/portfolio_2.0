'use client'

import Link from "next/link"
import MaxWidthWrapper from "../MaxWidthWrapper"
import { navLinks } from "@/lib/constants"
import { Button, buttonVariants } from "../ui/button"
import { Braces, Code, Github, Linkedin, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [themeMode, setThemeMode] = useState<string|undefined>('')
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => {
        setThemeMode(resolvedTheme)
    }, [resolvedTheme])

    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-zinc-200 bg-background/75 dark:bg-background/75 dark:border-zinc-700 backdrop-blur-lg transition-all">
            <MaxWidthWrapper className="flex items-center justify-between">
                <div className="flex items-center gap-x-6">
                    <Link href="/" className="flex z-40 font-semibold text-blue-600">
                        {"<"}<span className="text-green-600 dark:text-green-300">PrabeshNarsinghKunwar</span>&nbsp;{"/>"}
                    </Link>
                    <ul className="hidden lg:flex items-center gap-x-2">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <Link 
                                    className={buttonVariants({
                                        variant: "code",
                                        size: "code"
                                    })}
                                    href={`#${link.id}`}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <ul className="hidden lg:flex">
                    <li>
                        <Link 
                            className={buttonVariants({
                                variant: "code",
                                size: "code",
                            })}
                            href="https://github.com/prabeshkunwar12"
                        >
                            <Github />
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={buttonVariants({
                                variant: "code",
                                size: "code",
                            })}
                            href="https://www.linkedin.com/in/prabesh-kunwar/"
                        >
                            <Linkedin />
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={buttonVariants({
                                variant: "code",
                                size: "code",
                            })}
                            href="https://leetcode.com/u/PrabAce/"
                        >
                            <Code />
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={buttonVariants({
                                variant: "code",
                                size: "code",
                            })}
                            href="https://www.hackerrank.com/profile/prabeshkunwar12"
                        >
                            <Braces />
                        </Link>
                    </li>
                    <li>
                        {themeMode==="light" ? (
                            <Button
                                variant={'code'}
                                size={'code'}
                                onClick={() => setTheme("dark")}
                            >
                                <Moon />
                            </Button>
                        ):(
                            <Button
                                variant={'code'}
                                size={'code'}
                                onClick={() => setTheme("light")}
                            >
                                <Sun />
                            </Button>
                        )}
                    </li>
                </ul>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar
