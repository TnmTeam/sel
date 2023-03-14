import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography,
    Link,
    Stack,
} from '@mui/material';
import profile from '@/assets/navigation/img-profile.png';
import noprofile from '@/assets/navigation/img-profile-nophoto.png';
import ImpacterPathwayprofile from '@/assets/navigation/img-profile-ImpacterPathway.png';
import Image from 'next/image';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useNavigationView } from '@/domain/Navigation/views/useNavigationView';
import { CustomProgress } from '@/common/components/progress';

export const NotificationDialogContent = () => {
    const { notificationState } = useNavigationView();

    const colorData = {
        Basic: '#147AD6',
        Late: '#EA4848',
        Submit: '#53B232',
    };

    if (!notificationState?.result || notificationState?.isLoading) {
        return (
            <Stack>
                <Stack
                    height={'452px'}
                    justifyContent='center'
                    alignItems={'center'}
                >
                    <CustomProgress />
                </Stack>
            </Stack>
        );
    }

    const Content = [
        {
            title: '',
            name: '',
            date: '',
            icon: ImpacterPathwayprofile,
            Type: '',
        },
    ];

    notificationState?.result.models.map((it, index) => {
        Content[index] = {
            title: it.content,
            name: '',
            date: it.createdAt,
            icon: ImpacterPathwayprofile,
            Type: colorData.Basic,
        };
    });

    return (
        <Stack>
            {
                (notificationState?.result.models.length > 0) ?
                    Content.map((it, index) => (
                        <Link style={{ textDecoration: 'none' }} key={index}>
                            {/*<Link href='/account' style={{textDecoration:"none"}} key={index}>*/}
                            <List>
                                <ListItem>
                                    <FiberManualRecordIcon
                                        sx={{ color: `${it.Type}` }}
                                    />
                                    <ListItemText sx={{ ml: '10px' }}>
                                        <Typography fontWeight='bold' color='black'>
                                            {it.title}
                                        </Typography>
                                        <Typography
                                            fontSize='11pt'
                                            color='gray'
                                        >{`${it.name}ㆍ${it.date}`}</Typography>
                                    </ListItemText>
                                    <ListItemAvatar sx={{ mr: '-20pt' }}>
                                        <Avatar>
                                            <Image
                                                src={it.icon}
                                                alt={'img'}
                                                width='40'
                                                height='40'
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                </ListItem>
                            </List>
                        </Link>
                    ))
                :
                    null
            }
        </Stack>
    );

    /*
  const Content = [
    { title: "Highlights",      name: "Impacter Support",    date: "Dec 20, 2022 at 1:20PM", icon: ImpacterPathwayprofile, Type:"Basic"},
    { title: "New Work Added!", name: "Jaime Doe",           date: "Dec 20, 2022 at 1:20PM", icon: profile, Type:"Basic"},
    { title: "New Work Added!", name: "Jamie Doe",           date: "Dec 20, 2022 at 1:20PM", icon: profile, Type:"Basic"},
    { title: "Late Work",       name: "Jamie Doe",           date: "Dec 20, 2022 at 1:20PM", icon: profile, Type:"Late" },
  ]
  const ContentList = () => {
    const Arr = []
    
    for (let i = 0; i < 4; i++) {
      // if (Content[i].Type == "Basic") { Content[i].Type = "#147AD6"}
      // else if (Content[i].Type == "Late") { Content[i].Type = "#EA4848"}
      // else if ( Content[i].Type == "Submit") { Content[i].Type = "#53B232"}
      
      Arr.push(
        <Link href="/account" style={{textDecoration:"none"}}>
          <List>
            <ListItem>
              <FiberManualRecordIcon sx={{color:`${Content[i].Type}`}}/>
              <ListItemText sx={{ml : "10px"}}>
              <Typography fontWeight="bold" color="black">{Content[i].title}</Typography>
              <Typography fontSize="11pt" color="gray">{`${Content[i].name}ㆍ${Content[i].date}`}</Typography>
              </ListItemText>
              <ListItemAvatar sx={{mr : "-20pt"}}>
                <Avatar>
                  <Image src={Content[i].icon} alt={"img"} width="40" height="40"/>
                </Avatar>
              </ListItemAvatar>
            </ListItem>
          </List>
        </Link>)
    }
    return Arr;
  }
   return <div> { ContentList() }</div>;
*/
};
