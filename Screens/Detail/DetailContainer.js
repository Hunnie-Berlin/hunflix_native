import React, { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import DetailPresenter from "./DetailPresenter";
import { apiImage, moviesApi, tvApi } from "../../api";

const DetailContainer = ({
  route: {
    params: { id, isTV, title, bgImg, poster, votes, overview },
  },
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState({
    title,
    bgImg,
    poster,
    votes,
    overview,
    videos: {
      results: [],
    },
  });
  const getData = async () => {
    const [getDetail, getDetailError] = isTV
      ? await tvApi.detail(id)
      : await moviesApi.detail(id);

    setDetail({
      ...getDetail,
      title: isTV ? getDetail.original_name : getDetail.original_title,
      bgImg: apiImage(getDetail.backdrop_path),
      poster: apiImage(getDetail.poster_path),
      overview: getDetail.overview,
      votes: getDetail.vote_average,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, [id]);

  const openBrowser = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <DetailPresenter
      detail={detail}
      isLoading={isLoading}
      openBrowser={openBrowser}
    />
  );
};

export default DetailContainer;
