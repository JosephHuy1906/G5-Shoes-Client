import PrimaryLayout from '@/core/layouts/PrimaryLayout/PrimaryLayout.component';
import './global.scss';
export const metadata = {
    title: 'G5 Shoes',
    description: 'G5 Shoes app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <PrimaryLayout>{children}</PrimaryLayout>
            </body>
        </html>
    );
}
