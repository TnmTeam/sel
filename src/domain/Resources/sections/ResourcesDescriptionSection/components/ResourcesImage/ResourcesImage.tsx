import { css } from '@emotion/react';
import { Stack, Link } from '@mui/material';
import Image from 'next/image';
import collegeReadinessSkillsImage from '@/assets/resources/img-collegeReadinessSkills.png';
import whiteBigCircle from '@/assets/resources/img-whiteBigCircle.png';
import whiteMidCircle from '@/assets/resources/img-whiteMidCircle.png';

export const ResourcesImage = () => {
    return <CollegeReadinessSkillsImage />;
};

const sx = {
    imageContainer: css`
        position: relative;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
        display: flex;
    `,
    image1: css``,
    image2: css`
        position: absolute;
        justify-content: center;
        align-items: center;
    `,
    image3: css`
        position: absolute;
        justify-content: center;
        align-items: center;
    `,
};

const CollegeReadinessSkillsImage = () => (
    <Link href='/selfAwareness' css={sx.imageContainer}>
        <Image css={sx.image1} src={whiteBigCircle} alt={'whiteBigCircle'} />
        <Image css={sx.image2} src={whiteMidCircle} alt={'whiteMidCircle'} />
        <Image
            css={sx.image3}
            src={collegeReadinessSkillsImage}
            alt={'collegeReadinessSkillsImage'}
        />
    </Link>
);
