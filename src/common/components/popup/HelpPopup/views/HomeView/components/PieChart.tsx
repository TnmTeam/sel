import { css } from "@emotion/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import img1 from "@/assets/helppopup/main/management.png";
import img2 from "@/assets/helppopup/main/behavior.png";
import img3 from "@/assets/helppopup/main/decision_making.png";
import img4 from "@/assets/helppopup/main/responsibility.png";
import img5 from "@/assets/helppopup/main/skills.png";
import img6 from "@/assets/helppopup/main/social_awareness.png";
import img7 from "@/assets/helppopup/main/self_awareness.png";
import img8 from "@/assets/helppopup/main/thinking.png";
import innerLogo from "@/assets/helppopup/main/inner_logo.png";
import { ApexOptions } from "apexcharts";

const Apexchart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const PieChart = () => {
  const donutData = {
    series: [10, 10, 10, 10, 10, 10, 10, 10],
  };

  const donutDataOptions: ApexOptions = {
    stroke: {
      width: 5,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#6787B7"],
    chart: {
      type: "donut",
    },
    legend: {
      show: false,
      position: "bottom",
    },
    responsive: [
      {
        breakpoint: 480,
      },
    ],
    plotOptions: {
      pie: {
        customScale: 0.7,
        donut: {
          size: "25%",
        },
      },
    },
    labels: [
      "SELF MANAGEMENT",
      "GOAL-DIRECTED BEHAVIOR",
      "RESPONSIBLE DECISION MAKING",
      "PERSONAL RESPONSIBILITY",
      "RELATIONSHIP SKILLS",
      "SOCIAL AWARENESS",
      "SELF AWARENESS ",
      "OPTIMISTIC THINKING",
    ],
  };

  const redDonutData = {
    series: [10, 10, 10, 10],
  };
  const redDonutDataOptions: ApexOptions = {
    stroke: {
      width: 5,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#e45734"],
    chart: {
      type: "donut",
    },
    legend: {
      show: false,
      position: "bottom",
    },
    responsive: [
      {
        breakpoint: 480,
      },
    ],
    plotOptions: {
      pie: {
        customScale: 0.7,
        donut: {
          size: "80%",
        },
      },
    },
  };

  return (
    <div css={sx.root}>
      <Apexchart
        css={sx.chart}
        options={donutDataOptions}
        series={donutData.series}
        type="donut"
        width={300}
        height={300}
      />
      <Apexchart
        css={sx.redChart}
        options={redDonutDataOptions}
        series={redDonutData.series}
        type="donut"
        width={350}
        height={350}
      />
      <Image
        css={sx.innerLogo}
        src={innerLogo}
        alt="inner_logo"
        width={40}
        height={40}
      />
      <Image css={sx.img1} src={img1} alt="management" width={20} height={20} />
      <Image css={sx.img2} src={img2} alt="management" width={20} height={20} />
      <Image css={sx.img3} src={img3} alt="management" width={20} height={20} />
      <Image css={sx.img4} src={img4} alt="management" width={20} height={20} />
      <Image css={sx.img5} src={img5} alt="management" width={20} height={20} />
      <Image css={sx.img6} src={img6} alt="management" width={20} height={20} />
      <Image css={sx.img7} src={img7} alt="management" width={20} height={20} />
      <Image css={sx.img8} src={img8} alt="management" width={20} height={20} />
    </div>
  );
};

const sx = {
  redChart: css`
    position: absolute;
    top: -41px;
    left: 9px;
  `,
  chart: css`
    transform: translate(34px, -16px);
  `,
  innerLogo: css`
    position: absolute;
    top: 106px;
    left: 165px;
  `,
  text1: css`
    position: absolute;
    top: 74px;
    left: 192px;
  `,
  img1: css`
    position: absolute;
    top: 74px;
    left: 192px;
  `,
  img2: css`
    position: absolute;
    top: 96px;
    left: 214px;
  `,
  img3: css`
    position: absolute;
    top: 131px;
    left: 214px;
  `,
  img4: css`
    position: absolute;
    top: 156px;
    left: 192px;
  `,
  img5: css`
    position: absolute;
    top: 156px;
    left: 158px;
  `,
  img6: css`
    position: absolute;
    top: 131px;
    left: 135px;
  `,
  img7: css`
    position: absolute;
    top: 100px;
    left: 135px;
  `,
  img8: css`
    position: absolute;
    top: 76px;
    left: 160px;
  `,
  root: css`
    margin: 0 1px 10px 1px;
    box-sizing: border-box;
    width: 99%;
    height: 250px;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06),
      0px 0px 0px 1px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    position: relative;
    font-size: 0.321vw;
    color: white;
  `,
};
