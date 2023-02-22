export type RepoertStateType = {
  progressReportsState: any;
  recentUploadsState: any;
  studentWrokbookState: StudentWorkbookType;
};

export type StudentWorkbookType = {
  result: StudentWorkbookData | null;
  isLoading: boolean;
};

export type StudentWorkbookData ={
  workbookId: string;
};

export type ProgressReportskType = {
  result: PopupListData;
  isLoading: boolean;
};

export type PopupListData ={
  popupList: string[];
};