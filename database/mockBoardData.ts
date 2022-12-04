import { BoardItemInfo } from "../components/moleculers/BoardItem";

export const mockBoardDataGenerator = (boardTitle: string) => {
  const mockBoardData: BoardItemInfo = {
    title: `오늘 ${boardTitle} 처음 배웠는데 너무 어렵더라`,
    content: `오늘 ${boardTitle} 처음 배웠는데 너무 어렵더라`,
    date: new Date(),
    author: "chobe1",
  };
  const mockBoardDataList: BoardItemInfo[] = [
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,
    mockBoardData,

    mockBoardData,
  ];

  return mockBoardDataList;
};
