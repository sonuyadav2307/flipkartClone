import combineData from "./combineData";
let list1 = [];
let categaryList = [];
const phoneReducer = (state = combineData, action) => {
  switch (action.type) {
    // case 'REMOVE_MI':
    //    return (state.filter(x => x.categary !== 'mi'))
    case "REMOVE_FILTER":
      let list2 = [action.payload];
      if (action.payload.type === "categary") {
        for (let i = 0; i < list2.length; i++) {
          let list2Value = Object.values(list2[i]);
          for (let p = 0; p < categaryList.length; p++) {
            let list1Value = Object.values(categaryList[p]);
            if (
              list1Value[i] === list2Value[i] &&
              list1Value[i + 1] === list2Value[i + 1]
            ) {
              categaryList.splice(p, 1);
            }
          }
        }
      } else {
        for (let i = 0; i < list2.length; i++) {
          let list2Value = Object.values(list2[i]);
          for (let p = 0; p < list1.length; p++) {
            let list1Value = Object.values(list1[p]);
            if (
              list1Value[i] === list2Value[i] &&
              list1Value[i + 1] === list2Value[i + 1]
            ) {
              list1.splice(p, 1);
            }
          }
        }
      }
      let productList1 = [];
      if (categaryList.length < 1) {
        productList1 = [...combineData];
      } else {
        for (let i = 0; i < categaryList.length; i++) {
          let values = Object.values(categaryList[i]);
          productList1.push(
            ...combineData.filter((x) => x[values[0]] === values[1])
          );
        }
      }
      let newList1 = [];
      if (list1.length < 1) {
        return [...productList1];
      } else {
        for (let i = 0; i < list1.length; i++) {
          let values = Object.values(list1[i]);
          newList1.push(
            ...productList1.filter((x) => x[values[0]] === values[1])
          );
        }
        return newList1;
      }
    case "ADD_FILTER":
      if (action.payload.type === "categary") {
        categaryList.push(action.payload);
      } else {
        list1.push(action.payload);
      }
      let productList = [];
      if (categaryList.length < 1) {
        productList = [...combineData];
      } else {
        for (let i = 0; i < categaryList.length; i++) {
          let values = Object.values(categaryList[i]);
          productList.push(
            ...combineData.filter((x) => x[values[0]] === values[1])
          );
        }
      }
      let newList = [];
      if (list1.length < 1) {
        return [...productList];
      } else {
        for (let i = 0; i < list1.length; i++) {
          let values = Object.values(list1[i]);
          newList.push(
            ...productList.filter((x) => x[values[0]] === values[1])
          );
        }
        return newList;
      }
      case 'RANGE':
        console.log(action.payload[0])
        console.log(state)
        let priceList = []
        state.filter(x =>  priceList.push(x.price.replace( /^\D+/g, '')))
       console.log(parseInt(priceList[0].replace(/,/g,''))+1)
        return state
    default:
      return state;
  }
};
export default phoneReducer;
