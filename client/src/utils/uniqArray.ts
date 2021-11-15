import _ from "lodash";
const uniqArray = (arr: any[], prop: string) => {
  return _.uniqBy(arr, prop);
};

export default uniqArray;
