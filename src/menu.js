import * as path from './path';

// Product
export const PRODUCT = [
    {
        label: 'RMS PMS',
        to: path.PRODUCT_RMS_PRO,
    },
    {
        label: 'RMS POS',
        to: path.PRODUCT_RMS_POS,
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
        label: 'Developers',
        to: path.PRODUCT_DEVELOPERS,
    },
    {
        label: 'Support',
        to: path.PRODUCT_SUPPORT,
        external: true,
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
    // {
    //     label: 'About RMS',
    //     to: path.ABOUT,
    // },
    // {
    //     label: 'Meet the Team',
    //     to: path.TEAM,
    // },
    // {
    //     label: 'Partner with Us',
    //     to: path.PARTNER_WITH_US,
    // },
    {
        label: 'About Us',
        to: path.ABOUTUS,
    },
    {
        label: 'Careers',
        to: path.CAREERS,
    },
    {
        label: 'Gives Back',
        to: path.RMS_GIVES,
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
        label: 'Products',
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
        label: 'RMS 9+',
        to: path.LOG_IN,
        external: true,
    },
    {
        label: 'Pay Bill',
        to: path.PAY_BILL,
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
        to: path.CAREERS,
    },
    {
        label: 'Partnerships',
        to: path.PARTNER_WITH_US,
    },
    {
        label: 'Referral Program',
        to: path.REFERRAL_PROGRAM,
    },
];

// Footer - Three
export const FOOTER_THREE = [
    {
        label: 'Contact',
        to: path.CONTACT,
    },
    {
        label: 'Developers',
        to: path.PRODUCT_DEVELOPERS,
    },
    {
        label: 'Product Support',
        to: path.PRODUCT_SUPPORT,
        external: true,
    },
];

// Footer - Four
export const FOOTER_FOUR = [
    {
        label: 'User License',
        to: path.USER_LICENSE,
    },
    {
        label: 'Privacy Policy',
        to: path.PRIVACY_POLICY,
    },
    {
        label: 'PCI Compliance',
        to: path.PCI_COMPLIANCE,
    },
];
