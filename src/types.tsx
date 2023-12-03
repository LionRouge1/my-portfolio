export type project = {
  id: number
  name: string[]
  description: string
  featuredImage: any[]
  technologie: string[]
  link: string[]
};

export type ProjectProps = {
  id: number
  name: string[]
  description: string
  featuredImage: any[]
  technologie: string[]
  projectLink: string[]
};

export type DetailPopUpProps = {
  id: number
  name: string[]
  description: string
  featuredImage: any[]
  technologie: string[]
  projectLink: string[]
  closeWindow: () => void
}

export type stack = {
  name: string
  image: any
}

export type skillProps = {
  key: number;
  skill: string;
}

export type DeleteWriterProps = {
  titles: string[]
}