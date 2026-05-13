import "./globals.css";
import Header from "../components/Header/page.jsx";
import Footer from "./../components/Footer/page.jsx";

export const metadata = {
    title: "Sistema de Controle Hospitalar",
    description: "Site de controle hospitalar para gerenciamento de pacientes, médicos e chamados.",
    icons: {
        icon: "/icons/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}