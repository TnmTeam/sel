import { Typography, Stack, Avatar, Badge} from "@mui/material";
import { styled } from "@mui/system";
import { PhotoPopup } from "../../../EditPhotoSection/components";
import { profileProps } from "../../ProfileSection";

export const ProfilePhotoSection = ({photoTitle, photoUrl}:profileProps) => {
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
