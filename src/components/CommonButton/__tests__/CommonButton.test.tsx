import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CommonButton from "../CommonButton";

describe("CommonButton", () => {
  test("should render CommonButton with its child successfuly", () => {
    render(<CommonButton onClick={() => {}}>ButtonName</CommonButton>);
    expect(screen.getByText("ButtonName")).not.toBeNull();
  });
  test("should render CommonButton loading spinner when isLoading is set", () => {
    render(
      <CommonButton onClick={() => {}} isLoading>
        ButtonName
      </CommonButton>
    );
    expect(screen.getByTestId("CommonButton-loading-spinner")).not.toBeNull();
  });
});
