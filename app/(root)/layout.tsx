import Sidebar from "@/components/Sidebar";
import "../globals.css";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = {firstnName:'Mohammad',lastName:'Martakoush'}
    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={loggedIn}></Sidebar>
            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image src={'/icons/logo.svg'} width={30} height={30} alt="menu icon"></Image>
                    <div>
                        <MobileNav
                            user={loggedIn}
                        ></MobileNav>
                    </div>
                </div>
            {children}
            </div>
        </main>
);
}
