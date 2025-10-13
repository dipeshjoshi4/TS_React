import { render } from "@testing-library/react"
import App from "./App"
import { expect, test } from "vitest";


test("app component should display Hello Dipesh", () => {
    const { getByText, debug } = render(<App />)
    const HelloText = getByText("Hello Dipesh");
    console.log(HelloText)
    debug(); //can  get a text and debug 
    expect(HelloText.tagName).toBe("H1")
    expect(HelloText.textContent).toBe("Hello Dipesh")
})   