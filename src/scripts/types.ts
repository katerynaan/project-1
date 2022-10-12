interface Delta {
    key: string | Symbol,
    value: string | number
}
type PickType = Pick<Delta, "key">
type OmitType = Omit<Delta, "key">
type AwaitType = Awaited<Promise<number>>
type PartialType = Partial<Delta>
type RequiredType = Required<Delta>
type ReadonlyType = Readonly<Delta>

type Names = "name1" | "name2" | "name3"
type Values = {
    first: string,
    last: string
}
type RecordType = Record<Names, Values>

const delta1: Delta = {
    key: "1",
    value: 1
}
const delta2: PickType = {
    key: Symbol.for("2")
}
const delta3: OmitType = {
    value: "Some value"
}
const delta4: () => AwaitType = () => 2;
const delta5: PartialType = {
}
const delta6: RequiredType = {
    key: "3",
    value: "3"
}
const delta7: ReadonlyType = {
    key: "4",
    value: "4"
}
const delta8: RecordType = {
    name1: {
        first: "Lissy",
        last: "Turin"
    },
    name2: {
        first: "Jonh",
        last: "Minn"
    },
    name3: {
        first: "Anita",
        last: "Jenkins"
    }
}

export const logValues = () => {
    console.log(delta1);
    console.log(delta2);
    console.log(delta3);
    console.log(delta4());
    console.log(delta5);
    console.log(delta6);
    console.log(delta8)
}
