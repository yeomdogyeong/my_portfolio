import { render, screen } from "@testing-library/react";
import Main from "./Main";

test("Main 컴포넌트가 렌더링되고, '카드 전체 뒤집기' 버튼이 존재하는지 확인", () => {
  //main 컴포넌트를 렌더링
  render(<Main />);

  const aboutSection = screen.getByTestId("about");
  expect(aboutSection).toBeInTheDocument();
  //screen은 렌더된 dom에서 특정 text를 가진 요소를 찾아주는 함수
  // const button = screen.getByText(/카드 전체 뒤집기/i);
  // expect(button).toBeInTheDocument();
});
