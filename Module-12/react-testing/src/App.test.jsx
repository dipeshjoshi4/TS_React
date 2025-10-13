import { fireEvent, render } from "@testing-library/react"
import App from "./App"
import { expect, test } from "vitest";


test("app component should display Hello Dipesh", () => {
    const { getByText, debug, getByTestId, getByRole } = render(<App />)
    debug(); //can  get a text and debug 

    const HelloText = getByText("Hello Dipesh");
    // console.log(HelloText)                  //get DOM-Node
    // expect(HelloText).not.toBeTruthy()   //fail
    expect(HelloText).toBeTruthy()          //true

    const HelloTextId = getByTestId("heading");

    expect(HelloText.tagName).toBe("H1")

    expect(HelloText.textContent).toBe("Hello Dipesh")

    let btn = getByRole("button");
    fireEvent.click(btn)


})   