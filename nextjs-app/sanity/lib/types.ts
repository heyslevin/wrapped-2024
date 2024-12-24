/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Accordion = {
  _type: "accordion";
  title?: string;
  caption?: string;
  heading?: string;
  text?: string;
  accordionItems?: Array<{
    title?: string;
    description?: string;
    _type: "item";
    _key: string;
  }>;
};

export type Metrics = {
  _type: "metrics";
  title?: string;
  caption?: string;
  heading?: string;
  text?: string;
  metrics?: Array<{
    heading?: string;
    caption?: string;
    text?: string;
    _type: "metricItem";
    _key: string;
  }>;
};

export type TextAndImage = {
  _type: "textAndImage";
  title?: string;
  caption?: string;
  heading?: string;
  text?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  button?: {
    buttonText?: string;
    link?: Link;
  };
};

export type Tabs = {
  _type: "tabs";
  title?: string;
  caption?: string;
  heading?: string;
  tabs?: Array<{
    heading?: string;
    description?: string;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
    _type: "tab";
    _key: string;
  }>;
};

export type Paragraph = {
  _type: "paragraph";
  title?: string;
  textBlock?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Hero = {
  _type: "hero";
  title?: string;
  caption?: string;
  heading?: string;
  button?: {
    buttonText?: string;
    link?: Link;
  };
};

export type Gallery = {
  _type: "gallery";
  title?: string;
  gallery?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "galleryImage";
    _key: string;
  }>;
};

export type Form = {
  _type: "form";
  title?: string;
  heading?: string;
  text?: string;
  items?: Array<{
    type?: "text" | "email" | "phone" | "message";
    title?: string;
    placeholder?: string;
    _type: "formItems";
    _key: string;
  }>;
};

export type NavLink = {
  _type: "navLink";
  text?: string;
  link?: Link;
};

export type CallToAction = {
  _type: "callToAction";
  heading?: string;
  text?: string;
  buttonText?: string;
  link?: Link;
};

export type InfoSection = {
  _type: "infoSection";
  heading?: string;
  subheading?: string;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      linkType?: "href" | "page" | "post";
      href?: string;
      page?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "page";
      };
      post?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "post";
      };
      openInNewTab?: boolean;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  listItem?: "bullet" | "number";
  markDefs?: Array<{
    linkType?: "href" | "page" | "post";
    href?: string;
    page?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "page";
    };
    post?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "post";
    };
    openInNewTab?: boolean;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
}>;

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  heading?: string;
  subheading?: string;
  isHome?: {
    status?: boolean;
  };
  pageBuilder?: Array<
    | ({
        _key: string;
      } & CallToAction)
    | ({
        _key: string;
      } & InfoSection)
    | ({
        _key: string;
      } & Hero)
    | ({
        _key: string;
      } & Tabs)
    | ({
        _key: string;
      } & Gallery)
    | ({
        _key: string;
      } & Paragraph)
    | ({
        _key: string;
      } & TextAndImage)
    | ({
        _key: string;
      } & Form)
    | ({
        _key: string;
      } & Metrics)
    | ({
        _key: string;
      } & Accordion)
  >;
};

export type Link = {
  _type: "link";
  linkType?: "href" | "page";
  href?: string;
  page?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "page";
  };
  linkToSection?: string;
  openInNewTab?: boolean;
};

export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  content?: BlockContent;
  excerpt?: string;
  coverImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  date?: string;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "person";
  };
};

export type Person = {
  _id: string;
  _type: "person";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  firstName?: string;
  lastName?: string;
  picture?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Header = {
  _id: string;
  _type: "header";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  navigation?: Array<
    {
      _key: string;
    } & NavLink
  >;
};

export type Style = {
  _id: string;
  _type: "style";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  primaryColor?: string;
};

export type Settings = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  ogImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    metadataBase?: string;
    _type: "image";
  };
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Accordion
  | Metrics
  | TextAndImage
  | Tabs
  | Paragraph
  | Hero
  | Gallery
  | Form
  | NavLink
  | CallToAction
  | InfoSection
  | BlockContent
  | Page
  | Link
  | Post
  | Person
  | Slug
  | Header
  | Style
  | Settings
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ../nextjs-app/sanity/lib/queries.ts
// Variable: settingsQuery
// Query: *[_type == "settings"][0]
export type SettingsQueryResult = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  ogImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    metadataBase?: string;
    _type: "image";
  };
} | null;
// Variable: HOME_GET_PAGEQUERY
// Query: *[_type == 'page' && isHome.status == true][0]{    _id,    name,    slug,    heading,    subheading,        "pageBuilder": pageBuilder[]{      ...,      _type == "callToAction" => {        ...,            link {      ...,      _type == "link" => {        "page": page->slug.current,        "post": post->slug.current      }    },      },      _type == "hero" => {        ...,            button {      ...,      buttonText,      link {        ...,        _type == "link" => {          "page": page->slug.current,          "post": post->slug.current        }      }    },      },      _type == "tabs" => {        ...,        "tabs": tabs[] {          ...,          "image": image {            ...,            "imageUrl": asset->.url,            "blurDataUrl": asset->.metadata.lqip,          }        }      },      _type == "gallery" => {        ...,        "gallery": gallery[] {          ...,          "image": {            ...,            "imageUrl": asset->.url,            "blurDataUrl": asset->.metadata.lqip,          }        }      }    },    _type == "paragraph" => {      ...,    },    _type == "textAndImage" => {      ...,      "image": {            ...,            "imageUrl": asset->.url,            "blurDataUrl": asset->.metadata.lqip,          }    },    _type == "form" => {      ...,    },    _type == "metrics" => {      ...,    },    _type == "accordion" => {      ...,    },  }
export type HOME_GET_PAGEQUERYResult = {
  _id: string;
  name: string | null;
  slug: Slug | null;
  heading: string | null;
  subheading: string | null;
  pageBuilder: Array<
    | {
        _key: string;
        _type: "accordion";
        title?: string;
        caption?: string;
        heading?: string;
        text?: string;
        accordionItems?: Array<{
          title?: string;
          description?: string;
          _type: "item";
          _key: string;
        }>;
      }
    | {
        _key: string;
        _type: "callToAction";
        heading?: string;
        text?: string;
        buttonText?: string;
        link: {
          _type: "link";
          linkType?: "href" | "page";
          href?: string;
          page: string | null;
          linkToSection?: string;
          openInNewTab?: boolean;
          post: null;
        } | null;
      }
    | {
        _key: string;
        _type: "form";
        title?: string;
        heading?: string;
        text?: string;
        items?: Array<{
          type?: "email" | "message" | "phone" | "text";
          title?: string;
          placeholder?: string;
          _type: "formItems";
          _key: string;
        }>;
      }
    | {
        _key: string;
        _type: "gallery";
        title?: string;
        gallery: Array<{
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          alt?: string;
          _type: "galleryImage";
          _key: string;
          image: {
            asset?: {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
            };
            hotspot?: SanityImageHotspot;
            crop?: SanityImageCrop;
            alt?: string;
            _type: "galleryImage";
            _key: string;
            imageUrl: string | null;
            blurDataUrl: string | null;
          };
        }> | null;
      }
    | {
        _key: string;
        _type: "hero";
        title?: string;
        caption?: string;
        heading?: string;
        button: {
          buttonText: string | null;
          link: {
            _type: "link";
            linkType?: "href" | "page";
            href?: string;
            page: string | null;
            linkToSection?: string;
            openInNewTab?: boolean;
            post: null;
          } | null;
        } | null;
      }
    | {
        _key: string;
        _type: "infoSection";
        heading?: string;
        subheading?: string;
        content?: Array<{
          children?: Array<{
            marks?: Array<string>;
            text?: string;
            _type: "span";
            _key: string;
          }>;
          style?:
            | "blockquote"
            | "h1"
            | "h2"
            | "h3"
            | "h4"
            | "h5"
            | "h6"
            | "normal";
          listItem?: "bullet" | "number";
          markDefs?: Array<{
            linkType?: "href" | "page" | "post";
            href?: string;
            page?: {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              [internalGroqTypeReferenceTo]?: "page";
            };
            post?: {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              [internalGroqTypeReferenceTo]?: "post";
            };
            openInNewTab?: boolean;
            _type: "link";
            _key: string;
          }>;
          level?: number;
          _type: "block";
          _key: string;
        }>;
      }
    | {
        _key: string;
        _type: "metrics";
        title?: string;
        caption?: string;
        heading?: string;
        text?: string;
        metrics?: Array<{
          heading?: string;
          caption?: string;
          text?: string;
          _type: "metricItem";
          _key: string;
        }>;
      }
    | {
        _key: string;
        _type: "paragraph";
        title?: string;
        textBlock?: Array<{
          children?: Array<{
            marks?: Array<string>;
            text?: string;
            _type: "span";
            _key: string;
          }>;
          style?:
            | "blockquote"
            | "h1"
            | "h2"
            | "h3"
            | "h4"
            | "h5"
            | "h6"
            | "normal";
          listItem?: "bullet" | "number";
          markDefs?: Array<{
            href?: string;
            _type: "link";
            _key: string;
          }>;
          level?: number;
          _type: "block";
          _key: string;
        }>;
      }
    | {
        _key: string;
        _type: "tabs";
        title?: string;
        caption?: string;
        heading?: string;
        tabs: Array<{
          heading?: string;
          description?: string;
          image: {
            asset?: {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
            };
            hotspot?: SanityImageHotspot;
            crop?: SanityImageCrop;
            alt?: string;
            _type: "image";
            imageUrl: string | null;
            blurDataUrl: string | null;
          } | null;
          _type: "tab";
          _key: string;
        }> | null;
      }
    | {
        _key: string;
        _type: "textAndImage";
        title?: string;
        caption?: string;
        heading?: string;
        text?: string;
        image?: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          alt?: string;
          _type: "image";
        };
        button?: {
          buttonText?: string;
          link?: Link;
        };
      }
  > | null;
} | null;
// Variable: getPageQuery
// Query: *[_type == 'page' && slug.current == $slug][0]{    _id,    name,    slug,    heading,    subheading,        "pageBuilder": pageBuilder[]{      ...,      _type == "callToAction" => {        ...,            link {      ...,      _type == "link" => {        "page": page->slug.current,        "post": post->slug.current      }    },      },      _type == "hero" => {        ...,            button {      ...,      buttonText,      link {        ...,        _type == "link" => {          "page": page->slug.current,          "post": post->slug.current        }      }    },      },      _type == "tabs" => {        ...,        "tabs": tabs[] {          ...,          "image": image {            ...,            "imageUrl": asset->.url,            "blurDataUrl": asset->.metadata.lqip,          }        }      },      _type == "gallery" => {        ...,        "gallery": gallery[] {          ...,          "image": {            ...,            "imageUrl": asset->.url,            "blurDataUrl": asset->.metadata.lqip,          }        }      }    },    _type == "paragraph" => {      ...,    },    _type == "textAndImage" => {      ...,      "image": {            ...,            "imageUrl": asset->.url,            "blurDataUrl": asset->.metadata.lqip,          }    },    _type == "form" => {      ...,    },    _type == "metrics" => {      ...,    },    _type == "accordion" => {      ...,    },  }
export type GetPageQueryResult = {
  _id: string;
  name: string | null;
  slug: Slug | null;
  heading: string | null;
  subheading: string | null;
  pageBuilder: Array<
    | {
        _key: string;
        _type: "accordion";
        title?: string;
        caption?: string;
        heading?: string;
        text?: string;
        accordionItems?: Array<{
          title?: string;
          description?: string;
          _type: "item";
          _key: string;
        }>;
      }
    | {
        _key: string;
        _type: "callToAction";
        heading?: string;
        text?: string;
        buttonText?: string;
        link: {
          _type: "link";
          linkType?: "href" | "page";
          href?: string;
          page: string | null;
          linkToSection?: string;
          openInNewTab?: boolean;
          post: null;
        } | null;
      }
    | {
        _key: string;
        _type: "form";
        title?: string;
        heading?: string;
        text?: string;
        items?: Array<{
          type?: "email" | "message" | "phone" | "text";
          title?: string;
          placeholder?: string;
          _type: "formItems";
          _key: string;
        }>;
      }
    | {
        _key: string;
        _type: "gallery";
        title?: string;
        gallery: Array<{
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          alt?: string;
          _type: "galleryImage";
          _key: string;
          image: {
            asset?: {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
            };
            hotspot?: SanityImageHotspot;
            crop?: SanityImageCrop;
            alt?: string;
            _type: "galleryImage";
            _key: string;
            imageUrl: string | null;
            blurDataUrl: string | null;
          };
        }> | null;
      }
    | {
        _key: string;
        _type: "hero";
        title?: string;
        caption?: string;
        heading?: string;
        button: {
          buttonText: string | null;
          link: {
            _type: "link";
            linkType?: "href" | "page";
            href?: string;
            page: string | null;
            linkToSection?: string;
            openInNewTab?: boolean;
            post: null;
          } | null;
        } | null;
      }
    | {
        _key: string;
        _type: "infoSection";
        heading?: string;
        subheading?: string;
        content?: Array<{
          children?: Array<{
            marks?: Array<string>;
            text?: string;
            _type: "span";
            _key: string;
          }>;
          style?:
            | "blockquote"
            | "h1"
            | "h2"
            | "h3"
            | "h4"
            | "h5"
            | "h6"
            | "normal";
          listItem?: "bullet" | "number";
          markDefs?: Array<{
            linkType?: "href" | "page" | "post";
            href?: string;
            page?: {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              [internalGroqTypeReferenceTo]?: "page";
            };
            post?: {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              [internalGroqTypeReferenceTo]?: "post";
            };
            openInNewTab?: boolean;
            _type: "link";
            _key: string;
          }>;
          level?: number;
          _type: "block";
          _key: string;
        }>;
      }
    | {
        _key: string;
        _type: "metrics";
        title?: string;
        caption?: string;
        heading?: string;
        text?: string;
        metrics?: Array<{
          heading?: string;
          caption?: string;
          text?: string;
          _type: "metricItem";
          _key: string;
        }>;
      }
    | {
        _key: string;
        _type: "paragraph";
        title?: string;
        textBlock?: Array<{
          children?: Array<{
            marks?: Array<string>;
            text?: string;
            _type: "span";
            _key: string;
          }>;
          style?:
            | "blockquote"
            | "h1"
            | "h2"
            | "h3"
            | "h4"
            | "h5"
            | "h6"
            | "normal";
          listItem?: "bullet" | "number";
          markDefs?: Array<{
            href?: string;
            _type: "link";
            _key: string;
          }>;
          level?: number;
          _type: "block";
          _key: string;
        }>;
      }
    | {
        _key: string;
        _type: "tabs";
        title?: string;
        caption?: string;
        heading?: string;
        tabs: Array<{
          heading?: string;
          description?: string;
          image: {
            asset?: {
              _ref: string;
              _type: "reference";
              _weak?: boolean;
              [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
            };
            hotspot?: SanityImageHotspot;
            crop?: SanityImageCrop;
            alt?: string;
            _type: "image";
            imageUrl: string | null;
            blurDataUrl: string | null;
          } | null;
          _type: "tab";
          _key: string;
        }> | null;
      }
    | {
        _key: string;
        _type: "textAndImage";
        title?: string;
        caption?: string;
        heading?: string;
        text?: string;
        image?: {
          asset?: {
            _ref: string;
            _type: "reference";
            _weak?: boolean;
            [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
          };
          hotspot?: SanityImageHotspot;
          crop?: SanityImageCrop;
          alt?: string;
          _type: "image";
        };
        button?: {
          buttonText?: string;
          link?: Link;
        };
      }
  > | null;
} | null;
// Variable: allPostsQuery
// Query: *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {      _id,  "status": select(_originalId in path("drafts.**") => "draft", "published"),  "title": coalesce(title, "Untitled"),  "slug": slug.current,  excerpt,  coverImage,  "date": coalesce(date, _updatedAt),  "author": author->{firstName, lastName, picture},  }
export type AllPostsQueryResult = Array<{
  _id: string;
  status: "draft" | "published";
  title: string | "Untitled";
  slug: string | null;
  excerpt: string | null;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  date: string;
  author: {
    firstName: string | null;
    lastName: string | null;
    picture: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    } | null;
  } | null;
}>;
// Variable: morePostsQuery
// Query: *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {      _id,  "status": select(_originalId in path("drafts.**") => "draft", "published"),  "title": coalesce(title, "Untitled"),  "slug": slug.current,  excerpt,  coverImage,  "date": coalesce(date, _updatedAt),  "author": author->{firstName, lastName, picture},  }
export type MorePostsQueryResult = Array<{
  _id: string;
  status: "draft" | "published";
  title: string | "Untitled";
  slug: string | null;
  excerpt: string | null;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  date: string;
  author: {
    firstName: string | null;
    lastName: string | null;
    picture: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    } | null;
  } | null;
}>;
// Variable: postQuery
// Query: *[_type == "post" && slug.current == $slug] [0] {    content[]{    ...,    markDefs[]{      ...,          link {      ...,      _type == "link" => {        "page": page->slug.current,        "post": post->slug.current      }    }    }  },      _id,  "status": select(_originalId in path("drafts.**") => "draft", "published"),  "title": coalesce(title, "Untitled"),  "slug": slug.current,  excerpt,  coverImage,  "date": coalesce(date, _updatedAt),  "author": author->{firstName, lastName, picture},  }
export type PostQueryResult = {
  content: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs: Array<{
      linkType?: "href" | "page" | "post";
      href?: string;
      page?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "page";
      };
      post?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "post";
      };
      openInNewTab?: boolean;
      _type: "link";
      _key: string;
      link: null;
    }> | null;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  _id: string;
  status: "draft" | "published";
  title: string | "Untitled";
  slug: string | null;
  excerpt: string | null;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  date: string;
  author: {
    firstName: string | null;
    lastName: string | null;
    picture: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    } | null;
  } | null;
} | null;
// Variable: postPagesSlugs
// Query: *[_type == "post" && defined(slug.current)]  {"slug": slug.current}
export type PostPagesSlugsResult = Array<{
  slug: string | null;
}>;
// Variable: pagesSlugs
// Query: *[_type == "page" && defined(slug.current)]  {"slug": slug.current}
export type PagesSlugsResult = Array<{
  slug: string | null;
}>;
// Variable: HOME_PAGES_SLUGS
// Query: *[_type == "page" && isHome.status==true && defined(slug.current)]  {"slug": slug.current}
export type HOME_PAGES_SLUGSResult = Array<{
  slug: string | null;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    '*[_type == "settings"][0]': SettingsQueryResult;
    '\n  *[_type == \'page\' && isHome.status == true][0]{\n    _id,\n    name,\n    slug,\n    heading,\n    subheading,\n    \n    "pageBuilder": pageBuilder[]{\n      ...,\n      _type == "callToAction" => {\n        ...,\n        \n    link {\n      ...,\n      _type == "link" => {\n        "page": page->slug.current,\n        "post": post->slug.current\n      }\n    }\n,\n      },\n      _type == "hero" => {\n        ...,\n        \n    button {\n      ...,\n      buttonText,\n      link {\n        ...,\n        _type == "link" => {\n          "page": page->slug.current,\n          "post": post->slug.current\n        }\n      }\n    }\n,\n      },\n      _type == "tabs" => {\n        ...,\n        "tabs": tabs[] {\n          ...,\n          "image": image {\n            ...,\n            "imageUrl": asset->.url,\n            "blurDataUrl": asset->.metadata.lqip,\n          }\n        }\n      },\n      _type == "gallery" => {\n        ...,\n        "gallery": gallery[] {\n          ...,\n          "image": {\n            ...,\n            "imageUrl": asset->.url,\n            "blurDataUrl": asset->.metadata.lqip,\n          }\n        }\n      }\n    },\n    _type == "paragraph" => {\n      ...,\n    },\n    _type == "textAndImage" => {\n      ...,\n      "image": {\n            ...,\n            "imageUrl": asset->.url,\n            "blurDataUrl": asset->.metadata.lqip,\n          }\n    },\n    _type == "form" => {\n      ...,\n    },\n    _type == "metrics" => {\n      ...,\n    },\n    _type == "accordion" => {\n      ...,\n    }\n,\n  }\n': HOME_GET_PAGEQUERYResult;
    '\n  *[_type == \'page\' && slug.current == $slug][0]{\n    _id,\n    name,\n    slug,\n    heading,\n    subheading,\n    \n    "pageBuilder": pageBuilder[]{\n      ...,\n      _type == "callToAction" => {\n        ...,\n        \n    link {\n      ...,\n      _type == "link" => {\n        "page": page->slug.current,\n        "post": post->slug.current\n      }\n    }\n,\n      },\n      _type == "hero" => {\n        ...,\n        \n    button {\n      ...,\n      buttonText,\n      link {\n        ...,\n        _type == "link" => {\n          "page": page->slug.current,\n          "post": post->slug.current\n        }\n      }\n    }\n,\n      },\n      _type == "tabs" => {\n        ...,\n        "tabs": tabs[] {\n          ...,\n          "image": image {\n            ...,\n            "imageUrl": asset->.url,\n            "blurDataUrl": asset->.metadata.lqip,\n          }\n        }\n      },\n      _type == "gallery" => {\n        ...,\n        "gallery": gallery[] {\n          ...,\n          "image": {\n            ...,\n            "imageUrl": asset->.url,\n            "blurDataUrl": asset->.metadata.lqip,\n          }\n        }\n      }\n    },\n    _type == "paragraph" => {\n      ...,\n    },\n    _type == "textAndImage" => {\n      ...,\n      "image": {\n            ...,\n            "imageUrl": asset->.url,\n            "blurDataUrl": asset->.metadata.lqip,\n          }\n    },\n    _type == "form" => {\n      ...,\n    },\n    _type == "metrics" => {\n      ...,\n    },\n    _type == "accordion" => {\n      ...,\n    }\n,\n  }\n': GetPageQueryResult;
    '\n  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {\n    \n  _id,\n  "status": select(_originalId in path("drafts.**") => "draft", "published"),\n  "title": coalesce(title, "Untitled"),\n  "slug": slug.current,\n  excerpt,\n  coverImage,\n  "date": coalesce(date, _updatedAt),\n  "author": author->{firstName, lastName, picture},\n\n  }\n': AllPostsQueryResult;
    '\n  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {\n    \n  _id,\n  "status": select(_originalId in path("drafts.**") => "draft", "published"),\n  "title": coalesce(title, "Untitled"),\n  "slug": slug.current,\n  excerpt,\n  coverImage,\n  "date": coalesce(date, _updatedAt),\n  "author": author->{firstName, lastName, picture},\n\n  }\n': MorePostsQueryResult;
    '\n  *[_type == "post" && slug.current == $slug] [0] {\n    content[]{\n    ...,\n    markDefs[]{\n      ...,\n      \n    link {\n      ...,\n      _type == "link" => {\n        "page": page->slug.current,\n        "post": post->slug.current\n      }\n    }\n\n    }\n  },\n    \n  _id,\n  "status": select(_originalId in path("drafts.**") => "draft", "published"),\n  "title": coalesce(title, "Untitled"),\n  "slug": slug.current,\n  excerpt,\n  coverImage,\n  "date": coalesce(date, _updatedAt),\n  "author": author->{firstName, lastName, picture},\n\n  }\n': PostQueryResult;
    '\n  *[_type == "post" && defined(slug.current)]\n  {"slug": slug.current}\n': PostPagesSlugsResult;
    '\n  *[_type == "page" && defined(slug.current)]\n  {"slug": slug.current}\n': PagesSlugsResult;
    '\n  *[_type == "page" && isHome.status==true && defined(slug.current)]\n  {"slug": slug.current}\n': HOME_PAGES_SLUGSResult;
  }
}
