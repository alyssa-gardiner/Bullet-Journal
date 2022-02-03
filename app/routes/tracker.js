import Route from '@ember/routing/route';

export default class TrackerRoute extends Route {
  model() {
    let days = [];
    let dayNumbers = Array.from({ length: 28 }, (v, i) => i + 1);
    dayNumbers.forEach((dayNumber) => {
      let day = { month: 'February', number: dayNumber, exercise: null, description: '' };
      days.push(day);
    });
    return {
      name: 'February',
      dayCount: 28,
      days: days,
    };
  }
}

//[
//    {name: 'January', dayCount: 31},
//    {name: 'February', dayCount: 28},
//    {name: 'March', dayCount: 31},
//    {name: 'April', dayCount: 30},
//    {name: 'May', dayCount: 31},
//    {name: 'June', dayCount: 30},
//    {name: 'July', dayCount: 31},
//    {name: 'August', dayCount: 31},
//    {name: 'September', dayCount: 30},
//    {name: 'October', dayCount: 31},
//    {name: 'November', dayCount:30},
//    {name: 'December', dayCount: 31}
//    ]
