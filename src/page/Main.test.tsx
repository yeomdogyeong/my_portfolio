import { render, screen } from "@testing-library/react";
import Main from "./Main";

test("Main 컴포넌트가 렌더링되고, '카드 전체 뒤집기' 버튼이 존재하는지 확인", () => {
  render(<Main />);

  //카드 전체 뒤집기 버튼이 존재하는지 확인
  const button = screen.getByText(/카드 전체 뒤집기/i);
  expect(button).toBeInTheDocument();
});
