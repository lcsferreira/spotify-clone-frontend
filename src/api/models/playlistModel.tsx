import { trackModel } from "./trackModel";

export interface playlistModel {
  id: string;
  title: string;
  description: string;
  img: string;
  tracks: Array<trackModel>;
  likes: number;
  createdAt: string;
  artists: string;
}
