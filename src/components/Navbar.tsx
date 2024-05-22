import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { navLinks } from "@/lib/constants"
import { buttonVariants } from "./ui/button"
import { Braces, Code, Github, Linkedin } from "lucide-react"

const Navbar = () => {
    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <div className="flex items-center gap-x-6">
                        <Link href="/" className="flex z-40 font-semibold text-blue-600">
                            {"<"}<span className="text-green-600">PrabeshNarsinghKunwar</span>&nbsp;{"/>"}
                        </Link>
                        <div className="flex items-center">
                            <ul className="flex gap-x-2">
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
                    </div>
                    <ul className="flex">
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
                    </ul>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar
