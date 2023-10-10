export interface MenuItem {
  id: number;
  name: string;
  href: string;
}

export interface Blog {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  userid: string;
  userimage: string;
  comments: string[];
}
