export type VideoCardItemType = {
    item: Item;
    index: number;
};

export type Item = {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
    contentDetails: ContentDetails;
};

export type Snippet = {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    playlistId: string;
    position: string;
    resourceId: ResourceId;
    videoOwnerChannelTitle: string;
    videoOwnerChannelId: string;
};

export type Thumbnails = {
    default: Default;
    medium: Medium;
    high: High;
    standard: Standard;
};

export type ResourceId = {
    kind: string;
    videoId: string;
};

export type ContentDetails = {
    videoId: string;
    videoPublishedAt: string;
};

export type Default = {
    url: string;
    width: string;
    height: string;
};

export type High = {
    url: string;
    width: string;
    height: string;
};

export type Medium = {
    url: string;
    width: string;
    height: string;
};

export type Standard = {
    url: string;
    width: string;
    height: string;
};
