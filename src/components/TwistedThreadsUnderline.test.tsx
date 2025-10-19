import { render } from "@testing-library/react";
import TwistedThreadsUnderline from "./TwistedThreadsUnderline";

describe("TwistedThreadsUnderline", () => {
    it("Renders the TwistedThreadsUnderline.", () => {
        render(<TwistedThreadsUnderline width={100}/>);
    });
});