import reducer, {
  doMutateMultipleDeleteState,
  doTriggerMultipleDelete,
} from "../peopleSlice";
import { describe, expect, test } from "vitest";

const generateInitialState = () => ({
  rawPersonsList: [],
  filteredSortedList: [],
  viewedPersonsList: [],
  queryValues: {},
  deleteIdsArr: [],
  isMultipleDeleteOngoing: false,
});

describe("peopleSlice reducer tests", () => {
  describe("doMutateMultipleDeleteState reducer", () => {
    test("Add Id to be deleted, then remove it.", () => {
      // Add Id
      const resultingState = reducer(
        generateInitialState(),
        doMutateMultipleDeleteState({ type: "add", payload: "id-1" })
      );
      expect(resultingState.deleteIdsArr).toStrictEqual(["id-1"]);
      // Remove Id
      const resultingState2 = reducer(
        generateInitialState(),
        doMutateMultipleDeleteState({ type: "remove", payload: "id-1" })
      );
      expect(resultingState2.deleteIdsArr).toStrictEqual([]);
    });
    test("Clear Ids to be deleted", () => {
      // Add Id-1
      const resultingState1 = reducer(
        generateInitialState(),
        doMutateMultipleDeleteState({ type: "add", payload: "id-1" })
      );
      // Add Id-2
      const resultingState2 = reducer(
        resultingState1,
        doMutateMultipleDeleteState({ type: "add", payload: "id-2" })
      );
      // clear Ids
      const resultingState_clearedIds = reducer(
        resultingState2,
        doMutateMultipleDeleteState({ type: "clear" })
      );
      expect(resultingState_clearedIds.deleteIdsArr).toStrictEqual([]);
    });
  });
  describe("doTriggerMultipleDelete reducer", () => {
    test("set isMultipleDeleteOngoing to true", () => {
      const resultingState = reducer(
        generateInitialState(),
        doTriggerMultipleDelete(true)
      );
      expect(resultingState.isMultipleDeleteOngoing).toStrictEqual(true);
    });
    test("set isMultipleDeleteOngoing to false", () => {
      const resultingState = reducer(
        generateInitialState(),
        doTriggerMultipleDelete(false)
      );
      expect(resultingState.isMultipleDeleteOngoing).toStrictEqual(false);
    });
  });
});
