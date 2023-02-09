export type ScheduleDetailListType = {
    title: string;
    // date: string;
    time: string;
};

export type ScheduleDetailBoxType = {
    // title: string;
    // date: string;
    // time: string;
    picDate: string;
    detailList: ScheduleDetailItemType[];
};


export type ScheduleDetailItemType = {
    title: string;
    date: string;
    time: string;
  };