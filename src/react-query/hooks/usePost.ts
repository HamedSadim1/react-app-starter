import axios from "axios";
import {
  keepPreviousData,
  useInfiniteQuery,
  InfiniteData,
  QueryKey,
} from "@tanstack/react-query";
import { API_BASE_URL } from "../constants";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePost = (query: PostQuery) => {
  return useInfiniteQuery<
    Post[],
    Error,
    InfiniteData<Post[], number>,
    QueryKey,
    number
  >({
    queryKey: ["posts", query],
    queryFn: ({ pageParam }) =>
      axios
        .get<Post[]>(`${API_BASE_URL}/posts`, {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    initialPageParam: 1,
    staleTime: 10 * 1000,
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length > 0 ? allPages.length + 1 : undefined,
  });
};

export default usePost;
