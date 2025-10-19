import { render, screen, waitFor } from "@testing-library/react";
import App from "./App"; // Ensure this matches the default export from App.js
import * as userData from "./UserData";

jest.mock("./userData", () => ({
  getUserData: jest.fn(),
}));

describe("App Component", () => {
  test("should return mocked user data", async () => {
    const mockUserData = {
      data: [
        {
          id: 1,
          first_name: "George",
          last_name: "Bluth",
          email: "george.bluth@reqres.in",
        },
      ],
    };
    const mockGetUserData = jest.fn().mockResolvedValue(mockUserData);

    const { getUserData } = require("./UserData");
    getUserData.mockImplementation(mockGetUserData);

    render(<App />);

    await waitFor(() => screen.getByText(/George Bluth/));

    expect(mockGetUserData).toHaveBeenCalledWith("https://reqres.in/api/users");
    expect(screen.getByText("George Bluth")).toBeInTheDocument();
  });

  test("should return mocked user data", async () => {
    // Mock the resolved value to match the expected structure
    const mockUserData = {
      data: [
        {
          id: 1,
          first_name: "George",
          last_name: "Bluth",
          email: "george.bluth@reqres.in",
        },
      ],
    };

    // Spy on `getUserData` and mock its implementation
    jest.spyOn(userData, "getUserData").mockResolvedValue(mockUserData);

    // Render the component
    render(<App />);

    // Wait for the component to load and render user data
    await waitFor(() => screen.getByText(/George Bluth/));

    // Assertions
    expect(userData.getUserData).toHaveBeenCalledWith(
      "https://reqres.in/api/users"
    );
    expect(screen.getByText("George Bluth")).toBeInTheDocument();
    expect(screen.getByText("george.bluth@reqres.in")).toBeInTheDocument();
  });
});
