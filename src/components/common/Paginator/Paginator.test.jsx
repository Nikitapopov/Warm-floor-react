import React from "react";
import { create } from "react-test-renderer";
import Paginator from "./Paginator";

describe("Burger component tests", () => {
    test("Pages count is 11 but should be showed only 5", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={5}/>);
        const root = component.root;
        let spans = root.findAllByType('span');
        expect(spans.length).toBe(5);
    });
    test("If pages number is more than 10, button NEXT should be present", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={5}/>);
        const root = component.root;
        let spans = root.findAllByType('button');
        expect(spans.length).toBe(1);
    });
});