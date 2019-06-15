import * as path from './path';

// Product
export const PRODUCT = [
    {
        label: 'Overview',
        to: path.PRODUCT,
    },
    {
        label: 'Features',
        to: path.PRODUCT_FEATURES,
    },
    {
        label: 'Resources',
        to: path.PRODUCT_RESOURCES,
    },
    {
        label: 'Interfaces',
        to: path.PRODUCT_INTERFACES,
    },
    {
        label: 'Support',
        to: path.PRODUCT_SUPPORT,
    },
];

// Industry
export const INDUSTRY = [
    {
        label: 'All',
        to: path.INDUSTRY,
    },
    {
        label: 'Hotel',
        to: path.INDUSTRY_HOTEL,
    },
    {
        label: 'RV Park',
        to: path.INDUSTRY_RV_PARK,
    },
    {
        label: 'Campground',
        to: path.INDUSTRY_CAMPGROUND,
    },
    {
        label: 'Marina',
        to: path.INDUSTRY_MARINA,
    },
];

// About
export const ABOUT = [
    {
        label: 'About RMS',
        to: path.ABOUT,
    },
    {
        label: 'Meet the Team',
        to: path.TEAM,
    },
    {
        label: 'Partner with Us',
        to: path.PARTNER_WITH_US,
    },
];

// Contact
export const CONTACT = [
    {
        label: 'North America',
        to: path.CONTACT,
    },
    {
        label: 'Australia / Asia',
        to: path.CONTACT_AUSTRALIA_ASIA,
        external: true,
    },
    {
        label: 'New Zealand',
        to: path.CONTACT_NEW_ZEALAND,
        external: true,
    },
    {
        label: 'India',
        to: path.CONTACT_INDIA,
        external: true,
    },
    {
        label: 'Middle East',
        to: path.CONTACT_MIDDLE_EAST,
        external: true,
    },
    {
        label: 'UK & Ireland',
        to: path.CONTACT_UK_IRELAND,
        external: true,
    },
];

// Main
export const MAIN = [
    {
        label: 'Product',
        children: PRODUCT,
    },
    {
        label: 'Industries',
        children: INDUSTRY,
    },
    {
        label: 'News',
        to: path.POST,
    },
    {
        label: 'About',
        children: ABOUT,
    },
    {
        label: 'Contact',
        children: CONTACT,
    },
];

// Account - Log In
export const ACCOUNT_LOG_IN = [
    {
        label: 'Log in to RMS9',
        to: path.LOG_IN_RMS_NINE,
        external: true,
    },
    {
        label: 'Log in to RMS9+',
        to: path.LOG_IN_RMS_NINE_PLUS,
        external: true,
    },
    {
        label: 'Customer Support Center',
        to: path.CUSTOMER_SUPPORT_CENTER,
        external: true,
    },
    {
        label: 'Remote Assistance',
        to: path.REMOTE_ASSISTANCE,
        external: true,
    },
];

// Footer - One
export const FOOTER_ONE = [
    {
        label: 'Home',
        to: path.ROOT,
    },
    {
        label: 'About',
        to: path.ABOUT,
    },
    {
        label: 'News',
        to: path.POST,
    },
];

// Footer - Two
export const FOOTER_TWO = [
    {
        label: 'Careers',
        to: path.ROOT,
    },
    {
        label: 'Partnerships',
        to: path.ROOT,
    },
    {
        label: 'Referral Program',
        to: path.ROOT,
    },
];

// Footer - Three
export const FOOTER_THREE = [
    {
        label: 'Contact',
        to: path.CONTACT,
    },
    {
        label: 'Live Chat',
        to: path.ROOT,
    },
    {
        label: 'Product Support',
        to: path.PRODUCT_SUPPORT,
    },
];

// Footer - Four
export const FOOTER_FOUR = [
    {
        label: 'User License',
        to: path.ROOT,
    },
    {
        label: 'Privacy Policy',
        to: path.PRIVACY_POLICY,
    },
    {
        label: 'PCI Compliance',
        to: path.ROOT,
    },
];
