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
