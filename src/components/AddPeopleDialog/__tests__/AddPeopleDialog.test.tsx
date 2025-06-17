import { render, screen } from "@testing-library/react";
import { vi, describe, expect, test } from "vitest";
import AddPeopleDialog from "../AddPeopleDialog";
import { Provider } from "react-redux";
import type { ReactNode } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { peopleApi } from "../../../redux/peopleApi";
import type { TCommonDialogProps } from "../../CommonDialog/CommonDialog";
import userEvent from "@testing-library/user-event";

vi.mock("../../CommonDialog/CommonDialog", () => ({
  default: ({ children }: TCommonDialogProps) => <div>{children}</div>,
}));

const componentWrapper = (component: ReactNode) => {
  const store = configureStore({
    reducer: {
      [peopleApi.reducerPath]: peopleApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([peopleApi.middleware]),
  });
  return <Provider store={store}>{component}</Provider>;
};

describe("AddPeopleDialog", () => {
  test("should render AddPeopleDialog without errors", () => {
    render(componentWrapper(<AddPeopleDialog onDialocClose={() => {}} />));
    expect(screen.getByText("Add people")).not.toBeNull();
  });
  test("should be able to change a field value without error", async () => {
    render(componentWrapper(<AddPeopleDialog onDialocClose={() => {}} />));
    await userEvent.type(screen.getByTestId("first-name-input"), "John");
  });
  test("should show 'Fill up all the fields' error", async () => {
    render(componentWrapper(<AddPeopleDialog onDialocClose={() => {}} />));
    await userEvent.click(screen.getByTestId("add-button"));
    expect(screen.getByText("Fill up all the fields")).not.toBeNull();
  });
});
