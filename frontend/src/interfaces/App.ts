export interface Menu {
    id: string;
    label:string;
    icon: string;
    items?: Items[];
    to?: {name: string}
}

export interface Items {
        id: string,
        label: string,
        icon: string,
        to?: {name: string};
        items?: ItemsDinamic[];
        command: {(event: {item: ItemsDinamic}):void}
}

export interface ItemsDinamic {
    id?: string,
    label?: string,
    icon?: string,
    to?: {name: string}
    command: {(event: {item: ItemsDinamic}):void}
}
