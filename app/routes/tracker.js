import Route from '@ember/routing/route';

export default class TrackerRoute extends Route {
   async model() {
    let months = [
      { number: 1, name: 'January', dayCount: 31, days: [] },
      { number: 2, name: 'February', dayCount: 28, days: [] },
      { number: 3, name: 'March', dayCount: 31, days: [] },
      { number: 4, name: 'April', dayCount: 30, days: [] },
      { number: 5, name: 'May', dayCount: 31, days: [] },
      { number: 6, name: 'June', dayCount: 30, days: [] },
      { number: 7, name: 'July', dayCount: 31, days: [] },
      { number: 8, name: 'August', dayCount: 31, days: [] },
      { number: 9, name: 'September', dayCount: 30, days: [] },
      { number: 10, name: 'October', dayCount: 31, days: [] },
      { number: 11, name: 'November', dayCount: 30, days: [] },
      { number: 12, name: 'December', dayCount: 31, days: [] },
    ];

    for (const month of months) {
      let days = [];
      let responseError = false;
      let dayNumbers = Array.from({ length: month.dayCount }, (v, i) => i + 1);
      for (const dayNumber of dayNumbers) {
        let matchingDay = await this.store.queryRecord('day', {dayOfMonth: dayNumber,monthNumber: month.number})
        .catch(err => {if(err.errors.length < 2 && err.errors[0].status == 404) {
          responseError = true;
        }});
        if(responseError) {
            //Push a fake day in
          let day = {
            monthNumber: month.number,
            dayOfMonth: dayNumber,
            exerciseId: null,
          };
          days.push(day);
        } else {
          //push the existing day in
          days.push(matchingDay);
        }
      }
      month.days = days;
    }
    return months;
   }
}
