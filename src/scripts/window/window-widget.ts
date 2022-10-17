
import Test from "../test/test";
import "./window-widget.scss";
const root = document.getElementById("root") as HTMLDivElement;
interface WindowWidget {
    renderWidget: (body: HTMLDivElement) => HTMLDivElement,
    renderButton: (widget: HTMLDivElement) => HTMLButtonElement
}
class WindowWidget {
}
WindowWidget.prototype.renderWidget = (body: HTMLDivElement) => {
    const widget: HTMLDivElement = document.createElement("div");
    widget.className = "widget-wrapper";
    widget.setAttribute("data-testid", "widget-wrapper")
    body.append(widget);
    return widget
}

WindowWidget.prototype.renderButton = (widget: HTMLDivElement) => {
    const button: HTMLButtonElement = document.createElement("button");
    button.className = "body-switch-button";
    button.textContent = "Change body color!";
    let theme: "dark" | "light" = "light";
    setTheme();
    button.setAttribute("data-testid", "color-toggle-btn")
    button.addEventListener("click", () => {
        setTheme()
    })
    function setTheme() {
        if (theme === "light") {
            widget.style.backgroundColor = "rgba(255,101,80,0.2)";
            theme = "dark"
        } else {
            widget.style.backgroundColor = "rgb(131, 161, 163)";
            theme = "light"
        }
    }
    widget.append(button)
    return button
}

export function Widget(): () => void {
    const widget = new WindowWidget();
    const widgetElement = widget.renderWidget(root);
    new Test(widgetElement);
    widget.renderButton(widgetElement);
    return
}

export default WindowWidget