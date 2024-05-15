import "@testing-library/jest-dom";
import {
  titlecase,
  titlecaseCompany,
  titlecaseIndividualName,
  titlecaseSuffix,
  titlecaseOccupation,
} from "../src/app/utils/titlecase";

describe("titlecaseUtils", () => {
  test("titlecase", () => {
    expect(titlecase("HELLO WORLD")).toBe("Hello World");
  });

  test("titlecase company base case", () => {
    expect(titlecaseCompany("COINBASE")).toBe("Coinbase");
  });

  test("titlecase company with 2-letter word", () => {
    expect(titlecaseCompany("AH CAPITAL MANAGEMENT")).toBe(
      "AH Capital Management",
    );
  });

  test("titlecase company with uppercased substring", () => {
    expect(titlecaseCompany("POTTER VENTURES LLC")).toBe("Potter Ventures LLC");
  });

  test("titlecase individual base case", () => {
    expect(titlecaseIndividualName("JOHN DOE")).toBe("John Doe");
  });

  test("titlecase partially capsed name", () => {
    expect(titlecaseIndividualName("JOHN MCDONALD")).toBe("John McDonald");
  });

  test("titlecase suffix", () => {
    expect(titlecaseSuffix("JR")).toBe("Jr");
  });

  test("titlecase roman numeral suffix", () => {
    expect(titlecaseSuffix("III")).toBe("III");
  });

  test("titlecase occupation base case", () => {
    expect(titlecaseOccupation("SOFTWARE ENGINEER")).toBe("Software Engineer");
  });

  test("titlecase C-level occupation", () => {
    expect(titlecaseOccupation("CEO")).toBe("CEO");
  });
});
