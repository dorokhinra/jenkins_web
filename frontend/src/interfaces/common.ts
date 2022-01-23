export interface Menu {
    id?: string;
    label?:string;
    icon?: string;
    items?: Items[]
}

export interface Items {
        id?: string,
        label?: string,
        icon?: string,
        items?: ItemsDinamic[]
}

export interface ItemsDinamic {
    label?: string,
    icon?: string,
    to?: {name: string}
}

export interface ApiItems {
    label: string,
    icon: string,
    items?: [
        {
            [key:string]: string
        }
    ]
}