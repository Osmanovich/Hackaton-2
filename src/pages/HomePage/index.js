import { useHistory } from "react-router-dom";

// our libs
import { fruktal } from "@frukmruk/html";

// service
import { logout } from "../../services/auth";

// helpers
import { useQueryUrl } from "../../lib/data";

// layouts
import MainHomeWrapper from "./wrappers/MainHome";

// wrappers
import VideoContentWrapper from "./wrappers/VideoContent";
import VideoPlayerWrapper from "./wrappers/VideoPlayer";
import RecommendationsWrapper from "./wrappers/Recommendations";
import CommentsWrapper from "./wrappers/Comments";

// components
import Heading from "../../components/Heading";
import VideoPlayer from "../../components/VideoPlayer";
import VideoInfo from "../../components/VideoInfo";
import LoadingComment from "../../components/LoadingComment";
import LoadingRecommendation from "../../components/LoadingRecommendation";
import UpstartButton from "../../components/UpstartButton";
import Toast from "../../components/Toast";

// data

// ui mappers
import { commentToComponent, recToComponent } from "./ui";
import { commentsUrl, recUrl, videoInfoUrl } from "../../config/api";

const HomePage = () => {
  let history = useHistory();

  const {
    data: recommendations,
    isLoading: isRecLoading,
    isError: isRecError,
  } = useQueryUrl({
    url: recUrl,
    init: [],
  });

  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useQueryUrl({
    url: commentsUrl,
    init: [],
  });

  const {
    data: videoInfo,
    isLoading: isVideoInfoLoading,
    isError: isVideoInfoError,
  } = useQueryUrl({
    url: videoInfoUrl,
    init: { title: "" },
  });

  const anythingLoading =
    isRecLoading || isCommentsLoading || isVideoInfoLoading;
  const anyError = isRecError || isCommentsError || isVideoInfoError;

  return (
    <MainHomeWrapper>
      {anythingLoading && (
        <Toast error={false} msg={"Data is being loaded"} timeout={3500} />
      )}
      {anyError && (
        <Toast error={true} msg={"An error has occured"} timeout={3500} />
      )}

      <Heading>
        <div class="flex flex-row justify-between">
          <div>#Heading</div>
          <UpstartButton onClick={() => logout(history)} type="danger">
            Logout
          </UpstartButton>
        </div>
      </Heading>

      <VideoContentWrapper>
        <VideoPlayerWrapper>
          <VideoPlayer title={videoInfo.title} isLoading={isVideoInfoLoading} />
          <VideoInfo />
        </VideoPlayerWrapper>

        <CommentsWrapper>
          {isCommentsLoading && <LoadingComment />}

          {!isCommentsLoading && comments.map(commentToComponent)}
        </CommentsWrapper>
      </VideoContentWrapper>
      <RecommendationsWrapper>
        {!recommendations && <LoadingRecommendation />}

        {recommendations.map(recToComponent)}
      </RecommendationsWrapper>
    </MainHomeWrapper>
  );
};

export default HomePage;
