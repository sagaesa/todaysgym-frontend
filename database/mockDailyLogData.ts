import { DailyLogProps } from "../components/moleculers/DailyLogItem";
export const mockDailyLogDataGenerator = () => {
  const mockLogData: DailyLogProps = {
    imagePathList: [
      "https://file2.nocutnews.co.kr/newsroom/image/2022/11/25/202211250006037294_0.jpg",
    ],
    author: "Parker",
    content:
      "Today i play a soccer i think it is difficult to design a frontend",
  };

  return [
    mockLogData,
    mockLogData,
    mockLogData,
    mockLogData,
    mockLogData,
    mockLogData,
  ];
};
