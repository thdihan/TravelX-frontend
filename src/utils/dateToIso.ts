interface IDate {
    calender: {
        identifier: string;
    };
    day: number;
    era: string;
    month: number;
    year: number;
}

export const dateToIso = (date: IDate) => {
    if (!date) return new Date(Date.now()).toISOString();

    return new Date(`${date.year}-${date.month}-${date.day}`).toISOString();
};

export const IsoToDate = (date: string) => {
    const outputDate: IDate = {
        calender: {
            identifier: "gregorian",
        },
        day: new Date(date).getDate(),
        era: "CE",
        month: new Date(date).getMonth(),
        year: new Date(date).getFullYear(),
    };
};
