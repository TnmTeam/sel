import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const courseMapState:any = atom({
    key: 'courseMap',
    default: {},
    effects_UNSTABLE: [persistAtom]
});

const courseArrayState = atom({
    key: 'courseList',
    default: [courseMapState],
    effects_UNSTABLE: [persistAtom]
});

const studentMapState:any = atom({
    key: 'studentMap',
    default: {},
    effects_UNSTABLE: [persistAtom]
});

const studentArrayState = atom({
    key: 'studentList',
    default: [studentMapState],
    effects_UNSTABLE: [persistAtom]
});

const loginInfo:any = atom({
    key: 'loginInfo',
    default: {},
    effects_UNSTABLE: [persistAtom]
});

export { courseArrayState, courseMapState, studentArrayState, studentMapState, loginInfo };
