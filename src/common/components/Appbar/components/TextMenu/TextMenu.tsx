import Link from 'next/link';
import { Button } from '@mui/material';
import { NavigationItems, WhiteButtons } from '@/common/themes/Color';
import { TextMenuType } from './types/textMenu.types';
import { useSetRecoilState } from 'recoil';
import { focusInfo } from '@/common/atom/Atom';

export const TextMenu = ({ url, currentRoute, title, buttonType }: TextMenuType) => {
    const focusState:any = useSetRecoilState(focusInfo);
    // 포커스 콤포넌트 초기화후 이동
    function goMenu() {
        //console.log("TextMenu goMenu : ");
        focusState({});
    };

    return (
        <Link
            css={{ textDecoration: 'none' }}
            href={ url } 
            onClick={goMenu}
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
        fontSize: '15pt',
        textTransform: 'none',
        marginRight: '40px',
        color: path === currentRoute ? NavigationItems.SelectedTextColor : NavigationItems.TextColor,
        ':hover': {
            color: NavigationItems.OnHoverTextColor,
        },
    }
}

const stOutlineButton = {
    fontSize: '16pt',
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