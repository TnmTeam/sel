import { Typography, Stack, Avatar, Badge} from "@mui/material";
import { styled } from "@mui/system";
import { PhotoPopup } from "../../../EditPhotoSection/components";
import { profileProps } from "../../ProfileSection";

export const ProfilePhotoSection = ({photoTitle, photoUrl}:profileProps) => {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }));
      
      const SmallAvatar = styled(Avatar)(({ theme }) => ({
        width: 22,
        height: 22,
        border: `2px solid ${theme.palette.background.paper}`,
      }));

    return (
        <>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                minHeight="400px"
            >
                <Typography variant="h5">{photoTitle}</Typography>

                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                    badgeContent={
                        <PhotoPopup />
                    }
                >
                    <Avatar alt="" src={photoUrl} sx={{ width: 120, height: 120 }} />
                </Badge>
                
            </Stack>
        </>
    );
};
