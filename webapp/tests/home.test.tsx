import { render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Home from "@webapp/pages/home";
import { postHello } from "@webapp/repository/frontend/hello";

// NOTE: See, https://jestjs.io/docs/mock-functions#mocking-partials
jest.mock("@webapp/repository/frontend/hello", () => {
  const originalModule = jest.requireActual("@webapp/repository/frontend/hello");
  return {
    __esModule: true,
    ...originalModule,
    postHello: jest.fn((params) => {
      expect(params).toStrictEqual({
        yearMonth: "2000-01",
      });
      return [true, { receivedYearMonth: "2000-01", currentYearMonth: "2022-02" } ]
    })
  }
});

const mockedPostHello = jest.mocked(postHello);

describe("test home page", () => {
  it("renders page.", async () => {
    // NOTE: See, https://jestjs.io/docs/mock-function-api#jestmockedsource-options
    mockedPostHello.mockImplementation(async (params) => {
      expect(params).toStrictEqual({
        yearMonth: "2000-01",
      })
      const respParams: PostHelloRespParamsType =  { receivedYearMonth: "2000-01", currentYearMonth: "2022-02" };
      return [true, respParams]
    });

    render(
      <Home />
    );

    const user = fireEvent.setup();

    const textField = screen.queryByTestId("test-text-field");
    expect(textField).toBeInTheDocument();
    await user.type(textField, "2000-01");

    const button = screen.queryByTestId("test-button");
    expect(button).toBeInTheDocument();
    await user.click(button);
  });
});
