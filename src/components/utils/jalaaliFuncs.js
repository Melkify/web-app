import { toPersianDigit } from "./toPersianDigit";
var jalaali = require("jalaali-js");
export const weekDaysShortName = ["شن", "یک", "دو", "سه", "چه", "پن", "جم"];
export const weekDaysFullName = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];
export const getEnglishWeekDays = (week_day) => {
  return {
    شنبه: "saturday",
    یکشنبه: "sunday",
    دوشنبه: "monday",
    سه‌شنبه: "tuesday",
    چهارشنبه: "wednesday",
    پنجشنبه: "thursday",
    جمعه: "friday",
  }[week_day];
};
const months = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
export const getWeekDays = (date) => {
  const selectedDate = jalaali.toJalaali(date);
  const week = jalaali.jalaaliWeek(
    selectedDate.jy,
    selectedDate.jm,
    selectedDate.jd,
  );
  let days = [];
  for (let i = 0; i < 7; i++) {
    const day = jalaali.jalaaliToDateObject(
      week.saturday.jy,
      week.saturday.jm,
      week.saturday.jd,
    );
    day.setDate(day.getDate() + i);
    const jalaliDay = jalaali.toJalaali(day);
    days.push({
      name: weekDaysShortName[i],
      en_name: getEnglishWeekDays(weekDaysFullName[i]),
      day: jalaliDay.jd,
      date: day,
    });
  }
  return days;
};

function getNextJalaaliDate(jy, jm, jd, days_num = 1) {
  const day = jalaali.jalaaliToDateObject(jy, jm, jd);
  day.setDate(day.getDate() + days_num);
  const jalaaliDay = jalaali.toJalaali(day);
  return [jalaaliDay, day];
}
export const getFullPersianDay = (date) => {
  if (!date) {
    return {
      jd: "",
      jm: "",
      jy: "",
      toString: () => {
        return "";
      },
    };
  }
  const jalaaliDate = jalaali.toJalaali(date);
  return {
    jd: weekDaysFullName[jalaaliDate.jd - 1],
    jm: getPersianMonthName(date),
    jy: getPersianYear(date),
    toString: () => {
      return `${toPersianDigit(jalaaliDate.jd)} ${getPersianMonthName(date)} ${getPersianYear(date)} ${getWeekDayName(date)}`;
    },
  };
};

export const getGregorianDateFromJalaali = (jalaaliDateStr) => {
  if (!jalaaliDateStr) {
    return null;
  }
  // Split the Jalaali date string into year, month, and day
  const [jy, jm, jd] = jalaaliDateStr.split("-").map(Number);

  // Convert Jalaali date to Gregorian date
  const { gy, gm, gd } = jalaali.toGregorian(jy, jm, jd);

  // Create a Gregorian Date object
  const gregorianDate = new Date(gy, gm - 1, gd);

  return gregorianDate;
};
export const getWeekDayName = (date) => {
  const jalaaliDate = jalaali.toJalaali(date);
  const week = jalaali.jalaaliWeek(
    jalaaliDate.jy,
    jalaaliDate.jm,
    jalaaliDate.jd,
  );
  let currentDay = jalaaliDate.jd - week.saturday.jd;
  if (currentDay < 0) {
    currentDay = week.friday.jd - jalaaliDate.jd;
  }
  return weekDaysFullName[currentDay];
};

export const getPersianMonthName = (date) => {
  const jalaaliDate = jalaali.toJalaali(date);
  return months[jalaaliDate.jm - 1];
};

export const getPersianYear = (date) => {
  const jalaaliDate = jalaali.toJalaali(date);
  return toPersianDigit(jalaaliDate.jy);
};

export const getJalaaliDate = (date) => {
  return jalaali.toJalaali(date);
};

export const getJalaaliDateString = (date) => {
  const jalaaliDate = jalaali.toJalaali(date);
  return `${jalaaliDate.jy}-${jalaaliDate.jm}-${jalaaliDate.jd}`;
};

export const jalaaliToDateObject = (jdate) => {
  return jalaali.jalaaliToDateObject(jdate.jy, jdate.jm, jdate.jd);
};
export function getTimeStatus(timeString) {
  const time = new Date(`2024-01-01T${timeString}`);
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let period = hours >= 12 ? "عصر" : "صبح";

  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  return `${toPersianDigit(hours.toString().padStart(2, "0"))}:${toPersianDigit(minutes.toString().padStart(2, "0"))} ${period}`;
}

export function getJalaaliMonthDays(date) {
  const jalaaliDate = jalaali.toJalaali(date);
  let days = [];
  let week = jalaali.jalaaliWeek(jalaaliDate.jy, jalaaliDate.jm, 1);
  for (let i = 0; i < 6; i++) {
    let d = { jdate: week.saturday };
    for (let j = 0; j < 7; j++) {
      let [new_jdate, new_date] = getNextJalaaliDate(
        d.jdate.jy,
        d.jdate.jm,
        d.jdate.jd,
        j === 0 ? 0 : 1,
      );
      d = {
        jdate: new_jdate,
        date: new_date,
        isCurrentMonth: jalaaliDate.jm === new_jdate.jm,
        isToday:
          jalaaliDate.jm === new_jdate.jm && jalaaliDate.jd === new_jdate.jd,
      };
      days.push(d);
    }
    let [new_jdate, new_date] = getNextJalaaliDate(
      d.jdate.jy,
      d.jdate.jm,
      d.jdate.jd,
      1,
    );
    week = jalaali.jalaaliWeek(new_jdate.jy, new_jdate.jm, new_jdate.jd);
  }

  return days;
}
