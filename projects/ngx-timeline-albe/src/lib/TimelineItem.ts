
export interface TagAttribute {
    href?: string;
    target?: string;
    title?: string;
    src?: string;
    width?: string;
    cssclass?: string;
}
export interface ItemBody {
    tag: string;
    content: string;
    attr?: TagAttribute;
}

export interface TimelineItem {
    datetime: string;
    icon?: string;
    header?: string;
    body: ItemBody[];
    footer?: string;
}