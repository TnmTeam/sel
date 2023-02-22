import dayjs from "dayjs";
import { OnChangeDateType } from "../../../../ScheduleSummary/components/ScheduleDatePicker/types/ScheduleDatePicker.type";

export type ScheduleDetailListType = {
    title: string;
    time: string;
};

export type ScheduleDetailBoxType = {
    picDate: OnChangeDateType | null;
};

export type SchedulePopupType = {
    picDate: OnChangeDateType | null;
    changeDate: (changeVal: OnChangeDateType) => void;
    closeHandle: () => void;
};

export type ClosePopupBtnType = {
    closeHandle: () => void;
}

