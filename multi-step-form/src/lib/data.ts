
import arcadeSvg from '../assets/icon-arcade.svg' 
import advancedSvg from '../assets/icon-advanced.svg'
import proSvg from '../assets/icon-pro.svg';
import type { addsTyps } from './types.js';


export const adds: addsTyps[] = [
    {
        title: 'Online Service',
        sub: 'Access to multiplayer games',
        priceYearly: 10,
        priceMonthly: 1,
        name: "online",
        id: 'online-service'
    },      
    {
        title: 'Large Storage',
        sub: 'Extra 1TB of cloud save',
        priceYearly: 20,
        priceMonthly: 2,
        name: "large",
        id: 'large-storage'
    },      
    {
        title: 'Customizable Profile',
        sub: 'Custom theme on your profile',
        priceYearly: 20,
        priceMonthly: 2,
        name: "customizable",
        id: 'customizable-profile'
    },      
]

export const billing = [
    {
        icon: arcadeSvg,
        title: 'Arcade',
        monthly: 9,
        yearly: 90,
        id: 'arcade'
    },
    {
        icon: advancedSvg,
        title: 'Advanced',
        monthly: 12,
        yearly: 120,
        id: 'advance'
    },
    {
        icon: proSvg,
        title: 'Pro',
        monthly: 15,
        yearly: 150,
        id: 'pro'
    }

]   