import localFont from 'next/font/local';

export const firaCode = localFont({
    src: [
        {
            path: './FiraCode-Light.ttf',
            weight: '300',
        },
        {
            path: './FiraCode-Regular.ttf',
            weight: '400',
        },
        {
            path: './FiraCode-Medium.ttf',
            weight: '500',
        },
        {
            path: './FiraCode-SemiBold.ttf',
            weight: '600',
        },
        {
            path: './FiraCode-Bold.ttf',
            weight: '700',
        },
    ],
});