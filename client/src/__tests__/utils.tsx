import { cleanup, render, RenderResult } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => cleanup());

const customRender = (ui: JSX.Element, options = {}): RenderResult => {
  return render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  });
};

export * from "@testing-library/react";
export { screen } from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
