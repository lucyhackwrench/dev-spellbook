import localFont from 'next/font/local';

export const firaCode = localFont({
    src: [
        {
            path: './FiraCode-Light.ttf',
            weight: '300',
            display: 'swap',
        },
        {
            path: './FiraCode-Regular.ttf',
            weight: '400',
            display: 'swap',
        },
        {
            path: './FiraCode-Medium.ttf',
            weight: '500',
            display: 'swap',
        },
        {
            path: './FiraCode-SemiBold.ttf',
            weight: '600',
            display: 'swap',
        },
        {
            path: './FiraCode-Bold.ttf',
            weight: '700',
            display: 'swap',
        },
    ],
});