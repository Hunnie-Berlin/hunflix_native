import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Poster from "../../components/Poster";
import ScrollContainer from "../../components/ScrollContainer";
import Votes from "../../components/Votes";
import { formatDate } from "../../utils";

const BackDrop = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 70px;
`;

const Header = styled.View`
  width: 100%;
  height: ${Dimensions.get("window").height / 4}px;
  align-items: center;
  justify-content: center;
`;
const Data = styled.View`
  margin-left: 20px;
  width: 55%;
`;

const DetailContainer = styled.View`
  top: 50px;
  padding: 20px;
`;

const DetailName = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0px 10px;
`;

const DetailValue = styled.Text`
  color: white;
  opacity: 0.7;
  font-size: 14px;
  font-weight: 600;
  margin: 5px 0 10px;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Button = styled.View`
  padding: 4px 8px;
  border-radius: 3px;
  margin-top: 15px;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  margin-left: 10px;
`;

const Icon = styled.View`
  width: 20px;
  height: 20px;
`;

const DetailPresenter = ({ detail, isLoading, openBrowser }) => {
  return (
    <ScrollContainer
      isLoading={false}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <Header>
        <BackDrop source={{ uri: detail.bgImg }} />
        <Container>
          <Poster poster={detail.poster} />
          <Data>
            <Title>{detail.title}</Title>
            {detail.votes ? <Votes votes={detail.votes} /> : null}
          </Data>
        </Container>
      </Header>
      <DetailContainer>
        {detail.overview ? (
          <>
            <DetailName>Overview</DetailName>
            <DetailValue>{detail.overview}</DetailValue>
          </>
        ) : null}
        {isLoading ? (
          <ActivityIndicator style={{ marginTop: 30 }} color="white" />
        ) : null}
        {detail.genres ? (
          <>
            <DetailName>Genres</DetailName>
            <DetailValue>{detail.genres.map((l) => l.name + "  ")}</DetailValue>
          </>
        ) : null}
        {detail.spoken_languages ? (
          <>
            <DetailName>Language</DetailName>
            <DetailValue>
              {detail.spoken_languages.map((l) => l.name + "  ")}
            </DetailValue>
          </>
        ) : null}
        {detail.release_date ? (
          <>
            <DetailName>Release Date</DetailName>
            <DetailValue>{formatDate(detail.release_date)}</DetailValue>
          </>
        ) : null}
        {detail.first_air_date ? (
          <>
            <DetailName>First Air Date</DetailName>
            <DetailValue>{formatDate(detail.first_air_date)}</DetailValue>
          </>
        ) : null}
        {detail.status ? (
          <>
            <DetailName>Status</DetailName>
            <DetailValue>{detail.status}</DetailValue>
          </>
        ) : null}
        {detail.runtime ? (
          <>
            <DetailName>Runtime</DetailName>
            <DetailValue>{detail.runtime} Min</DetailValue>
          </>
        ) : null}
        {detail.number_of_episodes && detail.number_of_seasons ? (
          <>
            <DetailName>Number of Seasons / Episodes</DetailName>
            <DetailValue>
              {detail.number_of_seasons} seasons / total{" "}
              {detail.number_of_episodes} episodes
            </DetailValue>
          </>
        ) : null}
        {detail.imdb_id ? (
          <>
            <DetailName>Links</DetailName>
            <TouchableOpacity
              onPress={() =>
                openBrowser(`https://www.imdb.com/title/${detail.imdb_id}`)
              }
            >
              <Button>
                <Icon>
                  <FontAwesome name={"imdb"} color={"#f5c518"} size={18} />
                </Icon>
                <ButtonText>Open IMDB Page</ButtonText>
              </Button>
            </TouchableOpacity>
          </>
        ) : null}
        {detail.videos ? (
          <>
            {detail.videos.results.map((r, index, results) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  openBrowser(`https://www.youtube.com/watch?v=${r.key}`)
                }
              >
                <Button>
                  <Icon>
                    <FontAwesome
                      name={"youtube-play"}
                      color={"#CC0500"}
                      size={18}
                    />
                  </Icon>
                  <ButtonText>
                    Open Youtube {r.type}{" "}
                    {results.length <= 1 ? null : index + 1}
                  </ButtonText>
                </Button>
              </TouchableOpacity>
            ))}
          </>
        ) : null}
      </DetailContainer>
    </ScrollContainer>
  );
};

export default DetailPresenter;
