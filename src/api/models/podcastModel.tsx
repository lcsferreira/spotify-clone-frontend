import { episodeModel } from "./episodeModel";

export interface podcastModel {
  id: string;
  title: string;
  img: string;
  author: string;
  description: string;
  overallRating: number;
  episodes: Array<episodeModel>;
}
