import Link from 'next/link';
import { Button } from '@mui/material';
import { NavigationItems, WhiteButtons } from '@/common/themes/Color';
import { TextMenuType } from './types/textMenu.types';

export const TextMenu = ({ url, currentRoute, title, buttonType }: TextMenuType) => {
    return (
        <Link
            css={{ textDecoration: 'none' }}
            href={ url }
        >
            <Button
                sx={ buttonType === 'text' ? stTextButton(url, currentRoute) : stOutlineButton }
                color='primary'
                variant={ buttonType === 'text' ? 'text' : 'outlined'}
            >
                { title }
            </Button>
        </Link>
    )
}

const stTextButton = (path: string, currentRoute: string) => {
    return {
        fontSize: '16pt',
        textTransform: 'none',
        marginRight: '40px',
        color: path === currentRoute ? NavigationItems.SelectedTextColor : NavigationItems.TextColor,
        ':hover': {
            color: NavigationItems.OnHoverTextColor,
        },
    }
}

const stOutlineButton = {
    fontSize: '18pt',
    backgroundColor: WhiteButtons.ButtonColor,
    color: WhiteButtons.TextColor,
    marginRight: '40px',
    ':hover': {
        backgroundColor:
            WhiteButtons.onHoverButtonColor,
        color: WhiteButtons.OnHoverTextColor,
        border: '0',
    },
    border: '0',
}