export interface Iimages {
  images: (
    | {
        date: string;
        copyright: string;
        imageid: number;
        idsid: number;
        format: string;
        description: null;
        technique: null;
        renditionnumber: string;
        displayorder: number;
        baseimageurl: string;
        alttext: null;
        width: number;
        publiccaption: null;
        iiifbaseuri: string;
        height: number;
      }
    | {
        date: string;
        copyright: string;
        imageid: number;
        idsid: number;
        format: string;
        description: null;
        technique: null;
        renditionnumber: string;
        displayorder: number;
        baseimageurl: string;
        alttext: null;
        width: number;
        publiccaption: string;
        iiifbaseuri: string;
        height: number;
      }
  )[];
}

export interface Iworktypes {
  worktypes: {
    worktypeid: string;
    worktype: string;
  }[];
}

export interface Icolors {
  colors: {
    color: string;
    spectrum: string;
    hue: string;
    percent: number;
    css3: string;
  }[];
}

export interface Iseealso {
  seeAlso: {
    id: string;
    type: string;
    format: string;
    profile: string;
  }[];
}
