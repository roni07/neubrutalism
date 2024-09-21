import localFont from "next/font/local";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import {ConfigProvider} from "antd";
import {PRIMARY_COLOR_DEEP} from "@/app/constant/ColorContant";
import "./globals.scss";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: PRIMARY_COLOR_DEEP,
                    colorTextBase: "#262626",
                    fontSize: 16,
                    fontFamily: "'Montserrat', sans-serif"
                },
                components: {
                    Button: {
                        fontSize: 16,
                        fontWeight: 600,
                        controlHeight: 40,
                        borderRadius: 4,
                        paddingInline: 16,
                        primaryColor: "#262626",
                        defaultShadow: "3px 3px 0 #262626",
                        primaryShadow: "3px 3px 0 #262626",
                    },
                    Input: {
                        colorText: "#000000"
                    },
                }
            }}
        >
            <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <AntdRegistry>
                {children}
            </AntdRegistry>
            </body>
            </html>
        </ConfigProvider>
    );
}
