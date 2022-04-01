interface Original {
  url: string;
}

interface Images {
  original: Original;
}

export default interface Gif {
  id: string;
  url: string;
  uid?: string;
  title: string;
  images: Images;
  username: string;
  import_datetime: string;
}
