import { css } from '@emotion/react';
import Image from 'next/image';
import { ChartType } from './types/chart.type';

import ChartLineImage from '@/assets/overview/img-chartLine.png';
import ChartCenterImage from '@/assets/overview/img-chartCenter.png';

export const ChartLine = ({ rate }: ChartType) => {
    return <Image css={sx.line} src={ChartLineImage} alt={'ChartLine'} />;
};

export const ChartCenter = () => {
    return <Image css={sx.center} src={ChartCenterImage} alt={'ChartCenter'} />;
};

const sx = {
    line: css`
        width: 200px;
        transform: rotate(-20deg);
        transform-origin: left center;
    `,
    center: css`
        width: 50px;
        height: 50px;
        opacity: 0.2;
    `,
};
