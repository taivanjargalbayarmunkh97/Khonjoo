import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <link rel="icon" href="/assets/icons/logo.svg" type="image/svg+xml" />
            <title>Alluneed Marketing</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <body>
                <Header />
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    );
}
