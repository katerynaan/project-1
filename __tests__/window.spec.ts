import WindowWidget from "../src/scripts/window/window-widget";
import { getByTestId, fireEvent } from "@testing-library/dom";

describe("check if widget loads", () => {
    const root = document.createElement("div");
    const widget = new WindowWidget();
    widget.renderWidget(root);
    const widgetElement = getByTestId(root, "widget-wrapper") as HTMLDivElement;
    widget.renderButton(widgetElement);
    const button = getByTestId(widgetElement, "color-toggle-btn");
    it("check if button renders", () => {
        expect(button).toBeTruthy();
    })
    it("check if clicking the button changes widget background color", () => {
        const bgStyleBefore = widgetElement.style.backgroundColor;
        fireEvent.click(button);
        const bgStyleAfter = widgetElement.style.backgroundColor;
        expect(bgStyleBefore).not.toEqual(bgStyleAfter);
        fireEvent.click(button);
        const bgStyleAfterAfter = widgetElement.style.backgroundColor;
        expect(bgStyleAfter).not.toEqual(bgStyleAfterAfter);
        expect(bgStyleBefore).toEqual(bgStyleAfterAfter)
    })
})