/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let dateArr = date.split(" ");
  let day = Number(dateArr[0].slice(0, dateArr[0].length - 2));
  day = day > 9 ? day : "0" + day;
  let month = Number(months.indexOf(dateArr[1]) + 1);
  month = month > 9 ? month : "0" + month;
  let year = dateArr[2];

  return `${year}-${month}-${day}`;
};

console.log(reformatDate("26th May 1960"));
