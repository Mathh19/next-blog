export type MetadataArray = {
  data: {
    id: string;
    attributes: {
      name: string;
      slug: string;
    };
  }[];
};

export type Category = MetadataArray;
