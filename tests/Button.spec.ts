/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/svelte";
import TestButton from "./TestButton.svelte";

describe("Button component", () => {
  it("should render text", () => {
    const { container, getByText } = render(TestButton);

    expect(getByText("test")).toBeInTheDocument();
  });

  it("should render solid class", () => {
    const { container } = render(TestButton, {
      props: {
        props: {
          type: "outline",
        },
      },
    });

    expect(container.querySelector(".btn-outline")).not.toBeNull();
  });

  it("should render solid button by default", () => {
    const { container } = render(TestButton);

    expect(container.querySelector(".btn-solid")).not.toBeNull();
  });
});
