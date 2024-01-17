import './globals.css';
import Wrapper from '@/app/rootWrapper';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <link rel="icon" href="/assets/icons/logo.svg" type="image/svg+xml" />
            <title>Alluneed Marketing</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <body>
                <Wrapper>{children}</Wrapper>
            </body>
        </html>
    );
}
