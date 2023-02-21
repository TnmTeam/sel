import { css } from '@emotion/react';
import Image from 'next/image';
import { ChartType } from './types/chart.type';
import { useState, useEffect } from 'react';

import ChartLineImage from '@/assets/overview/img-chartLine.png';
import ChartCenterImage from '@/assets/overview/img-chartCenter.png';

export const ChartLine = ({ rate }: ChartType) => {
    const Angle = 240;
    const startAngle = 150;
    const startPoint = startAngle - 360;

    const [point, setPoint] = useState(startPoint);

    useEffect(() => {
        setPoint(startPoint + (rate/10*Angle));
    });

    return <Image css={stLine(point)} src={ChartLineImage} alt={'ChartLine'} />;
};

export const ChartCenter = () => {
    return <Image css={sx.center} src={ChartCenterImage} alt={'ChartCenter'} />;
};

const sx = {
    center: css`
        width: 50px;
        height: 50px;
        opacity: 0.2;
    `,
};

const stLine = (point: number) => {
    return css`
        width: 200px;
        transform: rotate(${point}deg);
        transform-origin: left center;
        transition: all ease-out 0.5s;
    `
}