"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export type VideoCarrouselProviderProps = { children: ReactNode };
export type VideoCarrouselProps = {
  currentVideo: number;
  isAnimationVisible: boolean;
  isInit: boolean;
  handleChangeVideo: (index: number) => void;
  setCurrentVideo: Dispatch<SetStateAction<number>>;
  setIsAnimationVisible: Dispatch<SetStateAction<boolean>>;
  setIsInit: Dispatch<SetStateAction<boolean>>;
};

const VideoCarrouselContext = createContext<VideoCarrouselProps>({
  currentVideo: 0,
  isAnimationVisible: false,
  isInit: true,
  handleChangeVideo: () => {},
  setCurrentVideo: () => {},
  setIsAnimationVisible: () => {},
  setIsInit: () => {},
});

export const VideoCarrouselProvider = ({
  children,
}: VideoCarrouselProviderProps) => {
  const [isInit, setIsInit] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);

  const handleChangeVideo = useCallback((index: number) => {
    setIsAnimationVisible(true);
    setCurrentVideo(index);
  }, []);

  const value = useMemo(
    () => ({
      currentVideo,
      isAnimationVisible,
      isInit,
      handleChangeVideo,
      setCurrentVideo,
      setIsAnimationVisible,
      setIsInit,
    }),
    [
      currentVideo,
      isAnimationVisible,
      isInit,
      handleChangeVideo,
      setCurrentVideo,
      setIsAnimationVisible,
      setIsInit,
    ],
  );

  return (
    <VideoCarrouselContext.Provider value={value}>
      {children}
    </VideoCarrouselContext.Provider>
  );
};

export const useVideoCarrousel = () => useContext(VideoCarrouselContext);
