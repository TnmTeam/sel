export type NotificationApiType = {
    result: NotificationApiData | null;
    isLoading: boolean;
};

export type NotificationApiData = {
    models: any[];
};

export type NotificationType = {
    content: string;
    createdAt: string;
};