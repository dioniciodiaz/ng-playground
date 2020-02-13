export interface Anime {
  mal_id: number;
  url: string;
  image_url: string;
  title: string;
  airing: boolean;
  synopsis: string;
  type: string;
  episodes: number;
  score: number;
  start_date: Date;
  end_date: Date;
  members: number;
  rated: string;
}
export interface AnimeRequest {
  request_hash: string;
  request_cached: boolean;
  results: Anime[];
  last_page: number;
  request_cache_expiry: number;
}
