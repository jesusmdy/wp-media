import { create } from "zustand";

export interface TMedia {
  id:             number;
  date:           Date;
  date_gmt:       Date;
  guid:           Caption;
  modified:       Date;
  modified_gmt:   Date;
  slug:           string;
  status:         string;
  type:           string;
  link:           string;
  title:          Caption;
  author:         number;
  featured_media: number;
  comment_status: string;
  ping_status:    string;
  template:       string;
  meta:           any[];
  class_list:     string[];
  description:    Caption;
  caption:        Caption;
  alt_text:       string;
  media_type:     string;
  mime_type:      string;
  media_details:  MediaDetails;
  post:           number;
  source_url:     string;
  _links:         Links;
}

export interface Links {
  self:       About[];
  collection: About[];
  about:      About[];
  author:     Author[];
  replies:    Author[];
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href:       string;
}

export interface Caption {
  rendered: string;
}

export interface MediaDetails {
  width:      number;
  height:     number;
  file:       string;
  filesize:   number;
  sizes:      Sizes;
  image_meta: ImageMeta;
}

export interface ImageMeta {
  aperture:          string;
  credit:            string;
  camera:            string;
  caption:           string;
  created_timestamp: string;
  copyright:         string;
  focal_length:      string;
  iso:               string;
  shutter_speed:     string;
  title:             string;
  orientation:       string;
  keywords:          any[];
}

export interface Sizes {
}


interface IMediaStore {
  loading: boolean
  setLoading: (value: boolean) => void
  media: TMedia[]
  setMedia: (value: TMedia[]) => void
}

export const useMediaStore = create<IMediaStore>(
  (set) => ({
    loading: true,
    setLoading: (value) => set((state) => ({...state, loading: value })),
    media: [],
    setMedia: (value) => set((state) => ({...state, media: value })),
  })
)
