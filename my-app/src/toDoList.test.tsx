import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoList } from "./toDoList";
import { dummyGroceryList } from "./constants";

describe("Test Read", () => {
  test("check items displayed", () => {
    render(<ToDoList />);
    for(let x = 0; x < dummyGroceryList.length; x++){
      const itemName = dummyGroceryList[x].name;
      const item = screen.getByText(itemName);
      expect(item).toBeInTheDocument();
    }
  });
});

describe("Check Boxes", () => {
  test("correct number of checkboxes checked should be 0", () => {
    render(<ToDoList />);
    const allegedChecks = screen.getByTestId("itemsBought");
    expect(allegedChecks.innerHTML == "Items bought: 0").toBe(true);
  });

  test("correct number of checkboxes checked should be 1", () => {
    render(<ToDoList />);
    const itemName = dummyGroceryList[0].name;
    const item = screen.getByTestId("listItem" + itemName);
    fireEvent.click(item);

    const allegedChecks = screen.getByTestId("itemsBought");
    expect(allegedChecks.innerHTML == "Items bought: 1").toBe(true);
  });
});

