import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../../../app/auth/Login/page";
import { signIn } from "next-auth/react";
import userEvent from "@testing-library/user-event";

const mockeNavigationPush = jest.fn();

jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    usePathname: () => ({
      pathname: "",
    }),
    useRouter: () => ({
      push: mockeNavigationPush,
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
      get: () => {},
    }),
  };
});

jest.mock("next-auth/react");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Login Page", () => {
  const user = userEvent.setup();

  test("renders a Login Page", () => {
    render(<Login />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();

    const inputEmail = screen.getByRole("textbox", { name: /Email/i });
    expect(inputEmail).toBeInTheDocument();

    const inputPassword = screen.getByLabelText(/Password/i);
    expect(inputPassword).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: /submit/i });

    expect(submitButton).toBeInTheDocument();
  });

  test("Login validation fail", async () => {
    render(<Login />);
    const inputEmail = screen.getByRole("textbox", { name: /Email/i });
    expect(inputEmail).toBeInTheDocument();

    await user.click(inputEmail);
    await user.keyboard("abcemail.com");

    const inputPassword = screen.getByLabelText(/Password/i);
    expect(inputPassword).toBeInTheDocument();

    await user.click(inputPassword);
    await user.keyboard("User123");

    const submitButton = screen.getByRole("button", { name: /submit/i });

    expect(submitButton).toBeInTheDocument();

    await user.click(submitButton);

    const errroMsgEmail = screen.getByText("pls enter proper email");
    expect(errroMsgEmail).toBeInTheDocument();

    const errroMsgPassword = screen.getByText(
      "Password must contain at least 1 number, 1 special character and 1 upper case alphabet."
    );
    expect(errroMsgPassword).toBeInTheDocument();
  });

  test("Shows auth error", async () => {
    const signMocked = jest.mocked(signIn);

    signMocked.mockReturnValue(
      Promise.resolve({
        error: "CredentialsSignin",
        status: 401,
        ok: false,
        url: null,
      })
    );

    render(<Login />);
    const inputEmail = screen.getByRole("textbox", { name: /Email/i });
    expect(inputEmail).toBeInTheDocument();

    await user.click(inputEmail);
    await user.keyboard("abce@mail.com");

    const inputPassword = screen.getByLabelText(/Password/i);
    expect(inputPassword).toBeInTheDocument();

    await user.click(inputPassword);
    await user.keyboard("User@123");

    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();

    await user.click(submitButton);

    const errroMsg = screen.getByText(
      "pls enter proper email and password or try later"
    );
    expect(errroMsg).toBeInTheDocument();
  });

  test("redirect on success", async () => {
    const signMocked = jest.mocked(signIn);

    signMocked.mockResolvedValue({
      error: null,
      status: 200,
      ok: true,
      url: "url",
    });

    render(<Login />);
    const inputEmail = screen.getByRole("textbox", { name: /Email/i });
    expect(inputEmail).toBeInTheDocument();

    await user.click(inputEmail);
    await user.keyboard("abce@mail.com");

    const inputPassword = screen.getByLabelText(/Password/i);
    expect(inputPassword).toBeInTheDocument();

    await user.click(inputPassword);
    await user.keyboard("User@123");

    const submitButton = screen.getByRole("button", { name: /submit/i });

    expect(submitButton).toBeInTheDocument();

    await user.click(submitButton);

    expect(mockeNavigationPush).toHaveBeenCalled();
    expect(mockeNavigationPush).toHaveBeenCalledWith("/");
  });
});
